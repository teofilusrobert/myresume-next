'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InProgress() {
  const [isLoading, setLoading] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      {<h1 className="text-2xl text-center">
        {isLoading ? "Fine! Don't fault us if something wrong happen!"
        : "Hey! We are still working on here!"}
      </h1>}
      <div className="flex justify-between">
        <Link href="/" className="text-blue-500 p-4">Go Back</Link>
        <button
          onClick={() => setLoading(true)}
          className={`${isLoading ? "animate-spin" : ''} text-red-500 p-4`}
        >
          {isLoading ? "Waiting..." : "I will wait"}
        </button>
      </div>
      <div className="flex">
        <div>
          <Image src="/images/beaver-builder.png" alt="beaver" width={150} height={150} />
        </div>
        <div>
          <Image src="/images/beaver-builder.png" alt="beaver" width={200} height={200} />
        </div>
        <div>
          <Image src="/images/beaver-builder.png" alt="beaver" width={150} height={150} />
        </div>
      </div>
    </section>
  );
}
