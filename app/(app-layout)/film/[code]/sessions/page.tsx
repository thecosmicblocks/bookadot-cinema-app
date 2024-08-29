"use client"

import { Calendar, DoubleArrow } from "@/app/components/Icon"
import SessionTable from "@/app/components/SessionTable"
import Typography from "@/app/components/Typography"
import dayjs from "dayjs"
import { ToggleSwitch } from "flowbite-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"


const FILM_DATA = [
    {
        time: '10:00 AM',
        roomType: "IMAX",
        adult: 3500,
        child: 2200,
        student: 1540,
        vip: 0
    },
    {
        time: '10:00 AM',
        roomType: "IMAX",
        adult: 3500,
        child: 2200,
        student: 1540,
        vip: 0
    },
]

const GROUPED_BY_CINEMA = [
    {
        cinemaName: 'Cinema 1',
        cinemaAddress: '1234 Street, City, Country',
        cinemaDistance: '1.2 km',
        filmList: FILM_DATA
    },
    {
        cinemaName: 'Cinema 2',
        cinemaAddress: '1234 Street, City, Country',
        cinemaDistance: '1.5 km',
        filmList: FILM_DATA
    }
]

function Sessions() {
    const searchParam = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParam.toString())


    const isSortedByTimeDesc = searchParam.get('time') === 'asc' ? false : true
    const isGroupedByCinema = searchParam.get('group_by') === 'cinema' ? true : false
    const [sortParams, setSortParams] = useState({
        isTimeDesc: isSortedByTimeDesc,
        isGroupedByCinema: isGroupedByCinema
    })

    const filmList = sortParams.isGroupedByCinema ? GROUPED_BY_CINEMA : FILM_DATA

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

    return (
        <>
            <div className="flex py-4">
                <div className="flex flex-col items-center w-1/3">
                    <Calendar />
                    <Typography
                        component="p"
                        className="text-sm font-bold pt-1"
                    >{dayjs().format('MMM, DD')}</Typography>
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
                filmList={filmList}
            />
        </>
    )
}

export default Sessions