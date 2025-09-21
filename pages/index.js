import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <title>rogeriocsilva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="container">
        <section className="home">
          <div class="header">
            <h1 class="header--title">Rogério Silva</h1>
            <h4 class="header--sub-title">Software engineer @ Revolut</h4>
          </div>
          <div className="social">
            <a
              href="https://github.com/rogeriocsilva"
              target="_blank"
              rel="noopener"
              className={"social--link"}
            >
              <img
                src="/images/iconmonstr-github-1.svg"
                alt="github icon"
                className="social--icon github svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rogeriocsilva21/"
              target="_blank"
              rel="noopener"
              className="social--link"
            >
              <img
                src="/images/iconmonstr-linkedin-1.svg"
                alt="linkedin icon"
                className="social--icon linkedin svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://twitter.com/_rogeriocsilva"
              target="_blank"
              rel="noopener"
              className="social--link"
            >
              <img
                src="/images/iconmonstr-twitter-1.svg"
                alt="twitter icon"
                className="social--icon twitter svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://open.spotify.com/user/1167029914?si=y_IqceylRiCKC9RuWaoJow"
              target="_blank"
              rel="noopener"
              className="social--link"
            >
              <img
                src="/images/iconmonstr-spotify-1.svg"
                alt="spotify icon"
                className="social--icon spotify svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.last.fm/user/rogeriocsilva"
              target="_blank"
              rel="noopener"
              className="social--link"
            >
              <img
                src="/images/iconmonstr-last-fm-1.svg"
                alt="lastfm icon"
                className="social--icon last-fm svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://letterboxd.com/rogeriocsilva/"
              target="_blank"
              rel="noopener"
              className="social--link"
            >
              <img
                src="/images/letterboxd-decal-dots-pos-mono.svg"
                alt="letterboxd icon"
                className="social--icon letterboxd svg"
                width={24}
                height={24}
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
