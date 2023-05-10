import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {Posts} from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share />
            {Posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}   
        </div>
    </div>
  )
}

export default Feed