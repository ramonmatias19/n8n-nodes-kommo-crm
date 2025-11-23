import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListCreate = {
	operation: ['createList'],
	resource: ['list'],
};

export const listCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForListCreate,
		},
		description: 'The name of the list',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Regular',
				value: 'regular',
			},
			{
				name: 'Products',
				value: 'products',
			},
		],
		default: 'regular',
		displayOptions: {
			show: showOnlyForListCreate,
		},
		description: 'The type of the list (max 1 products list per account)',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'number',
		default: '',
		displayOptions: {
			show: showOnlyForListCreate,
		},
		description: 'Sort order for the list',
		routing: {
			send: {
				type: 'body',
				property: 'sort',
			},
		},
	},
];