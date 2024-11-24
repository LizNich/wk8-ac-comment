// This is the new comment form - currently on a separate page
// It adds a comment and returns to the previous page

import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function CommentFormPage({ params }) {
  const post_id = params.id;

  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    await db.query(
      `INSERT INTO comments (username, comment, post_id) VALUES ($1, $2, $3)`,
      [username, comment, post_id]
    );
    redirect(`/posts/${post_id}`);
  }

  return (
    <div>
      <h1>
        <strong> Add a new Comment </strong>
      </h1>

      <form action={handleAddComment}>
        <label>
          <strong> Username:</strong>
        </label>
        <input name="username" placeholder="Your Name" />

        <label>
          <strong> Comment:</strong>
        </label>
        <input name="comment" placeholder="Add Comment" />

        <button>Post Comment</button>
      </form>
    </div>
  );
}
