import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFileRestore = {
	operation: ['restore'],
	resource: ['file'],
};

export const fileRestoreDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForFileRestore,
		},
		default: 0,
		description: 'The ID of the entity (lead/contact/company) the file belongs to',
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFileRestore,
		},
		default: '',
		description: 'The ID of the deleted file to restore',
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForFileRestore,
		},
		default: 1,
		description: 'Version of the file to restore',
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForFileRestore,
		},
		default: {},
		routing: {
			request: {
				body: {
					version: '={{ $parameter.version }}',
				},
			},
		},
	},
];

