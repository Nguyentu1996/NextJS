import Icons from '../icons'

// eslint-disable-next-line no-unused-vars
function SearchBar(props) {
  return (
    <>
      <div className="position-relative">
        <input className="p-1 pe-5 h-3 px-3 w-100 border-r1 border border-light bg-secondary-300" />
        <div
          className="position-absolute top-0 end-0 fs-5 w-px-5 h-full d-flex justify-content-center align-items-center bg-orange-300 border-r1"
        >
          <Icons.HiOutlineSearch className="text-white" />
        </div>
      </div>
    </>
  )
}
export default SearchBar
