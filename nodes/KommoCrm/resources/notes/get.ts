import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNoteGet = {
	operation: ['get'],
	resource: ['note'],
};

export const noteGetDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteGet,
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
			show: showOnlyForNoteGet,
		},
		description: 'The ID of the note to retrieve',
	},
];




