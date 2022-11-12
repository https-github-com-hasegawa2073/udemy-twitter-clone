import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const postData = collection(db, "posts");
  console.log(postData);
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        userName="hasegawa2073"
        verified={true}
        text="初めてのツイート"
        avatar="https://pbs.twimg.com/profile_images/1589308446285103105/QRQeKyOJ_400x400.jpg"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
