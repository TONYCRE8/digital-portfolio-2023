import { Asap, Noto_Serif } from 'next/font/google';

const asap = Asap({subsets: ['latin'], style: 'normal', weight: '400', variable: '--font-asap'});
const asapBold = Asap({subsets: ['latin'], style: 'normal', weight: '700', variable: '--font-asap-bold'});
const notoSerif = Noto_Serif({subsets: ['latin'], style: 'italic', weight: '400', variable: '--font-noto-serif'});

export {asap, notoSerif, asapBold}