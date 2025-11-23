import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTagDetach = {
	operation: ['detach'],
	resource: ['tag'],
};

export const tagDetachDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForTagDetach,
		},
		default: 0,
		description: 'The ID of the entity (lead/contact/company) to detach tags from',
	},
	{
		displayName: 'Tags to Detach',
		name: 'tagsToDetach',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForTagDetach,
		},
		default: '',
		description: 'Comma-separated list of tag names or IDs to detach from the entity',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForTagDetach,
		},
		options: [
			{
				displayName: 'Use Tag IDs',
				name: 'useTagIds',
				type: 'boolean',
				default: false,
				description: 'Whether the tags are provided as IDs instead of names',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForTagDetach,
		},
		default: {},
		routing: {
			request: {
				body: {
					'tags_to_delete': '={{ $parameter.tagsToDetach.split(",").map(tag => tag.trim()).map(tag => $parameter.additionalFields.useTagIds ? { id: parseInt(tag) } : { name: tag }) }}',
				},
			},
		},
	},
];
