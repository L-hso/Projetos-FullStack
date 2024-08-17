import "./timeline-header.scss";
import { PiSparkle } from "react-icons/pi";

export function TimelineHeader() {
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
            id="tweet_input"
            placeholder="Whats happening?"
            cols={20}
            rows={4}
            maxLength={200}
          />
          <button id="tweet_button">Tweet</button>
        </section>
      </section>
      <hr id="timeline_separator"/>
    </header>
  );
}
