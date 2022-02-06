import ContentWrapper from "../components/ContentWrapper";

const About = () => {
  return (
    <ContentWrapper>
      <h1>This is About page</h1>
      <p>
        Have you ever created an awesome article with a great cover image.
        Upload everything and BAAM, the{" "}
      </p>
      <p>Sharing = you are not in full control of how the </p>

      <h1>Privacy of the data</h1>
      <p>
        In this project the data privacy is a priority. All the cropping is done
        in the frontend. No image is ever uploaded, its all you, your image and
        your browser. Simple as that.
      </p>

      <h1>Additional notes</h1>
      <p>
        The project was created specifically as an entry for the Hashnode x
        Netlify Hackathon.
      </p>

      <h1>Final notes</h1>
      <p>
        The technical formatting should be the last thing you should worry
        about. Instead you should focus on what matters, creating quality
        content.
      </p>
      <p>Enjoy using Cropper.</p>
    </ContentWrapper>
  );
};

export default About;
