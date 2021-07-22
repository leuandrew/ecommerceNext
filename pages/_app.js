import Link from "next/link";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Component {...pageProps} />
      <footer>Andrew Leu was here</footer>
    </>
  );
};

export default MyApp;
