"use client";

import { ReactNode, createContext, useCallback, useContext, useState } from "react";

type BookingContextType = {
    sessionData: Record<string, any> | undefined;
    setSessionData: (data: Record<string, any>) => void;
    selectedSeats: Array<number>;
    setSelectedSeats: (seats: Array<number>) => void;
};

const BookingContext = createContext<BookingContextType>({
    sessionData: undefined,
    setSessionData: () => {},
    selectedSeats: [],
    setSelectedSeats: () => {}
});

export function BookingContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [sessionData, setGlobalSessionData] = useState<Record<string, any>>();
    const setSessionData = useCallback((data: Record<string, any>) => setGlobalSessionData(data), [])
    const [selectedSeats, setGlobalSelectedSeats] = useState<Array<number>>([]);
    const setSelectedSeats = useCallback((seats: Array<number>) => setGlobalSelectedSeats(seats), [])

    return (
        <BookingContext.Provider value={{
            sessionData,
            setSessionData,
            selectedSeats,
            setSelectedSeats
        }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBookingContext() {
    return useContext(BookingContext);
}