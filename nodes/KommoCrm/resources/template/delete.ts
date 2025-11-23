import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTemplateDelete = {
	operation: ['delete'],
	resource: ['template'],
};

export const templateDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		displayOptions: { show: showOnlyForTemplateDelete },
		default: '',
		required: true,
		description: 'The ID of the template to delete',
	},
];