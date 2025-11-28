import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContacts = {
	resource: ['contact'],
};

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContacts,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get contacts',
				description: 'Get many contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts',
					},
				},
			},
		],
		default: 'getAll',
	},
];