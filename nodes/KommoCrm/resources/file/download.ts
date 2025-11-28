import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFileDownload = {
	operation: ['download'],
	resource: ['file'],
};

export const fileDownloadDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForFileDownload,
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
			show: showOnlyForFileDownload,
		},
		default: '',
		description: 'The ID of the file to download',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForFileDownload,
		},
		options: [
			{
				displayName: 'Version',
				name: 'version',
				type: 'number',
				default: '',
				description: 'Specific version of the file to download',
				routing: {
					request: {
						qs: {
							version: '={{ $value }}',
						},
					},
				},
			},
		],
	},
];




