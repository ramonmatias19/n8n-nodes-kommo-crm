import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAnalyzeLead = {
	operation: ['analyzeLead'],
	resource: ['ai'],
};

export const aiAnalyzeLeadDescription: INodeProperties[] = [
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForAnalyzeLead,
		},
		default: 0,
		description: 'The ID of the lead to analyze',
	},
	{
		displayName: 'Analysis Type',
		name: 'analysisType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForAnalyzeLead,
		},
		options: [
			{
				name: 'General Analysis',
				value: 'general',
			},
			{
				name: 'Scoring',
				value: 'scoring',
			},
			{
				name: 'Prediction',
				value: 'prediction',
			},
			{
				name: 'Insights',
				value: 'insights',
			},
		],
		default: 'general',
		description: 'The type of AI analysis to perform',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForAnalyzeLead,
		},
		options: [
			{
				displayName: 'Include Historical Data',
				name: 'includeHistory',
				type: 'boolean',
				default: false,
				description: 'Whether to include historical data in the analysis',
			},
			{
				displayName: 'Focus Areas',
				name: 'focusAreas',
				type: 'multiOptions',
				default: [],
				description: 'Specific areas to focus the analysis on',
				options: [
					{ name: 'Budget', value: 'budget' },
					{ name: 'Timeline', value: 'timeline' },
					{ name: 'Requirements', value: 'requirements' },
					{ name: 'Competition', value: 'competition' },
					{ name: 'Pain Points', value: 'pain_points' },
				],
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				default: 'en',
				description: 'Language for the analysis response',
				options: [
					{ name: 'English', value: 'en' },
					{ name: 'Portuguese', value: 'pt' },
					{ name: 'Spanish', value: 'es' },
					{ name: 'French', value: 'fr' },
				],
			},
		],
	},
	{
		displayName: 'Body Parameters',
		name: 'bodyParameters',
		type: 'hidden',
		displayOptions: {
			show: showOnlyForAnalyzeLead,
		},
		default: {},
		routing: {
			request: {
				body: {
					lead_id: '={{ $parameter.leadId }}',
					analysis_type: '={{ $parameter.analysisType }}',
					include_history: '={{ $parameter.additionalFields.includeHistory || false }}',
					focus_areas: '={{ $parameter.additionalFields.focusAreas || [] }}',
					language: '={{ $parameter.additionalFields.language || "en" }}',
				},
			},
		},
	},
];
