// imports
import Image from 'next/image';
import SEO from '../components/elements/seo';

const Home = () => {
  return (
    <main className='flex min-h-screen w-full flex-col text-center items-center justify-center px-64 max-sm:px-8'>
      <SEO title='Home' description='Tony Ingall is a web developer and digital marketer based in the UK.' pageType='page' />
      <h1 className='text-6xl uppercase font-asap font-bold font-sans'>This site is still pending...</h1>
      <p className='text-2xl font-asap'>Please check back later.</p>
    </main>
  )
}

export default Home;