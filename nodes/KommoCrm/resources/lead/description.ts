import type { INodeProperties } from 'n8n-workflow';

export const leadOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lead'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get leads',
				description: 'Get many leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads',
						qs: {
							limit: '={{ $parameter.returnAll ? 250 : $parameter.limit }}',
							page: '={{ $parameter.options.page || 1 }}',
							query: '={{ $parameter.options.query }}',
							with: '={{ $parameter.options.with?.join(",") }}',
							'order[created_at]': '={{ $parameter.options.order?.created_at }}',
							'order[updated_at]': '={{ $parameter.options.order?.updated_at }}',
							'order[id]': '={{ $parameter.options.order?.id }}',
							'filter[id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.id) }}',
							'filter[name][]': '={{ $parameter.options.filter?.name?.split(",").map(name => name.trim()) }}',
							'filter[price]': '={{ $parameter.options.filter?.price }}',
							'filter[responsible_user_id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.responsible_user_id) }}',
							'filter[created_at][from]': '={{ $parameter.options.filter?.created_at_from ? toUnixTimestamp($parameter.options.filter.created_at_from) : undefined }}',
							'filter[created_at][to]': '={{ $parameter.options.filter?.created_at_to ? toUnixTimestamp($parameter.options.filter.created_at_to) : undefined }}',
							'filter[updated_at][from]': '={{ $parameter.options.filter?.updated_at_from ? toUnixTimestamp($parameter.options.filter.updated_at_from) : undefined }}',
							'filter[updated_at][to]': '={{ $parameter.options.filter?.updated_at_to ? toUnixTimestamp($parameter.options.filter.updated_at_to) : undefined }}',
							'filter[closed_at][from]': '={{ $parameter.options.filter?.closed_at_from ? toUnixTimestamp($parameter.options.filter.closed_at_from) : undefined }}',
							'filter[closed_at][to]': '={{ $parameter.options.filter?.closed_at_to ? toUnixTimestamp($parameter.options.filter.closed_at_to) : undefined }}',
							'filter[closest_task_at][from]': '={{ $parameter.options.filter?.closest_task_at_from ? toUnixTimestamp($parameter.options.filter.closest_task_at_from) : undefined }}',
							'filter[closest_task_at][to]': '={{ $parameter.options.filter?.closest_task_at_to ? toUnixTimestamp($parameter.options.filter.closest_task_at_to) : undefined }}',
							'filter[pipeline_id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.pipeline_id) }}',
							'filter[statuses][0][pipeline_id]': '={{ $parameter.options.filter?.status_pipeline_id }}',
							'filter[statuses][0][status_id]': '={{ $parameter.options.filter?.status_filter_id }}',
							'filter[created_by][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.created_by) }}',
							'filter[updated_by][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.updated_by) }}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead',
				description: 'Get the data of a single lead',
				routing: {
					request: {
						method: 'GET',
						url: '=/leads/{{$parameter.leadId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new lead',
				description: 'Create a new lead',
				routing: {
					request: {
						method: 'POST',
						url: '/leads',
						body: '={{ [{name: $parameter.name, ...$parameter.additionalFields}] }}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a lead',
				description: 'Update an existing lead',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/leads/{{$parameter.leadId}}',
						body: '={{ $parameter.updateFields }}',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const leadFields: INodeProperties[] = [
	// Get Many fields
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['getAll'],
				returnAll: [false],
			},
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
			show: {
				resource: ['lead'],
				operation: ['getAll'],
			},
		},
		options: [
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
						description: 'Filter leads closed after this date',
					},
					{
						displayName: 'Closed At To',
						name: 'closed_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads closed before this date',
					},
					{
						displayName: 'Closest Task At From',
						name: 'closest_task_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads with closest task after this date',
					},
					{
						displayName: 'Closest Task At To',
						name: 'closest_task_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads with closest task before this date',
					},
					{
						displayName: 'Created At From',
						name: 'created_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads created after this date',
					},
					{
						displayName: 'Created At To',
						name: 'created_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads created before this date',
					},
					{
						displayName: 'Created By',
						name: 'created_by',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user IDs who created the leads',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'Comma-separated list of lead IDs',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Comma-separated list of lead names',
					},
					{
						displayName: 'Pipeline ID',
						name: 'pipeline_id',
						type: 'string',
						default: '',
						description: 'Comma-separated list of pipeline IDs',
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
						description: 'Comma-separated list of responsible user IDs',
					},
					{
						displayName: 'Status Filter ID',
						name: 'status_filter_id',
						type: 'number',
						default: '',
						description: 'Status ID for filtering',
					},
					{
						displayName: 'Status Pipeline ID',
						name: 'status_pipeline_id',
						type: 'number',
						default: '',
						description: 'Pipeline ID for status filtering',
					},
					{
						displayName: 'Updated At From',
						name: 'updated_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter leads updated after this date',
					},
					{
						displayName: 'Updated At To',
						name: 'updated_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter leads updated before this date',
					},
					{
						displayName: 'Updated By',
						name: 'updated_by',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user IDs who updated the leads',
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
							{name: 'Ascending', value: 'asc'},
							{name: 'Descending', value: 'desc'},
						],
						default: 'asc',
					},
					{
						displayName: 'Updated At',
						name: 'updated_at',
						type: 'options',
						options: [
							{name: 'Ascending', value: 'asc'},
							{name: 'Descending', value: 'desc'},
						],
						default: 'asc',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'options',
						options: [
							{name: 'Ascending', value: 'asc'},
							{name: 'Descending', value: 'desc'},
						],
						default: 'asc',
					},
				],
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for pagination',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter leads',
			},
			{
				displayName: 'With',
				name: 'with',
				type: 'multiOptions',
				options: [
					{name: 'Contacts', value: 'contacts'},
					{name: 'Catalog_elements', value: 'catalog_elements'},
					{name: 'Loss_reason', value: 'loss_reason'},
					{name: 'Source', value: 'source'},
				],
				default: [],
				description: 'Additional data to include in the response',
			},
		],
	},
	// Get single lead fields
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['get', 'update'],
			},
		},
		description: 'The ID of the lead to get or update',
	},
	// Create lead fields
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['create'],
			},
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'The name of the lead',
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
	// Update lead fields
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Updated custom fields values (JSON array format)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new name for the lead',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: '',
				description: 'The new sale amount for the lead',
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
				displayName: 'Status ID',
				name: 'status_id',
				type: 'number',
				default: '',
				typeOptions: {
					minValue: 1,
				},
				description: 'The ID of the new status',
			},
		],
		description: 'The fields to update on the lead',
	},
];
