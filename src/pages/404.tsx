
import { PageProps } from 'gatsby'
import React from 'react'


import { Seo } from 'components/atoms/Seo'

import { Layout } from 'views/Layout'

const NotFoundPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
    </Layout>
  )
}

export default NotFoundPage
