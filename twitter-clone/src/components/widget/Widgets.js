import Search from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1588922383330861056"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="hasegawa2073"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/hasegawa2073"}
          options={{ text: "#reactjs is awesome", via: "hasegawa2073" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
