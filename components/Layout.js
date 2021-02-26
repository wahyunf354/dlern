import Head from "next/head";
function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </div>
  );
}

export default Layout;
