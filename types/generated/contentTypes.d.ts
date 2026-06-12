import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    adminPermissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::permission'
    >;
    adminUserOwner: Schema.Attribute.Relation<'manyToOne', 'admin::user'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    kind: Schema.Attribute.Enumeration<['content-api', 'admin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'content-api'>;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    apiToken: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    apiTokens: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file1: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    file1name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    file1type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    file2: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    file2name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    file2type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    file3: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    file3name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    file3type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    newdate: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url1: Schema.Attribute.Text;
    url2: Schema.Attribute.Text;
    url3: Schema.Attribute.Text;
  };
}

export interface ApiBankBank extends Struct.CollectionTypeSchema {
  collectionName: 'banks';
  info: {
    displayName: 'Bank';
    pluralName: 'banks';
    singularName: 'bank';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    activity: Schema.Attribute.Text;
    address: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    card: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deposit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::bank.bank'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    site: Schema.Attribute.Text;
    transfer: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    withdrawals: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface ApiCommonaccountCommonaccount
  extends Struct.CollectionTypeSchema {
  collectionName: 'commonaccounts';
  info: {
    displayName: 'Common Account';
    pluralName: 'commonaccounts';
    singularName: 'commonaccount';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::commonaccount.commonaccount'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note01: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note02: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note03: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note04: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note05: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note06: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note07: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note08: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note09: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note10: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note11: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note12: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note13: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note14: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note15: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note16: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note17: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note18: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note19: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note20: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note21: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note22: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note23: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note24: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note25: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note26: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note27: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note28: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note29: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note30: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note31: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note32: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note33: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note34: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note35: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note36: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note37: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    photohash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    site01: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site02: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site03: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site04: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site05: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site06: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site07: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site08: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site09: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site10: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site11: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site12: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site13: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site14: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site15: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site16: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site17: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site18: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site19: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site20: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site21: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site22: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site23: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site24: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site25: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site26: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site27: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site28: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site29: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site30: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site31: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site32: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site33: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site34: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site35: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site36: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    site37: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommondocumentCommondocument
  extends Struct.CollectionTypeSchema {
  collectionName: 'commondocuments';
  info: {
    displayName: 'Common Document';
    pluralName: 'commondocuments';
    singularName: 'commondocument';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    cover: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Text;
    filetype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    hash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::commondocument.commondocument'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCronStrapiCronStrapi extends Struct.CollectionTypeSchema {
  collectionName: 'cron_strapis';
  info: {
    displayName: 'CronStrapi';
    pluralName: 'cron-strapis';
    singularName: 'cron-strapi';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['created-by-odd-hour-cron']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'created-by-odd-hour-cron'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdByCron: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    hour: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cron-strapi.cron-strapi'
    > &
      Schema.Attribute.Private;
    minute: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<11>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    runAt: Schema.Attribute.DateTime & Schema.Attribute.Required;
    timezone: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }> &
      Schema.Attribute.DefaultTo<'Asia/Taipei'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoodFood extends Struct.CollectionTypeSchema {
  collectionName: 'foods';
  info: {
    displayName: 'Food';
    pluralName: 'foods';
    singularName: 'food';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::food.food'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    photo: Schema.Attribute.Text;
    photohash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    price: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    shop: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    todate: Schema.Attribute.Date;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiImageImage extends Struct.CollectionTypeSchema {
  collectionName: 'images';
  info: {
    displayName: 'Image';
    pluralName: 'images';
    singularName: 'image';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    cover: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Text;
    filetype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    hash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::image.image'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLandtophistoryLandtophistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'landtophistories';
  info: {
    displayName: 'Landtop History';
    pluralName: 'landtophistories';
    singularName: 'landtophistory';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    brand: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    landtopPrice: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landtophistory.landtophistory'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    productId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    snapshotDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    snapshotKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 220;
      }>;
    source: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    sourceUrl: Schema.Attribute.Text;
    suggestedPrice: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMusicMusic extends Struct.CollectionTypeSchema {
  collectionName: 'music';
  info: {
    displayName: 'Music';
    pluralName: 'music-items';
    singularName: 'music';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    cover: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Text;
    filetype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    hash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    language: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::music.music'> &
      Schema.Attribute.Private;
    lyrics: Schema.Attribute.Text;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPodcastPodcast extends Struct.CollectionTypeSchema {
  collectionName: 'podcasts';
  info: {
    displayName: 'Podcast';
    pluralName: 'podcasts';
    singularName: 'podcast';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    cover: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Text;
    filetype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    hash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::podcast.podcast'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPushSubscriptionPushSubscription
  extends Struct.CollectionTypeSchema {
  collectionName: 'push_subscriptions';
  info: {
    displayName: 'Push Subscription';
    pluralName: 'push-subscriptions';
    singularName: 'push-subscription';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    auth: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    endpoint: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::push-subscription.push-subscription'
    > &
      Schema.Attribute.Private;
    p256dh: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResendNotificationLogResendNotificationLog
  extends Struct.CollectionTypeSchema {
  collectionName: 'resend_notification_logs';
  info: {
    displayName: 'Resend Notification Log';
    pluralName: 'resend-notification-logs';
    singularName: 'resend-notification-log';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eventKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 191;
      }>;
    eventType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::resend-notification-log.resend-notification-log'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recipientEmail: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 191;
      }>;
    recordId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    sentAt: Schema.Attribute.DateTime;
    tableName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    targetDate: Schema.Attribute.Date & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRoutineRoutine extends Struct.CollectionTypeSchema {
  collectionName: 'routines';
  info: {
    displayName: 'Routine';
    pluralName: 'routines';
    singularName: 'routine';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    lastdate1: Schema.Attribute.DateTime;
    lastdate2: Schema.Attribute.DateTime;
    lastdate3: Schema.Attribute.DateTime;
    link: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::routine.routine'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    photo: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSettingSetting extends Struct.CollectionTypeSchema {
  collectionName: 'settings';
  info: {
    displayName: 'Setting';
    pluralName: 'settings';
    singularName: 'setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::setting.setting'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    settingKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    settingValue: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String;
  };
}

export interface ApiSubscriptionSubscription
  extends Struct.CollectionTypeSchema {
  collectionName: 'subscriptions';
  info: {
    displayName: 'Subscription';
    pluralName: 'subscriptions';
    singularName: 'subscription';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.Text;
    alternative: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    archived: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'TWD'>;
    friendliness: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    iscontinue: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subscription.subscription'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    nextdate: Schema.Attribute.Date;
    note: Schema.Attribute.Text;
    price: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    purpose: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    retentionRecommendation: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    site: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usageFrequency: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface ApiToolPriceHistoryToolPriceHistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'tool_price_histories';
  info: {
    displayName: 'Tool Price History';
    pluralName: 'tool-price-histories';
    singularName: 'tool-price-history';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentPrice: Schema.Attribute.Integer;
    highPrice: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tool-price-history.tool-price-history'
    > &
      Schema.Attribute.Private;
    lowPrice: Schema.Attribute.Integer;
    notice: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    queryText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    resultUrl: Schema.Attribute.Text;
    source: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    toolType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVideoVideo extends Struct.CollectionTypeSchema {
  collectionName: 'videos';
  info: {
    displayName: 'Video';
    pluralName: 'videos';
    singularName: 'video';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    cover: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Text;
    fileSize: Schema.Attribute.Integer;
    filetype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    hash: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::video.video'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::article.article': ApiArticleArticle;
      'api::bank.bank': ApiBankBank;
      'api::commonaccount.commonaccount': ApiCommonaccountCommonaccount;
      'api::commondocument.commondocument': ApiCommondocumentCommondocument;
      'api::cron-strapi.cron-strapi': ApiCronStrapiCronStrapi;
      'api::food.food': ApiFoodFood;
      'api::image.image': ApiImageImage;
      'api::landtophistory.landtophistory': ApiLandtophistoryLandtophistory;
      'api::music.music': ApiMusicMusic;
      'api::podcast.podcast': ApiPodcastPodcast;
      'api::push-subscription.push-subscription': ApiPushSubscriptionPushSubscription;
      'api::resend-notification-log.resend-notification-log': ApiResendNotificationLogResendNotificationLog;
      'api::routine.routine': ApiRoutineRoutine;
      'api::setting.setting': ApiSettingSetting;
      'api::subscription.subscription': ApiSubscriptionSubscription;
      'api::tool-price-history.tool-price-history': ApiToolPriceHistoryToolPriceHistory;
      'api::video.video': ApiVideoVideo;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
