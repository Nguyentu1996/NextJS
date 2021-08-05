import CardCTA from '../coreui/card/card-cta'
import Paginator from '../coreui/paginator/paginator'
//TODO No use
function ItemList({ products, pagination }) {
  console.log('item list',products)
  return (
    <div className="d-flex flex-wrap p-1">
      {
        products.map(item => <CardCTA item={item} key={item.itemCdFv}/>)
      }
      
      {
        pagination === true && (
          <Paginator itemCount={800} pageNum={1} pageSize={40} pageCurrent={(pageCurrent) => console.log(pageCurrent)}/>
          )
      }

    </div>
  )
}
export default ItemList
