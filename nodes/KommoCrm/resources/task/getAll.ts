import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskGetAll = {
	operation: ['getAll'],
	resource: ['task'],
};

export const taskGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
		typeOptions: {
			minValue: 1,
			maxValue: 250,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				options: [
					{
						displayName: 'Entity ID',
						name: 'entity_id',
						type: 'string',
						default: '',
						description: 'Filter by entity ID(s) - comma-separated',
					},
					{
						displayName: 'Entity Type',
						name: 'entity_type',
						type: 'options',
						options: [
							{
								name: 'Lead',
								value: 'leads',
							},
							{
								name: 'Contact',
								value: 'contacts',
							},
							{
								name: 'Company',
								value: 'companies',
							},
						],
						default: 'leads',
						description: 'Filter by entity type',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'Filter by task ID(s) - comma-separated',
					},
					{
						displayName: 'Is Completed',
						name: 'is_completed',
						type: 'options',
						options: [
							{
								name: 'Completed',
								value: '1',
							},
							{
								name: 'Not Completed',
								value: '0',
							},
						],
						default: '0',
						description: 'Filter by completion status',
					},
					{
						displayName: 'Responsible User ID',
						name: 'responsible_user_id',
						type: 'string',
						default: '',
						description: 'Filter by responsible user ID(s) - comma-separated',
					},
					{
						displayName: 'Task Type ID',
						name: 'task_type_id',
						type: 'string',
						default: '',
						description: 'Filter by task type ID(s) - comma-separated',
					},
				],
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'collection',
				placeholder: 'Add Order',
				default: {},
				options: [
					{
						displayName: 'Created At',
						name: 'created_at',
						type: 'options',
						options: [
							{
								name: 'ASC',
								value: 'asc',
							},
							{
								name: 'DESC',
								value: 'desc',
							},
						],
						default: 'desc',
					},
					{
						displayName: 'Updated At',
						name: 'updated_at',
						type: 'options',
						options: [
							{
								name: 'ASC',
								value: 'asc',
							},
							{
								name: 'DESC',
								value: 'desc',
							},
						],
						default: 'desc',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'options',
						options: [
							{
								name: 'ASC',
								value: 'asc',
							},
							{
								name: 'DESC',
								value: 'desc',
							},
						],
						default: 'desc',
					},
				],
			},
		],
	},
];
