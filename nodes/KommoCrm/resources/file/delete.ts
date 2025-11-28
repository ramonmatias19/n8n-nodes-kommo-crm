import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFileDelete = {
	operation: ['delete'],
	resource: ['file'],
};

export const fileDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForFileDelete,
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
			show: showOnlyForFileDelete,
		},
		default: '',
		description: 'The ID of the file to delete',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForFileDelete,
		},
		options: [
			{
				displayName: 'Version',
				name: 'version',
				type: 'number',
				default: '',
				description: 'Specific version of the file to delete',
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




