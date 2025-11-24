import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTagGetAll = {
	operation: ['getAll'],
	resource: ['tag'],
};

export const tagGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForTagGetAll,
		},
		options: [
			{
				displayName: 'Filter by Tag IDs',
				name: 'filter_ids',
				type: 'string',
				default: '',
				description: 'Comma-separated list of tag IDs to filter by',
				routing: {
					request: {
						qs: {
							'filter[id][]': '={{ $value.split(",").map(id => id.trim()) }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Tag Name',
				name: 'filter_name',
				type: 'string',
				default: '',
				description: 'Exact tag name to filter by',
				routing: {
					request: {
						qs: {
							'filter[name]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					request: {
						qs: {
							limit: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'The page number to return',
				routing: {
					request: {
						qs: {
							page: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter tags by name',
				routing: {
					request: {
						qs: {
							query: '={{ $value }}',
						},
					},
				},
			},
		],
	},
];

