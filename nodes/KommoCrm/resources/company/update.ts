import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCompanyUpdate = {
	operation: ['update'],
	resource: ['company'],
};

export const companyUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCompanyUpdate,
		},
		description: 'The ID of the company to update',
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCompanyUpdate,
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Updated name of the company',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Updated custom fields values for the company',
				routing: {
					send: {
						type: 'body',
						property: 'custom_fields_values',
					},
				},
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'Updated responsible user ID for the company',
				routing: {
					send: {
						type: 'body',
						property: 'responsible_user_id',
					},
				},
			},
		],
	},
];
