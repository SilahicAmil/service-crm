import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1> Index Page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
};

export default IndexPage;
