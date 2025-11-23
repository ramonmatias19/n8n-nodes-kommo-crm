import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSourceGetAll = {
	operation: ['getAll'],
	resource: ['source'],
};

export const sourceGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSourceGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForSourceGetAll,
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
			show: showOnlyForSourceGetAll,
		},
		options: [
			{
				displayName: 'Filter by External ID',
				name: 'filter_external_id',
				type: 'string',
				default: '',
				description: 'Filter sources by external ID',
			},
		],
	},
];