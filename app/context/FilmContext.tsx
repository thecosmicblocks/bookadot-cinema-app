"use client";

import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { PartialFilm } from "../interfaces/Film";


type FilmPageSetting = {
    title: string;
    subtitle: string;
}

type FilmContextType = {
    filmPageSetting: FilmPageSetting;
    setFilmPageSetting: (data: Partial<FilmPageSetting>) => void;
    detailFilmData: PartialFilm | undefined;
    setDetailFilmData: (data: PartialFilm) => void;
};

const FilmContext = createContext<FilmContextType>({
    filmPageSetting: {
        title: "",
        subtitle: ""
    },
    setFilmPageSetting: () => {},
    detailFilmData: undefined,
    setDetailFilmData: () => {}
});

export function FilmContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [detailFilmData, setGlobalDetailFilmData] = useState<PartialFilm>();
    const setDetailFilmData = useCallback((data: PartialFilm) => setGlobalDetailFilmData(data), [])
    const [filmPageSetting, setGlobalFilmPageSetting] = useState({
        title: "",
        subtitle: ""
    });
    const setFilmPageSetting = useCallback((data: Partial<FilmPageSetting>) => setGlobalFilmPageSetting((prev) => ({...prev, ...data})), [])
    
    return (
        <FilmContext.Provider value={{
            filmPageSetting: filmPageSetting,
            setFilmPageSetting: setFilmPageSetting,
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