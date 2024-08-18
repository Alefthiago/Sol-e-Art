import React from 'react'
import { Know } from './getknow'

export const Footer = () => {
    return (
        <>
            <div className='flex flex-col text-center bg-pinks font-bold mt-12'>
                <Know/>
                <p className='my-10 text-blackcontent text-sm'> 2024 SOL E ART S/A Rua Malvinas Inglesa, 100, Goiana - Brasil - v1.0 <br />
                    Todos os direitos reservados.</p>
            </div>
        </>
    )
}
