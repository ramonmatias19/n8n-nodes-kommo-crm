import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldCreate = {
	operation: ['create'],
	resource: ['customField'],
};

export const customFieldCreateDescription: INodeProperties[] = [
	{
		displayName: 'Field Name',
		name: 'fieldName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		default: '',
		description: 'The name of the custom field',
	},
	{
		displayName: 'Field Code',
		name: 'fieldCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		default: '',
		description: 'The code/identifier for the custom field',
	},
	{
		displayName: 'Field Type',
		name: 'fieldType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		options: [
			{ name: 'Text', value: '1' },
			{ name: 'Numeric', value: '2' },
			{ name: 'Checkbox', value: '3' },
			{ name: 'Select', value: '4' },
			{ name: 'Multiselect', value: '5' },
			{ name: 'Date', value: '6' },
			{ name: 'URL', value: '7' },
			{ name: 'Textarea', value: '8' },
			{ name: 'Radiobutton', value: '9' },
			{ name: 'Street Address', value: '10' },
			{ name: 'Smart Address', value: '11' },
			{ name: 'Birthday', value: '12' },
			{ name: 'Legal Entity', value: '13' },
			{ name: 'Items', value: '14' },
			{ name: 'Price', value: '15' },
			{ name: 'Category', value: '16' },
			{ name: 'Tracking Number', value: '17' },
			{ name: 'Linked Entities', value: '18' },
		],
		default: '1',
		description: 'The type of the custom field',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the custom field',
			},
			{
				displayName: 'Field Group ID',
				name: 'fieldGroupId',
				type: 'number',
				default: '',
				description: 'ID of the field group this field belongs to',
			},
			{
				displayName: 'Is Editable',
				name: 'isEditable',
				type: 'boolean',
				default: true,
				description: 'Whether the field is editable',
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
				displayName: 'Placeholder',
				name: 'placeholder',
				type: 'string',
				default: '',
				description: 'Placeholder text for the field',
			},
			{
				displayName: 'Sort Order',
				name: 'sort',
				type: 'number',
				default: 0,
				description: 'Sort order of the field',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		default: {},
		routing: {
			request: {
				body: {
					name: '={{ $parameter.fieldName }}',
					code: '={{ $parameter.fieldCode }}',
					type: '={{ parseInt($parameter.fieldType) }}',
					group_id: '={{ $parameter.additionalFields.fieldGroupId ? parseInt($parameter.additionalFields.fieldGroupId) : null }}',
					sort: '={{ $parameter.additionalFields.sort || 0 }}',
					is_required: '={{ $parameter.additionalFields.isRequired || false }}',
					is_visible: '={{ $parameter.additionalFields.isVisible !== false }}',
					is_editable: '={{ $parameter.additionalFields.isEditable !== false }}',
					description: '={{ $parameter.additionalFields.description || "" }}',
					placeholder: '={{ $parameter.additionalFields.placeholder || "" }}',
				},
			},
		},
	},
];

