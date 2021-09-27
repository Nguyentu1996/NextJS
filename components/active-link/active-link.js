import { useRouter } from 'next/router'

function ActiveLink({ className, children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a id="no-hover" href={href} onClick={handleClick} className={className} >
      {children}
    </a>
  )
}

export default ActiveLink