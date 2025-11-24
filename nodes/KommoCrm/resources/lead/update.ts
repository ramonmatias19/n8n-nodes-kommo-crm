import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadUpdate = {
	operation: ['update'],
	resource: ['lead'],
};

export const leadUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		displayOptions: { show: showOnlyForLeadUpdate },
		default: '',
		description: 'The lead\'s ID to update',
		required: true,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForLeadUpdate,
		},
		options: [
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Custom fields values for the lead (JSON array format: [{"field_id": 123, "values": [{"value": "field value"}]}])',
				routing: {
					send: {
						type: 'body',
						property: 'custom_fields_values',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the lead',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Pipeline ID',
				name: 'pipeline_id',
				type: 'number',
				default: '',
				description: 'The ID of the pipeline to move the lead to',
				routing: {
					send: {
						type: 'body',
						property: 'pipeline_id',
					},
				},
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: '',
				description: 'The sale amount for the lead',
				routing: {
					send: {
						type: 'body',
						property: 'price',
					},
				},
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'The ID of the user responsible for this lead',
				routing: {
					send: {
						type: 'body',
						property: 'responsible_user_id',
					},
				},
			},
			{
				displayName: 'Status ID',
				name: 'status_id',
				type: 'number',
				default: '',
				description: 'The ID of the stage to move the lead to',
				routing: {
					send: {
						type: 'body',
						property: 'status_id',
					},
				},
			},
		],
	},
];
