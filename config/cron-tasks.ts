import type { Core } from '@strapi/strapi';

const CRON_STRAPI_UID = 'api::cron-strapi.cron-strapi';
const DEFAULT_TIMEZONE = 'Asia/Taipei';
const CRON_MINUTE = 11;
const ODD_HOUR_RULE = `0 ${CRON_MINUTE} 1-23/2 * * *`;
const EVEN_HOUR_RULE = `0 ${CRON_MINUTE} 0-22/2 * * *`;
const CRON_CREATED_ACTION = 'created-by-odd-hour-cron';

type CronContext = {
  strapi: Core.Strapi;
};

const getTimezone = () => process.env.CRON_STRAPI_TIMEZONE || DEFAULT_TIMEZONE;

const getClockParts = (date = new Date(), timezone = getTimezone()) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).formatToParts(date);

  return {
    hour: Number(parts.find((part) => part.type === 'hour')?.value || 0),
    minute: Number(parts.find((part) => part.type === 'minute')?.value || 0),
  };
};

const cronStrapiRecordData = (runAt = new Date()) => {
  const timezone = getTimezone();
  const { hour, minute } = getClockParts(runAt, timezone);

  return {
    name: `CronStrapi ${runAt.toISOString()}`,
    action: CRON_CREATED_ACTION,
    runAt,
    hour,
    minute,
    timezone,
    createdByCron: true,
    note: 'Created automatically at minute 11 of an odd hour.',
  };
};

const createCronStrapiRecord = async ({ strapi }: CronContext) => {
  const now = new Date();

  await strapi.db.query(CRON_STRAPI_UID).create({
    data: cronStrapiRecordData(now),
  });

  strapi.log.info(`[CronStrapi] Created one record at ${now.toISOString()}`);
};

const deleteLatestCronStrapiRecord = async ({ strapi }: CronContext) => {
  const latest = await strapi.db.query(CRON_STRAPI_UID).findOne({
    where: {
      createdByCron: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!latest) {
    strapi.log.info('[CronStrapi] No cron-created record to delete.');
    return;
  }

  await strapi.db.query(CRON_STRAPI_UID).delete({
    where: {
      id: latest.id,
    },
  });

  strapi.log.info(`[CronStrapi] Deleted cron-created record id=${latest.id}`);
};

export default {
  createCronStrapiRecordOnOddHour: {
    task: createCronStrapiRecord,
    options: {
      rule: ODD_HOUR_RULE,
      tz: getTimezone(),
    },
  },
  deleteLatestCronStrapiRecordOnEvenHour: {
    task: deleteLatestCronStrapiRecord,
    options: {
      rule: EVEN_HOUR_RULE,
      tz: getTimezone(),
    },
  },
};
