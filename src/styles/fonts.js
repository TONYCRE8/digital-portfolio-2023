import { Asap, Noto_Serif } from '@next/font/google';

const asap = Asap({subsets: ['latin'], variable: '--fontAsap'});
const asapBold = Asap({subsets: ['latin'], weight: '700', variable: '--fontAsapBold'});
const notoSerif = Noto_Serif({subsets: ['latin'], style: 'italic', weight: '400', variable: '--fontNotoSerif'});

export {asap, notoSerif, asapBold}