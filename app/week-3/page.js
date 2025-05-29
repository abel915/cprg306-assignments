import Link from "next/link";
import ItemList from "./item-list"; 
export default function Page() {
  return (
    <main className="max-w-2xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Week 3</h1>
      <Link href="/" className="text-amber-800 underline mb-4 block">Back to Home</Link>
      <ItemList />
    </main>
  );
}
import Item from "./item";
import { items } from "./item-list";
