import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIncomingLeadGetAll = {
	operation: ['getAll'],
	resource: ['incomingLead'],
};

export const incomingLeadGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForIncomingLeadGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForIncomingLeadGetAll,
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
			show: showOnlyForIncomingLeadGetAll,
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
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'Catalog Elements',
						value: 'catalog_elements',
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
						displayName: 'Created At From',
						name: 'created_at_from',
						type: 'dateTime',
						default: '',
						description: 'Filter incoming leads created after this date (Unix timestamp)',
					},
					{
						displayName: 'Created At To',
						name: 'created_at_to',
						type: 'dateTime',
						default: '',
						description: 'Filter incoming leads created before this date (Unix timestamp)',
					},
					{
						displayName: 'Pipeline ID',
						name: 'pipeline_id',
						type: 'string',
						default: '',
						description: 'Filter by pipeline ID(s) - comma-separated',
					},
					{
						displayName: 'Responsible User ID',
						name: 'responsible_user_id',
						type: 'string',
						default: '',
						description: 'Filter by responsible user ID(s) - comma-separated',
					},
				],
			},
		],
	},
];