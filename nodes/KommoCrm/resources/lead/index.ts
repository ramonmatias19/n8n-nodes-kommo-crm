import type { INodeProperties } from 'n8n-workflow';
import { leadGetDescription } from './get';
import { leadGetAllDescription } from './getAll';
import { leadCreateDescription } from './create';
import { leadUpdateDescription } from './update';

const showOnlyForLeads = {
	resource: ['lead'],
};

export const leadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLeads,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get leads',
				description: 'Get many leads',
				routing: {
					request: {
						method: 'GET',
						url: '/leads',
						qs: {
							limit: '={{ $parameter.returnAll ? 250 : $parameter.limit }}',
							page: '={{ $parameter.options.page || 1 }}',
							query: '={{ $parameter.options.query }}',
							with: '={{ $parameter.options.with?.join(",") }}',
							'order[created_at]': '={{ $parameter.options.order?.created_at }}',
							'order[updated_at]': '={{ $parameter.options.order?.updated_at }}',
							'order[id]': '={{ $parameter.options.order?.id }}',
							'filter[id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.id) }}',
							'filter[name][]': '={{ $parameter.options.filter?.name?.split(",").map(name => name.trim()) }}',
							'filter[price]': '={{ $parameter.options.filter?.price }}',
							'filter[responsible_user_id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.responsible_user_id) }}',
							'filter[created_at][from]': '={{ $parameter.options.filter?.created_at_from ? toUnixTimestamp($parameter.options.filter.created_at_from) : undefined }}',
							'filter[created_at][to]': '={{ $parameter.options.filter?.created_at_to ? toUnixTimestamp($parameter.options.filter.created_at_to) : undefined }}',
							'filter[updated_at][from]': '={{ $parameter.options.filter?.updated_at_from ? toUnixTimestamp($parameter.options.filter.updated_at_from) : undefined }}',
							'filter[updated_at][to]': '={{ $parameter.options.filter?.updated_at_to ? toUnixTimestamp($parameter.options.filter.updated_at_to) : undefined }}',
							'filter[closed_at][from]': '={{ $parameter.options.filter?.closed_at_from ? toUnixTimestamp($parameter.options.filter.closed_at_from) : undefined }}',
							'filter[closed_at][to]': '={{ $parameter.options.filter?.closed_at_to ? toUnixTimestamp($parameter.options.filter.closed_at_to) : undefined }}',
							'filter[closest_task_at][from]': '={{ $parameter.options.filter?.closest_task_at_from ? toUnixTimestamp($parameter.options.filter.closest_task_at_from) : undefined }}',
							'filter[closest_task_at][to]': '={{ $parameter.options.filter?.closest_task_at_to ? toUnixTimestamp($parameter.options.filter.closest_task_at_to) : undefined }}',
							'filter[pipeline_id][]': '={{ parseCommaSeparatedArray($parameter.options.filter?.pipeline_id) }}',
							'filter[statuses][0][pipeline_id]': '={{ $parameter.options.filter?.status_pipeline_id }}',
							'filter[statuses][0][status_id]': '={{ $parameter.options.filter?.status_filter_id }}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead',
				description: 'Get the data of a single lead',
				routing: {
					request: {
						method: 'GET',
						url: '=/leads/{{$parameter.leadId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new lead',
				description: 'Create a new lead',
				routing: {
					request: {
						method: 'POST',
						url: '/leads',
						body: '={{ [{name: $parameter.name, ...$parameter.additionalFields}] }}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a lead',
				description: 'Update an existing lead',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/leads/{{$parameter.leadId}}',
						body: '={{ $parameter.updateFields }}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...leadGetAllDescription,
	...leadGetDescription,
	...leadCreateDescription,
	...leadUpdateDescription,
];

