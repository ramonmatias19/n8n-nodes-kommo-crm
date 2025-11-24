import type { INodeProperties } from 'n8n-workflow';
import { contactGetAllDescription } from './getAll';
import { contactCreateDescription } from './create';
import { contactUpdateDescription } from './update';

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
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new contact',
				description: 'Create a new contact',
				routing: {
					request: {
						method: 'POST',
						url: '/contacts',
						body: '={{ [{name: $parameter.name, ...$parameter.additionalFields}] }}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a contact',
				description: 'Update an existing contact',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...contactGetAllDescription,
	...contactCreateDescription,
	...contactUpdateDescription,
];