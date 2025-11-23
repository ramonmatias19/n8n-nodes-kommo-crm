import type { INodeProperties } from 'n8n-workflow';
import { companyGetManyDescription } from './getAll';
import { companyCreateDescription } from './create';
import { companyUpdateDescription } from './update';

const showOnlyForCompanies = {
	resource: ['company'],
};

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get companies',
				description: 'Get companies',
				routing: {
					request: {
						method: 'GET',
						url: '/companies',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new company',
				description: 'Create a new company',
				routing: {
					request: {
						method: 'POST',
						url: '/companies',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a company',
				description: 'Update an existing company',
				routing: {
					request: {
						method: 'PATCH',
						url: '/companies',
					},
				},
			},
		],
		default: 'getAll',
	},
	...companyGetManyDescription,
	...companyCreateDescription,
	...companyUpdateDescription,
];
