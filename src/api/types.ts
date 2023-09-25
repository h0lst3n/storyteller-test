export type PaginatedRequestDataT = {
    offset: number,
    limit: number
};

export type PaginatedResponseT = {
    meta: {
        total: number,
        perPage: number,
        page: number,
        pageCount: number,
    },
    records: Array<any>,
};