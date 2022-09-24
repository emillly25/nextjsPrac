import Animation from "./animation";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 emily 입니다!
          <br />
          오늘도 즐겁게~~
        </h1>
        <p className="mb-8 leading-relaxed">
          만천하의 보내는 예가 피가 생생하며, 대중을 귀는 이상은 힘있다. 구하지
          발휘하기 동산에는 청춘의 바로 앞이 아니다. 영락과 청춘은 청춘의 풀이
          과실이 끝에 것이다. 인간이 예가 장식하는 있으랴? 피가 끝까지 싸인
          뜨고, 우는 사는가 꾸며 아름다우냐? 용감하고 않는 시들어 구하지 그와
          운다. 것은 없는 커다란 하는 희망의 날카로우나 귀는 아름다우냐?
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
