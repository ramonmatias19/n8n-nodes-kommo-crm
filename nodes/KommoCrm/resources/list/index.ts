import type { INodeProperties } from 'n8n-workflow';
import { listGetAllDescription } from './getAll';
import { listCreateDescription } from './create';
import { listElementGetAllDescription } from './getAllElements';
import { listElementAddDescription } from './addElement';
import { listElementUpdateDescription } from './updateElement';

const showOnlyForLists = {
	resource: ['list'],
};

export const listDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLists,
		},
		options: [
			{
				name: 'Add List Element',
				value: 'addElement',
				action: 'Add an element to a list',
				description: 'Add a new element to a list',
				routing: {
					request: {
						method: 'POST',
						url: '=/catalogs/{{$parameter.listId}}/elements',
					},
				},
			},
			{
				name: 'Create List',
				value: 'createList',
				action: 'Create a new list',
				description: 'Create a new list',
				routing: {
					request: {
						method: 'POST',
						url: '/catalogs',
					},
				},
			},
			{
				name: 'Get List Elements',
				value: 'getAllElements',
				action: 'Get list elements',
				description: 'Get elements from a specific list',
				routing: {
					request: {
						method: 'GET',
						url: '=/catalogs/{{$parameter.listId}}/elements',
					},
				},
			},
			{
				name: 'Get Many Lists',
				value: 'getAllLists',
				action: 'Get lists',
				routing: {
					request: {
						method: 'GET',
						url: '/catalogs',
					},
				},
			},
			{
				name: 'Update List Element',
				value: 'updateElement',
				action: 'Update a list element',
				description: 'Update an existing list element',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/catalogs/{{$parameter.listId}}/elements/{{$parameter.elementId}}',
					},
				},
			},
		],
		default: 'getAllLists',
	},
	...listGetAllDescription,
	...listCreateDescription,
	...listElementGetAllDescription,
	...listElementAddDescription,
	...listElementUpdateDescription,
];