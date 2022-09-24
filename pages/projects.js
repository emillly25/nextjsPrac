import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projectData }) {
  console.log(projectData);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 mb-10 ">
        <Head>
          <title>Emily practice</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl ml-20">
          총 프로젝트:
          <span className="pl-4 text-blue-500">{projectData.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8 w-full">
          {projectData.map((el) => {
            return <ProjectItem key={el.id} data={el} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

//빌드타임에 호출 , 데이터를 가져온다음 화면에 랜더링, 서버콘솔에 찍힘
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  );
  const result = await res.json();
  const projectData = result.results;

  return {
    props: { projectData }, // will be passed to the page component as props
  };
}