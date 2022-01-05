import React, { Fragment } from 'react'
import Category from '../Category'
import { Row, Col } from 'reactstrap'

function MusicSection() {
  return (
    <Fragment>
      <p className="display-4 text-center">Music Section</p>
      <Row>
        {new Array(50).fill(1).map((_, index) => {
          return (
            <Col key={index} xs={12} sm={6} md={4} xl={3}>
              <Category
                title="bollywood"
                description="hindi songs"
                image="/"
                category={'categories'}
                slug="bollywood"
              />
            </Col>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default MusicSection
