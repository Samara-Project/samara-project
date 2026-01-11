import React from 'react'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Hero from '@/components/dashboard/Hero'
import AboutUs from '@/components/dashboard/AboutUs'
import Experience from '@/components/dashboard/Experience'
import Product from '@/components/dashboard/Product'
import Location from '@/components/dashboard/Location'
import { getMapEmbedUrl } from '../../utils/helpers/getMapUrl'
import Difference from '@/components/dashboard/Difference'
import Footer from '@/components/ui/Footer'

const LandingPage = ({ data }) => {
  const { heroData, aboutUs, experience, product, location, difference } = data;

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Hero heroData={heroData} />
      <AboutUs aboutUsData={aboutUs} />
      <Experience experienceData={experience} />
      <Product productData={product} />
      <Location locationData={location} />
      <Difference differenceData={difference} />
    </>
  )
}

export default LandingPage

export async function getStaticProps() {
  const heroData = await client.fetch(`*[_type == "hero"][0]`)
  const aboutUs = await client.fetch(`*[_type == "aboutUs"][0]`)
  const experienceData = await client.fetch(`*[_type == "experience"]`)
  const productData = await client.fetch(`*[_type == "product"]`)
  const productSectionData = await client.fetch(`*[_type == "productSection"][0]`)
  const locationData = await client.fetch(`*[_type == "visitUs"][0]`)
  const differenceData = await client.fetch(`*[_type == "difference"][0]`)
  const footerData = await client.fetch(`*[_type == "footer"][0]`)

  let embedUrl = null
  if (locationData?.mapUrl) {
    embedUrl = await getMapEmbedUrl(locationData.mapUrl)
  }

  const data = {
    heroData: heroData,
    aboutUs: aboutUs,
    experience: experienceData,
    product: {
      ...productSectionData,
      data: productData
    },
    location: {
      ...locationData,
      embedUrl: embedUrl
    },
    difference: differenceData,
    footer: footerData
  }

  return {
    props: {
      data
    },
    revalidate: 60,
  }
}