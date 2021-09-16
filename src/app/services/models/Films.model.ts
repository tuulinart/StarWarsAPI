/* eslint-disable @typescript-eslint/naming-convention */

export interface Film {
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;

    // eslint-disable-next-line eol-last
}

export interface ListFilm {
    results: Film[];
    count: number;
    // eslint-disable-next-line eol-last
}
