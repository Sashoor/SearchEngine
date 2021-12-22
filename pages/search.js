import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();

  {
    console.log(results);
    return (
      <div>
        <Head>
          <title>{router.query.term} - Google Search</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <SearchResults results={results} />
      </div>
    );
  }
}
export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyD4sbQoBg5g1bN39XmJRRlGbV1jLwNi_1E&cx=6df86510db68bbd94&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
