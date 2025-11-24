import type { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

/**
 * Enhanced error handling for Kommo CRM API responses
 */
export function handleApiError(error: unknown, operation: string): never {
	const errorMessage = error?.response?.data?.detail || error?.response?.data?.title || error?.message || 'Unknown error';

	const errorDetails: IDataObject = {
		message: errorMessage,
		operation,
		statusCode: error?.response?.status,
		timestamp: new Date().toISOString(),
	};

	if (error?.response?.data) {
		errorDetails.apiResponse = error.response.data;
	}

	throw new Error(`Kommo CRM API Error: ${errorMessage}`);
}

/**
 * Validate required fields for operations
 */
export function validateRequiredFields(fields: Record<string, unknown>, requiredFields: string[]): void {
	const missingFields = requiredFields.filter(field => !fields[field] || fields[field] === '');

	if (missingFields.length > 0) {
		throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
	}
}

/**
 * Convert date to Unix timestamp for API
 */
export function toUnixTimestamp(date: string | number | Date): number {
	if (!date) return 0;

	const dateObj = typeof date === 'string' ? new Date(date) : date instanceof Date ? date : new Date(date * 1000);
	return Math.floor(dateObj.getTime() / 1000);
}

/**
 * Build query string parameters from options
 */
export function buildQueryParams(options: IDataObject, mappings: Record<string, string>): IDataObject {
	const params: IDataObject = {};

	for (const [optionKey, paramKey] of Object.entries(mappings)) {
		const value = options[optionKey];
		if (value !== undefined && value !== null && value !== '') {
			params[paramKey] = value;
		}
	}

	return params;
}

/**
 * Parse comma-separated values into arrays for filters
 */
export function parseCommaSeparatedArray(value: string | number[]): number[] | undefined {
	if (!value) return undefined;

	if (Array.isArray(value)) {
		return value.map(v => parseInt(String(v), 10)).filter(v => !isNaN(v));
	}

	if (typeof value === 'string') {
		return value.split(',')
			.map(v => v.trim())
			.filter(v => v)
			.map(v => parseInt(v, 10))
			.filter(v => !isNaN(v));
	}

	return undefined;
}

/**
 * Validate and convert custom fields values
 */
export function validateCustomFields(customFields: unknown): unknown[] | undefined {
	if (!customFields) return undefined;

	try {
		let fieldsArray: unknown[];

		if (typeof customFields === 'string') {
			fieldsArray = JSON.parse(customFields);
		} else if (Array.isArray(customFields)) {
			fieldsArray = customFields;
		} else {
			throw new Error('Custom fields must be a valid JSON array');
		}

		// Validate structure
		if (!Array.isArray(fieldsArray)) {
			throw new Error('Custom fields must be an array');
		}

		for (const field of fieldsArray) {
			if (!field.field_id || !field.values) {
				throw new Error('Each custom field must have field_id and values properties');
			}
		}

		return fieldsArray;
	} catch (error) {
		throw new Error(`Invalid custom fields format: ${error.message}`);
	}
}

/**
 * Execute HTTP request with enhanced error handling
 */
export async function executeApiRequest(
	this: IExecuteFunctions,
	requestOptions: IHttpRequestOptions,
	operation: string,
): Promise<unknown> {
	try {
		return await this.helpers.httpRequest(requestOptions);
	} catch (error) {
		handleApiError(error, operation);
	}
}
