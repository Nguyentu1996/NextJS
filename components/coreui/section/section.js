
function Section({ title, className }) {
  return (
    <div className={className ? className : 'd-flex bg-white text-orange-300 p-3 mt-3 border-bottom'}>
      <span className="fs-6 fw-500 text-uppercase">{ title }</span>
    </div>
  )
}

export default Section
