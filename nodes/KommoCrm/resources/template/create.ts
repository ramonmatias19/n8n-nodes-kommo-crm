import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTemplateCreate = {
	operation: ['create'],
	resource: ['template'],
};

export const templateCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTemplateCreate,
		},
		description: 'The name of the template',
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
		required: true,
		displayOptions: {
			show: showOnlyForTemplateCreate,
		},
		description: 'The content of the template (supports placeholders)',
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
			show: showOnlyForTemplateCreate,
		},
		description: 'The type of the template',
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
			show: showOnlyForTemplateCreate,
		},
		description: 'JSON array of buttons for the template (optional)',
		routing: {
			send: {
				type: 'body',
				property: 'buttons',
			},
		},
	},
];