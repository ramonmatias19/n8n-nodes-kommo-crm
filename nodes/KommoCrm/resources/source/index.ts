import type { INodeProperties } from 'n8n-workflow';
import { sourceGetAllDescription } from './getAll';
import { sourceGetDescription } from './get';
import { sourceCreateDescription } from './create';
import { sourceUpdateDescription } from './update';

const showOnlyForSources = {
	resource: ['source'],
};

export const sourceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSources,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get sources',
				description: 'Get many sources',
				routing: {
					request: {
						method: 'GET',
						url: '/sources',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a source',
				description: 'Get the data of a single source',
				routing: {
					request: {
						method: 'GET',
						url: '=/sources/{{$parameter.sourceId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new source',
				description: 'Create a new source',
				routing: {
					request: {
						method: 'POST',
						url: '/sources',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a source',
				description: 'Update an existing source',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/sources/{{$parameter.sourceId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...sourceGetAllDescription,
	...sourceGetDescription,
	...sourceCreateDescription,
	...sourceUpdateDescription,
];