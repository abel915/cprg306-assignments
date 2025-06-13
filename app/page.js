import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-6">
      <h1>Home</h1>
      <li><Link href="/week-2">week2</Link>
          <Link href="/week-3">week3</Link>
          <Link href="/Week-4">week4</Link>
          <Link href="/week-5">week5</Link>
          <Link href="/week-6">week6</Link>
      </li>
    </main>
  );
}
