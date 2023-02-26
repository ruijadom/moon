import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import "ui/styles/tailwind.css";

const Web: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turborepo Starter: Web</title>
        <meta name="description" content="Turborepo Starter: Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Turborepo Starter: Web</h1>
        <Button size="sm" onClick={() => console.log("click")}>Click</Button>
      </main>
    </>
  );
};

export default Web;
