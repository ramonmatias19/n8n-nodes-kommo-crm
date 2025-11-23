import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTemplateGetAll = {
	operation: ['getAll'],
	resource: ['template'],
};

export const templateGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForTemplateGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForTemplateGetAll,
		},
		typeOptions: {
			minValue: 1,
			maxValue: 250,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForTemplateGetAll,
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query for templates',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Text',
								value: 'text',
							},
							{
								name: 'HTML',
								value: 'html',
							},
							{
								name: 'Card',
								value: 'card',
							},
						],
						default: 'text',
						description: 'Filter by template type',
					},
				],
			},
		],
	},
];