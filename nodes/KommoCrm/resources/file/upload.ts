import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFileUpload = {
	operation: ['upload'],
	resource: ['file'],
};

export const fileUploadDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForFileUpload,
		},
		default: 0,
		description: 'The ID of the entity (lead/contact/company) to upload file to',
	},
	{
		displayName: 'File Content',
		name: 'fileContent',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFileUpload,
		},
		default: '',
		description: 'The base64 encoded file content or file URL',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFileUpload,
		},
		default: '',
		description: 'The name of the file to upload',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForFileUpload,
		},
		options: [
			{
				displayName: 'File Size',
				name: 'fileSize',
				type: 'number',
				default: 0,
				description: 'Size of the file in bytes',
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				type: 'string',
				default: '',
				description: 'MIME type of the file (e.g., image/jpeg, application/pdf)',
			},
			{
				displayName: 'Version',
				name: 'version',
				type: 'number',
				default: 1,
				description: 'Version number of the file',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForFileUpload,
		},
		default: {},
		routing: {
			request: {
				body: {
					file: {
						name: '={{ $parameter.fileName }}',
						content: '={{ $parameter.fileContent }}',
						size: '={{ $parameter.additionalFields.fileSize || 0 }}',
						content_type: '={{ $parameter.additionalFields.contentType || "" }}',
						version: '={{ $parameter.additionalFields.version || 1 }}',
					},
				},
			},
		},
	},
];




