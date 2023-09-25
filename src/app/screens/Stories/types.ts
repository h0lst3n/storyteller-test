export type StoryT = {
    id: number,
    name: number,
    published: string,
    lastModified: number,
    liveFrom: string
    pages: string[],
    status?: number,
    ends: string,
};

export type StoriesGridPropsT = {
    stories: StoryT[],
    pageCount?: number,
};

export enum statuses {
    all = 'all',
    draft = 'draft',
    scheduled = 'scheduled',
    live = 'live',
    past = 'past',
};