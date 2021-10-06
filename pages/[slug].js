// pages/products/[id].js
import { CContainer } from "@coreui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/home/search-header";
import ItemDetails from "../components/item-details/item-details";
import { productService } from '../services/product-service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { domain } from '../config';
import Breadcrumb from "../components/coreui/breadcrumb/breabcrumb";

// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export async function getStaticPaths() {
  const products = await productService.getAllProduct()
  
  const paths = products.map((product) => ({
    params: { slug: product.slugUrlFv }
  }))

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths, fallback: true }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params, locale }) {
  return {
    props: {
      product: await productService.getProductBySlug(params.slug),
      images: await productService.getProductImageBySlug(params.slug),
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),

    },
    revalidate: 60
  }
}

export default function Product({ product, images }) {

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
    // Render product
    return (
      <>
        <Head>
          <title>{product[0].itemInfoFv}  | Nông Sản Việt Nam</title>
          <link rel="canonical" href={domain + router.query.slug} />
          <meta name="description" content={product[0].itemDetailFv} />
          <meta name="keywords" content={product[0].keywordsCdFv} />
          <meta property="og:title" content={product[0].itemInfoFv} />
          <meta property="og:image" content={product[0].imageUrlFv} />
          <meta property="og:description" content={product[0].itemSummaryFv} />
        </Head>
        <SearchHeader />
        <div className="bg-secondary-300">
            <Breadcrumb />
            <CContainer lg className="bg-white">
                <ItemDetails item={product[0]} images={images} />
            </CContainer>
        </div>
      </>
    )
  
}

