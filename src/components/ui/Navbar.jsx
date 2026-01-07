import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-dark-green/[0.65] backdrop-blur-[32px] px-8 py-4 z-50'>
            <Image
                src="/assets/svg/logo.svg"
                alt="Samara Logo"
                width={120}
                height={40}
            />
        </div>
    )
}

export default Navbar