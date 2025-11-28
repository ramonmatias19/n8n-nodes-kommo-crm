import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTagAttach = {
	operation: ['attach'],
	resource: ['tag'],
};

export const tagAttachDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForTagAttach,
		},
		default: 0,
		description: 'The ID of the entity (lead/contact/company) to attach tags to',
	},
	{
		displayName: 'Tags to Attach',
		name: 'tagsToAttach',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForTagAttach,
		},
		default: '',
		description: 'Comma-separated list of tag names or IDs to attach to the entity',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForTagAttach,
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
			show: showOnlyForTagAttach,
		},
		default: {},
		routing: {
			request: {
				body: {
					'tags_to_add': '={{ $parameter.tagsToAttach.split(",").map(tag => tag.trim()).map(tag => $parameter.additionalFields.useTagIds ? { id: parseInt(tag) } : { name: tag }) }}',
				},
			},
		},
	},
];




