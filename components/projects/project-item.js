import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.github.url;
  const description = data.properties.설명.rich_text[0].plain_text;
  const img = data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const startDate = data.properties.작업기간.date.start;
  const endDate = data.properties.작업기간.date.end;

  const calPeriod = (start, end) => {
    const startDateArr = start.split("-"); // ['2022','09','24']
    const endDateArr = end.split("-");

    let startDate = new Date(startDateArr[0], startDateArr[1], startDateArr[2]);
    let endDate = new Date(endDateArr[0], endDateArr[1], endDateArr[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        alt="커버"
        src={img}
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <h1 className="text-2xl font-bold ml-5 mt-5">{title}</h1>
      <a href={github} style={{ color: "black" }} className="ml-5">
        깃허브 바로가기
      </a>
      <p style={{ color: "black" }} className="mt-4 text-xl ml-5">
        {description}
      </p>
      <h3 className="ml-5">
        작업기간: {startDate} ~ {endDate} ({calPeriod(startDate, endDate)}일)
      </h3>
      <div className="flex gap-5 ml-5 mb-5 mt-3">
        {tags.map((el) => {
          return (
            <div
              key={el.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 "
            >
              {el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
