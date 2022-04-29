import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { getExperiences } from "../lib/functions";
import { Experience, MarkdownData } from "../lib/types";

type HomePageProps = {
  experiences: MarkdownData<Experience>[];
};

const Home: NextPage<HomePageProps> = (props) => {
  return (
    <div className={`container`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={``}>
        {props.experiences.map((exp) => (
          <>
            <MDXRemote {...exp.serializedContent} />
          </>
        ))}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getExperiences();

  return {
    props: {
      experiences: data,
    },
  };
};
