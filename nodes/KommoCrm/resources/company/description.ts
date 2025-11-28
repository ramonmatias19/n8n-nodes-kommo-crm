import type { INodeProperties } from 'n8n-workflow';

export const companyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
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
						body: '={{ [{name: $parameter.name, ...$parameter.additionalFields}] }}',
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
						body: '={{ [{id: $parameter.companyId, ...$parameter.additionalFields}] }}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const companyFields: INodeProperties[] = [
	// Create company fields
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['create'],
			},
		},
		description: 'The name of the company',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the user responsible for this company',
			},
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Custom fields values for the company (JSON array format)',
			},
		],
	},
	// Update company fields
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['update'],
			},
		},
		description: 'The ID of the company to update',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new name for the company',
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the new responsible user',
			},
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Updated custom fields values (JSON array format)',
			},
		],
		description: 'The fields to update on the company',
	},
];
