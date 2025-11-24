import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNoteCreate = {
	operation: ['create'],
	resource: ['note'],
};

export const noteCreateDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteCreate,
		},
		description: 'The ID of the entity to add the note to',
		routing: {
			send: {
				type: 'body',
				property: 'entity_id',
			},
		},
	},
	{
		displayName: 'Note Type',
		name: 'noteType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForNoteCreate,
		},
		options: [
			{
				name: 'Common (Text)',
				value: 'common',
			},
			{
				name: 'Call In',
				value: 'call_in',
			},
			{
				name: 'Call Out',
				value: 'call_out',
			},
			{
				name: 'Service Message',
				value: 'service_message',
			},
			{
				name: 'Geolocation',
				value: 'geolocation',
			},
			{
				name: 'SMS In',
				value: 'sms_in',
			},
			{
				name: 'SMS Out',
				value: 'sms_out',
			},
			{
				name: 'Extended Service Message',
				value: 'extended_service_message',
			},
			{
				name: 'Attachment',
				value: 'attachment',
			},
		],
		default: 'common',
		description: 'The type of note to create',
		routing: {
			send: {
				type: 'body',
				property: 'note_type',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForNoteCreate,
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Text content for common, service message, SMS, and geolocation notes',
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
				description: 'Phone number for call and SMS notes',
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
				description: 'Call duration in seconds for call notes',
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
				description: 'Source of the call (e.g., Twilio, onlinePBX)',
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
				description: 'Link to call recording or details',
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
				description: 'Unique identifier for the call or service',
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
				description: 'Service name for service message notes',
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
				description: 'Address for geolocation notes',
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
				description: 'Longitude coordinate for geolocation notes',
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
				description: 'Latitude coordinate for geolocation notes',
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
				description: 'UUID of the file for attachment notes',
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
				description: 'UUID of the file version for attachment notes (optional)',
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
				description: 'Display name of the file for attachment notes',
				routing: {
					send: {
						type: 'body',
						property: 'params.file_name',
					},
				},
			},
			{
				displayName: 'Request ID',
				name: 'request_id',
				type: 'string',
				default: '',
				description: 'Optional request ID that will be returned unchanged',
				routing: {
					send: {
						type: 'body',
						property: 'request_id',
					},
				},
			},
			{
				displayName: 'Trigger Digital Pipeline',
				name: 'is_need_to_trigger_digital_pipeline',
				type: 'boolean',
				default: true,
				description: 'Whether to trigger Digital Pipeline events',
				routing: {
					send: {
						type: 'body',
						property: 'is_need_to_trigger_digital_pipeline',
					},
				},
			},
		],
	},
];

