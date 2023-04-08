import { useRouter } from "next/router";

const newsId = () => {
  const router = useRouter();
  const id = router.query.newsId;
  return <div><h1>this is news page {id}</h1></div>;
};

export default newsId;
