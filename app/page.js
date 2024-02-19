import Image from 'next/image'

import HeaderBanners from '@/components/Index-page/header_banners'
import AboutUs from '@/components/Index-page/about_us'
import Catalog from '@/components/Index-page/catalog'
import Reasons from '@/components/Index-page/reasons'
import Works from '@/components/Index-page/works'
import AboutProduction from '@/components/Index-page/about_production'
import FAQ from '@/components/faq'
import Questions from '@/components/questions'

import { getStats, getTeasers, getFAQ, getBanners, getWorks } from '@/services/IndexPage'
import { getIndexPageContent } from '@/services/Index_page/page'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
  const data = await getIndexPageContent();
  const stats = await getStats();
  const teasers = await getTeasers();
  const faq = await getFAQ();
  const banners = await getBanners();
  const works = await getWorks();

  console.log(data.data.attributes)
  
  return (
    <main className="relative bg-[#fff]">
      <HeaderBanners banners={banners.data}/>
      
      <AboutUs data={data.data.attributes} stats={stats.data} />

      <Catalog data={data.data.attributes} />

      <Reasons data={data.data.attributes} teasers={teasers.data} />

      <Works data={data.data.attributes} works={works.data}/>

      <AboutProduction data={data.data.attributes} />

      <FAQ data={data.data.attributes} faq={faq.data}/>

      <Questions data={data.data.attributes} />
    </main>
  )
}
