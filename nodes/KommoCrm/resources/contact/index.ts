import type { INodeProperties } from 'n8n-workflow';
import { contactOperations, contactFields } from './description';

export const contactDescription: INodeProperties[] = [
	...contactOperations,
	...contactFields,
];