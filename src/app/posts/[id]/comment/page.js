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
        I would like to put this on the previous page - Add New Comment HERE
      </h1>

      <form action={handleAddComment}>
        <label>Username</label>
        <input name="username" placeholder="username" />

        <label>Comment</label>
        <input name="comment" placeholder="add comment" />

        <button>Add Comment</button>
      </form>
    </div>
  );
}
