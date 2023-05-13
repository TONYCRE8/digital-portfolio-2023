// imports
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// This footer function is for the display of the footer of the website
const Footer = () => {
    return (
        <footer>
            <div className="relative flex flex-col place-items-center px-64 max-sm:px-8 py-12 bg-dark text-white">
                <div className="z-10 flex flex-row justify-center items-center w-full h-full max-sm:grid max-sm:gap-4 max-sm:footer-grid">
                    <Image src="/logo.svg" alt="Hero Image" width={50} height={88} className='pb-4' style={{gridArea: 'logo'}} />
                    <div className="h-1 w-full bg-white ml-8 max-sm:ml-0" style={{gridArea: 'line1'}}></div>
                    <div className="h-1 w-full bg-white mr-8 max-sm:mr-0" style={{gridArea: 'line2'}}></div>
                    <div id="social-icons--footer" className='flex flex-row justify-end gap-4 pb-1' style={{gridArea: 'icons'}}>
                        <Link href="https://www.linkedin.com/in/anthonyingall/" alt="Tony Ingall on LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size='3x' />
                        </Link>
                        <Link href="https://www.twitter.com/tonycre8" alt="Tony Ingall on Twitter">
                            <FontAwesomeIcon icon={faTwitter} size='3x' />
                        </Link>
                        <Link href="https://www.instagram.com/tonycre8" alt="Tony Ingall on Instagram">
                            <FontAwesomeIcon icon={faInstagram} size='3x' />
                        </Link>
                    </div>
                </div>
                <div className="pt-20 flex items-start w-full h-full">
                    <p className="font-notoserif">
                        Built by Tony Ingall, 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;