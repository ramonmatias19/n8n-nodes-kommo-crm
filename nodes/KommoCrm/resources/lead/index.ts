import type { INodeProperties } from 'n8n-workflow';
import { leadOperations, leadFields } from './description';

export const leadDescription: INodeProperties[] = [
	...leadOperations,
	...leadFields,
];

