import Link from "next/link";
import "./global.css";
import { Gluten } from "next/font/google";

export const gluten = Gluten({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gluten.className} `}>
        <div>
          <header>
            <nav>
              <Link href="/">Welcome!</Link> |
              <Link href="/posts">All Posts</Link> |
              <Link href="/posts/new">Add a New Post</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>&copy; The Animal Crossing Collective 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
