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
						name: 'Catalog Elements',
						value: 'catalog_elements',
					},
					{
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'Is Price Modified by Robot',
						value: 'is_price_modified_by_robot',
					},
					{
						name: 'Loss Reason',
						value: 'loss_reason',
					},
					{
						name: 'Only Deleted',
						value: 'only_deleted',
					},
					{
						name: 'Source',
						value: 'source',
					},
					{
						name: 'Source ID',
						value: 'source_id',
					},
				],
				default: [],
				description: 'Additional data to include in the response',
			},
		],
	},
];

