import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import {
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaLinkedin,
    FaYoutube,
    FaTiktok,
    FaGithub,
} from "react-icons/fa";
import { scrollToSection } from '../../../utils/helpers/smoothScrollTo';

const socialIconMap = {
    instagram: FaInstagram,
    twitter: FaTwitter,
    x: FaTwitter, // kalau label pakai "X"
    facebook: FaFacebook,
    linkedin: FaLinkedin,
    youtube: FaYoutube,
    tiktok: FaTiktok,
    github: FaGithub,
};


const Footer = ({ footerData }) => {
    const { brand, columns } = footerData || {};

    return (
        <footer className="bg-[#CD9F72] text-[rgb(30,58,76)] py-12 md:py-16 xl:py-20">
            <div className="container mx-auto px-4 md:px-6 xl:px-8">
                <div className="flex flex-wrap flex-row gap-8 xl:gap-20">
                    <div className="flex flex-col items-start">
                        {brand?.logo && (
                            <div className="mb-6">
                                <img
                                    src={urlFor(brand?.logo)}
                                    alt={brand?.name || 'Samara'}
                                    className="aspect-[425/93] h-12 md:h-14 xl:h-16 w-auto"
                                />
                            </div>
                        )}
                        {brand?.description && (
                            <p className="text-sm md:text-base mb-6 leading-relaxed max-w-[400px]">
                                {brand?.description}
                            </p>
                        )}
                        {brand?.ctaText && (
                            <a
                                href={brand?.ctaLink || '#'}
                                target='_blank'
                                className="bg-[#1E3A4C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2A4A5C] transition-colors duration-300"
                            >
                                {brand?.ctaText}
                            </a>
                        )}
                    </div>

                    <div className='flex flex-wrap justify-start flex-row gap-10'>
                        {columns?.map((column, index) => {
                            return (
                                <div key={index + '-col'} className="flex flex-col">
                                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium mb-6 xl:mb-8 leading-tight">
                                        {column.title}
                                    </h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        {column.links?.map((link, linkIndex) => {
                                            const Icon = socialIconMap[link.label?.toLowerCase()];
                                            return (
                                                <li key={linkIndex + "-link"}>
                                                    {link?.url?.startsWith('#') ?
                                                        <button
                                                            onClick={(e) => { scrollToSection(e, link?.url.replace('#', '')) }}
                                                            className="flex items-center gap-2 text-sm md:text-base hover:underline hover:text-[#1E3A4C]/70 transition-colors duration-200"
                                                            target={link?.url.includes('http') ? '_blank' : undefined}
                                                        >
                                                            {link?.icon ? <img
                                                                src={urlFor(link?.icon)}
                                                                width={18}
                                                                height={18}
                                                            />
                                                                :
                                                                Icon && <Icon className="text-lg" />}
                                                            <span>{link.label}</span>
                                                        </button>
                                                        :
                                                        <a
                                                            href={link?.url || '#'}
                                                            className="flex items-center gap-2 text-sm md:text-base hover:underline hover:text-[#1E3A4C]/70 transition-colors duration-200"
                                                            target={link?.url.includes('http') ? '_blank' : undefined}
                                                        >
                                                            {link?.icon ? <img
                                                                src={urlFor(link?.icon)}
                                                                width={18}
                                                                height={18}
                                                            />
                                                                :
                                                                Icon && <Icon className="text-lg" />}
                                                            <span>{link.label}</span>
                                                        </a>
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-12 md:mt-16 pt-8 border-t border-[#1E3A4C]/20 text-center md:text-left">
                    <p className="text-xs md:text-sm text-[#1E3A4C]/70">
                        © {new Date().getFullYear()} {brand?.name || 'Sâmara'}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;