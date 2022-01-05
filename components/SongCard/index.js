import Image from 'next/image'
import React, { useRef } from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import { useRouter } from 'next/router'

function SongCard({ song }) {
  const router = useRouter()
  return (
    <Card
      className="m-1"
      style={{ cursor: 'pointer' }}
      onClick={() => router.push('/favorites')}
    >
      <CardBody className="">
        <Row>
          <Col sm={4}>
            <Image
              loader={(width) => song.image + '?' + width}
              src={song.image}
              alt="name"
              height={200}
              width={200}
              layout="responsive"
            />
          </Col>
          <Col sm={8}>
            <p className="lead">{song.name}</p>
            <p className="text-muted">Movie : {song.movie.name}</p>
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
