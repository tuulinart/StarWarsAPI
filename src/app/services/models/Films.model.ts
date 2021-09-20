/* eslint-disable @typescript-eslint/naming-convention */

import { MaxLengthValidator } from "@angular/forms";
import { Builder } from "selenium-webdriver";

export interface Film {
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;
    characters: Characters[]

    // eslint-disable-next-line eol-last
}

export interface ListFilm {
    results: Film[];
    count: number;
    // eslint-disable-next-line eol-last
}

export interface Characters {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  gender: string,
  homeworld: string,
}
