import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIncomingLeadDecline = {
	operation: ['decline'],
	resource: ['incomingLead'],
};

export const incomingLeadDeclineDescription: INodeProperties[] = [
	{
		displayName: 'Incoming Lead ID',
		name: 'incomingLeadId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForIncomingLeadDecline,
		},
		default: '',
		description: 'ID of the incoming lead to decline',
	},
];