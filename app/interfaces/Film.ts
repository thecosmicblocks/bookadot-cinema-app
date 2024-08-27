export interface IFilm {
    id: string;
    code: string;
    name: string;
    image: string;
    category: string;
    point: number;
}

export type PartialFilm = Partial<IFilm>;
