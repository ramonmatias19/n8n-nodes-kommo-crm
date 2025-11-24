import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSourceGet = {
	operation: ['get'],
	resource: ['source'],
};

export const sourceGetDescription: INodeProperties[] = [
	{
		displayName: 'Source ID',
		name: 'sourceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSourceGet,
		},
		default: '',
		description: 'The ID of the source to retrieve',
	},
];

