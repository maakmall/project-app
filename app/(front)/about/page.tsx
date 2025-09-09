import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <div className="flex gap-12 h-full items-center tracking-wide">
      <div className="flex-1 hidden lg:block relative h-9/12">
        <Image src="/about.svg" alt="About me image" fill />
      </div>
      <div className="flex-1 font-bold space-y-3 lg:space-y-4 mb-20 lg:mb-0">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl">I&apos;m..</h1>
        <p className="font-normal text-lg lg:text-md xl:text-xl text-gray-700">
          A highly motivated individual with the ability to work independently
          or collaboratively in a team environment. Quick to adapt to new
          challenges and environments, with strong attention to detail and a
          commitment to delivering high-quality results. Possesses excellent
          communication skills, a strong sense of responsibility, and a
          continuous drive for personal and professional growth.
        </p>
        <Link href="/skills" className="underline underline-offset-3">See what can i do</Link>
      </div>
    </div>
  );
}
