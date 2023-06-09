import Head from "next/head";
import Contact from "./contact";

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
        <div>
          <Contact></Contact>
        </div>
      </main>
    </>
  );
}
