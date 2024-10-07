"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { ReactNode } from "react"
import classnames from 'classnames'
import classNames from "classnames";

function FilmLayout({ children }: Readonly<{ children: ReactNode }>) {    
    const pathname = usePathname()
    const param = useParams()

    const commonTabClassName = "w-full text-center border-b-2 border-[rgba(85,85,85,0.50)] px-4 py-2 font-bold text-lg"
    const isActiveSessionTab = pathname.endsWith('/sessions')
    const tabActiveClassName =  (condition: boolean) => condition
    ? "text-accent-color border-accent-color"
    : "!text-text-secondary-color"

    const EXCEPTION_ROUTE = [/^\/film\/[a-zA-Z0-9\-]+\/sessions\/[a-zA-Z0-9\-]+$/g]
    const isExceptionRoute = EXCEPTION_ROUTE.some((route) => route.test(pathname))

    return (
        <>
            <div className={classNames("w-full flex", {'hidden': isExceptionRoute })}>
                <Link
                    href={`/film/${param.code}`}
                    className={'w-1/2'}
                >
                    <div className={classnames(commonTabClassName, tabActiveClassName(!isActiveSessionTab))}>
                        About
                    </div>
                </Link>
                <Link
                    href={`/film/${param.code}/sessions`}
                    className={'w-1/2'}
                >
                    <div className={classnames(tabActiveClassName(isActiveSessionTab), commonTabClassName)}>
                        Sessions
                    </div>
                </Link>
            </div>
            {children}
        </>
    )
}

export default FilmLayout