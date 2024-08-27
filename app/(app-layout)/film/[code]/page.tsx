"use client";

import Typography from "@/app/components/Typography";
import { Button } from "flowbite-react";
import { useParams, useRouter } from 'next/navigation';
import { Children } from "react";

// import { Play } from "@/app/components/Icon";
// import classNames from "classnames";

function Film() {
    const router = useRouter()
    const param = useParams()

    const filmData = {
        trailer: {
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            type: "video/mp4",
        },
        description: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        filmAttributes: {
            certificate: "16+",
            runtime: "02:56",
            release: "2022",
            genre: "Action, Crime, Drama",
            director: "Matt Reeves",
            cast: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano, John Turturro, 	Andy Serkis, Peter Sarsgaard",
        },
    }

    return (
        <>
            <div  className="w-full mt-1 relative">
                <video className="w-full" controls>
                    <source src={filmData.trailer.url} type={filmData.trailer.type} />
                    Your browser does not support the video tag.
                </video>

                {/* <div className={classNames("absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10", { 'hidden': true })}>
                    <div className="rounded-full w-16 h-16 bg-text-secondary-color shadow-xl backdrop-blur-xl flex justify-center items-center cursor-pointer">
                        <Play />
                    </div>
                </div> */}
            </div>

            <div className="flex items-center">
                <div className="w-1/2 text-center py-3 px-4">
                    <Typography component="p" className="font-bold text-xl">8.3</Typography>
                    <Typography component="p" className="text-sm text-text-secondary-color">IMDB</Typography>
                </div>
                <hr className="rotate-90 w-10 h-full"/>
                <div className="w-1/2 text-center py-3 px-4">
                    <Typography component="p" className="font-bold text-xl">7.9</Typography>
                    <Typography component="p" className="text-sm text-text-secondary-color">Kinopoisk</Typography>
                </div>
            </div>

            <div className="p-4">
                <Typography component="h4" className="text-sm mt-5">
                When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
                </Typography>

                <table className="mt-4 border-spacing-y-3 border-separate">
                    <tbody>
                        {
                            Children.toArray(Object.entries(filmData.filmAttributes).map(([key, value]) => (
                                <tr>
                                    <td className="flex capitalize text-sm text-text-secondary-color">{key}</td>
                                    <td className="pl-5">{value}</td>
                                </tr>
                            )))
                        }
                    </tbody>
                </table>

                <Button 
                    size="xl"
                    className="w-full mt-4" color="bookadot-primary"
                    onClick={() => router.push(`/film/${param.code}/sessions`)}
                >
                    Select Session
                </Button>
            </div>
        </>
    )
}

export default Film