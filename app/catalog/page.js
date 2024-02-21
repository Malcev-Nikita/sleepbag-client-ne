import Image from 'next/image'
import Catalog from '@/components/catalog/catalog'
import { getCatalogPageContent, getCategoriesProducts } from '@/services/catalog/page'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
  const data = await getCatalogPageContent()
  const categoriesProducts = await getCategoriesProducts()

  const header = () => ({__html: data.data.attributes.header})
  const description = () => ({__html: data.data.attributes.description})
  const categories_header = () => ({__html: data.data.attributes.categories_header})
  const categories_button = () => ({__html: data.data.attributes.categories_button})

  return (
    <main className="">        
        <header className='catalog_header'>
          <Image className='catalog_header_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
          <div className='container z-5 absolute translate-[-50%] translate-x-[-50%] left-[50%]'>
            <h1 dangerouslySetInnerHTML={header()} />
            <p dangerouslySetInnerHTML={description()} />
          </div>
        </header>

        <section className='choose_category container m-auto'>
          
          <div className='section_header container m-auto'>
            <div className='header_line'></div>
            <h1 dangerouslySetInnerHTML={categories_header()} />
          </div>
          
          <div className='catalog_categories'>
            {categoriesProducts.data.map(categorie => {
              let svg = () => ({__html: categorie.attributes.svg})

              return (
                <button data-category-slug={categorie.attributes.slug} className='catalog_category'>
                  <div dangerouslySetInnerHTML={svg()} />
                  <p>{categorie.attributes.name}</p>
                </button>
              )
            })}
          </div>
            
          <div className='catalog_view_all'>
            <button className=''>
                <span dangerouslySetInnerHTML={categories_button()} />

                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" stroke-linecap="square"/>
                </svg>
            </button>
          </div>
          

        </section>
        
        {/* <section className='section_filters'>
          
          <div className='filter_line_first container m-auto'></div>

          <div className='section_header container m-auto'>
            <div className='header_line'></div>
            <h1>ФИЛЬТРЫ</h1>
          </div>
          
          <div className='catalog_filters container m-auto'>
            <input className='catalog_filter' placeholder='Введите длину багажного автомобиля'></input>
            <input className='catalog_filter' placeholder='Введите ширину багажного автомобиля'></input>
            <button className='filter_button'>Применить фильтры</button>
          </div>
        
        </section> */}
        
        <Catalog />
    </main>
  )
}
