import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const API_ROOT = join('src', 'api');
const CORE_LAYERS = ['controllers', 'routes', 'services'];

const contentTypes = [
  {
    name: 'article',
    displayName: 'Article',
    pluralName: 'articles',
    collectionName: 'articles',
    attributes: {
      title: { type: 'string', required: true, maxLength: 100 },
      content: { type: 'text' },
      category: { type: 'string', maxLength: 100 },
      ref: { type: 'string', maxLength: 100 },
      newdate: { type: 'datetime' },
      url1: { type: 'text' },
      url2: { type: 'text' },
      url3: { type: 'text' },
      file1: { type: 'string', maxLength: 150 },
      file1name: { type: 'string', maxLength: 100 },
      file1type: { type: 'string', maxLength: 20 },
      file2: { type: 'string', maxLength: 150 },
      file2name: { type: 'string', maxLength: 100 },
      file2type: { type: 'string', maxLength: 20 },
      file3: { type: 'string', maxLength: 150 },
      file3name: { type: 'string', maxLength: 100 },
      file3type: { type: 'string', maxLength: 20 },
    },
  },
  {
    name: 'bank',
    displayName: 'Bank',
    pluralName: 'banks',
    collectionName: 'banks',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      deposit: { type: 'integer', default: 0 },
      site: { type: 'text' },
      address: { type: 'string', maxLength: 100 },
      withdrawals: { type: 'integer', default: 0 },
      transfer: { type: 'integer', default: 0 },
      activity: { type: 'text' },
      card: { type: 'string', maxLength: 100 },
      account: { type: 'string', maxLength: 100 },
    },
  },
  {
    name: 'commonaccount',
    displayName: 'Common Account',
    pluralName: 'commonaccounts',
    collectionName: 'commonaccounts',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      ...numberedAttributes('site', 37, { type: 'string', maxLength: 100 }),
      ...numberedAttributes('note', 37, { type: 'string', maxLength: 100 }),
      photohash: { type: 'string', maxLength: 256 },
    },
  },
  {
    name: 'cron-strapi',
    displayName: 'CronStrapi',
    pluralName: 'cron-strapis',
    collectionName: 'cron_strapis',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      action: {
        type: 'enumeration',
        enum: ['created-by-odd-hour-cron'],
        default: 'created-by-odd-hour-cron',
        required: true,
      },
      runAt: { type: 'datetime', required: true },
      hour: { type: 'integer', required: true },
      minute: { type: 'integer', required: true, default: 11 },
      timezone: { type: 'string', required: true, default: 'Asia/Taipei', maxLength: 64 },
      createdByCron: { type: 'boolean', required: true, default: true },
      note: { type: 'text' },
    },
  },
  {
    name: 'commondocument',
    displayName: 'Common Document',
    pluralName: 'commondocuments',
    collectionName: 'commondocuments',
    attributes: mediaAttributes({ includeFileType: true }),
  },
  {
    name: 'food',
    displayName: 'Food',
    pluralName: 'foods',
    collectionName: 'foods',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      amount: { type: 'integer', default: 0 },
      price: { type: 'integer', default: 0 },
      shop: { type: 'string', maxLength: 100 },
      todate: { type: 'date' },
      photo: { type: 'text' },
      photohash: { type: 'string', maxLength: 256 },
    },
  },
  {
    name: 'image',
    displayName: 'Image',
    pluralName: 'images',
    collectionName: 'images',
    attributes: mediaAttributes({ includeFileType: true }),
  },
  {
    name: 'music',
    displayName: 'Music',
    pluralName: 'music-items',
    collectionName: 'music',
    attributes: {
      ...mediaAttributes({ includeFileType: true }),
      lyrics: { type: 'text' },
      language: { type: 'string', maxLength: 100 },
    },
  },
  {
    name: 'podcast',
    displayName: 'Podcast',
    pluralName: 'podcasts',
    collectionName: 'podcasts',
    attributes: mediaAttributes({ includeFileType: true }),
  },
  {
    name: 'routine',
    displayName: 'Routine',
    pluralName: 'routines',
    collectionName: 'routines',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      note: { type: 'string', maxLength: 100 },
      lastdate1: { type: 'datetime' },
      lastdate2: { type: 'datetime' },
      lastdate3: { type: 'datetime' },
      link: { type: 'text' },
      photo: { type: 'text' },
    },
  },
  {
    name: 'subscription',
    displayName: 'Subscription',
    pluralName: 'subscriptions',
    collectionName: 'subscriptions',
    attributes: {
      name: { type: 'string', required: true, maxLength: 100 },
      site: { type: 'text' },
      account: { type: 'text' },
      price: { type: 'integer' },
      nextdate: { type: 'date' },
      note: { type: 'text' },
      iscontinue: { type: 'boolean', default: true },
      currency: { type: 'string', default: 'TWD' },
      category: { type: 'string', maxLength: 100 },
      purpose: { type: 'string', maxLength: 100 },
      usageFrequency: { type: 'string', maxLength: 50 },
      friendliness: { type: 'string', maxLength: 50 },
      alternative: { type: 'string', maxLength: 200 },
      retentionRecommendation: { type: 'string', maxLength: 50 },
      archived: { type: 'boolean', default: false },
    },
  },
  {
    name: 'video',
    displayName: 'Video',
    pluralName: 'videos',
    collectionName: 'videos',
    attributes: {
      ...mediaAttributes({ includeFileType: true, uniqueName: true }),
      fileSize: { type: 'integer' },
    },
  },
  {
    name: 'landtophistory',
    displayName: 'Landtop History',
    pluralName: 'landtophistories',
    collectionName: 'landtophistories',
    attributes: {
      source: { type: 'string', required: true, maxLength: 20 },
      snapshotKey: { type: 'string', required: true, maxLength: 220 },
      productId: { type: 'string', required: true, maxLength: 180 },
      brand: { type: 'string', required: true, maxLength: 20 },
      name: { type: 'string', required: true, maxLength: 200 },
      sourceUrl: { type: 'text' },
      landtopPrice: { type: 'integer' },
      suggestedPrice: { type: 'integer' },
      snapshotDate: { type: 'datetime', required: true },
    },
  },
  {
    name: 'push-subscription',
    displayName: 'Push Subscription',
    pluralName: 'push-subscriptions',
    collectionName: 'push_subscriptions',
    attributes: {
      endpoint: { type: 'text', required: true, unique: true },
      auth: { type: 'string', required: true, maxLength: 255 },
      p256dh: { type: 'string', required: true, maxLength: 500 },
    },
  },
  {
    name: 'resend-notification-log',
    displayName: 'Resend Notification Log',
    pluralName: 'resend-notification-logs',
    collectionName: 'resend_notification_logs',
    attributes: {
      eventKey: { type: 'string', required: true, unique: true, maxLength: 191 },
      eventType: { type: 'string', required: true, maxLength: 50 },
      tableName: { type: 'string', required: true, maxLength: 50 },
      recordId: { type: 'string', required: true, maxLength: 64 },
      targetDate: { type: 'date', required: true },
      recipientEmail: { type: 'email', required: true, maxLength: 191 },
      sentAt: { type: 'datetime' },
    },
  },
  {
    name: 'setting',
    displayName: 'Setting',
    pluralName: 'settings',
    collectionName: 'settings',
    attributes: {
      userId: { type: 'string' },
      settingKey: { type: 'string', required: true, maxLength: 50 },
      settingValue: { type: 'text' },
    },
  },
  {
    name: 'tool-price-history',
    displayName: 'Tool Price History',
    pluralName: 'tool-price-histories',
    collectionName: 'tool_price_histories',
    attributes: {
      toolType: { type: 'string', required: true, maxLength: 30 },
      queryText: { type: 'string', required: true, maxLength: 500 },
      title: { type: 'string', maxLength: 500 },
      source: { type: 'string', maxLength: 100 },
      currentPrice: { type: 'integer' },
      highPrice: { type: 'integer' },
      lowPrice: { type: 'integer' },
      resultUrl: { type: 'text' },
      notice: { type: 'text' },
    },
  },
];

