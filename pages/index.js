import React from "react";
import Head from "next/head";
import Container from "../components/container";
import Sidebar from "../components/Sidebar";
import Feed from "../components/feed";
import styles from "../styles/styleIndex.module.scss";
import Widgets from "../components/widgets";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Next Project - Home</title>
      </Head>
      <Container>
        <div className={styles.app}>
          {/*Sidebar */}
          <Sidebar />

          {/*Feed */}
          <Feed />

          {/*Widgets */}
          <Widgets />
        </div>
      </Container>
    </div>
  );
};

export default Index;
