import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main>
        <h1>hello world</h1>
        <Link href="/blog/blog1">blog</Link>
        <Image src="/pexels-photo.jpg" width={420} height={420} />
      </main>
    </>
  );
}
