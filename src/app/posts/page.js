import Link from "next/link";

export default function PostPage({ searchParams }) {
  // if I visit /posts?sort=desc, then the searchParams is equal to:
  // { sort: "desc" }

  return (
    <div>
      <h2>Posts</h2>
      <p>This page shows a list of all the posts from our database</p>
      <br></br>
      <p>add the posts here </p>
      <p>and each post needs a link to its comments page</p>
      <p>and I need a link to the newpostpage form</p>
    </div>
  );
}
