import Head from "next/head";
import PatientsComponent from "../src/components/patients/Patients";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          width="200"
          src="https://static.wixstatic.com/media/1bc220_51b838ce36e846e4a39f03fa2603519a~mv2.png/v1/fill/w_576,h_168,al_c,q_85,usm_0.66_1.00_0.01/avomd%20logo%20brainstorm.webp"
        />
        <PatientsComponent />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            width="100"
            src="https://static.wixstatic.com/media/1bc220_51b838ce36e846e4a39f03fa2603519a~mv2.png/v1/fill/w_576,h_168,al_c,q_85,usm_0.66_1.00_0.01/avomd%20logo%20brainstorm.webp"
          />
        </a>
      </footer>
    </>
  );
}
