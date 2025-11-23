import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTemplateSubmitModeration = {
	operation: ['submitModeration'],
	resource: ['template'],
};

export const templateSubmitModerationDescription: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTemplateSubmitModeration,
		},
		description: 'The ID of the WhatsApp template to submit for moderation',
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		default: 'marketing',
		displayOptions: {
			show: showOnlyForTemplateSubmitModeration,
		},
		options: [
			{
				name: 'Marketing',
				value: 'marketing',
			},
			{
				name: 'Utility',
				value: 'utility',
			},
			{
				name: 'Authentication',
				value: 'authentication',
			},
		],
		description: 'The category for WhatsApp template moderation',
		routing: {
			send: {
				type: 'body',
				property: 'category',
			},
		},
	},
];
