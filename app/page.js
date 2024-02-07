import Image from 'next/image'

import HeaderBanners from './header_banners'
import Works from './works'
import FAQ from '@/components/faq'
import Questions from '@/components/questions'
import { LikeCatalog } from '@/components/like'
import { getStats, getTeasers, getFAQ, getBanners, getProducts, getWorks } from '@/services/IndexPage'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
  const stats = await getStats();
  const teasers = await getTeasers();
  const faq = await getFAQ();
  const banners = await getBanners();
  const products = await getProducts();
  const works = await getWorks();

  return (
    <main className="relative bg-[#262626]">
      <div id="main"><HeaderBanners data={banners.data}/></div>
      
      <section id='aboutus' className='section_aboutus relative'>
        <div className='section_header container m-auto'>
          <div className='header_line'></div>
          <h1>НЕМНОГО О НАШЕЙ <span>КОМПАНИИ!</span></h1>
        </div>
        <div className='aboutus_parts container m-auto'>
          <div className='aboutus_part1'>
            <div className='part1_left w-[50%]'>
              <h1>Команда профессионалов</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            <div className='part1_right w-[50%]'>
              <Image src='/images/command1.png' alt='' width={1650} height={700}/>
            </div>
          </div>
          <div className='aboutus_part2'>
            <div className='part2_left w-[50%]'>
              <Image src='/images/command2.png' alt='' width={1150} height={500}/>
            </div>
            <div className='part2_right w-[50%]'>
              <div className='part2_right_text'>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати в то время некий Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
              </div>

              <div className='ratings'>
                {stats.data.map(stat => (
                  <div className='rating'>
                    <p><span>{stat.attributes.Count}{stat.attributes.Postfix_Name}</span></p>
                    <p>{stat.attributes.Name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='catalog' className='section_catalog relative'>
        <div className='section_header container m-auto'>
          <div className='header_line'></div>
          <h1>НАШ КАТАЛОГ</h1>
        </div>
        
        <div className='catalog_main container m-auto'>
          {products.data.map(product => (
            <div className='catalog_object'>
              <div className='object_photo'>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='' width={364} height={320}/>
                
                <LikeCatalog/>
              </div>
              <div className='object_desc'>
                <h1>{product.attributes.name}</h1>
                <p>В наличии - {product.attributes.count} шт.</p>
                <p className='object_desc_text'>{product.attributes.description}</p>
                <div className='object_price'>
                  <p>{product.attributes.price}</p>
                  <p>₽</p>
                </div>
                <div className='object_buttons'>
                  <a className='object_button1' href={product.attributes.slug + '/'}>Подробнее</a>
                  <button className='object_button2'>Добавить в корзину</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href='#' className='down_button m-auto'>
          <button>
            Смотреть все товары
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#95F35A" stroke-linecap="square"/>
            </svg>
          </button>
        </a>
      </section>

      <section className='section_reasons relative'>
        <div className='section_header container m-auto'>
          <div className='header_line'></div>
          <h1>6 ПРИЧИН СОТРУДНИЧАТЬ С НАМИ</h1>
        </div>

        <div className='reasons container m-auto'>
          {teasers.data.map(teaser => (
            <div className='reason'>
              <div className='reason_icon'>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + teaser.attributes.image.data.attributes.url} alt='' width={70} height={70}/>
              </div>

              <div className='reason_text'>
                <p><span>{teaser.attributes.header}</span></p>
                <p>{teaser.attributes.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id='production'><Works works={works.data}/></div>

      <FAQ data={faq}/>

      <Questions/>
    </main>
  )
}
