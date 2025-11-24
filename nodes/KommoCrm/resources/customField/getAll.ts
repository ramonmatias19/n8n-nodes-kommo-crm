import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldGetAll = {
	operation: ['getAll'],
	resource: ['customField'],
};

export const customFieldGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomFieldGetAll,
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
				displayName: 'Filter by Field ID',
				name: 'filter_id',
				type: 'number',
				default: '',
				description: 'Filter by specific field ID',
				routing: {
					request: {
						qs: {
							'filter[id]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Field Code',
				name: 'filter_code',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							'filter[code]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Field Type',
				name: 'filter_type',
				type: 'options',
				default: '1',
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
				routing: {
					request: {
						qs: {
							'filter[type]': '={{ $value }}',
						},
					},
				},
			},
		],
	},
];

