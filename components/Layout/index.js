import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Container } from 'reactstrap'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container className="mt-5" fluid>
        {children}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
