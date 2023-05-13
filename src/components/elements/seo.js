// import next seo
import { NextSeo } from 'next-seo';

const SEO = ({title, description, pageType}) => {
    var openGraph = {
        url: 'https://www.mysite.com',
        title: title,
        description: description,
        locale: 'en_UK',
        /* images: [
            {
                url: 'https://www.mysite.com/images/og-image.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
            },
        ], */
        themeColor: '#c796db',
        site_name: 'TONYCRE8',
    }
    if (pageType === 'blog') {
        openGraph.type = 'article'
        /* add article data here later */
    } else {
        openGraph.type = 'website'
    }

    return (
        <NextSeo
        title={title + ' | Tony Ingall\'s Digital Portfolio'}
        description={description}
        canonical='https://www.tonycre8.co.uk'
        openGraph={openGraph}
        twitter={{
            handle: '@TONYCRE8',
            site: '@TONYCRE8',
            cardType: 'summary_large_image',
        }}
        />
    )
}

export default SEO;