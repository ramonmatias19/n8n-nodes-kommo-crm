import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNoteGetAll = {
	operation: ['getAll'],
	resource: ['note'],
};

export const noteGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNoteGetAll,
		},
		description: 'The ID of the entity to get notes for',
		routing: {
			request: {
				url: '=/{{ $parameter.entityType }}/{{ $parameter.entityId }}/notes',
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
			show: showOnlyForNoteGetAll,
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					request: {
						qs: {
							limit: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'The page number to return',
				routing: {
					request: {
						qs: {
							page: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Note Type',
				name: 'filter_note_type',
				type: 'options',
				default: 'common',
				description: 'Filter notes by type',
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
				routing: {
					request: {
						qs: {
							filter: {
								note_type: '={{ $value }}',
							},
						},
					},
				},
			},
		],
	},
];

