"use client"

import { AppHeader } from "@/app/components/AppHeader"
import DatePicker from "@/app/components/DatePicker"
import MovieTab from "@/app/components/MovieTab"
import { DoubleArrow } from "@/app/components/Icon"
import SessionTable from "@/app/components/SessionTable"
import Typography from "@/app/components/Typography"
import { useMovieContext } from "@/app/context/MovieContext"
import dayjs from "dayjs"
import { ToggleSwitch } from "flowbite-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"


const SESSION_DATA = [
    {
        id: 1,
        time: '10:00 AM',
        roomType: "IMAX",
        adult: 3500,
        child: 2200,
        student: 1540,
        vip: 0,
        cinema_name: 'Cinema 1',
        cinema_address: '1234 Street, City, Country',
        cinema_id: 1,
        cinema_hall: 'Hall 1',
        date: '6 April 2022, 14:40'
    },
    {
        id: 2,
        time: '10:00 AM',
        roomType: "IMAX",
        adult: 3500,
        child: 2200,
        student: 1540,
        vip: 0,
        cinema_name: 'Cinema 2',
        cinema_address: '1234 Street, City, Country',
        cinema_id: 2,
        cinema_hall: '2nd',
        date: '6 April 2022, 14:40'
    },
]

const GROUPED_BY_CINEMA = [
    {
        cinema_name: 'Cinema 1',
        cinema_address: '1234 Street, City, Country',
        cinema_distance: '1.2 km',
        sessionList: SESSION_DATA
    },
    {
        cinema_name: 'Cinema 2',
        cinema_address: '1234 Street, City, Country',
        cinema_distance: '1.5 km',
        sessionList: SESSION_DATA
    }
]

const DATE_FORMAT_PATTERN = 'YYYY-MM-DD'

function Sessions() {
    const searchParam = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParam.toString())

    const { detailMovieData: movieData } = useMovieContext()
    console.log('-----');

    console.log(movieData);

    const isSortedByTimeDesc = searchParam.get('time') === 'asc' ? false : true
    const isGroupedByCinema = searchParam.get('group_by') === 'cinema' ? true : false
    const [sortParams, setSortParams] = useState({
        isTimeDesc: isSortedByTimeDesc,
        isGroupedByCinema: isGroupedByCinema,
        date: dayjs().format(DATE_FORMAT_PATTERN)
    })

    const sessionList = sortParams.isGroupedByCinema ? GROUPED_BY_CINEMA : SESSION_DATA

    const onSortedByTime = useCallback(() => {
        const _isTimeDesc = !sortParams.isTimeDesc
        setSortParams(prev => ({ ...prev, isTimeDesc: _isTimeDesc }))
        params.set("time", _isTimeDesc ? "desc" : "asc");
        router.push(`${pathname}?${params.toString()}`);
    }, [sortParams.isTimeDesc])

    const onGroupedByCinema = useCallback(() => {
        const _isGroupedByCinema = !sortParams.isGroupedByCinema
        setSortParams(prev => ({ ...prev, isGroupedByCinema: _isGroupedByCinema }))
        !_isGroupedByCinema ?
            params.delete("group_by") :
            params.set("group_by", "cinema");
        router.push(`${pathname}?${params.toString()}`);
    }, [sortParams.isGroupedByCinema])

    const onFilterByDate = useCallback((date: Date) => {
        const _date = dayjs(date).format(DATE_FORMAT_PATTERN)
        setSortParams(prev => ({ ...prev, date: _date }))
        params.set("date", _date);
        router.push(`${pathname}?${params.toString()}`);
    }, [sortParams.date])

    return (
        <>
            <AppHeader
                config={{
                    title: movieData?.title || "Movie"
                }}
            />
            <MovieTab />

            <div className="flex py-4">
                <div className="flex flex-col items-center w-1/3 relative">
                    <DatePicker
                        onSelectedDateChanged={onFilterByDate}
                        value={sortParams.date}
                    />
                </div>

                <div
                    className="flex flex-col items-center w-1/3 cursor-pointer"
                    onClick={onSortedByTime}
                >
                    <DoubleArrow />
                    <Typography
                        component="p"
                        className="text-sm font-bold pt-1"
                    >
                        Time &nbsp;
                        {
                            sortParams.isTimeDesc ? <>&darr;</> : <>&uarr;</>
                        }
                    </Typography>
                </div>

                <div className="flex flex-col items-center w-1/3">
                    <ToggleSwitch
                        onChange={onGroupedByCinema}
                        checked={sortParams.isGroupedByCinema}
                        color="bookadot_primary"
                    />
                    <Typography
                        component="p"
                        className="text-sm font-bold pt-1"
                    >By Cinema</Typography>
                </div>
            </div>

            <SessionTable
                isGroupedByCinema={sortParams.isGroupedByCinema}
                sessionList={sessionList}
            />
        </>
    )
}

export default Sessions