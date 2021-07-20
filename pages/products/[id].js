// pages/products/[id].js

import { useRouter } from "next/router";

// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export async function getStaticPaths() {
  // const products = await getProductsFromDatabase()
  const products = [];
  const paths = products.map((product) => ({
    params: { id: product.id }
  }))

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths, fallback: true }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      // product: await getProductFromDatabase(params.id)
    },
    revalidate: 60
  }
}

export default function Product({ product }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  // Render product
}