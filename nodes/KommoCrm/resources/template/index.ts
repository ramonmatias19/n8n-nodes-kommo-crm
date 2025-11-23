import type { INodeProperties } from 'n8n-workflow';
import { templateGetAllDescription } from './getAll';
import { templateCreateDescription } from './create';
import { templateUpdateDescription } from './update';
import { templateDeleteDescription } from './delete';

const showOnlyForTemplates = {
	resource: ['template'],
};

export const templateDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTemplates,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get templates',
				description: 'Get many templates',
				routing: {
					request: {
						method: 'GET',
						url: '/chats/templates',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new template',
				description: 'Create a new chat response template',
				routing: {
					request: {
						method: 'POST',
						url: '/chats/templates',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a template',
				description: 'Update an existing template',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/chats/templates/{{$parameter.templateId}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a template',
				description: 'Delete an existing template',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/chats/templates/{{$parameter.templateId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...templateGetAllDescription,
	...templateCreateDescription,
	...templateUpdateDescription,
	...templateDeleteDescription,
];