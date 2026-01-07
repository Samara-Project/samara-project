import React from 'react'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Hero from '@/components/dashboard/Hero'
import AboutUs from '@/components/dashboard/AboutUs'
import Experience from '@/components/dashboard/Experience'
import Product from '@/components/dashboard/Product'
import Location from '@/components/dashboard/Location'

const LandingPage = ({ data }) => {
  const { heroData, aboutUs } = data;

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Hero heroData={heroData} />
      <AboutUs aboutUsData={aboutUs} />
      <Experience />
      <Product />
      <Location />
    </>
  )
}

export default LandingPage


export async function getStaticProps() {
  const query = `*[_type == "aboutUs"][0]{
    title,
    subtitle,
    ctaText,
    ctaLink,
    image
  }`



  const heroData = await client.fetch(`*[_type == "hero"][0]`)
  const aboutUs = await client.fetch(query)

  const data = {
    heroData: heroData,
    aboutUs: aboutUs,
  }

  return {
    props: {
      data
    },
    revalidate: 60, // ISR: revalidate tiap 60 detik
  }
}