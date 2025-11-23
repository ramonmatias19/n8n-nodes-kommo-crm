import type { INodeProperties } from 'n8n-workflow';
import { callCreateDescription } from './create';
import { callGetAllDescription } from './getAll';

const showOnlyForCalls = {
	resource: ['call'],
};

export const callDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCalls,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get calls',
				description: 'Get many calls',
				routing: {
					request: {
						method: 'GET',
						url: '/calls',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new call',
				description: 'Create a new call record',
				routing: {
					request: {
						method: 'POST',
						url: '/calls',
					},
				},
			},
		],
		default: 'getAll',
	},
	...callGetAllDescription,
	...callCreateDescription,
];