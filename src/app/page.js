import { getProductionContent, getBanners, getIndexPageContent, getStats, getTeasers, getWorks } from '@/services/index-page'
import MainPage from '@/pages/page'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
  const data = await getIndexPageContent();
  const stats = await getStats();
  const teasers = await getTeasers();
  const banners = await getBanners();
  const works = await getWorks();
  const productions = await getProductionContent();
  
  return (
    <MainPage 
      data={data} 
      stats={stats} 
      teasers={teasers} 
      banners={banners} 
      works={works} 
      productions={productions} 
    />
  )
}
