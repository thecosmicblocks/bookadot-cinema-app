"use client";

import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { IFilm } from "../interfaces/Film";

type FilmContextType = {
    detailFilmData: IFilm | undefined;
    setDetailFilmData: (data: IFilm) => void;
};

const FilmContext = createContext<FilmContextType>({
    detailFilmData: undefined,
    setDetailFilmData: () => {}
});

export function FilmContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [detailFilmData, setGlobalDetailFilmData] = useState<IFilm>();
    const setDetailFilmData = useCallback((data: IFilm) => setGlobalDetailFilmData(data), [])
  
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