import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";


const SEO = () => {

    const query = graphql`
        query SEO {
            site {
                siteMetadata {
                    description
                    image
                    title
                    twitterUsername
                    url
                }
              }
        }
    `

    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        description,
        image,
        title,
        twitterUsername,
        url,
    } = site.siteMetadata

    const seo = {
        title: title,
        description: description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`
    }

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}