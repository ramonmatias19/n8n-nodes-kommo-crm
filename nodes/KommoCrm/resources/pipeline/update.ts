import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPipelineUpdate = {
	operation: ['update'],
	resource: ['pipeline'],
};

export const pipelineUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Pipeline ID',
		name: 'pipelineId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForPipelineUpdate,
		},
		default: 0,
		description: 'The ID of the pipeline to update',
	},
	{
		displayName: 'Pipeline Name',
		name: 'pipelineName',
		type: 'string',
		displayOptions: {
			show: showOnlyForPipelineUpdate,
		},
		default: '',
		description: 'The name of the pipeline',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForPipelineUpdate,
		},
		options: [
			{
				displayName: 'Sort Order',
				name: 'sort',
				type: 'number',
				default: 0,
				description: 'Sort order of the pipeline',
			},
			{
				displayName: 'Is Main',
				name: 'isMain',
				type: 'boolean',
				default: false,
				description: 'Whether this is the main pipeline',
			},
			{
				displayName: 'Is Unsortable',
				name: 'isUnsortable',
				type: 'boolean',
				default: false,
				description: 'Whether the pipeline cannot be reordered',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForPipelineUpdate,
		},
		default: {},
		routing: {
			request: {
				body: '={{ Object.assign({}, $parameter.pipelineName ? { name: $parameter.pipelineName } : {}, $parameter.additionalFields) }}',
			},
		},
	},
];




