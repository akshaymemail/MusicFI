import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'

function SongCard({ song }) {
  console.log(song.movie)
  return (
    <Card className="m-1">
      <CardBody className="">
        <Row>
          <Col sm={4}>
            <Image
              loader={() => song.image}
              src={song.image}
              alt="name"
              height={'100%'}
              width={'100%'}
              layout="responsive"
            />
          </Col>
          <Col sm={8}>
            <p className="lead">{song.name}</p>
            <a href="#!" className="text-muted">
              Movie : {song.movie.name}
            </a>
            <p className="text-muted">
              Singer : {song.singers.map((singer) => singer.name).toString()}
            </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default SongCard
