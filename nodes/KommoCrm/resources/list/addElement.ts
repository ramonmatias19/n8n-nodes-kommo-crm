import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListElementAdd = {
	operation: ['addElement'],
	resource: ['list'],
};

export const listElementAddDescription: INodeProperties[] = [
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		displayOptions: { show: showOnlyForListElementAdd },
		default: '',
		required: true,
		description: 'The ID of the list to add the element to',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForListElementAdd,
		},
		description: 'The name of the list element',
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
			show: showOnlyForListElementAdd,
		},
		description: 'Sort order for the element',
		routing: {
			send: {
				type: 'body',
				property: 'sort',
			},
		},
	},
];