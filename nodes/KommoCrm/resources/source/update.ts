import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSourceUpdate = {
	operation: ['update'],
	resource: ['source'],
};

export const sourceUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Source ID',
		name: 'sourceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: '',
		description: 'The ID of the source to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: '',
		description: 'Source name',
	},
	{
		displayName: 'External ID',
		name: 'external_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: '',
		description: 'External ID of the source on the integration side',
	},
	{
		displayName: 'Pipeline ID',
		name: 'pipeline_id',
		type: 'number',
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: '',
		description: 'Pipeline ID. The pipeline might be archived.',
	},
	{
		displayName: 'Default',
		name: 'default',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: false,
		description: 'Whether this source is the default source',
	},
	{
		displayName: 'Origin Code',
		name: 'origin_code',
		type: 'string',
		displayOptions: {
			show: showOnlyForSourceUpdate,
		},
		default: '',
		description: 'Code of the main chat channel of the source. The chat channel will be used when initializing the chat.',
	},
];