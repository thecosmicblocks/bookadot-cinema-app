'use client'

import React, { Children } from 'react'
import { AppHeader } from '@/app/components/AppHeader'
import Image from 'next/image'
import Typography from '@/app/components/Typography'
import dayjs from 'dayjs'

function DetailTicket() {
    const selectedSeats = ["A1", "A2", "A3"]
    const ticketData = {
        Cinema: `Eurasia Cinema7 - ул. Петрова, д.24, ТЦ "Евразия"`,
        Date: dayjs().format('D MMMM YYYY, HH:mm'),
        Hall: "6th",
        Seats: selectedSeats.join(", "),
    }
    const selectedCrypto = {
        symbol: "GLMR",
        price: 100
    }
    return (
        <>
            <AppHeader
                config={{
                    title: "Your ticket",
                }}
            />


            <div className='w-full justify-center flex mb-4'>
                <Image
                    src={"/assets/demo_ticket.png"}
                    alt="ticket"
                    width={400}
                    height={400}
                    className='w-3/4 aspect-square rounded-lg'
                />
            </div>
            <Typography className="text-text-secondary-color text-center">Show this code to the gatekeeper at the cinema</Typography>

            <div className='p-4 mt-8'>
                <Typography component='h4' className="font-bold">The Batman</Typography>
                <table className="mt-4 border-spacing-y-3 border-separate">
                    <tbody>
                        {
                            Children.toArray(Object.entries(ticketData).map(([key, value]) => (
                                <tr>
                                    <td className="flex capitalize text-sm text-text-secondary-color">{key}</td>
                                    <td className="pl-5">{value}</td>
                                </tr>
                            )))
                        }
                        <tr>
                            <td className="flex capitalize text-sm text-text-secondary-color">Total</td>
                            <td className="pl-5">{selectedSeats.length * selectedCrypto.price} ${selectedCrypto.symbol} (Paid)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailTicket