import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import '../styles/index'
import '../styles/_custom-theme.css'
import '../styles/_font-weight.css'
import '../styles/_height.css'
import '../styles/_utilities.css'
import '../styles/_width.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout.js'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const { locale } = router;
  // const { i18n } = useTranslation();

  // useEffect(() => {
  //     i18n.changeLanguage(locale);
  // }, [locale, i18n]);


  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Add a shopping cart to your site in minutes." />
          <meta property="og:title" content="Thương mại điện tử by Tú kute" />
          <meta property="og:description" content="Add a shopping cart to your site in minutes." />
          <meta property="og:url" content="https://snipcart.com/" />
          <meta property="og:type" content="website" />
        </Head>
        <main className="m-h-full">
          <Component {...pageProps} />
        </main>
      </div>
    </Layout>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
{/* <button
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
</button> */}