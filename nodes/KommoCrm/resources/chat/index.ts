import type { INodeProperties } from 'n8n-workflow';
import { chatRegisterChannelDescription } from './registerChannel';
import { chatConnectChannelDescription } from './connectChannel';
import { chatGetContactChatsDescription } from './getContactChats';
import { chatSendMessageDescription } from './sendMessage';

const showOnlyForChats = {
	resource: ['chat'],
};

export const chatDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChats,
		},
		options: [
			{
				name: 'Register Channel',
				value: 'registerChannel',
				action: 'Register a chat channel',
				description: 'Register a new chat channel for messaging',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/chats/channels',
					},
				},
			},
			{
				name: 'Connect Channel',
				value: 'connectChannel',
				action: 'Connect an existing chat channel',
				description: 'Connect an existing chat channel',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/chats/channels/{{$parameter.channelId}}/connect',
					},
				},
			},
			{
				name: 'Get Contact Chats',
				value: 'getContactChats',
				action: 'Get chats for a contact',
				description: 'Get all chat conversations for a specific contact',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v4/contacts/{{$parameter.contactId}}/chats',
					},
				},
			},
			{
				name: 'Send Message',
				value: 'sendMessage',
				action: 'Send a message',
				description: 'Send a message to a chat conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/chats/{{$parameter.chatId}}/messages',
					},
				},
			},
		],
		default: 'registerChannel',
	},
	...chatRegisterChannelDescription,
	...chatConnectChannelDescription,
	...chatGetContactChatsDescription,
	...chatSendMessageDescription,
];
