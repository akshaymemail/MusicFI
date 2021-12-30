import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import SongCard from '../SongCard'

function LatestRelease({ latestSongs }) {
  return (
    <Fragment>
      <p className="display-4">Latest Release</p>
      {latestSongs.length < 1 ? (
        <h1>No songs found</h1>
      ) : (
        <Row>
          {latestSongs.map((song, index) => (
            <Col xs={12} sm={6} xl={4} key={index}>
              <SongCard song={song} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  )
}

export default LatestRelease
