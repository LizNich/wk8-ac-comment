import Link from "next/link";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen justify-between">
          <header className="h-10  bg-red-500">
            <nav>
              <Link href="/">Welcome!</Link> |
              <Link href="/posts">All Posts</Link> |
              <Link href="/posts/new">Add a New Post</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="h-10 bg-blue-500 text-center">
            <p>&copy; The Animal Crossing Collective 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
