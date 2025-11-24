import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactGetAll = {
	operation: ['getAll'],
	resource: ['contact'],
};

export const contactGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForContactGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForContactGetAll,
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
			show: showOnlyForContactGetAll,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query (searches through filled fields of the entity). You can search by phone number.',
			},
			{
				displayName: 'With',
				name: 'with',
				type: 'multiOptions',
				options: [
					{
						name: 'Leads',
						value: 'leads',
					},
					{
						name: 'Catalog Elements',
						value: 'catalog_elements',
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
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'Filter by contact ID(s) - comma-separated',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Filter by contact name(s) - comma-separated',
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

