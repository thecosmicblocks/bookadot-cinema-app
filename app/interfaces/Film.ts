export interface IFilm {
    id: string    
    name: string
    code: string
    description: string
    trailer: Trailer
    filmAttributes: IFilmAttributes
    image: string
    category: string
    point: number | string
}

export interface Trailer {
    url: string
    type: string
}

export interface IFilmAttributes {
    certificate: string
    runtime: string
    release: string
    genre: string
    director: string
    cast: string
}

export type PartialFilm = Partial<IFilm>;
