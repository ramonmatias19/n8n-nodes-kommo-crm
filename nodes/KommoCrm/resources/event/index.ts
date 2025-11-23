import type { INodeProperties } from 'n8n-workflow';
import { eventGetAllDescription } from './getAll';
import { eventGetTypesDescription } from './getTypes';

const showOnlyForEvents = {
	resource: ['event'],
};

export const eventDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEvents,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get events',
				description: 'Get many events',
				routing: {
					request: {
						method: 'GET',
						url: '/events',
					},
				},
			},
			{
				name: 'Get Types',
				value: 'getTypes',
				action: 'Get event types',
				description: 'Get available event types',
				routing: {
					request: {
						method: 'GET',
						url: '/events/types',
					},
				},
			},
		],
		default: 'getAll',
	},
	...eventGetAllDescription,
	...eventGetTypesDescription,
];
