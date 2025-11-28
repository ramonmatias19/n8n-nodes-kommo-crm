import type { INodeProperties } from 'n8n-workflow';
import { companyOperations, companyFields } from './description';

export const companyDescription: INodeProperties[] = [
	...companyOperations,
	...companyFields,
];
