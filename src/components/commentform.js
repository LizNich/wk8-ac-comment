// This component goes in the comments page to allow new comments

"use client";
import { useRouter } from "next/navigation";

export default function NewCommentPage() {
  async function handleAddPost(formData) {
    const username = formData.get("username");
    const villager = formData.get("villager");
    const reason = formData.get("reason");

    await db.query(`INSERT INTO comments (username, comment) VALUES ($1, $2)`, [
      username,
      comment,
    ]);

    //   redirect("/posts");
    // }

    return (
      <div>
        <h2>Add New Comment </h2>
        <form action={handleAddComment}>
          <label>Username</label>
          <input name="username" placeholder="username" />

          <label>Comment</label>
          <input name="comment" placeholder="comment" />

          <button>Add Comment</button>
        </form>
      </div>
    );
  }
}
