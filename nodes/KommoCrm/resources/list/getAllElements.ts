import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListElementGetAll = {
	operation: ['getAllElements'],
	resource: ['list'],
};

export const listElementGetAllDescription: INodeProperties[] = [
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		displayOptions: { show: showOnlyForListElementGetAll },
		default: '',
		required: true,
		description: 'The ID of the list to get elements from',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForListElementGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForListElementGetAll,
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
			show: showOnlyForListElementGetAll,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query for list elements',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Filter by element name',
					},
				],
			},
		],
	},
];
