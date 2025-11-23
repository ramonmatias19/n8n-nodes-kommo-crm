import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadGet = {
	operation: ['get'],
	resource: ['lead'],
};

export const leadGetDescription: INodeProperties[] = [
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		displayOptions: { show: showOnlyForLeadGet },
		default: '',
		description: 'The lead\'s ID to retrieve',
		required: true,
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForLeadGet,
		},
		options: [
			{
				displayName: 'With',
				name: 'with',
				type: 'multiOptions',
				options: [
					{
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'Loss Reason',
						value: 'loss_reason',
					},
					{
						name: 'Catalog Elements',
						value: 'catalog_elements',
					},
					{
						name: 'Source',
						value: 'source',
					},
				],
				default: [],
				description: 'Additional data to include in the response',
			},
		],
	},
];
