import { Html, Head, Main, NextScript } from 'next/document'
import { asap, asapBold, notoSerif } from '@/styles/fonts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const Document = () => {
  return (
    <Html lang="en" className={`${asap.variable} ${asapBold.variable} ${notoSerif.variable}`}>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
export default Document;