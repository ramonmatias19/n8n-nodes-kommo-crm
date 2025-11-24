import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListGetElements = {
	operation: ['getElements'],
	resource: ['list'],
};

export const listGetElementsDescription: INodeProperties[] = [
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForListGetElements,
		},
		description: 'The ID of the list to get elements from',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForListGetElements,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForListGetElements,
			hide: {
				returnAll: [true],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: showOnlyForListGetElements,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter elements by name',
			},
		],
	},
];

