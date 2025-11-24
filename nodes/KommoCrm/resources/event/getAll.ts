import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventGetAll = {
	operation: ['getAll'],
	resource: ['event'],
};

export const eventGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForEventGetAll,
		},
		options: [
			{
				displayName: 'Filter by Created From',
				name: 'filter_created_at_from',
				type: 'dateTime',
				default: '',
				description: 'Filter events created from this date (Unix timestamp)',
				routing: {
					request: {
						qs: {
							filter: {
								created_at: {
									from: '={{ Math.floor(new Date($value).getTime() / 1000) }}',
								},
							},
						},
					},
				},
			},
			{
				displayName: 'Filter by Created To',
				name: 'filter_created_at_to',
				type: 'dateTime',
				default: '',
				description: 'Filter events created until this date (Unix timestamp)',
				routing: {
					request: {
						qs: {
							filter: {
								created_at: {
									to: '={{ Math.floor(new Date($value).getTime() / 1000) }}',
								},
							},
						},
					},
				},
			},
			{
				displayName: 'Filter by Custom Field ID',
				name: 'filter_custom_field_id',
				type: 'number',
				default: '',
				description: 'Filter by custom field ID for field value change events',
			},
			{
				displayName: 'Filter by Custom Field Value',
				name: 'filter_custom_field_value',
				type: 'string',
				default: '',
				description: 'Filter by custom field value for field value change events',
				routing: {
					request: {
						qs: {
							'filter[value_after][value]': '={{ $value }}',
							'filter[type]': '={{ "custom_field_" + $parameter.filter_custom_field_id + "_value_changed" }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Entity ID',
				name: 'filter_entity_id',
				type: 'number',
				default: '',
				description: 'Filter events by entity ID',
				routing: {
					request: {
						qs: {
							filter: {
								entity_id: '={{ $value }}',
							},
						},
					},
				},
			},
			{
				displayName: 'Filter by Event Type',
				name: 'filter_type',
				type: 'multiOptions',
				default: [],
				description: 'Filter events by type',
				options: [
					{ name: 'AI Result', value: 'ai_result' },
					{ name: 'Attachment Note Added', value: 'attachment_note_added' },
					{ name: 'Common Note Added', value: 'common_note_added' },
					{ name: 'Common Note Deleted', value: 'common_note_deleted' },
					{ name: 'Company Added', value: 'company_added' },
					{ name: 'Company Deleted', value: 'company_deleted' },
					{ name: 'Company Linked', value: 'company_linked' },
					{ name: 'Company Restored', value: 'company_restored' },
					{ name: 'Company Unlinked', value: 'company_unlinked' },
					{ name: 'Contact Added', value: 'contact_added' },
					{ name: 'Contact Deleted', value: 'contact_deleted' },
					{ name: 'Contact Linked', value: 'contact_linked' },
					{ name: 'Contact Restored', value: 'contact_restored' },
					{ name: 'Contact Unlinked', value: 'contact_unlinked' },
					{ name: 'Conversation Answered', value: 'conversation_answered' },
					{ name: 'Custom Field Value Changed', value: 'custom_field_value_changed' },
					{ name: 'Dropbox Attachment', value: 'dropbox_attachment' },
					{ name: 'Entity Direct Message', value: 'entity_direct_message' },
					{ name: 'Entity Linked', value: 'entity_linked' },
					{ name: 'Entity Merged', value: 'entity_merged' },
					{ name: 'Entity Responsible Changed', value: 'entity_responsible_changed' },
					{ name: 'Entity Tag Added', value: 'entity_tag_added' },
					{ name: 'Entity Tag Deleted', value: 'entity_tag_deleted' },
					{ name: 'Entity Unlinked', value: 'entity_unlinked' },
					{ name: 'Geo Note Added', value: 'geo_note_added' },
					{ name: 'Incoming Call', value: 'incoming_call' },
					{ name: 'Incoming Chat Message', value: 'incoming_chat_message' },
					{ name: 'Incoming Mail', value: 'incoming_mail' },
					{ name: 'Incoming SMS', value: 'incoming_sms' },
					{ name: 'Intent Identified', value: 'intent_identified' },
					{ name: 'Key Action Completed', value: 'key_action_completed' },
					{ name: 'Lead Added', value: 'lead_added' },
					{ name: 'Lead Deleted', value: 'lead_deleted' },
					{ name: 'Lead Linked', value: 'lead_linked' },
					{ name: 'Lead Restored', value: 'lead_restored' },
					{ name: 'Lead Status Changed', value: 'lead_status_changed' },
					{ name: 'Lead Unlinked', value: 'lead_unlinked' },
					{ name: 'Link Followed', value: 'link_followed' },
					{ name: 'LTV Field Changed', value: 'ltv_field_changed' },
					{ name: 'Meta Chat Subscription Added', value: 'meta_chat_subscription_added' },
					{ name: 'Meta Chat Subscription Removed', value: 'meta_chat_subscription_removed' },
					{ name: 'Name Field Changed', value: 'name_field_changed' },
					{ name: 'NPS Rate Added', value: 'nps_rate_added' },
					{ name: 'Outgoing Call', value: 'outgoing_call' },
					{ name: 'Outgoing Chat Message', value: 'outgoing_chat_message' },
					{ name: 'Outgoing Mail', value: 'outgoing_mail' },
					{ name: 'Outgoing SMS', value: 'outgoing_sms' },
					{ name: 'Page Mention', value: 'page_mention' },
					{ name: 'Picture Closed', value: 'picture_closed' },
					{ name: 'Picture Opened', value: 'picture_opened' },
					{ name: 'Robot Replied', value: 'robot_replied' },
					{ name: 'Sale Field Changed', value: 'sale_field_changed' },
					{ name: 'Service Note Added', value: 'service_note_added' },
					{ name: 'Site Visit Note Added', value: 'site_visit_note_added' },
					{ name: 'Talk Closed', value: 'talk_closed' },
					{ name: 'Talk Created', value: 'talk_created' },
					{ name: 'Talk Missed Event', value: 'talk_missed_event' },
					{ name: 'Targeting In Note Added', value: 'targeting_in_note_added' },
					{ name: 'Targeting Out Note Added', value: 'targeting_out_note_added' },
					{ name: 'Task Added', value: 'task_added' },
					{ name: 'Task Completed', value: 'task_completed' },
					{ name: 'Task Deadline Changed', value: 'task_deadline_changed' },
					{ name: 'Task Deleted', value: 'task_deleted' },
					{ name: 'Task Result Added', value: 'task_result_added' },
					{ name: 'Task Text Changed', value: 'task_text_changed' },
					{ name: 'Task Type Changed', value: 'task_type_changed' },
					{ name: 'Video Closed', value: 'video_closed' },
					{ name: 'Video Opened', value: 'video_opened' },
					{ name: 'Zoom Conference', value: 'zoom_conference' },
				],
				routing: {
					request: {
						qs: {
							filter: {
								type: '={{ $value }}',
							},
						},
					},
				},
			},
			{
				displayName: 'Filter by Lead Status ID',
				name: 'filter_lead_status_id',
				type: 'number',
				default: '',
				description: 'Filter by status ID for lead status changes',
				routing: {
					request: {
						qs: {
							'filter[value_after][leads_statuses][0][status_id]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Lead Status Pipeline ID',
				name: 'filter_lead_status_pipeline_id',
				type: 'number',
				default: '',
				description: 'Filter by pipeline ID for lead status changes',
				routing: {
					request: {
						qs: {
							'filter[value_after][leads_statuses][0][pipeline_id]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by NPS Rate',
				name: 'filter_nps_rate',
				type: 'number',
				default: '',
				description: 'Filter by NPS rate value (1-10) for nps_rate_added events',
				routing: {
					request: {
						qs: {
							'filter[value_after][value]': '={{ $value }}',
							'filter[type]': 'nps_rate_added',
						},
					},
				},
			},
			{
				displayName: 'Filter by Responsible User ID',
				name: 'filter_responsible_user_id',
				type: 'number',
				default: '',
				description: 'Filter by responsible user ID (for entity_responsible_changed events)',
				routing: {
					request: {
						qs: {
							'filter[value_after][responsible_user_id]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Sale Amount',
				name: 'filter_sale_amount',
				type: 'number',
				default: '',
				description: 'Filter by sale amount for sale_field_changed events',
				routing: {
					request: {
						qs: {
							'filter[value_after][value]': '={{ $value }}',
							'filter[type]': 'sale_field_changed',
							'filter[entity]': 'lead',
						},
					},
				},
			},
			{
				displayName: 'Filter by Value After',
				name: 'filter_value_after',
				type: 'string',
				default: '',
				description: 'Filter by value after change (for specific event types)',
				routing: {
					request: {
						qs: {
							'filter[value_after]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Filter by Value Before',
				name: 'filter_value_before',
				type: 'string',
				default: '',
				description: 'Filter by value before change (for specific event types)',
				routing: {
					request: {
						qs: {
							'filter[value_before]': '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					request: {
						qs: {
							limit: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'The page number to return',
				routing: {
					request: {
						qs: {
							page: '={{ $value }}',
						},
					},
				},
			},
		],
	},
];
