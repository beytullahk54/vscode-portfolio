import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Beytullah Kahraman is an avid backend developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="beytullah kahraman, beytullah, kahraman, web developer portfolio, beytullah web developer, beytullah developer, backend developer, beytullah kahraman portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Beytullah Kahraman's Portfolio" />
      <meta
        property="og:description"
        content="A backend developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Beytullah Kahraman',
};
