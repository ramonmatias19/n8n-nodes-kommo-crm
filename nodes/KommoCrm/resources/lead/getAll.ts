import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadGetAll = {
	operation: ['getAll'],
	resource: ['lead'],
};

export const leadGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForLeadGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForLeadGetAll,
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
			show: showOnlyForLeadGetAll,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query (searches through filled fields of the entity)',
			},
			{
				displayName: 'With',
				name: 'with',
				type: 'multiOptions',
				options: [
					{
						name: 'Catalog Elements',
						value: 'catalog_elements',
					},
					{
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'Is Price Modified By Robot',
						value: 'is_price_modified_by_robot',
					},
					{
						name: 'Loss Reason',
						value: 'loss_reason',
					},
					{
						name: 'Only Deleted',
						value: 'only_deleted',
					},
					{
						name: 'Source',
						value: 'source',
					},
				],
				default: [],
				description: 'Additional data to include in the response',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				options: [
					{
						displayName: 'Closed At From',
						name: 'closed_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads closed after this date (Unix timestamp)',
					},
					{
						displayName: 'Closed At To',
						name: 'closed_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads closed before this date (Unix timestamp)',
					},
					{
						displayName: 'Closest Task At From',
						name: 'closest_task_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads by closest task date after this date (Unix timestamp)',
					},
					{
						displayName: 'Closest Task At To',
						name: 'closest_task_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads by closest task date before this date (Unix timestamp)',
					},
					{
						displayName: 'Created At From',
						name: 'created_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads created after this date (Unix timestamp)',
					},
					{
						displayName: 'Created At To',
						name: 'created_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads created before this date (Unix timestamp)',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'Filter by lead ID(s) - comma-separated',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Filter by lead name(s) - comma-separated',
					},
					{
						displayName: 'Pipeline ID',
						name: 'pipeline_id',
						type: 'string',
						default: '',
						description: 'Filter by pipeline ID(s) - comma-separated',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'number',
						default: '',
						description: 'Filter by lead price',
					},
					{
						displayName: 'Responsible User ID',
						name: 'responsible_user_id',
						type: 'string',
						default: '',
						description: 'Filter by responsible user ID(s) - comma-separated',
					},
					{
						displayName: 'Status ID',
						name: 'status_id',
						type: 'string',
						default: '',
						description: 'Filter by status ID(s) - comma-separated',
					},
					{
						displayName: 'Status ID',
						name: 'status_filter_id',
						type: 'number',
						default: '',
						description: 'Status ID for filtering (use with Status Pipeline ID)',
					},
					{
						displayName: 'Status Pipeline ID',
						name: 'status_pipeline_id',
						type: 'number',
						default: '',
						description: 'Pipeline ID for status filtering (use with Status ID)',
					},
					{
						displayName: 'Updated At From',
						name: 'updated_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads updated after this date (Unix timestamp)',
					},
					{
						displayName: 'Updated At To',
						name: 'updated_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads updated before this date (Unix timestamp)',
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
					{
						displayName: 'Updated At',
						name: 'updated_at',
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
					{
						displayName: 'ID',
						name: 'id',
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
