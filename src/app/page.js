// This is my Home page
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to The Animal Crossing Collective</h2>
      <p>
        Love your villagers? So do we! This is the place to share your favourite
        Animal Crossing villagers and tell everyone why they’re special to you.
        Whether it’s their quirky personality, adorable design, or the countless
        memories you’ve shared on your island, we want to hear it all! Here’s
        how you can join the fun: 🌟 Post about your favourite villager – Share
        why they’re your favourite and what makes them unique. 💬 Comment on
        others’ posts – Found someone who loves the same villager? Or maybe
        you’re intrigued by one you haven’t met yet? Join the conversation! ❤️
        Spread the love – Celebrate everyone’s favourite characters and discover
        new ones to adore. Let’s keep it cozy and kind—just like Animal Crossing
        itself! 🍃 We’re so excited to see who makes your top list and hear all
        your stories. There are 413 villagers to chose from! Start your first
        post today, and let’s make this island feel like home! 🏝️
      </p>
      <h3>Find posts here!</h3>
      <Link href="/posts">
        <button>ENTER</button>
      </Link>
    </div>
  );
}
