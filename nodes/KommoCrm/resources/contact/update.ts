import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactUpdate = {
	operation: ['update'],
	resource: ['contact'],
};

export const contactUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		displayOptions: { show: showOnlyForContactUpdate },
		default: '',
		description: 'The contact\'s ID to update',
		required: true,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForContactUpdate,
		},
		options: [
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The full name of the contact',
				routing: {
					send: {
						type: 'body',
						property: 'name',
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
		],
	},
];
