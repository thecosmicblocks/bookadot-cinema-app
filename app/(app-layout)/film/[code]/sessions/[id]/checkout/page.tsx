"use client"

import { AppHeader } from '@/app/components/AppHeader'
import Typography from '@/app/components/Typography'
import { useBookingContext } from '@/app/context/BookingContext'
import { useFilmContext } from '@/app/context/FilmContext'
import { Accordion, Button, Label, Radio } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { Children, useState } from 'react'

function Checkout() {
    const { detailFilmData: filmData } = useFilmContext()
    const { selectedSeats, sessionData } = useBookingContext()
    const router = useRouter()
    const ticketData = {
        Cinema: `${sessionData?.cinema_name}\n${sessionData?.cinema_address}`,
        Date: sessionData?.date,
        Hall: sessionData?.cinema_hall,
        Seats: selectedSeats.join(', '),
    }
    const SUPPORTED_CRYPTO = [
        {
            symbol: "GLMR",
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            price: 100
        },
        {
            symbol: "USDT",
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            price: 5
        }
    ]
    const [selectedCrypto, setSelectedCrypto] = useState(SUPPORTED_CRYPTO[0])

    const onPay = () => {
        alert(`You have paid ${selectedSeats.length * selectedCrypto.price} ${selectedCrypto.symbol}`)
        router.push(`/my-ticket/${Math.random()}`)
    }

    return (
        <>
            <AppHeader
                config={{
                    title: "Pay for your ticket",
                }}
            />
            <div className='bg-foreground-color p-4'>
                <Typography component='h4' className="font-bold">{filmData?.name}</Typography>
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
                        <hr />
                        <tr>
                            <td className="flex capitalize text-sm text-text-secondary-color">Price per ticket</td>
                            <td className="pl-5">{selectedCrypto.price} ${selectedCrypto.symbol}</td>
                        </tr>
                        <tr>
                            <td className="flex capitalize text-sm text-text-secondary-color">Total</td>
                            <td className="pl-5">{selectedSeats.length * selectedCrypto.price} ${selectedCrypto.symbol}</td>
                        </tr>
                    </tbody>
                </table>

                <hr className='my-6' />

                <Typography component='h5' className="font-bold mb-3">Select payment method</Typography>
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>Crypto</Accordion.Title>
                        <Accordion.Content>
                            <div className="flex max-w-md flex-col gap-4">
                                {
                                    Children.toArray(SUPPORTED_CRYPTO.map((c, i) => (
                                        <div className="flex items-center gap-2">
                                            <Radio onClick={() => setSelectedCrypto(c)} id={c.symbol} name="crypto" value={c.symbol} defaultChecked={i == 0} />
                                            <Label htmlFor={c.symbol}>{c.symbol}</Label>
                                        </div>

                                    )))
                                }
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title disabled>Digital Wallet (Coming Soon)</Accordion.Title>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title disabled>Credit Card (Coming Soon)</Accordion.Title>
                    </Accordion.Panel>
                </Accordion>
            </div>


            <Button
                size="xl"
                className="w-full mt-4" color="bookadot-primary"
                onClick={onPay}
            >
                Pay {selectedSeats.length * selectedCrypto.price} ${selectedCrypto.symbol}
            </Button>
        </>
    )
}

export default Checkout