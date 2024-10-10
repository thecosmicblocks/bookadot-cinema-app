import { Button, Navbar } from "flowbite-react";
import { Logo } from "../Icon";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { shortenWalletAddress } from "@/app/utils/helper";

export const HomeHeader = () => {
    const { open } = useAppKit()
    const { isConnected, address } = useAccount()
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href={process.env.NEXT_PUBLIC_SITE_URL!}>
                <Logo />
            </Navbar.Brand>
            <div>
                <Button
                    className="w-full mt-4" color="bookadot-primary"
                    onClick={() => open()}
                >
                    {isConnected ? shortenWalletAddress(address || "") : "Connect Wallet"}
                </Button>
            </div>
        </Navbar>
    );
};
