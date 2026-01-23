import React from "react";
import Head from "next/head";

const HeadSeo = ({
    siteName,
    title,
    description,
    image,
    structuredData
}) => {
    return (
        <>
            <Head>
                <title>{`${title ? `${title}` : ``}`}</title>
                <meta name="title" content={title ? `${title}` : ``} />
                <meta name="description" content={description} />
                <meta name="googlebot" content="all" />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.samarachocolates.com/" />
                <meta property="og:title" content={title ? `${title}` : ``} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={siteName} />
                {image !== null && <meta property="og:image" content={image} />}
                <meta property="og:locale" content="id_ID" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title ? `${title}` : ``} />
                <meta property="twitter:description" content={description} />
                {image !== null && <meta property="twitter:image" content={image} />}

                {structuredData &&
                    <script
                        key="structured-data"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                    />
                }
            </Head>
        </>
    );
};

export default HeadSeo;