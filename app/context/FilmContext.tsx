"use client";

import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { PartialFilm } from "../interfaces/Film";

type FilmContextType = {
    detailFilmData: PartialFilm | undefined;
    setDetailFilmData: (data: PartialFilm) => void;
};

const FilmContext = createContext<FilmContextType>({
    detailFilmData: undefined,
    setDetailFilmData: () => {}
});

export function FilmContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [detailFilmData, setGlobalDetailFilmData] = useState<PartialFilm>();
    const setDetailFilmData = useCallback((data: PartialFilm) => setGlobalDetailFilmData(data), [])

    return (
        <FilmContext.Provider value={{
            detailFilmData: detailFilmData,
            setDetailFilmData
        }}>
            {children}
        </FilmContext.Provider>
    );
}

export function useFilmContext() {
    return useContext(FilmContext);
}