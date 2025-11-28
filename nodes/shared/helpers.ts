import type { IDataObject } from 'n8n-workflow';

/**
 * Parse comma-separated values and return as array
 * Used in declarative routing expressions
 */
export function parseCommaSeparatedArray(value: string | undefined): string[] | undefined {
	if (!value || typeof value !== 'string') {
		return undefined;
	}
	return value.split(',').map(item => item.trim()).filter(item => item.length > 0);
}

/**
 * Convert date to Unix timestamp
 * Used in declarative routing expressions for date filtering
 */
export function toUnixTimestamp(date: string | Date): number | undefined {
	if (!date) return undefined;

	const dateObj = typeof date === 'string' ? new Date(date) : date;
	if (isNaN(dateObj.getTime())) return undefined;

	return Math.floor(dateObj.getTime() / 1000);
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

