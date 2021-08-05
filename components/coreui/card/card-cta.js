import Link from 'next/link';
import Item from './item';


function CardCTA({ item }) {
  return (
    <Link href={'/'+item.slugUrlFv} passHref>
      <Item item={item}/>
    </Link>
  )
}
export default CardCTA
