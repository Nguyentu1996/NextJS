import Link from 'next/link'
import { useState } from 'react'
import Item from './item'


function CardCTA({ item }) {
  return (
    <Link href={'/products/details'} passHref>
      <Item item={item}/>
    </Link>
  )
}
export default CardCTA
