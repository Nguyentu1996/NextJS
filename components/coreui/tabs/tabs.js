import { useState } from "react"
import SlickSlider from "../../slick-slider/slick-slider"

function Tabs({ tabsItem, dataList }) {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <div id="tabs">
        <div className="d-flex bg-white text-orange-300 border-bottom cursor-pointer mt-3">
          {tabsItem && tabsItem.map((item, index) =>
            <div id="tab-item"
              key={'tab' + index + 1}
              className="fs-6 fw-500 text-uppercase pb-0 p-3"
              onClick={() => setActiveKey(index + 1)}
            >
              <span>
                {item}
              </span>
              {
                activeKey === index + 1 && (<div className="bg-orange-300 mt-2" style={{ height: '3px' }} />)
              }
            </div>
          )}

        </div>
        <div id="tabs-content">
          {dataList && dataList.map((data, index) =>
            <div key={'tab-content' + index + 1}
              style={activeKey === index + 1 ? { display: 'block' } : { display: 'none' }}>
                <SlickSlider products={data} />
            </div>
          )}
        </div>
      </div>

    </>
  )
}
export default Tabs