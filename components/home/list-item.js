import CardCTA from '../coreui/card/card-cta'
import Paginator from '../coreui/paginator/paginator'

function ListItem({ pagination }) {
  return (
    <div className="d-flex flex-wrap px-0">
      <CardCTA item={{id: 1}}/>
      <CardCTA item={{id: 2}}/>
      <CardCTA item={{id: 3}}/>
      <CardCTA item={{id: 4}}/>
      <CardCTA item={{id: 5}}/>
      <CardCTA item={{id: 6}}/>
      <CardCTA item={{id: 7}}/>
      {
        pagination === true && (
          <Paginator itemCount={800} pageNum={1} pageSize={40} pageCurrent={(pageCurrent) => console.log(pageCurrent)}/>
          )
      }

    </div>
  )
}
export default ListItem
