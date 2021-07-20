import Image from 'next/image'
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';

function FirstPost() {
  const { t } = useTranslation('common');

  const YourComponent = () => (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  )
  return <>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h1>{t('hello')}</h1>
    <YourComponent />
  </>
}
export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
      // Will be passed to the page component as props
    },
  };
}
export default FirstPost