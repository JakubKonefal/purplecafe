import { PageProps, graphql } from 'gatsby'
import React from 'react'

import { Container } from 'components/atoms/Container'
import { Seo } from 'components/atoms/Seo'

import { TextSection } from 'components/molecules/TextSection'

import { AboutMe } from 'components/organisms/Homepage/AboutMe'
import { Hero } from 'components/organisms/Homepage/Hero'
import { Opinions } from 'components/organisms/Homepage/Opinions'
import { Pricing } from 'components/organisms/Homepage/Pricing'

import { Layout } from 'views/Layout'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Gatsby Starter" />
      <Hero
        title="Purple Cafe English"
        subtitle="konwersacje językowe"
        img={{
          src: data.astronaut?.childImageSharp?.gatsbyImageData!,
          alt: 'Kawa w fioletowej filiżance',
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    astronaut: file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`
