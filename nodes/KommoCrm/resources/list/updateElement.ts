import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListElementUpdate = {
	operation: ['updateElement'],
	resource: ['list'],
};

export const listElementUpdateDescription: INodeProperties[] = [
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		displayOptions: { show: showOnlyForListElementUpdate },
		default: '',
		required: true,
		description: 'The ID of the list containing the element',
	},
	{
		displayName: 'Element ID',
		name: 'elementId',
		type: 'string',
		displayOptions: { show: showOnlyForListElementUpdate },
		default: '',
		required: true,
		description: 'The ID of the element to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForListElementUpdate,
		},
		description: 'The new name of the list element',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'number',
		default: '',
		displayOptions: {
			show: showOnlyForListElementUpdate,
		},
		description: 'New sort order for the element',
		routing: {
			send: {
				type: 'body',
				property: 'sort',
			},
		},
	},
];