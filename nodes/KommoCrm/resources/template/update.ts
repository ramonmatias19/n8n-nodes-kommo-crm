import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTemplateUpdate = {
	operation: ['update'],
	resource: ['template'],
};

export const templateUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		displayOptions: { show: showOnlyForTemplateUpdate },
		default: '',
		required: true,
		description: 'The ID of the template to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForTemplateUpdate,
		},
		description: 'The new name of the template',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForTemplateUpdate,
		},
		description: 'The new content of the template (supports placeholders)',
		routing: {
			send: {
				type: 'body',
				property: 'content',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'HTML',
				value: 'html',
			},
			{
				name: 'Card',
				value: 'card',
			},
		],
		default: 'text',
		displayOptions: {
			show: showOnlyForTemplateUpdate,
		},
		description: 'The new type of the template',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Buttons',
		name: 'buttons',
		type: 'json',
		default: '',
		displayOptions: {
			show: showOnlyForTemplateUpdate,
		},
		description: 'JSON array of buttons for the template',
		routing: {
			send: {
				type: 'body',
				property: 'buttons',
			},
		},
	},
];