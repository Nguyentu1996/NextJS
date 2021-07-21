import { CContainer } from '@coreui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Section from '../components/coreui/section/section'
import ListItem from '../components/home/list-item'
import Menu from '../components/home/menu'
import SearchHeader from '../components/home/search-header'
import SliderGroup from '../components/home/slider-group'
import nextI18NextConfig from '../next-i18next.config'
import Head from 'next/head'
import { productService } from '../services/product-service'


function Home({ products }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Nông Sản Việt Nam</title>
        <link rel="canonical" href="/domain.com" />
        <meta name="description" content="Add a shopping cart to your site in minutes." />
        <meta property="og:image" content="http://social/api-share/logo_500500.png" />
        <meta property="og:title" content="Thương mại điện tử by Tú kute" />
        <meta property="og:description" content="Add a shopping cart to your site in minutes." />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Amazon, Amazon.com, Trái Cây, Organic, Đặc sản, Online Shopping" />
      </Head>
      <SearchHeader />
      <Menu />
      <div id="content" className="bg-secondary-300 pt-lg-3">
        <CContainer lg >
          <SliderGroup />
          <Section title="deal hot" />
          {/* <ListItem /> */}
          <Section title="Vietnamese agricultural products" />
          <ListItem pagination />
        </CContainer>
      </div>
    </>
  )
}

// 0:'ITEM_CD_FV' 
// 1:'ITEM_INFO_FV'
// 2:'PRODUCER_NAME_FV'
// 3:'IMAGE_LIST_CD_FV'
// 4:'PRICE_1_FN'       
// 5:'PRICE_2_FN'
// 6:'DISCOUNT_NUM_FN'
// 7:'SELL_NUM_FN'
// 8:'STAR_NUM_FN'

// 1:'Bơ Đà Lạt'
// 2:null
// 3:'1'
// 4:'600000.00000000'
// 5:'700000.00000000'
// 6:'20'
// 7:'500.00000000'
// 8:'3.00000000'
// This function runs at build time on the build server
export async function getStaticProps(context) {
  const products = await productService.getAll()
  return {
    props: {
      products: products,
      ...(await serverSideTranslations(context.locale, ['common'], nextI18NextConfig)),
    }
  }
}


export default Home
