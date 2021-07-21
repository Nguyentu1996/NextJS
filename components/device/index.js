import dynamic from 'next/dynamic'

const Device = dynamic(() => import('./device'), { ssr: true })

export default Device
