import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Container } from 'reactstrap'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container style={{ marginTop: 60 }} fluid>
        {children}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
