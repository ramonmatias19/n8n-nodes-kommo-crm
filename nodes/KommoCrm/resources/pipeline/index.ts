import type { INodeProperties } from 'n8n-workflow';
import { pipelineGetAllDescription } from './getAll';
import { pipelineCreateDescription } from './create';
import { pipelineUpdateDescription } from './update';
import { pipelineGetStagesDescription } from './getStages';

const showOnlyForPipelines = {
	resource: ['pipeline'],
};

export const pipelineDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPipelines,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get pipelines',
				description: 'Get many pipelines',
				routing: {
					request: {
						method: 'GET',
						url: '/leads/pipelines',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a pipeline',
				description: 'Create a new pipeline',
				routing: {
					request: {
						method: 'POST',
						url: '/leads/pipelines',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a pipeline',
				description: 'Update an existing pipeline',
				routing: {
					request: {
						method: 'PATCH',
						url: '/leads/pipelines/{{$parameter.pipelineId}}',
					},
				},
			},
			{
				name: 'Get Stages',
				value: 'getStages',
				action: 'Get pipeline stages',
				description: 'Get stages for a specific pipeline',
				routing: {
					request: {
						method: 'GET',
						url: '/leads/pipelines/{{$parameter.pipelineId}}/statuses',
					},
				},
			},
		],
		default: 'getAll',
	},
	...pipelineGetAllDescription,
	...pipelineCreateDescription,
	...pipelineUpdateDescription,
	...pipelineGetStagesDescription,
];
