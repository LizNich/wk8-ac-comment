// This is the comments page with the ability to add comments
import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import Link from "next/link";
//import { NewCommentPage } from "@/components/commentform"; //correct

export default async function SinglePostPage({ params }) {
  const { id } = params;

  // = the post
  const postResult = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = postResult.rows[0];

  // = all the relevant comments
  const commentsResult = await db.query(
    "SELECT * FROM comments WHERE post_id = $1",
    [id]
  );
  const comments = commentsResult.rows; // = all rows

  return (
    <div>
      <h2>
        {post.username}&apos;s favourite villager is ...🍃
        <strong>{post.villager}</strong>🍃
      </h2>
      <ul>
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <p>
              <strong>Member: </strong> {post.username}
            </p>
            <p>
              <strong>Favourite Villager: </strong> {post.villager}
            </p>
            <p>
              <strong>Why? </strong> {post.reason}
            </p>
          </Link>
        </li>
      </ul>
      <h3>
        <strong>Comments:</strong>
      </h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              {comment.username} - {comment.comment}
            </p>
          </li>
        ))}
      </ul>
      <Link href={`/posts/${post.id}/comment`}>
        <button>Add a Comment</button>
      </Link>
    </div>
  );
}
