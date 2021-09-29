// import useSWR from 'swr'

import { CContainer, CRow, CCol } from "@coreui/react"
import Breadcrumb from "../../components/coreui/breadcrumb/breabcrumb"
import SearchHeader from "../../components/home/search-header"
import { useSelector } from "react-redux";
import ShoppingCartItems from "../../components/shopping-cart-items/shopping-cart-items";
import Icons from "../../components/coreui/icons";
import Section from "../../components/coreui/section/section";
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
  const { orderCart } = useSelector((state) => state)
  // // fetchAPI is the function to do data fetching
  // const { data, error } = useSWR('/api/cart', fetchAPI)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  function decreaseQuantity() {

  }
  function increaseQuantity() {

  }
  return <>
    <SearchHeader />
    <div className="bg-secondary-300">
      <Breadcrumb menu={'Shopping cart'} />
      <CContainer lg className="">
        <CRow className="d-flex m-h-350">
          <CCol sm={8} className="mt-2" >
            <ShoppingCartItems
              items={orderCart.result}
              height={200} width={200}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}/>
          </CCol>
          <CCol sm={4}>
            <div className="h-200 bg-white p-3">
              <h4>Subtotal</h4>
            </div>
          </CCol>
         
        </CRow>
      </CContainer>
    </div>
  </>
}
export default ShoppingCart