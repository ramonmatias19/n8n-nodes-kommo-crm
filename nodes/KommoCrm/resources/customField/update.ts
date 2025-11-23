import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldUpdate = {
	operation: ['update'],
	resource: ['customField'],
};

export const customFieldUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Field ID',
		name: 'fieldId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		default: 0,
		description: 'The ID of the custom field to update',
	},
	{
		displayName: 'Field Name',
		name: 'fieldName',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		default: '',
		description: 'The name of the custom field',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		options: [
			{
				displayName: 'Field Code',
				name: 'fieldCode',
				type: 'string',
				default: '',
				description: 'The code/identifier for the custom field',
			},
			{
				displayName: 'Field Group ID',
				name: 'fieldGroupId',
				type: 'number',
				default: '',
				description: 'ID of the field group this field belongs to',
			},
			{
				displayName: 'Sort Order',
				name: 'sort',
				type: 'number',
				default: 0,
				description: 'Sort order of the field',
			},
			{
				displayName: 'Is Required',
				name: 'isRequired',
				type: 'boolean',
				default: false,
				description: 'Whether the field is required',
			},
			{
				displayName: 'Is Visible',
				name: 'isVisible',
				type: 'boolean',
				default: true,
				description: 'Whether the field is visible',
			},
			{
				displayName: 'Is Editable',
				name: 'isEditable',
				type: 'boolean',
				default: true,
				description: 'Whether the field is editable',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the custom field',
			},
			{
				displayName: 'Placeholder',
				name: 'placeholder',
				type: 'string',
				default: '',
				description: 'Placeholder text for the field',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		default: {},
		routing: {
			request: {
				body: '={{ Object.assign({}, $parameter.fieldName ? { name: $parameter.fieldName } : {}, $parameter.additionalFields) }}',
			},
		},
	},
];
