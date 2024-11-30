import { PageProps, graphql } from 'gatsby'
import React from 'react'

import { Container } from 'components/atoms/Container'
import { Seo } from 'components/atoms/Seo'

import { Layout } from 'views/Layout'

import media from 'styles/media'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
}) => {

  return (
    <Layout>
      <Seo title="Gatsby Starter" />
      <Container>
 sdas
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a")
    }
    astronaut: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
    cover: file(relativePath: { eq: "images/cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`
