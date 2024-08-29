import { Children } from "react";
import { List } from "flowbite-react";
import Typography from "../Typography";
import { Mark } from "../Icon";

function SessionTable({
    filmList,
    isGroupedByCinema
}: {
    filmList: any[],
    isGroupedByCinema: boolean
}) {
    return (
        <List unstyled className="w-full">
            <List.Item>
                <div className="flex items-center bg-foreground-color py-2">
                    <div className="w-1/3 text-sm text-center text-text-secondary-color">Time</div>
                    <div className="mr-4"></div>
                    <div className="w-1/6 text-sm text-text-secondary-color">Adult</div>
                    <div className="w-1/6 text-sm text-text-secondary-color">Child</div>
                    <div className="w-1/6 text-sm text-text-secondary-color">Student</div>
                    <div className="w-1/6 text-sm text-text-secondary-color">V.I.P</div>
                </div>
            </List.Item>


            {Children.toArray(
                filmList.map((filmOrCinema) => (
                    isGroupedByCinema ? (
                        <>
                            <CinemaRow cinemaData={filmOrCinema} />
                            {
                                filmOrCinema.filmList.map((filmData: any) => (
                                    <SessionRow filmData={filmData} />
                                ))
                            }
                        </>
                    ) : (
                        <SessionRow filmData={filmOrCinema} />
                    )
                ))
            )}
        </List>
    )
}

function CinemaRow({ cinemaData }: { cinemaData: any }) {
    return (
        <List.Item className="w-full flex justify-between px-4 py-3 mt-0 border-b-2 border-b-border-color">
            <div>
                <Typography component="p" className="text-lg font-bold">{cinemaData.cinemaName}</Typography>
                <Typography component="span" className="text-sm text-text-secondary-color">${cinemaData.cinemaAddress}</Typography>
            </div>
            <div>
                <Typography component="p" className="text-sm text-text-secondary-color flex items-center gap-1">
                    <Mark />
                    {cinemaData.cinemaDistance}
                </Typography>
            </div>
        </List.Item>
    )
}
function SessionRow({ filmData }: { filmData: any }) {

    const TicketPrice = ({ price }: any) => {
        return (
            <div className="flex items-center gap-1">
                <Typography component="p" className="text-sm">
                    {price ? `$${price}` : "."}
                </Typography>
            </div>
        )
    }

    return (
        <List.Item className="flex items-center border-b-2 border-b-border-color p-4">
            <div className="w-1/4">
                <Typography component="p" className="text-lg font-bold text-center">
                    {filmData.time}
                </Typography>
                <Typography component="p" className="text-sm font-medium text-text-secondary-color text-center">
                    {filmData.roomType}
                </Typography>
            </div>
            <hr className="rotate-90 w-10 bg-border-color mx-1" />
            <div className="w-1/6">
                <TicketPrice price={filmData.adult} />
            </div>
            <div className="w-1/6">
                <TicketPrice price={filmData.child} />
            </div>
            <div className="w-1/6">
                <TicketPrice price={filmData.student} />
            </div>
            <div className="w-1/6">
                <TicketPrice price={filmData.vip} />
            </div>
        </List.Item>
    )
}

export default SessionTable