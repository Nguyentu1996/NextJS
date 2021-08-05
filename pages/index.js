import { CContainer } from '@coreui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useState } from 'react'
import Section from '../components/coreui/section/section'
import Tabs from '../components/coreui/tabs/tabs'
import Menu from '../components/home/menu'
import SearchHeader from '../components/home/search-header'
import SliderGroup from '../components/home/slider-group'
import OrderCart from '../components/order-card/order-cart'
import SlickSlider from '../components/slick-slider/slick-slider'
import nextI18NextConfig from '../next-i18next.config'
import { productService } from '../services/product-service'

function Home(props) {
  const { t } = useTranslation('common');
  const {isSlideVisible, toggleSlidebar} = useState(false)

  return (
    <>
      <Head>
        <title>Nông Sản Việt Nam</title>
        <link rel="canonical" href="/domain.com" />
        <meta name="description" content="Thương mại nông sản." />
        <meta property="og:image" content="http://social/api-share/logo_500500.png" />
        <meta property="og:title" content="Thương mại nông sản" />
        <meta property="og:description" content="Add a shopping cart to your site in minutes." />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Amazon, Amazon.com, Trái Cây, Organic, Đặc sản, Online Shopping" />
      </Head>
      <SearchHeader />
      <Menu />
      <div id="content" className="bg-secondary-300 pt-lg-3 pb-lg-3">
        <CContainer lg >
          <SliderGroup dynamicBanner={props.dynamicBanner} banner1={props.banner1} banner2={props.banner2} />
          <Tabs
            tabsItem={['Sản phẩm nổi bật', 'Sản phẩm ưu đãi', 'sản phẩm giảm giá']}
            dataList={[props.productsHighLight, props.productsHotDeal, props.productsHotSell]}
          />
          <Section title="deal hot" />
          <SlickSlider products={props.productsHighLight} />
          <Section title="Vietnamese agricultural products" />
          <SlickSlider products={props.productAll} />
          <OrderCart  isSlideVisible />
        </CContainer>
      </div>
    </>
  )
}

// This function runs at build time on the build server
export async function getStaticProps(context) {
  const [productAll, productsHighLight, productsHotDeal, productsHotSell, dynamicBanner, banner1, banner2] = await Promise.all([
    productService.getAllProduct(),
    productService.getHighLightProductAll(),
    productService.getHotDealProduct(),
    productService.getHotSellProduct(),
    productService.getDynamicBanner(),
    productService.getBannerImage1(),
    productService.getBannerImage2()
   
  ])

  return {
    props: {
      productAll,
      productsHighLight,
      productsHotDeal,
      productsHotSell,
      dynamicBanner,
      banner1,
      banner2,
      ...(await serverSideTranslations(context.locale, ['common'], nextI18NextConfig)),
    },
    revalidate: 60
  }
}


export default Home
