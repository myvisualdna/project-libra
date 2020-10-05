import React, { useState, useEffect } from "react";
import styles from "../styles/feed.module.scss";
import TweetBox from "../components/tweetBox";
import Post from "../components/post";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  //1. Definimos posts y como modificarlo
  const [posts, setPosts] = useState([]);

  //2. En firebase, hacemos fetch de la collection "posts" y los docs que contiene dentro
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className={styles.feed}>
      {/*Header */}
      <div className={styles.feed__header}>
        <h2>Home</h2>
      </div>

      {/*TweetBox */}
      <TweetBox />

      {/*
      Ya habiendo hecho fetch de los post (paso 2) y habiendolo guardado en posts (paso 1), ahora loopeamos por cada uno de los docs que encontramos dentro de la collection posts (ver pagina)
      */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
