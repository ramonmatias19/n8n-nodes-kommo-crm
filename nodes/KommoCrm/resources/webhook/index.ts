import type { INodeProperties } from 'n8n-workflow';
import { webhookGetAllDescription } from './getAll';
import { webhookCreateDescription } from './create';
import { webhookDeleteDescription } from './delete';

const showOnlyForWebhooks = {
	resource: ['webhook'],
};

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWebhooks,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get webhooks',
				description: 'Get many webhooks',
				routing: {
					request: {
						method: 'GET',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a webhook',
				description: 'Create a new webhook',
				routing: {
					request: {
						method: 'POST',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a webhook',
				description: 'Delete an existing webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...webhookGetAllDescription,
	...webhookCreateDescription,
	...webhookDeleteDescription,
];




