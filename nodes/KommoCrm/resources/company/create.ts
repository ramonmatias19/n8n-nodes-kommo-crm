import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCompanyCreate = {
	operation: ['create'],
	resource: ['company'],
};

export const companyCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCompanyCreate,
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
			show: showOnlyForCompanyCreate,
		},
		options: [
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Custom fields values for the company',
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'The ID of the user responsible for this company',
			},
			{
				displayName: 'Request ID',
				name: 'request_id',
				type: 'string',
				default: '',
				description: 'Optional request ID that will be returned unchanged',
			},
		],
	},
];

