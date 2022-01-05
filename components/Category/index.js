import React, { Fragment } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'
import { useRouter } from 'next/router'

function Category({ title, description, image, category, slug }) {
  const router = useRouter()
  return (
    <Fragment>
      <Card
        inverse
        className="m-1"
        style={{ cursor: 'pointer' }}
        onClick={() => router.push(`${category}/${slug}`)}
      >
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/270"
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardImgOverlay>
      </Card>
    </Fragment>
  )
}

export default Category
