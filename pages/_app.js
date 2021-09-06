import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import '../styles/index'
import '../styles/_custom-theme.css'
import '../styles/_font-weight.css'
import '../styles/_height.css'
import '../styles/_utilities.css'
import '../styles/_width.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout.js'
import Device from '../components/device'

import { wrapper } from "../store/";


function MyApp({ Component, pageProps }) {

  return (
      <Device >
        {({ isMobile }) =>
          <Layout isMobile={isMobile}>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
        }
      </Device>
  )
}

export async function getInitialProps({ Component, ctx }) {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };
  // 2. Stop the saga if on server
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }
  // 3. Return props
  return {
    pageProps,
  };
}


export default wrapper.withRedux(appWithTranslation(MyApp, nextI18NextConfig))
/* <button
    value={language === 'en' ? 'da' : 'en'}
    onClick={(e) => {
        const locale = router.locale === 'en' ? 'da' : 'en';
        setCookie(locale);
        handleOnclick(e);
        router.push(
            `/${locale}`,
            `/${locale}`,
            { locale: false, }
        );
    }}
>
    {router.locale === 'en' ? (
        <img src={menuItems.data.body[5].items[0].image.url} />
    ) : (
        <img src={menuItems.data.body[4].items[0].image.url} />
    )}
</button> */
