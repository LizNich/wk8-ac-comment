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
      <h2>Add New Post - add rules blurb</h2>

      <form action={handleAddPost}>
        <label>Username</label>
        <input name="username" placeholder="username" />

        <label>Favourite Villager</label>
        <input name="villager" placeholder="change to dropdown using compo" />

        <label>Reason</label>
        <input name="reason" placeholder="reason" />

        <button>Add Post</button>
      </form>
    </div>
  );
}
