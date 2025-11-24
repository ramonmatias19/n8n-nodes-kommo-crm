import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskCreate = {
	operation: ['create'],
	resource: ['task'],
};

export const taskCreateDescription: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		description: 'The text/description of the task',
	},
	{
		displayName: 'Complete Till',
		name: 'complete_till',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		description: 'The date and time when the task should be completed',
	},
	{
		displayName: 'Entity Type',
		name: 'entity_type',
		type: 'options',
		options: [
			{
				name: 'Lead',
				value: 'leads',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Company',
				value: 'companies',
			},
		],
		default: 'leads',
		required: true,
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		description: 'The type of entity this task is related to',
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		description: 'The ID of the entity this task is related to',
		routing: {
			send: {
				type: 'body',
				property: 'entity_id',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		options: [
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'The ID of the user responsible for this task',
			},
			{
				displayName: 'Task Type ID',
				name: 'task_type_id',
				type: 'number',
				default: '',
				description: 'The ID of the task type',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: '',
				description: 'The duration of the task in seconds',
			},
		],
	},
];

