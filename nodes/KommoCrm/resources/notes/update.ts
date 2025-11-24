import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNoteUpdate = {
	operation: ['update'],
	resource: ['note'],
};

export const noteUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteUpdate,
		},
		description: 'The ID of the entity the note belongs to',
	},
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteUpdate,
		},
		description: 'The ID of the note to update',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForNoteUpdate,
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Updated text content for the note',
				routing: {
					send: {
						type: 'body',
						property: 'params.text',
					},
				},
			},
			{
				displayName: 'Phone Number',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Updated phone number for call and SMS notes',
				routing: {
					send: {
						type: 'body',
						property: 'params.phone',
					},
				},
			},
			{
				displayName: 'Call Duration (Seconds)',
				name: 'duration',
				type: 'number',
				default: '',
				description: 'Updated call duration in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'params.duration',
					},
				},
			},
			{
				displayName: 'Call Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Updated source of the call',
				routing: {
					send: {
						type: 'body',
						property: 'params.source',
					},
				},
			},
			{
				displayName: 'Call Link',
				name: 'link',
				type: 'string',
				default: '',
				description: 'Updated link to call recording or details',
				routing: {
					send: {
						type: 'body',
						property: 'params.link',
					},
				},
			},
			{
				displayName: 'Unique ID',
				name: 'uniq',
				type: 'string',
				default: '',
				description: 'Updated unique identifier',
				routing: {
					send: {
						type: 'body',
						property: 'params.uniq',
					},
				},
			},
			{
				displayName: 'Service Name',
				name: 'service',
				type: 'string',
				default: '',
				description: 'Updated service name for service messages',
				routing: {
					send: {
						type: 'body',
						property: 'params.service',
					},
				},
			},
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Updated address for geolocation notes',
				routing: {
					send: {
						type: 'body',
						property: 'params.address',
					},
				},
			},
			{
				displayName: 'Longitude',
				name: 'longitude',
				type: 'string',
				default: '',
				description: 'Updated longitude coordinate',
				routing: {
					send: {
						type: 'body',
						property: 'params.longitude',
					},
				},
			},
			{
				displayName: 'Latitude',
				name: 'latitude',
				type: 'string',
				default: '',
				description: 'Updated latitude coordinate',
				routing: {
					send: {
						type: 'body',
						property: 'params.latitude',
					},
				},
			},
			{
				displayName: 'File UUID',
				name: 'file_uuid',
				type: 'string',
				default: '',
				description: 'Updated file UUID for attachment notes',
				routing: {
					send: {
						type: 'body',
						property: 'params.file_uuid',
					},
				},
			},
			{
				displayName: 'File Version UUID',
				name: 'version_uuid',
				type: 'string',
				default: '',
				description: 'Updated file version UUID for attachment notes',
				routing: {
					send: {
						type: 'body',
						property: 'params.version_uuid',
					},
				},
			},
			{
				displayName: 'File Name',
				name: 'file_name',
				type: 'string',
				default: '',
				description: 'Updated display name of the file',
				routing: {
					send: {
						type: 'body',
						property: 'params.file_name',
					},
				},
			},
		],
	},
];

