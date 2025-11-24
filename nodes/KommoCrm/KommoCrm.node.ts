import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';
import { leadDescription } from './resources/lead';
import { contactDescription } from './resources/contact';
import { taskDescription } from './resources/task';
import { noteDescription } from './resources/notes';
import { webhookDescription } from './resources/webhook';
import { eventDescription } from './resources/event';
import { tagDescription } from './resources/tag';
import { fileDescription } from './resources/file';
import { customFieldDescription } from './resources/customField';
import { pipelineDescription } from './resources/pipeline';
import { sourceDescription } from './resources/source';
import { listDescription } from './resources/list';
import { templateDescription } from './resources/template';
import { incomingLeadDescription } from './resources/incomingLead';

export class KommoCrm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Kommo Crm',
		name: 'kommoCrm',
		icon: { light: 'file:kommoCrm.svg', dark: 'file:kommoCrm.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Kommo Crm API',
		defaults: {
			name: 'Kommo Crm',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'kommoCrmApi', required: true }],
		requestDefaults: {
			baseURL: '={{`https://${$credentials.subdomain}.kommo.com/api/v4`}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Custom Field',
						value: 'customField',
					},
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'File',
						value: 'file',
					},
					{
						name: 'Incoming Lead',
						value: 'incomingLead',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'List',
						value: 'list',
					},
					{
						name: 'Note',
						value: 'note',
					},
					{
						name: 'Pipeline',
						value: 'pipeline',
					},
					{
						name: 'Source',
						value: 'source',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Template',
						value: 'template',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
				],
				default: 'user',
			},
			...companyDescription,
			...contactDescription,
			...customFieldDescription,
			...eventDescription,
			...fileDescription,
			...incomingLeadDescription,
			...leadDescription,
			...listDescription,
			...noteDescription,
			...pipelineDescription,
			...sourceDescription,
			...tagDescription,
			...taskDescription,
			...templateDescription,
			...userDescription,
			...webhookDescription,
		],
	};
}
