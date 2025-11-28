import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeads = {
	resource: ['lead'],
};

export const leadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLeads,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get leads',
				description: 'Get many leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads',
					},
				},
			},
		],
		default: 'getAll',
	},
];