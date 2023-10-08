import Head from "next/head";
import DefaultLayout from "~/components/layout";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ location: "1,1", name: "World", id: "1", reporterName: "World", reporterPhone: "0303030" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1>Test</h1>
      </DefaultLayout>
    </>
  );
}
