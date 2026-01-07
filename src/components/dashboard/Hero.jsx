import React from 'react'
import { urlFor } from '@/lib/sanity'

const Hero = ({ heroData }) => {
    return (
        <section
            className='min-h-screen bg-cover bg-center'
            style={{
                backgroundImage: `url('${urlFor(heroData?.image)}')`
            }}>
            <h1>{heroData?.title}</h1>
            <p>{heroData?.subtitle}</p>
        </section>
    )
}

export default Hero