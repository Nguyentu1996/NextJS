import CardCTA from '../coreui/card/card-cta'
import Paginator from '../coreui/paginator/paginator'

function ListItem({ pagination }) {
  return (
    <div className="d-flex flex-wrap px-0">
      <CardCTA item={'value'}/>
      <CardCTA />
      <CardCTA />
      <CardCTA />
      <CardCTA />
      <CardCTA />
      <CardCTA />
      {
        pagination === true && (
          <Paginator itemCount={800} pageNum={1} pageSize={40} pageCurrent={(pageCurrent) => console.log(pageCurrent)}/>
          )
      }

    </div>
  )
}
export default ListItem
