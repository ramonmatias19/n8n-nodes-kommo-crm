import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhookDelete = {
	operation: ['delete'],
	resource: ['webhook'],
};

export const webhookDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForWebhookDelete,
		},
		description: 'The ID of the webhook to delete',
	},
];




