import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetContactChats = {
	operation: ['getContactChats'],
	resource: ['chat'],
};

export const chatGetContactChatsDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGetContactChats,
		},
		default: 0,
		description: 'The ID of the contact to get chats for',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForGetContactChats,
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					request: {
						qs: {
							limit: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'The page number to return',
				routing: {
					request: {
						qs: {
							page: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Channel ID',
				name: 'filter_channel_id',
				type: 'number',
				default: '',
				description: 'Filter chats by channel ID',
				routing: {
					request: {
						qs: {
							'filter[channel_id]': '={{ $value }}',
						},
					},
				},
			},
		],
	},
];

