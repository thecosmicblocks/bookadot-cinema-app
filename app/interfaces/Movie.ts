export interface IMovie {
    id: string
    name: string
    code: string
    description: string
    trailer: Trailer
    movieAttributes: IMovieAttributes
    image: string
    category: string
    point: number | string
}

export interface Trailer {
    url: string
    type: string
}

export interface IMovieAttributes {
    certificate: string
    runtime: string
    release: string
    genre: string
    director: string
    cast: string
}

export type PartialMovie = Partial<IMovie>;
