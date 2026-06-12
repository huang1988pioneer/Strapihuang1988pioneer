const CRON_STRAPI_UID = 'api::cron-strapi.cron-strapi';
const DEFAULT_TIMEZONE = 'Asia/Taipei';

type CronContext = {
  strapi: any;
};

const getTimezone = () => process.env.CRON_STRAPI_TIMEZONE || DEFAULT_TIMEZONE;

const getTaipeiParts = (date = new Date(), timezone = getTimezone()) => {
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

const createCronStrapiRecord = async ({ strapi }: CronContext) => {
  const now = new Date();
  const timezone = getTimezone();
  const { hour, minute } = getTaipeiParts(now, timezone);

  await strapi.db.query(CRON_STRAPI_UID).create({
    data: {
      name: `CronStrapi ${now.toISOString()}`,
      action: 'created-by-odd-hour-cron',
      runAt: now,
      hour,
      minute,
      timezone,
      createdByCron: true,
      note: 'Created automatically at minute 11 of an odd hour.',
    },
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
      rule: '0 11 1-23/2 * * *',
      tz: getTimezone(),
    },
  },
  deleteLatestCronStrapiRecordOnEvenHour: {
    task: deleteLatestCronStrapiRecord,
    options: {
      rule: '0 11 0-22/2 * * *',
      tz: getTimezone(),
    },
  },
};
