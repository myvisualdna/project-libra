import React, { useState } from "react";
import styles from "../styles/tweetBox.module.scss";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  //1. Definimos el el texto y la imagen del Tweet
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  //3. We define the method to send a tweet to the database
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "The Mandalorian",
      username: "Mando",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lumiere-a.akamaihd.net/v1/images/5e97081f4e43710001cd36e6-image_40692e05.jpeg?region=0%2C0%2C1536%2C864",
    });

    //We re-set again the states on thosw two components
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className={styles.tweetBox}>
      <form>
        <div className={styles.tweetBox__input}>
          <Avatar src="https://picsum.photos/200/300" />
          <input
            //2. We connect the states defined on item 1, here the text message of the tweet. OnChnage will setup the method to modify "TweetMessage" state with whatever we write in the input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          //The same that item 2
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className={styles.tweetBox__imageInput}
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          //4. We include de method defined in item 3
          onClick={sendTweet}
          type="submit"
          className={styles.tweetBox__tweetButton}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
