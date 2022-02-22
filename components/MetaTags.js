import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>CropScore: An Online Image Cropper for Content Creators</title>
      <meta
        name="description"
        content="Resolutions and aspect ratios should be the last things you worry about.  See the match between the crop window and target use in the percentages."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cropper.madza.dev/" />
      <meta
        property="og:title"
        content="CropScore: An Online Image Cropper for Content Creators"
      />
      <meta
        property="og:description"
        content="Resolutions and aspect ratios should be the last things you worry about.  See the match between the crop window and target use in the percentages."
      />
      <meta property="og:image" content="/social-card.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://cropper.madza.dev/" />
      <meta
        property="twitter:title"
        content="CropScore: An Online Image Cropper for Content Creators"
      />
      <meta
        property="twitter:description"
        content="Resolutions and aspect ratios should be the last things you worry about.  See the match between the crop window and target use in the percentages."
      />
      <meta property="twitter:image" content="/social-card.png"></meta>
    </Head>
  );
};

export default MetaTags;
