import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSendMessage = {
	operation: ['sendMessage'],
	resource: ['chat'],
};

export const chatSendMessageDescription: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendMessage,
		},
		default: '',
		description: 'The ID of the chat conversation to send message to',
	},
	{
		displayName: 'Message Type',
		name: 'messageType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForSendMessage,
		},
		options: [
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'File',
				value: 'file',
			},
			{
				name: 'Picture',
				value: 'picture',
			},
			{
				name: 'Video',
				value: 'video',
			},
			{
				name: 'Audio',
				value: 'audio',
			},
			{
				name: 'Voice',
				value: 'voice',
			},
			{
				name: 'Sticker',
				value: 'sticker',
			},
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Location',
				value: 'location',
			},
		],
		default: 'text',
		description: 'The type of message to send',
	},
	{
		displayName: 'Message Content',
		name: 'messageContent',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSendMessage,
		},
		default: '',
		description: 'The content of the message (text, file URL, etc.)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForSendMessage,
		},
		options: [
			{
				displayName: 'File Name',
				name: 'fileName',
				type: 'string',
				default: '',
				description: 'Name of the file (for file/picture/video messages)',
			},
			{
				displayName: 'File Size',
				name: 'fileSize',
				type: 'number',
				default: 0,
				description: 'Size of the file in bytes',
			},
			{
				displayName: 'Thumbnail URL',
				name: 'thumbnail',
				type: 'string',
				default: '',
				description: 'URL to the thumbnail (for picture/video messages)',
			},
			{
				displayName: 'Media Duration',
				name: 'mediaDuration',
				type: 'number',
				default: 0,
				description: 'Duration for video/audio/voice messages in seconds',
			},
			{
				displayName: 'Location Latitude',
				name: 'locationLat',
				type: 'number',
				default: 0,
				description: 'Latitude for location messages',
			},
			{
				displayName: 'Location Longitude',
				name: 'locationLon',
				type: 'number',
				default: 0,
				description: 'Longitude for location messages',
			},
			{
				displayName: 'Reply To Message ID',
				name: 'replyToMessageId',
				type: 'string',
				default: '',
				description: 'ID of the message to reply to',
			},
			{
				displayName: 'Reply To Message ID (External)',
				name: 'replyToMessageIdExternal',
				type: 'string',
				default: '',
				description: 'External ID of the message to reply to',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForSendMessage,
		},
		default: {},
		routing: {
			request: {
				body: {
					type: '={{ $parameter.messageType }}',
					message: {
						text: '={{ $parameter.messageType === "text" ? $parameter.messageContent : "" }}',
						media: '={{ $parameter.messageType !== "text" && $parameter.messageType !== "contact" && $parameter.messageType !== "location" ? $parameter.messageContent : "" }}',
						file_name: '={{ $parameter.additionalFields.fileName || "" }}',
						file_size: '={{ $parameter.additionalFields.fileSize || 0 }}',
						thumbnail: '={{ $parameter.additionalFields.thumbnail || "" }}',
						media_duration: '={{ $parameter.additionalFields.mediaDuration || 0 }}',
						location: '={{ $parameter.messageType === "location" ? { lat: $parameter.additionalFields.locationLat, lon: $parameter.additionalFields.locationLon } : null }}',
					},
					reply_to: '={{ $parameter.additionalFields.replyToMessageId || $parameter.additionalFields.replyToMessageIdExternal ? { message: { id: $parameter.additionalFields.replyToMessageId, msgid: $parameter.additionalFields.replyToMessageIdExternal } } : null }}',
				},
			},
		},
	},
];

