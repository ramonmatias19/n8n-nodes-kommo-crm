import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldGetGroups = {
	operation: ['getGroups'],
	resource: ['customField'],
};

export const customFieldGetGroupsDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomFieldGetGroups,
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
				displayName: 'Filter by Group ID',
				name: 'filter_id',
				type: 'number',
				default: '',
				description: 'Filter by specific group ID',
				routing: {
					request: {
						qs: {
							'filter[id]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Group Name',
				name: 'filter_name',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							'filter[name]': '={{ $value }}',
						},
					},
				},
			},
		],
	},
];




