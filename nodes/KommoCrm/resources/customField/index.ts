import type { INodeProperties } from 'n8n-workflow';
import { customFieldGetAllDescription } from './getAll';
import { customFieldCreateDescription } from './create';
import { customFieldUpdateDescription } from './update';
import { customFieldGetGroupsDescription } from './getGroups';

const showOnlyForCustomFields = {
	resource: ['customField'],
};

export const customFieldDescription: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFields,
		},
		options: [
			{
				name: 'Lead',
				value: 'leads',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Company',
				value: 'companies',
			},
		],
		default: 'leads',
		description: 'The type of entity the custom fields belong to',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCustomFields,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get custom fields',
				description: 'Get many custom fields for an entity type',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{$parameter.entityType}}/custom_fields',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a custom field',
				description: 'Create a new custom field',
				routing: {
					request: {
						method: 'POST',
						url: '=/{{$parameter.entityType}}/custom_fields',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a custom field',
				description: 'Update an existing custom field',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/{{$parameter.entityType}}/custom_fields/{{$parameter.fieldId}}',
					},
				},
			},
			{
				name: 'Get Groups',
				value: 'getGroups',
				action: 'Get field groups',
				description: 'Get field groups for an entity type',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{$parameter.entityType}}/custom_field_groups',
					},
				},
			},
		],
		default: 'getAll',
	},
	...customFieldGetAllDescription,
	...customFieldCreateDescription,
	...customFieldUpdateDescription,
	...customFieldGetGroupsDescription,
];
