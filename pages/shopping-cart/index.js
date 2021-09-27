// import useSWR from 'swr'

import { CContainer, CRow } from "@coreui/react"
import Breadcrumb from "../../components/coreui/breadcrumb/breabcrumb"
import SearchHeader from "../../components/home/search-header"


// export async function getStaticPaths() {
//     const products = await productService.getAllProduct()
//     const paths = products.map((product) => ({
//       params: { slug: product.slugUrlFv }
//     }))

//     // fallback: false means pages that don’t have the
//     // correct id will 404.
//     return { paths, fallback: true }
//   }
function ShoppingCart() {
  // // fetchAPI is the function to do data fetching
  // const { data, error } = useSWR('/api/cart', fetchAPI)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  return <>
    <SearchHeader />
    <div className="bg-secondary-300">
      <Breadcrumb />
      <CContainer lg className="bg-white">
        <CRow className="d-flex m-h-350">
          shopping cart
        </CRow>
      </CContainer>
    </div>
  </>
}
export default ShoppingCart