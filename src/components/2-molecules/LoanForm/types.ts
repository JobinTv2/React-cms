export interface LoanFormReferenceType {
  sys: LoanFormReferenceTypeSys;
  items: Item[];
  includes: Includes;
}

export interface Includes {
  Entry: Entry[];
}

export interface Entry {
  metadata: Metadata;
  sys: EntrySys;
  fields: EntryFields;
}

export interface EntryFields {
  text?: Heading;
  theme?: Heading;
  name?: Heading;
  placeholder?: Heading;
  type?: Heading;
}

export interface Heading {
  'en-US': string;
}

export interface Metadata {
  tags: any[];
}

export interface EntrySys {
  space: ContentType;
  id: string;
  type: LinkTypeEnum;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  publishedVersion: number;
  publishedAt: Date;
  firstPublishedAt: Date;
  createdBy: ContentType;
  updatedBy: ContentType;
  publishedCounter: number;
  version: number;
  publishedBy: ContentType;
  automationTags?: any[];
  contentType: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: PurpleType;
  linkType: LinkTypeEnum;
  id: string;
}

export enum LinkTypeEnum {
  ContentType = 'ContentType',
  Entry = 'Entry',
  Environment = 'Environment',
  Space = 'Space',
  User = 'User',
}

export enum PurpleType {
  Link = 'Link',
}

export interface Item {
  metadata: Metadata;
  sys: EntrySys;
  fields: ItemFields;
}

export interface ItemFields {
  heading: Heading;
  inputs: Inputs;
  submitButton: SubmitButton;
}

export interface Inputs {
  'en-US': ContentType[];
}

export interface SubmitButton {
  'en-US': ContentType;
}

export interface LoanFormReferenceTypeSys {
  type: string;
}
