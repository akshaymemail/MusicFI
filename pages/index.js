import styles from '../styles/Home.module.css'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import Link from 'next/link'
import { Fragment } from 'react'
import SongCard from '../components/SongCard'
import LatestRelease from '../components/LatestRelease'
import { latestSongs } from '../fake-data/fake-data'

export default function Home() {
  return (
    <Fragment>
      <LatestRelease latestSongs={latestSongs} />
    </Fragment>
  )
}
