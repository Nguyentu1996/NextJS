import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, isMobile }) {
  const LayoutComponent = () => {
    if (isMobile) {
      return <div>Mobile Layout Init</div>
    } else {
      return (
        <div className={'m-w-app'} style={{ display: 'flex', flex: '1 1', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <div id='DESKTOP' className="flex-grow-1">{children}</div>
          <Footer />
        </div>
      )
    }
  }
  return <LayoutComponent />

}