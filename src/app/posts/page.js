// This page shows all the posts

import Link from "next/link";

export default async function PostPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch(
    "https://wk8-ac-comment-kgy50keiv-liz-nicholsons-projects.vercel.app/"
  );
  const posts = await response.json();

  if (searchParams.sort === "asc") {
    posts.sort((a, b) => a.title.localeCompare(b.title)); // A-Z
  } else if (searchParams.sort === "desc") {
    posts.sort((a, b) => b.title.localeCompare(a.title)); // Z-A
  }

  return (
    <div>
      <h2>Posts</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> |{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => {
          return (
            <Link key={posts.id} href={`/posts/${posts.id}`}>
              <h3>{posts.username}</h3>
              <p>{posts.villager}</p>
              <p>{posts.reason}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

// if I visit /posts?sort=desc, then the searchParams is equal to:
// { sort: "desc" }
