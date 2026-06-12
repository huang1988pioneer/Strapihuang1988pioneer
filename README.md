# Strapihuang1988pioneer Strapi Backend

This repository is a Strapi 5 backend project for Fengbro-style data tables.

## Local Development

```bash
npm install
npm run develop
```

Open the Strapi admin panel:

```text
http://localhost:1337/admin
```

The first time you open the admin panel, create the first local administrator account.

## Content Types

The backend tables are defined as Strapi collection types under `src/api`.

- `article`
- `bank`
- `commonaccount`
- `cron-strapi`
- `commondocument`
- `food`
- `image`
- `music`
- `podcast`
- `routine`
- `subscription`
- `video`
- `landtophistory`
- `push-subscription`
- `resend-notification-log`
- `setting`
- `tool-price-history`

The content type definitions are generated from `scripts/generate-content-types.mjs`.

## CronStrapi Schedule

`config/cron-tasks.ts` enables two Strapi cron jobs:

- Odd hours at minute 11: create one `cron-strapi` record.
- Even hours at minute 11: delete the latest cron-created `cron-strapi` record.

The default cron timezone is `Asia/Taipei`. Override it with:

```bash
CRON_STRAPI_TIMEZONE=Asia/Taipei
```

## Reference Projects

The table fields were adapted from:

- `goldshoot0720/fengbroaiappwrite`
- `goldshoot0720/fengbroaisupabase`
- `goldshoot0720/fengbroailaravel`
- `strapi/strapi`
