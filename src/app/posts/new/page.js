// This is the form to allow users to make a new post

import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function handleAddPost(formData) {
    "use server";

    const username = formData.get("username");
    const villager = formData.get("villager");
    const reason = formData.get("reason");

    await db.query(
      `INSERT INTO posts (username, villager, reason) VALUES ($1, $2, $3)`,
      [username, villager, reason]
    );

    redirect("/posts");
  }

  return (
    <div className="bg-primary">
      <h2>
        {" "}
        <strong>Add a new Post</strong>
      </h2>

      <form action={handleAddPost}>
        <label>
          <strong> Username:</strong>
        </label>
        <input name="username" placeholder="Your Name" />

        <label>
          <strong> Favourite Villager: </strong>Favourite Villager
        </label>
        <input name="villager" placeholder="Favourite Villager" />

        <label>
          <strong>Why? </strong>
        </label>
        <input name="reason" placeholder="Why the villager is your favourite" />
        <button>Submit</button>
      </form>
    </div>
  );
}
