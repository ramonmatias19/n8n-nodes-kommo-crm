import type { INodeProperties } from 'n8n-workflow';
import { tagGetAllDescription } from './getAll';
import { tagAttachDescription } from './attach';
import { tagDetachDescription } from './detach';

const showOnlyForTags = {
	resource: ['tag'],
};

export const tagDescription: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForTags,
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
		description: 'The type of entity the tags belong to',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTags,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get tags',
				description: 'Get many tags',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{ $parameter.entityType }}/tags',
					},
				},
			},
			{
				name: 'Attach',
				value: 'attach',
				action: 'Attach tags to entity',
				description: 'Attach tags to a specific lead, contact, or company',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}',
					},
				},
			},
			{
				name: 'Detach',
				value: 'detach',
				action: 'Detach tags from entity',
				description: 'Detach tags from a specific lead, contact, or company',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...tagGetAllDescription,
	...tagAttachDescription,
	...tagDetachDescription,
];
