import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPipelineGetAll = {
	operation: ['getAll'],
	resource: ['pipeline'],
};

export const pipelineGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForPipelineGetAll,
		},
		options: [
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
				displayName: 'Filter by ID',
				name: 'filter_id',
				type: 'number',
				default: '',
				description: 'Filter by specific pipeline ID',
				routing: {
					request: {
						qs: {
							'filter[id]': '={{ $value }}',
						},
					},
				},
			},
		],
	},
];
