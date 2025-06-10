import Link from "next/link";
import NewItem from "./NewItem";
export default function Page(){

    return (
        <main className="max-w-2xl mx-auto py-6">
            <h1>Add new item</h1>
            <p className="text-gray-500 mb-4">Add a new item to the list below.</p>
            <Link href="/" className="text-amber-800 underline mb-4 block">Back to Home</Link>
            <NewItem />
        </main>
    );
}