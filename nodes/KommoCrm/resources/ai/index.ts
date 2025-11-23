import type { INodeProperties } from 'n8n-workflow';
import { aiAnalyzeLeadDescription } from './analyzeLead';
import { aiGenerateSuggestionsDescription } from './generateSuggestions';

const showOnlyForAI = {
	resource: ['ai'],
};

export const aiDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAI,
		},
		options: [
			{
				name: 'Analyze Lead',
				value: 'analyzeLead',
				action: 'Analyze a lead using AI',
				description: 'Use AI to analyze lead data and provide insights',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/ai/lead/analyze',
					},
				},
			},
			{
				name: 'Generate Suggestions',
				value: 'generateSuggestions',
				action: 'Generate AI suggestions',
				description: 'Generate AI-powered suggestions for leads or tasks',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v4/ai/suggestions',
					},
				},
			},
		],
		default: 'analyzeLead',
	},
	...aiAnalyzeLeadDescription,
	...aiGenerateSuggestionsDescription,
];
