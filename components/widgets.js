import React from "react";
import styles from "../styles/widgets.module.scss";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className={styles.widgets}>
      <div className={styles.widgets__input}>
        <SearchIcon className={styles.widgets__searchIcon} />
        <input placeholder="Search Twitter" type="text" />"
      </div>

      <div className={styles.widgets__widgetContainer}>
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"30985317521904"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screeName="myTwitter"
          options={{ height: 400 }}
        />

        <TwitterShareButton
        url={"https://twitch.com"}
        options={{text: "#reactIsAwesome", via: "Andres"}} />
      </div>
    </div>
  );
}

export default Widgets;
