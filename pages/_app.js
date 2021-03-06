import Link from "next/link";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Padauk&display=swap");

  background: linear-gradient(to right, #eacda3, #d6ae7b);

  font-family: "Padauk", sans-serif;
  color: #444;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Normalize />
      <Navbar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </Container>
  );
};

export default MyApp;
