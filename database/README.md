# Database tables

This folder contains the table setup for `Strapihuang1988pioneer`.

The schema was built from the three reference projects:

- `goldshoot0720/fengbroaiappwrite`
- `goldshoot0720/fengbroaisupabase`
- `goldshoot0720/fengbroailaravel`

## Supabase / PostgreSQL

Run `supabase-schema.sql` in the Supabase SQL editor.

It creates the app tables used by the reference projects:

- `article`
- `bank`
- `commonaccount`
- `commondocument`
- `food`
- `image`
- `music`
- `podcast`
- `routine`
- `subscription`
- `video`
- `landtophistory`
- `push_subscriptions`
- `resend_notification_log`
- `settings`
- `tool_price_history`

The table names intentionally match the Supabase composables from `fengbroaisupabase`, which use singular names such as `bank`, `subscription`, and `commonaccount`.

## Notes

- Primary keys use UUIDs with `gen_random_uuid()` for compatibility with imported Appwrite-style IDs.
- Tables with `updated_at` get an automatic update trigger.
- Subscription includes both the original required fields and the richer Appwrite fields: `category`, `purpose`, `usagefrequency`, `friendliness`, `alternative`, `retentionrecommendation`, and `archived`.
