"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { ComponentProps } from "react";
import { Logo } from "./Icon";

export const Header: React.FC<ComponentProps<any>> = () => {
    const isLoggedIn = true;

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href={process.env.NEXT_PUBLIC_SITE_URL!}>
                <Logo />
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    isLoggedIn ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    ) : (
                        <Button color={"bookadot-primary"}>Login</Button>
                    )
                }
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
};
