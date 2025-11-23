import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIncomingLeadCreate = {
	operation: ['create'],
	resource: ['incomingLead'],
};

export const incomingLeadCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForIncomingLeadCreate,
		},
		default: '',
		description: 'Name of the incoming lead',
	},
	{
		displayName: 'Source Name',
		name: 'source_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForIncomingLeadCreate,
		},
		default: '',
		description: 'Source name for the incoming lead (forms or sip types only)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForIncomingLeadCreate,
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'custom_fields_values',
				type: 'string',
				default: '',
				description: 'Custom fields values as JSON string',
			},
			{
				displayName: 'Pipeline ID',
				name: 'pipeline_id',
				type: 'number',
				default: '',
				description: 'Pipeline ID to assign the lead to',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: '',
				description: 'Price of the lead',
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'ID of the user responsible for this lead',
			},
			{
				displayName: 'Source UID',
				name: 'source_uid',
				type: 'string',
				default: '',
				description: 'Unique identifier for the source',
			},
		],
	},
];