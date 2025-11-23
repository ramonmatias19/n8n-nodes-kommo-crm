import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRegisterChannel = {
	operation: ['registerChannel'],
	resource: ['chat'],
};

export const chatRegisterChannelDescription: INodeProperties[] = [
	{
		displayName: 'Channel Type',
		name: 'channelType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		options: [
			{
				name: 'WhatsApp',
				value: 'whatsapp',
			},
			{
				name: 'Telegram',
				value: 'telegram',
			},
			{
				name: 'Instagram',
				value: 'instagram',
			},
			{
				name: 'Facebook Messenger',
				value: 'facebook',
			},
			{
				name: 'VK',
				value: 'vk',
			},
			{
				name: 'Custom',
				value: 'custom',
			},
		],
		default: 'whatsapp',
		description: 'The type of chat channel to register',
	},
	{
		displayName: 'Channel Name',
		name: 'channelName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		default: '',
		description: 'Name for the chat channel',
	},
	{
		displayName: 'Webhook URL',
		name: 'webhookUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		default: '',
		description: 'URL to receive webhook notifications for this channel',
	},
	{
		displayName: 'External ID',
		name: 'externalId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		default: '',
		description: 'External identifier for the channel (phone number, username, etc.)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		options: [
			{
				displayName: 'Secret',
				name: 'secret',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Secret key for webhook signature verification',
			},
			{
				displayName: 'Is Active',
				name: 'isActive',
				type: 'boolean',
				default: true,
				description: 'Whether the channel should be active',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForRegisterChannel,
		},
		default: {},
		routing: {
			request: {
				body: {
					type: '={{ $parameter.channelType }}',
					name: '={{ $parameter.channelName }}',
					webhook_url: '={{ $parameter.webhookUrl }}',
					external_id: '={{ $parameter.externalId }}',
					secret: '={{ $parameter.additionalFields.secret || "" }}',
					is_active: '={{ $parameter.additionalFields.isActive !== false }}',
				},
			},
		},
	},
];
