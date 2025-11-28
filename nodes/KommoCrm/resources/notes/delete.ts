import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNoteDelete = {
	operation: ['delete'],
	resource: ['note'],
};

export const noteDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForNoteDelete,
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
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteDelete,
		},
		description: 'The ID of the entity the note belongs to',
	},
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteDelete,
		},
		description: 'The ID of the note to delete',
	},
];




