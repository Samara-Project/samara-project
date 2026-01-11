import { urlFor } from '@/lib/sanity';
import React from 'react'

const Difference = ({ differenceData }) => {
    return (
        <div className='w-full'>
            <div className='container mx-auto flex flex-col text-center items-center py-12 md:py-16 lg:py-20 px-4'>
                <div className='w-fit text-center flex flex-col items-center'>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary pb-4">
                        {differenceData?.title}
                    </h2>
                    <div className='w-full max-w-[577px] h-[5px] rounded-full bg-secondary'></div>
                </div>
                <div className='flex flex-row items-start w-full mt-12 md:mt-16 lg:mt-20 justify-center flex-wrap gap-6 md:gap-8 lg:gap-10'>
                    {differenceData?.items?.map((item, index) => (
                        <div key={item?.title + index} className='flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full sm:w-[calc(50%-1rem)] lg:w-[304px]'>
                            <div className='h-[64px] sm:h-[120px] lg:h-[145px] aspect-square flex items-center justify-center'>
                                <img
                                    src={urlFor(item?.icon)}
                                    alt={item?.title}
                                    className='w-auto h-full object-contain'
                                />
                            </div>
                            <p className='text-sm sm:text-base lg:text-lg text-primary px-4'>
                                {item?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-secondary py-6 md:py-8 lg:py-4'>
                <div className='container mx-auto flex flex-row items-center justify-center flex-wrap gap-6 md:gap-8 lg:gap-10 w-full px-4'>
                    {differenceData?.benefits?.map((item, index) => (
                        <div
                            className='flex flex-row items-center gap-3 md:gap-4 w-full sm:w-[calc(50%-1rem)] lg:w-auto lg:max-w-[378px] 2xl:max-w-[400px]'
                            key={item?.text + index}
                        >
                            <div className='flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-[114px] lg:h-[114px] flex items-center justify-center'>
                                <img
                                    src={urlFor(item?.icon)}
                                    alt={"icon" + index}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <p className='text-xs sm:text-sm md:text-base lg:text-xl text-primary flex-1'>
                                {item?.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Difference