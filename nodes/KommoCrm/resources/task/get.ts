import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskGet = {
	operation: ['get'],
	resource: ['task'],
};

export const taskGetDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		displayOptions: { show: showOnlyForTaskGet },
		default: '',
		description: 'The task\'s ID to retrieve',
		required: true,
	},
];

