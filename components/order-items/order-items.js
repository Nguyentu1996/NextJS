import MyImage from "../coreui/image/image"

function OrderItems({ items }) {
  console.log("item ", items)

  return (
    <div className="order-items ">
      <div className="overflow-auto cart h-full px-2 py-1"> 
      {
        items.map((item, i) => 
          <div key={i} className="d-table w-100 item-shadow">
            <div className="image-wrapper d-table-cell p-8 w-20">
              <MyImage src={item.imageUrlFv} className="img-item-cta thumb" alt={item.slugUrlFv} width={80} height={80} />
            </div>
            <div className="d-table-cell position-relative ">
              <div className="d-flex justify-contents-center position-absolute width-full mt-3">
                image name
              </div>
            </div>
          </div>
        )
      }
      </div>
     

    </div>
  )
}
export default OrderItems
