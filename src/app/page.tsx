"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => route.push("./products")}
        className="bg-pink-600 border-b-4 border-b-while p-2 rounded-lg outline-none shadow-lg cursor-pointer text-center my-[auto]"
      >
        On Click change page !
      </button>
    </main>
  );
}
