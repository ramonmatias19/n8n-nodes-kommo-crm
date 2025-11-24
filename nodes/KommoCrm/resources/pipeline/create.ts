import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPipelineCreate = {
	operation: ['create'],
	resource: ['pipeline'],
};

export const pipelineCreateDescription: INodeProperties[] = [
	{
		displayName: 'Pipeline Name',
		name: 'pipelineName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForPipelineCreate,
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
			show: showOnlyForPipelineCreate,
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
			{
				displayName: 'Request ID',
				name: 'requestId',
				type: 'string',
				default: '',
				description: 'Request identifier for tracking',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForPipelineCreate,
		},
		default: {},
		routing: {
			request: {
				body: {
					name: '={{ $parameter.pipelineName }}',
					sort: '={{ $parameter.additionalFields.sort || 0 }}',
					is_main: '={{ $parameter.additionalFields.isMain || false }}',
					is_unsortable: '={{ $parameter.additionalFields.isUnsortable || false }}',
					request_id: '={{ $parameter.additionalFields.requestId || "" }}',
				},
			},
		},
	},
];

