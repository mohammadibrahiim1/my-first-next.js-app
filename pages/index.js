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
        <div className="btn-group">
          <button className="btn btn-active">Button</button>
          <button className="btn">Button</button>
          <button className="btn">Button</button>
        </div>
      </main>
    </>
  );
}
