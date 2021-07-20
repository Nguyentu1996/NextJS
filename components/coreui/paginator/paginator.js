import { useState, useEffect, useMemo } from 'react'
import classNames from 'classnames';
import Icons from '../icons'


function Paginator({ itemCount, pageCurrent, pageNum, pageSize }) {

  const [isActive, setActive] = useState(pageNum)
  const [rangeWithDots, setRangeWithDots] = useState([])
  const itemNumber = itemCount && ((itemCount / pageSize) < 1 ? 1 : ((itemCount - itemCount % pageSize) / pageSize))
  const activeStyle = { color: '#fff', backgroundColor: '#fd7e14' }
  const classNameItemFirstLast = classNames({ 'visibility-hidden': itemNumber < 2 }, 'page-item')

  useEffect(() => {
    setRangeWithDots(pagination(isActive))
  }, [itemNumber, isActive])

  const pageItemMemo = useMemo(() => {
    return rangeWithDots.map((page, index) =>
      <li
        className="page-item"
        key={index}
        onClick={() => pageCurrent(page)}
      >
        <a className="page-link"
          style={(page === isActive) ? activeStyle : {}}
          onClick={() => pageChanges(page)}
        >
          {page}
        </a>
      </li>
    )
  }, [rangeWithDots])

  const nextPrevious = (action) => {
    if (!action && isActive < itemNumber) {
      return setActive(isActive + 1)
    }
    if (isActive === 1) return

    setActive(isActive - 1)
  }

  const pageChanges = (page) => {
    if (typeof page === 'number') {
      setActive(page)
    }
  }

  function pagination(c) {
    let current = c,
      last = itemNumber,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push('...')
        }
      }
      rangeWithDots.push(i)
      l = i;
    }

    return rangeWithDots;
  }

  return (
    <div className="w-100 d-flex justify-content-center">
      <ul id="pagination" className="pagination" aria-label="Page navigation">
        <li className={classNameItemFirstLast} aria-label="Previous" onClick={() => nextPrevious(true)}>
          <a className="page-link" aria-hidden="true">
            <Icons.BsChevronLeft />
          </a>
        </li>
        { pageItemMemo }
        <li className={classNameItemFirstLast} aria-label="Next" onClick={() => nextPrevious(false)} >
          <a className="page-link" aria-hidden="true">
            <Icons.BsChevronRight />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Paginator