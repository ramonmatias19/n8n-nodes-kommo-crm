import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSourceCreate = {
	operation: ['create'],
	resource: ['source'],
};

export const sourceCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSourceCreate,
		},
		default: '',
		description: 'Source name',
	},
	{
		displayName: 'External ID',
		name: 'external_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForSourceCreate,
		},
		default: '',
		description: 'External ID of the source on the integration side',
	},
	{
		displayName: 'Pipeline ID',
		name: 'pipeline_id',
		type: 'number',
		displayOptions: {
			show: showOnlyForSourceCreate,
		},
		default: '',
		description: 'Pipeline ID. The pipeline might be archived. If not provided, the source will be added to the main pipeline.',
	},
	{
		displayName: 'Default',
		name: 'default',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSourceCreate,
		},
		default: false,
		description: 'Whether this source is the default source',
	},
	{
		displayName: 'Origin Code',
		name: 'origin_code',
		type: 'string',
		displayOptions: {
			show: showOnlyForSourceCreate,
		},
		default: '',
		description: 'Code of the main chat channel of the source. The chat channel will be used when initializing the chat.',
	},
];