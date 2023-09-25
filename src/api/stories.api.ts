import { PaginatedRequestDataT, PaginatedResponseT } from "./types";
import { MOCKED_STORIES } from "./mock/stories.mock";

const generateMockedResponse = (offset, limit) => {
    return MOCKED_STORIES.slice(offset, offset + limit);
};

export const getStories = async ({ offset, limit }: PaginatedRequestDataT): Promise<PaginatedResponseT> => {
    return await Promise.resolve({
        meta: {
            total: MOCKED_STORIES.length,
            perPage: limit,
            page: Math.ceil((offset + limit) / limit),
            pageCount: Math.round(MOCKED_STORIES.length / limit),
        },
        records: [...generateMockedResponse(offset, limit)],
    });
};