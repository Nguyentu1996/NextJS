import Link from 'next/link';
import Item from './item';


function CardCTA({ item, addToCartClick }) {
  return (
    <Link href={'/'+item.slugUrlFv} passHref>
      <Item item={item} addToCartClick={addToCartClick} />
    </Link>
  )
}
export default CardCTA
