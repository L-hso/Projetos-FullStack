import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import "./timeline-post.scss";

export interface postInfo{
  id: string,
  profilePicture: string,
  name: string,
  address: string,
  text: string,
  likes: number,
  comments: number,
  retweets: number
}

export function TimelinePost({info}:{info: postInfo}) {
  return (
    <article className="tweet">
      <div className="tweet_owner_pp">
        <img
          src={info.profilePicture}
          alt="Profile picture"
        />
      </div>
      <div className="tweet_content">
        <hgroup>
          <span className="tweet_owner_name">{info.name}</span>
          {"  "}
          <span className="tweet_owner_adress">{info.address}</span>
        </hgroup>
        <p className="tweet_text">
          {info.text}
        </p>
        <menu className="tweet_options">
          <li className="tweet_comments" key={"comments_"+info.id}><MessageCircle /> {info.comments}</li>
          <li className="tweet_retweet" key={"retweet_"+info.id}><Repeat2 /> {info.retweets}</li>
          <li className="tweet_like" key={"likes_"+info.id}><Heart size="20"/> {info.likes}</li>
      </menu>
      </div>
      
    </article>
  );
}
