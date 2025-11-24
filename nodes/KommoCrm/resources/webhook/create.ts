import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhookCreate = {
	operation: ['create'],
	resource: ['webhook'],
};

export const webhookCreateDescription: INodeProperties[] = [
	{
		displayName: 'Destination URL',
		name: 'destination',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForWebhookCreate,
		},
		description: 'The URL where webhook notifications will be sent',
		routing: {
			send: {
				type: 'body',
				property: 'destination',
			},
		},
	},
	{
		displayName: 'Settings',
		name: 'settings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		required: true,
		displayOptions: {
			show: showOnlyForWebhookCreate,
		},
		options: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				default: [],
				description: 'Events that will trigger this webhook',
				options: [
					{
						name: 'Company Added',
						value: 'add_company',
					},
					{
						name: 'Company Deleted',
						value: 'delete_company',
					},
					{
						name: 'Company Responsible User Changed',
						value: 'responsible_company',
					},
					{
						name: 'Company Restored',
						value: 'restore_company',
					},
					{
						name: 'Company Updated',
						value: 'update_company',
					},
					{
						name: 'Contact Added',
						value: 'add_contact',
					},
					{
						name: 'Contact Deleted',
						value: 'delete_contact',
					},
					{
						name: 'Contact Responsible User Changed',
						value: 'responsible_contact',
					},
					{
						name: 'Contact Restored',
						value: 'restore_contact',
					},
					{
						name: 'Contact Updated',
						value: 'update_contact',
					},
					{
						name: 'Lead Added',
						value: 'add_lead',
					},
					{
						name: 'Lead Deleted',
						value: 'delete_lead',
					},
					{
						name: 'Lead Responsible User Changed',
						value: 'responsible_lead',
					},
					{
						name: 'Lead Restored',
						value: 'restore_lead',
					},
					{
						name: 'Lead Status Changed',
						value: 'status_lead',
					},
					{
						name: 'Lead Updated',
						value: 'update_lead',
					},
					{
						name: 'Note Added to Company',
						value: 'note_company',
					},
					{
						name: 'Note Added to Contact',
						value: 'note_contact',
					},
					{
						name: 'Note Added to Lead',
						value: 'note_lead',
					},
					{
						name: 'Task Added',
						value: 'add_task',
					},
					{
						name: 'Task Deleted',
						value: 'delete_task',
					},
					{
						name: 'Task Responsible User Changed',
						value: 'responsible_task',
					},
					{
						name: 'WhatsApp Template Submitted',
						value: 'add_chat_template_review',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'settings.events',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForWebhookCreate,
		},
		options: [
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'number',
				default: '',
				description: 'Sort order of the webhook',
				routing: {
					send: {
						type: 'body',
						property: 'sort',
					},
				},
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: true,
				description: 'Whether the webhook is active',
				routing: {
					send: {
						type: 'body',
						property: 'is_active',
					},
				},
			},
		],
	},
];
