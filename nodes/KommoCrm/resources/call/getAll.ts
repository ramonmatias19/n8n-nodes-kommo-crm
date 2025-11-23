import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCallGetAll = {
	operation: ['getAll'],
	resource: ['call'],
};

export const callGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForCallGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForCallGetAll,
		},
		typeOptions: {
			minValue: 1,
			maxValue: 250,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForCallGetAll,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query for calls',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				options: [
					{
						displayName: 'Created At From',
						name: 'created_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter calls created after this date (Unix timestamp)',
					},
					{
						displayName: 'Created At To',
						name: 'created_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter calls created before this date (Unix timestamp)',
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
						default: 'inbound',
						description: 'Filter by call direction',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						description: 'Filter by phone number',
					},
					{
						displayName: 'Responsible User ID',
						name: 'responsible_user_id',
						type: 'string',
						default: '',
						description: 'Filter by responsible user ID',
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						options: [
							{
								name: 'Answered',
								value: 'answered',
							},
							{
								name: 'Not Answered',
								value: 'not_answered',
							},
							{
								name: 'Busy',
								value: 'busy',
							},
							{
								name: 'Failed',
								value: 'failed',
							},
						],
						default: 'answered',
						description: 'Filter by call status',
					},
				],
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'collection',
				placeholder: 'Add Order',
				default: {},
				options: [
					{
						displayName: 'Created At',
						name: 'created_at',
						type: 'options',
						options: [
							{
								name: 'ASC',
								value: 'asc',
							},
							{
								name: 'DESC',
								value: 'desc',
							},
						],
						default: 'desc',
					},
				],
			},
		],
	},
];