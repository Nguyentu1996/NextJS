import { CContainer } from "@coreui/react"
import { useRouter } from "next/router"
import Breabcrumb from "../../components/coreui/breadcumb/breabcrumb"
import ItemDetails from "../../components/item-details/item-details"
import Head from 'next/head'
import SearchHeader from "../../components/home/search-header"

export default function Product({ product }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    // Render product
    return (
      <>
        <Head>
          <title>Xoài Ông Tú | Nông Sản Việt Nam</title>
          <link rel="canonical" href="https://domain.com/xoai-chua" />
          <meta name="description" content="Xoài tuy chua nhưng giá không chua" />
          <meta name="keywords" content="Xoài, Xoài ngon, Trái Cây, Organic, Đặc sản" />
          <meta property="og:title" content="Xoài Ông Tú | Nông Sản Việt Nam" />
          <meta property="og:image" content="http://social/api-share/Xoai_500500.png" />
          <meta property="og:description" content="Xoài tuy chua nhưng giá không chua" />
        </Head>
        <SearchHeader />
        <div className="bg-secondary-300">
            <Breabcrumb />
            <CContainer lg className="bg-white">
                <ItemDetails />
            </CContainer>
        </div>
      </>
    )

}