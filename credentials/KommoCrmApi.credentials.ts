import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KommoCrmApi implements ICredentialType {
	name = 'kommoCrmApi';

	displayName = 'Kommo Crm API';

	icon = undefined;

	// Link to your community node's README
	documentationUrl = 'https://developers.kommo.com/reference/account-parameters';

	properties: INodeProperties[] = [
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			required: true,
			default: '',
			description: 'Your Kommo CRM subdomain (e.g., yourcompany)',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{`https://${$credentials.subdomain}.kommo.com/api/v4`}}',
			url: '/account',
		},
	};
}