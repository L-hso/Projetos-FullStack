import { useRef } from "react";
import "./timeline-header.scss";
import { PiSparkle } from "react-icons/pi";
import axios from "axios";

export function TimelineHeader() {
  const tweetInputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <header>
      <span id="timeline_title">
        Home
        <i>
          <PiSparkle color="1da1f2" size="24px" />
        </i>
      </span>

      <section id="tweet_section">
        <div id="tweet_profile">
          <img
            src="https://i.pinimg.com/originals/cb/2c/15/cb2c15f4607465c0d92a92133e44382b.jpg"
            alt="profile picture"
          />
        </div>
        <section id="tweet_send_section">
          <textarea
            ref={tweetInputRef}
            id="tweet_input"
            placeholder="Whats happening?"
            cols={20}
            rows={4}
            maxLength={200}
          />
          <button
            id="tweet_button"
            onClick={async () => {
              axios.post(
                "https://symmetrical-space-adventure-r9rj7pxj5jghwq54-3333.app.github.dev/posts",
                {
                  profilePicture:
                    "https://i.pinimg.com/originals/cb/2c/15/cb2c15f4607465c0d92a92133e44382b.jpg",
                  name: "Luis",
                  address: "@L-hso",
                  text: tweetInputRef.current?.value ?? "",
                  likes: 0,
                  comments: 0,
                  retweets: 0,
                  postDate: new Date().getSeconds()
                }
              );

              tweetInputRef.current!.value = ""
            }}
          >
            Tweet
          </button>
        </section>
      </section>
      <hr id="timeline_separator" />
    </header>
  );
}
