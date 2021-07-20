import { CContainer } from '@coreui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Section from '../components/coreui/section/section'
import ListItem from '../components/home/list-item'
import Menu from '../components/home/menu'
import SearchHeader from '../components/home/search-header'
import SliderGroup from '../components/home/slider-group'
import nextI18NextConfig from '../next-i18next.config'



function Home({ deviceType, products }) {
  const { t } = useTranslation('common');

  let componentToRender
  if (deviceType === 'mobile') {
    componentToRender = "mobile"
  } else {
    componentToRender = "desktop"
  }


  return (
    <>
      <SearchHeader />
      <Menu />
      <div id="content" className="bg-secondary-300 pt-lg-3 m-w-row">
        <CContainer lg >
          <SliderGroup />
          <Section title="deal hot" />
          <ListItem />
          <Section title="Vietnamese agricultural products" />
          <ListItem pagination />
        </CContainer>
      </div>
    </>
  )
}
// This function runs at build time on the build server
export async function getStaticProps(context) {
  return {
    props: {
      // products: await getProductsFromDatabase()
      ...(await serverSideTranslations(context.locale, ['common'], nextI18NextConfig)),

    }
  }
}

// export async function getServerSideProps(context) {
//   const UA = context.req.headers['user-agent'];
//   const isMobile = Boolean(UA.match(
//     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//   ))

//   return {
//     props: {
//       deviceType: isMobile ? 'mobile' : 'desktop',
//       ...(await serverSideTranslations(context.locale, ['common'], nextI18NextConfig)),
//     }
//   }
// }

export default Home
