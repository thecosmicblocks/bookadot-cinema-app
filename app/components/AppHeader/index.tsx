import { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Back } from "@app/components/Icon";
import { usePathname } from "next/navigation";

interface IAppHeaderProps {
    title?: string | ReactNode | ReactNode[];
    rightIcon?: ReactNode;
    className?: string;
}

export function AppHeader({ title, rightIcon, className }: IAppHeaderProps) {
    const pathname = usePathname()
    const finalSlashIndex = pathname.lastIndexOf('/')
    const previousPath = pathname.slice(0, finalSlashIndex)

    return (
        <Navbar fluid rounded className={className}>
            <div className="flex justify-between items-center w-full">
                <Link href={previousPath} className="cursor-pointer">
                    <Back />
                </Link>
                <div className="text-lg font-bold">{title}</div>
                <div className="cursor-pointer">
                    {rightIcon || <div className="w-10" />}
                </div>
            </div>
        </Navbar>
    )
}
