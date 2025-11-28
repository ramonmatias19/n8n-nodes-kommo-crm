import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPipelineGetStages = {
	operation: ['getStages'],
	resource: ['pipeline'],
};

export const pipelineGetStagesDescription: INodeProperties[] = [
	{
		displayName: 'Pipeline ID',
		name: 'pipelineId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForPipelineGetStages,
		},
		default: 0,
		description: 'The ID of the pipeline to get stages for',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForPipelineGetStages,
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
				displayName: 'Filter by Stage ID',
				name: 'filter_id',
				type: 'number',
				default: '',
				description: 'Filter by specific stage ID',
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




