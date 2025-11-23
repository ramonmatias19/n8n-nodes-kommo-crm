import type { INodeProperties } from 'n8n-workflow';
import { noteGetAllDescription } from './getAll';
import { noteGetDescription } from './get';
import { noteCreateDescription } from './create';
import { noteUpdateDescription } from './update';
import { noteDeleteDescription } from './delete';

const showOnlyForNotes = {
	resource: ['note'],
};

export const noteDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForNotes,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new note',
				description: 'Create a new note',
				routing: {
					request: {
						method: 'POST',
						url: '/{{ $parameter.entityType }}/notes',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a note',
				description: 'Delete an existing note',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}/notes/{{ $parameter.noteId }}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a note',
				description: 'Get the data of a single note',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}/notes/{{ $parameter.noteId }}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get notes',
				description: 'Get many notes',
				routing: {
					request: {
						method: 'GET',
						url: '/{{ $parameter.entityType }}/notes',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a note',
				description: 'Update an existing note',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}/notes/{{ $parameter.noteId }}',
					},
				},
			},
		],
		default: 'getAll',
	},
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForNotes,
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
		description: 'The type of entity the note belongs to',
	},
	...noteGetAllDescription,
	...noteGetDescription,
	...noteCreateDescription,
	...noteUpdateDescription,
	...noteDeleteDescription,
];
