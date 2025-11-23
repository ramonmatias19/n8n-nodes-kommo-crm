import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactCreate = {
	operation: ['create'],
	resource: ['contact'],
};

export const contactCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'The full name of the contact',
		routing: {
			send: {
				type: 'body',
				property: 'name',
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
			show: showOnlyForContactCreate,
		},
		options: [
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
				description: 'The first name of the contact',
				routing: {
					send: {
						type: 'body',
						property: 'first_name',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
				description: 'The last name of the contact',
				routing: {
					send: {
						type: 'body',
						property: 'last_name',
					},
				},
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsible_user_id',
				type: 'number',
				default: '',
				description: 'The ID of the user responsible for this contact',
				routing: {
					send: {
						type: 'body',
						property: 'responsible_user_id',
					},
				},
			},
			{
				displayName: 'Custom Fields Values',
				name: 'custom_fields_values',
				type: 'json',
				default: '',
				description: 'Custom fields values for the contact',
				routing: {
					send: {
						type: 'body',
						property: 'custom_fields_values',
					},
				},
			},
		],
	},
];
