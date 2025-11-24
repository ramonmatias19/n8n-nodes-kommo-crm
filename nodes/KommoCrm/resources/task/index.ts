import type { INodeProperties } from 'n8n-workflow';
import { taskGetDescription } from './get';
import { taskGetAllDescription } from './getAll';
import { taskCreateDescription } from './create';
import { taskUpdateDescription } from './update';

const showOnlyForTasks = {
	resource: ['task'],
};

export const taskDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTasks,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get tasks',
				description: 'Get many tasks',
				routing: {
					request: {
						method: 'GET',
						url: '/tasks',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a task',
				description: 'Get the data of a single task',
				routing: {
					request: {
						method: 'GET',
						url: '=/tasks/{{$parameter.taskId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new task',
				description: 'Create a new task',
				routing: {
					request: {
						method: 'POST',
						url: '/tasks',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a task',
				description: 'Update an existing task',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/tasks/{{$parameter.taskId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...taskGetAllDescription,
	...taskGetDescription,
	...taskCreateDescription,
	...taskUpdateDescription,
];

