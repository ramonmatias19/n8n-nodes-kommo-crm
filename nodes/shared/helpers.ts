import type { IDataObject, IHttpRequestOptions } from 'n8n-workflow';

interface ApiError {
	response?: {
		data?: {
			detail?: string;
			title?: string;
		};
		status?: number;
	};
	message?: string;
}

/**
 * Enhanced error handling for Kommo CRM API responses
 */
export function handleApiError(error: unknown, operation: string): never {
	let errorMessage = 'Unknown error';
	let statusCode: number | undefined;
	let apiResponse: unknown;

	if (error && typeof error === 'object') {
		const err = error as ApiError;
		errorMessage = err.response?.data?.detail ||
			err.response?.data?.title ||
			err.message ||
			'Unknown error';
		statusCode = err.response?.status;
		apiResponse = err.response?.data;
	}

	const errorDetails: IDataObject = {
		message: errorMessage,
		operation,
		statusCode,
		timestamp: new Date().toISOString(),
	};

	if (apiResponse) {
		errorDetails.apiResponse = apiResponse;
	}

	throw new Error(`Kommo CRM API Error: ${errorMessage}`);
}

/**
 * Validate required fields for operations
 */
export function validateRequiredFields(fields: Record<string, unknown>, requiredFields: string[]): void {
	const missingFields = requiredFields.filter(field => {
		const value = fields[field];
		return value === undefined || value === null || value === '';
	});

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
			if (!field || typeof field !== 'object') {
				throw new Error('Each custom field must be an object');
			}
			const fieldObj = field as Record<string, unknown>;
			if (!fieldObj.field_id || !fieldObj.values) {
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
	helpers: { httpRequest: (options: IHttpRequestOptions) => Promise<unknown> },
	requestOptions: IHttpRequestOptions,
	operation: string,
): Promise<unknown> {
	try {
		return await helpers.httpRequest(requestOptions);
	} catch (error) {
		handleApiError(error, operation);
	}
}
