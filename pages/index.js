import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button color="primary">Hello World</Button>
    </div>
  );
}
