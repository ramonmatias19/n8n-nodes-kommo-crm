import type { INodeProperties } from 'n8n-workflow';
import { leadGetDescription } from './get';
import { leadGetAllDescription } from './getAll';
import { leadCreateDescription } from './create';
import { leadUpdateDescription } from './update';

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
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead',
				description: 'Get the data of a single lead',
				routing: {
					request: {
						method: 'GET',
						url: '=/leads/{{$parameter.leadId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new lead',
				description: 'Create a new lead',
				routing: {
					request: {
						method: 'POST',
						url: '/leads',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a lead',
				description: 'Update an existing lead',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/leads/{{$parameter.leadId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...leadGetAllDescription,
	...leadGetDescription,
	...leadCreateDescription,
	...leadUpdateDescription,
];
