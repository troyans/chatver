import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SeoProps) => {
  //You can update your details here
  const defaultTitle = "Chatver - Chatbot for Cust.Service";
  const defaultDescription = "Chatver - Chatbot for Cust.Service";
  const defaultImageLink = "https://www.pagepe.com/pagepeHeader2.png";
  const url = "https://www.chatver.com";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      <meta itemProp="name" content={title || defaultTitle} />
      <meta
        itemProp="description"
        content={description || defaultDescription}
      />
      <meta itemProp="image" content={defaultImageLink || image} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={defaultImageLink || image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={defaultImageLink || image} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default SEO;
