import React, { useEffect, useState } from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const Location = ({ locationData }) => {

    return (
        <section id='location' className='pt-12 md:pt-16 lg:pt-20'>
            <div className='w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[1960/800] lg:aspect-[1960/660]'>
                {locationData?.embedUrl ? (
                    <iframe
                        src={locationData.embedUrl}
                        className="w-full h-full"
                        loading="lazy"
                        style={{
                            border: 0,
                            pointerEvents: 'none',
                        }}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                        <p className="text-gray-500">Something went wrong loading the map.</p>
                    </div>
                )}
            </div>

            <div className='container mx-auto px-4 md:px-6 lg:px-8 flex justify-center relative pb-12 md:pb-[400px] lg:pb-[445px]'>
                <div className='w-full md:absolute md:p-8 lg:p-9 p-6 bg-white md:-top-16 lg:-top-20 md:max-w-[800px] lg:max-w-[1005px] mt-6 md:mt-0'
                    style={{
                        boxShadow: '0px 4px 84.2px 0px rgba(0, 0, 0, 0.17)',
                    }}>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary">
                        {locationData?.title}
                    </h2>

                    <p className="text-secondary text-xs sm:text-base leading-relaxed mt-3 md:mt-4 text-center font-medium">
                        {locationData?.description}
                    </p>

                    {locationData?.additionalInfo && (
                        <p className="text-primary text-sm sm:text-base leading-relaxed mt-3 md:mt-4 text-center font-semibold">
                            {locationData?.additionalInfo}
                        </p>
                    )}
                    {locationData?.address && (
                        <div className="text-secondary text-xs sm:text-base leading-relaxed mt-3 md:mt-4 text-center">
                            {locationData?.address}
                        </div>
                    )}
                    <div className='mt-4 md:mt-6 flex flex-col gap-3 md:gap-4 items-center'>
                        {locationData?.whatsapp && (
                            <div className='flex items-center'>
                                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 mr-2 text-primary flex-shrink-0" />
                                <a
                                    href={`https://wa.me/${locationData.whatsapp.replace(/\D/g, '')}`}
                                    className="text-primary font-semibold text-sm sm:text-base hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {locationData.whatsapp}
                                </a>
                            </div>
                        )}
                        {locationData?.phone && (
                            <div className='flex items-center'>
                                <FaPhoneAlt className='w-5 h-5 md:w-6 md:h-6 mr-2 text-primary flex-shrink-0' />
                                <a
                                    href={`tel:${locationData.phone}`}
                                    className="text-primary font-semibold text-sm sm:text-base hover:underline"
                                >
                                    {locationData.phone}
                                </a>
                            </div>
                        )}
                        {locationData?.email && (
                            <div className='flex items-center'>
                                <IoMdMail className='w-5 h-5 md:w-6 md:h-6 mr-2 text-primary flex-shrink-0' />
                                <a
                                    href={`mailto:${locationData.email}`}
                                    className="text-primary font-semibold text-sm sm:text-base hover:underline break-all"
                                >
                                    {locationData.email}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
