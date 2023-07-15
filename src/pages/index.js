// imports
import Image from 'next/image';
import SEO from '../components/elements/seo';
import Section from '../components/layout/section';

const Home = () => {
  var container = {
    bg: 'bg-black',
  }
  var inner = {
    bg: 'bg-white',
    height: 'h-screen',
    display: 'flex',
    flexDirection: 'flex-col',
    justifyContent: 'justify-center',
  }
  return (
    <main className='flex flex-col text-center items-center justify-center'>
      <SEO title='Home' description='Tony Ingall is a web developer and digital marketer based in the UK.' pageType='page' />
      <Section
        props={{container, inner}}>
        <h1 className='text-6xl uppercase font-asap font-bold font-sans'>This site is still pending...</h1>
        <p className='text-2xl font-asap'>Please check back later.</p>
      </Section>
    </main>
  )
}

export default Home;