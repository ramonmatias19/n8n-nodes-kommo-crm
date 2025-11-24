import type { INodeProperties } from 'n8n-workflow';
import { fileUploadDescription } from './upload';
import { fileDownloadDescription } from './download';
import { fileDeleteDescription } from './delete';
import { fileRestoreDescription } from './restore';

const showOnlyForFiles = {
	resource: ['file'],
};

export const fileDescription: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForFiles,
		},
		options: [
			{
				name: 'Lead',
				value: 'leads',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Company',
				value: 'companies',
			},
		],
		default: 'leads',
		description: 'The type of entity the file belongs to',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFiles,
		},
		options: [
			{
				name: 'Upload',
				value: 'upload',
				action: 'Upload a file',
				description: 'Upload a file to an entity',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/{{$parameter.entityType}}/{{$parameter.entityId}}/files',
					},
				},
			},
			{
				name: 'Download',
				value: 'download',
				action: 'Download a file',
				description: 'Download a file from an entity',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v4/{{$parameter.entityType}}/{{$parameter.entityId}}/files/{{$parameter.fileId}}/download',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a file',
				description: 'Delete a file from an entity',
				routing: {
					request: {
						method: 'DELETE',
						url: '/api/v4/{{$parameter.entityType}}/{{$parameter.entityId}}/files/{{$parameter.fileId}}',
					},
				},
			},
			{
				name: 'Restore',
				value: 'restore',
				action: 'Restore a deleted file',
				description: 'Restore a previously deleted file',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/{{$parameter.entityType}}/{{$parameter.entityId}}/files/{{$parameter.fileId}}/restore',
					},
				},
			},
		],
		default: 'upload',
	},
	...fileUploadDescription,
	...fileDownloadDescription,
	...fileDeleteDescription,
	...fileRestoreDescription,
];

