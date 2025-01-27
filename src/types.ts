export type Site = {
  NAME: string;
  SLUG: string;
  EMAIL: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export interface CardEntry {
  title: string;
  description: string;
  url: string;
}