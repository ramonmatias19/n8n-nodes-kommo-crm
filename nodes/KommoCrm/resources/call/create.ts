import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCallCreate = {
	operation: ['create'],
	resource: ['call'],
};

export const callCreateDescription: INodeProperties[] = [
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'The phone number for the call (last 10 digits will be used for matching)',
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		options: [
			{
				name: 'Inbound',
				value: 'inbound',
			},
			{
				name: 'Outbound',
				value: 'outbound',
			},
		],
		default: 'outbound',
		required: true,
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'The direction of the call',
		routing: {
			send: {
				type: 'body',
				property: 'direction',
			},
		},
	},
	{
		displayName: 'Call Status',
		name: 'call_status',
		type: 'options',
		options: [
			{
				name: 'Answered',
				value: 4,
			},
			{
				name: 'Not Answered',
				value: 5,
			},
			{
				name: 'Busy',
				value: 6,
			},
			{
				name: 'Failed',
				value: 7,
			},
		],
		default: 4,
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'The status of the call',
		routing: {
			send: {
				type: 'body',
				property: 'call_status',
			},
		},
	},
	{
		displayName: 'Call Result',
		name: 'call_result',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'Additional result information for the call',
		routing: {
			send: {
				type: 'body',
				property: 'call_result',
			},
		},
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'Call duration in seconds',
		routing: {
			send: {
				type: 'body',
				property: 'duration',
			},
		},
	},
	{
		displayName: 'Source',
		name: 'source',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'Source identifier for the call',
		routing: {
			send: {
				type: 'body',
				property: 'source',
			},
		},
	},
	{
		displayName: 'Responsible User ID',
		name: 'responsible_user_id',
		type: 'number',
		default: '',
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'ID of the user responsible for this call',
		routing: {
			send: {
				type: 'body',
				property: 'responsible_user_id',
			},
		},
	},
	{
		displayName: 'Created At',
		name: 'created_at',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'Creation timestamp for the call',
		routing: {
			send: {
				type: 'body',
				property: 'created_at',
			},
		},
	},
	{
		displayName: 'Uniq',
		name: 'uniq',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCallCreate,
		},
		description: 'Unique identifier for the call to prevent duplicates',
		routing: {
			send: {
				type: 'body',
				property: 'uniq',
			},
		},
	},
];