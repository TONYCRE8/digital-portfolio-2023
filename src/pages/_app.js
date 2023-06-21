// styles
import '@/styles/globals.css';
import { asap, asapBold, notoSerif } from '@/styles/fonts';
// fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      :root {
        --font-asap: ${asap.style.fontFamily};
        --font-asap-bold: ${asapBold.style.fontFamily};
        --font-noto-serif: ${notoSerif.style.fontFamily};
      }
    `}</style>
    <main className={`${asap.className} ${asapBold.className} ${notoSerif.className}`}>
      <Component {...pageProps} />
    </main>
    </>
  )
}
