import { Navbar } from "flowbite-react";
import { Logo, Search } from "./Icon";

export const HomeHeader = () => {

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href={process.env.NEXT_PUBLIC_SITE_URL!}>
                <Logo />
            </Navbar.Brand>
            <div className="cursor-pointer">
                <Search />
            </div>
        </Navbar>
    );
};
