import { useRouter } from "next/router";
import useSwr from "swr";

const id = () => {
  const { query } = useRouter();
  const { data, error } = useSwr(`/api/people/${query.id}`, (url) =>
    fetch(url).then((res) => res.json())
  );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <h1>{`This is ${data.name} page`}</h1>;
};

export default id;
