"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import classnames from 'classnames'

function FilmLayout({ children }: Readonly<{ children: ReactNode }>) {    
    const pathname = usePathname()

    const commonTabClassName = "w-full text-center border-b-2 border-[rgba(85,85,85,0.50)] px-4 py-2 font-bold text-lg"
    const isActiveSessionTab = pathname.endsWith('/sessions')
    const tabActiveClassName =  (condition: boolean) => condition
    ? "text-accent-color border-accent-color"
    : "!text-text-secondary-color"

    return (
        <>
            <div className="w-full flex">
                <Link
                    href={pathname.replace('/sessions', '')}
                    className={'w-1/2'}
                >
                    <div className={classnames(commonTabClassName, tabActiveClassName(!isActiveSessionTab))}>
                        About
                    </div>
                </Link>
                <Link
                    href={pathname + '/sessions'}
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