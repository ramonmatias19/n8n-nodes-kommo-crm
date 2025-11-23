import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListGetAll = {
	operation: ['getAllLists'],
	resource: ['list'],
};

export const listGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForListGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForListGetAll,
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
					show: showOnlyForListGetAll,
				},
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Regular',
								value: 'regular',
							},
							{
								name: 'Products',
								value: 'products',
							},
						],
						default: 'regular',
						description: 'Filter lists by type',
					},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query for lists',
			},
		],
	},
];