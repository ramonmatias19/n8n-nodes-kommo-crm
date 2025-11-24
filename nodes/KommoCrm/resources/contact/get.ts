import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactGet = {
	operation: ['get'],
	resource: ['contact'],
};

export const contactGetDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		displayOptions: { show: showOnlyForContactGet },
		default: '',
		description: 'The contact\'s ID to retrieve',
		required: true,
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForContactGet,
		},
		options: [
			{
				displayName: 'With',
				name: 'with',
				type: 'multiOptions',
				options: [
					{
						name: 'Leads',
						value: 'leads',
					},
					{
						name: 'Catalog Elements',
						value: 'catalog_elements',
					},
				],
				default: [],
				description: 'Additional data to include in the response',
			},
		],
	},
];

