import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function CommentFormPage() {
  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    await db.query(`INSERT INTO comments (username, comment) VALUES ($1, $2)`, [
      username,
      comment,
    ]);

    // redirect("/posts/${post.id}");
  }

  return (
    <div>
      <h1>
        I would like to put this on the previous page Add New Comment HERE on a
        seperate page
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
