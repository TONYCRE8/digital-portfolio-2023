// imports
import Image from 'next/image';

// This header function is for the display of the header of the website
const Header = () => {
    return (
        <header>
            <div className="relative flex place-items-center bg-dark text-white">
                <div className="z-10 flex flex-col items-center justify-center w-full h-full py-4">
                    <Image src="/logo.svg" alt="Hero Image" width={50} height={70}  />
                </div>
            </div>
        </header>
    )
}

export default Header;