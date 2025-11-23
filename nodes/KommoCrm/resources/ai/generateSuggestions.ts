import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGenerateSuggestions = {
	operation: ['generateSuggestions'],
	resource: ['ai'],
};

export const aiGenerateSuggestionsDescription: INodeProperties[] = [
	{
		displayName: 'Suggestion Type',
		name: 'suggestionType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForGenerateSuggestions,
		},
		options: [
			{
				name: 'Deal Strategy',
				value: 'deal_strategy',
			},
			{
				name: 'Email Content',
				value: 'email_content',
			},
			{
				name: 'Lead Follow-Up',
				value: 'lead_followup',
			},
			{
				name: 'Meeting Preparation',
				value: 'meeting_prep',
			},
			{
				name: 'Task Priority',
				value: 'task_priority',
			},
		],
		default: 'lead_followup',
		description: 'The type of AI suggestions to generate',
	},
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForGenerateSuggestions,
		},
		options: [
			{
				name: 'Lead',
				value: 'lead',
			},
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Company',
				value: 'company',
			},
		],
		default: 'lead',
		description: 'The type of entity to generate suggestions for',
	},
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForGenerateSuggestions,
		},
		default: 0,
		description: 'The ID of the entity to generate suggestions for',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForGenerateSuggestions,
		},
		options: [
			{
				displayName: 'Context',
				name: 'context',
				type: 'string',
				default: '',
				description: 'Additional context for generating suggestions',
			},
			{
				displayName: 'Tone',
				name: 'tone',
				type: 'options',
				default: 'professional',
				description: 'Tone for the suggestions',
				options: [
					{ name: 'Professional', value: 'professional' },
					{ name: 'Friendly', value: 'friendly' },
					{ name: 'Formal', value: 'formal' },
					{ name: 'Casual', value: 'casual' },
				],
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				default: 'en',
				description: 'Language for the suggestions',
				options: [
					{ name: 'English', value: 'en' },
					{ name: 'Portuguese', value: 'pt' },
					{ name: 'Spanish', value: 'es' },
					{ name: 'French', value: 'fr' },
				],
			},
			{
				displayName: 'Max Suggestions',
				name: 'maxSuggestions',
				type: 'number',
				default: 3,
				description: 'Maximum number of suggestions to generate',
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForGenerateSuggestions,
		},
		default: {},
		routing: {
			request: {
				body: {
					suggestion_type: '={{ $parameter.suggestionType }}',
					entity_type: '={{ $parameter.entityType }}',
					entity_id: '={{ $parameter.entityId }}',
					context: '={{ $parameter.additionalFields.context || "" }}',
					tone: '={{ $parameter.additionalFields.tone || "professional" }}',
					language: '={{ $parameter.additionalFields.language || "en" }}',
					max_suggestions: '={{ $parameter.additionalFields.maxSuggestions || 3 }}',
				},
			},
		},
	},
];
