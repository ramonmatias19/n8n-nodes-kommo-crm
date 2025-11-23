import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskUpdate = {
	operation: ['update'],
	resource: ['task'],
};

export const taskUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		displayOptions: { show: showOnlyForTaskUpdate },
		default: '',
		description: 'The task\'s ID to update',
		required: true,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		options: [
			{
				displayName: 'Complete Till',
				name: 'complete_till',
				type: 'dateTime',
				default: '',
				description: 'The date and time when the task should be completed',
				routing: {
					send: {
						type: 'body',
						property: 'complete_till',
					},
				},
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: '',
				description: 'The duration of the task in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'duration',
					},
				},
			},
			{
				displayName: 'Is Completed',
				name: 'is_completed',
				type: 'boolean',
				default: false,
				description: 'Whether the task is completed',
				routing: {
					send: {
						type: 'body',
						property: 'is_completed',
					},
				},
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'The ID of the user responsible for this task',
				routing: {
					send: {
						type: 'body',
						property: 'responsible_user_id',
					},
				},
			},
			{
				displayName: 'Task Type ID',
				name: 'task_type_id',
				type: 'number',
				default: '',
				description: 'The ID of the task type',
				routing: {
					send: {
						type: 'body',
						property: 'task_type_id',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'The text/description of the task',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
			},
		],
	},
];
