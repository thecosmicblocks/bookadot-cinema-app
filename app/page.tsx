"use client";

import { Search } from "./components/Icon";
import Typography from "./components/Typography";

export default function Home() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <Typography component="h2" className="text-2xl font-bold">Now in cinemas</Typography>

            <span className="cursor-pointer">
                <Search/>
            </span>
        </div>

    </div>
  );
}
