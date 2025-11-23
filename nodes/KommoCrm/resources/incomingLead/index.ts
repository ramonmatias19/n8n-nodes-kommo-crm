import type { INodeProperties } from 'n8n-workflow';
import { incomingLeadGetAllDescription } from './getAll';
import { incomingLeadCreateDescription } from './create';
import { incomingLeadAcceptDescription } from './accept';
import { incomingLeadDeclineDescription } from './decline';

const showOnlyForIncomingLeads = {
	resource: ['incomingLead'],
};

export const incomingLeadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForIncomingLeads,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get incoming leads',
				description: 'Get many incoming leads',
				routing: {
					request: {
						method: 'GET',
						url: '=/leads/unsorted',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an incoming lead',
				description: 'Create a new incoming lead (forms or sip types only)',
				routing: {
					request: {
						method: 'POST',
						url: '=/leads/unsorted',
					},
				},
			},
			{
				name: 'Accept',
				value: 'accept',
				action: 'Accept an incoming lead',
				description: 'Accept an incoming lead and convert to regular lead',
				routing: {
					request: {
						method: 'POST',
						url: '=/leads/unsorted/{{$parameter.incomingLeadId}}/accept',
					},
				},
			},
			{
				name: 'Decline',
				value: 'decline',
				action: 'Decline an incoming lead',
				description: 'Decline an incoming lead',
				routing: {
					request: {
						method: 'POST',
						url: '=/leads/unsorted/{{$parameter.incomingLeadId}}/decline',
					},
				},
			},
		],
		default: 'getAll',
	},
	...incomingLeadGetAllDescription,
	...incomingLeadCreateDescription,
	...incomingLeadAcceptDescription,
	...incomingLeadDeclineDescription,
];