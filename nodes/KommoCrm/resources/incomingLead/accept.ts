import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIncomingLeadAccept = {
	operation: ['accept'],
	resource: ['incomingLead'],
};

export const incomingLeadAcceptDescription: INodeProperties[] = [
	{
		displayName: 'Incoming Lead ID',
		name: 'incomingLeadId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForIncomingLeadAccept,
		},
		default: '',
		description: 'ID of the incoming lead to accept',
	},
	{
		displayName: 'Status ID',
		name: 'status_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForIncomingLeadAccept,
		},
		default: '',
		description: 'Status ID to assign to the accepted lead',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForIncomingLeadAccept,
		},
		options: [
			{
				displayName: 'Pipeline ID',
				name: 'pipeline_id',
				type: 'number',
				default: '',
				description: 'Pipeline ID to assign the lead to',
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'ID of the user responsible for this lead',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: '',
				description: 'Price of the lead',
			},
			{
				displayName: 'Custom Fields',
				name: 'custom_fields_values',
				type: 'string',
				default: '',
				description: 'Custom fields values as JSON string',
			},
		],
	},
];