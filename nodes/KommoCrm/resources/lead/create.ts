import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadCreate = {
	operation: ['create'],
	resource: ['lead'],
};

export const leadCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'The name of the lead',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		options: [
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Custom fields values for the lead (JSON array format: [{"field_id": 123, "values": [{"value": "field value"}]}])',
			},
			{
				displayName: 'Pipeline ID',
				name: 'pipeline_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the pipeline to add the lead to',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: '',
				description: 'The sale amount for the lead',
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the user responsible for this lead',
			},
			{
				displayName: 'Status ID',
				name: 'status_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the stage to add the lead to',
			},
		],
	},
];