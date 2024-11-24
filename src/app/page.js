// This is my Home page
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>
        <strong> Welcome to The Animal Crossing Collective </strong>
      </h1>
      <p>
        Love your villagers? So do we! This is the place to share your favourite
        Animal Crossing villagers and tell everyone why they&apos;re special to
        you. Whether it&apos;s their quirky personality, adorable design, or the
        countless memories you&apos;ve shared on your island, we want to hear it
        all!{" "}
      </p>

      <h3>Here&apos;s how you can join the fun:</h3>
      <p>
        🌟 Post about your favourite villager &mdash; share why they&apos;re
        your favourite and what makes them unique.
      </p>
      <p>
        💬 Comment on others posts &mdash; Found someone who loves the same
        villager? Or maybe you&apos;re intrigued by one you haven&apos;t met
        yet? Join the conversation!
      </p>
      <p>
        ❤️ Spread the love &mdash; Celebrate everyone&apos;s favourite
        characters and discover new ones to adore.
      </p>
      <p>
        Let&apos;s keep it cozy and kind—just like Animal Crossing itself! 🍃
      </p>
      <p>
        There are 413 villagers to chose from so start your first post today,
        and let&apos;s make this island feel like home! 🏝️
      </p>
      <Link href="/posts">
        <button>ENTER</button>
      </Link>
    </div>
  );
}
