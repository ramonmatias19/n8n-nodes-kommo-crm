import type { INodeProperties } from 'n8n-workflow';

const showOnlyForConnectChannel = {
	operation: ['connectChannel'],
	resource: ['chat'],
};

export const chatConnectChannelDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForConnectChannel,
		},
		default: 0,
		description: 'The ID of the chat channel to connect',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForConnectChannel,
		},
		options: [
			{
				displayName: 'Webhook URL',
				name: 'webhookUrl',
				type: 'string',
				default: '',
				description: 'URL to receive webhook notifications for this channel',
			},
			{
				displayName: 'Secret',
				name: 'secret',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Secret key for webhook signature verification',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForConnectChannel,
		},
		default: {},
		routing: {
			request: {
				body: '={{ Object.keys($parameter.additionalFields).length > 0 ? $parameter.additionalFields : {} }}',
			},
		},
	},
];

