import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full items-center tracking-wide mb-20 lg:mb-0">
      <div className="flex-1 font-bold space-y-3 lg:space-y-4">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl space-y-2">
          <span className="block">Hi..</span>
          <span>I&apos;m Akmal</span>
        </h1>
        <h2 className="font-semibold font-mono text-2xl xl:text-3xl text-gray-700">
          I&apos;m Web Developer
        </h2>
        <Button variant="outline" className="mt-3 rounded-full" asChild>
          <Link href="/about">About me</Link>
        </Button>
      </div>

      <div className="flex-1 hidden md:block relative h-full">
        <Image src="/code-typing.svg" alt="Code typing image" fill />
      </div>
    </div>
  );
}
