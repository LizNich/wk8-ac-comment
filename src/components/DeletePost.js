// This component goes in the posts page.js = App/posts/page.js
"use client";

import { useRouter } from "next/navigation";

export function DeletePost({ postID }) {
  const router = useRouter();

  const deletePost = async () => {
    const response = await fetch(`/posts/${post.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //console.log(data);
    router.push("/posts");
  };

  return (
    <div>
      <button onClick={() => deletePost(postID)}>
        <strong>x</strong>
      </button>
    </div>
  );
}

//import Image from 'next/image';
//import myImage from '/public/my-image.png'; // Replace with your image path
