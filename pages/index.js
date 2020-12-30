import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSwr from "swr";
import Link from "next/link";

export default function Home() {
  const { data, error } = useSwr(`/api/people`, (url) =>
    fetch(url).then((res) => res.json())
  );

  if (!data) {
    return (
      <div className={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.red}>React dojo practice</h1>
      <ul>
        {data.map((person, idx) => (
          <li key={idx}>
            <a>
              <Link href={`person/${person.id}`}>{person.name}</Link>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