function mediaAttributes({ includeFileType = false, uniqueName = false } = {}) {
  return {
    name: { type: 'string', required: true, unique: uniqueName, maxLength: 100 },
    file: { type: 'text' },
    ...(includeFileType ? { filetype: { type: 'string', maxLength: 20 } } : {}),
    note: { type: 'text' },
    ref: { type: 'string', maxLength: 300 },
    category: { type: 'string', maxLength: 100 },
    hash: { type: 'string', maxLength: 300 },
    cover: { type: 'text' },
  };
}

function numberedAttributes(prefix, count, definition) {
  return Object.fromEntries(
    Array.from({ length: count }, (_, index) => [
      `${prefix}${String(index + 1).padStart(2, '0')}`,
      definition,
    ]),
  );
}

function schemaFor(contentType) {
  return {
    kind: 'collectionType',
    collectionName: contentType.collectionName,
    info: {
      singularName: contentType.name,
      pluralName: contentType.pluralName,
      displayName: contentType.displayName,
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {},
    attributes: contentType.attributes,
  };
}

function contentTypeBasePath(contentType) {
  return join(API_ROOT, contentType.name);
}

function contentTypeUid(contentType) {
  return `api::${contentType.name}.${contentType.name}`;
}

function coreFactorySource(contentType, layer) {
  const factoryByLayer = {
    controllers: 'createCoreController',
    routes: 'createCoreRouter',
    services: 'createCoreService',
  };

  return `import { factories } from '@strapi/strapi';\n\nexport default factories.${factoryByLayer[layer]}('${contentTypeUid(contentType)}');\n`;
}

async function ensureContentTypeFolders(base) {
  await mkdir(join(base, 'content-types'), { recursive: true });

  for (const layer of CORE_LAYERS) {
    await mkdir(join(base, layer), { recursive: true });
  }
}

async function writeContentType(contentType) {
  const base = contentTypeBasePath(contentType);
  await ensureContentTypeFolders(base);
  await mkdir(join(base, 'content-types', contentType.name), { recursive: true });

  await writeFile(
    join(base, 'content-types', contentType.name, 'schema.json'),
    `${JSON.stringify(schemaFor(contentType), null, 2)}\n`,
  );

  for (const layer of CORE_LAYERS) {
    await writeFile(
      join(base, layer, `${contentType.name}.ts`),
      coreFactorySource(contentType, layer),
    );
  }
}

for (const contentType of contentTypes) {
  await writeContentType(contentType);
}
