import ContentWrapper from "../components/ContentWrapper";

const About = () => {
  return (
    <ContentWrapper>
      <h1>This is About page</h1>
      <p>
        Have you ever created an awesome article with a great cover image.
        Upload everything and the first thing you see is non positioned image.
      </p>
      <p>Sharing = you are not in full control of how the </p>
      <p>
        Another one is crossposting. You create a good looking image for one,
        but it looks bad on the other. Since it is from my own experience, I did
        a research on all the tech communities what resolutions and aspect
        ratios they use and created the crop presets here so you dont have spend
        time trying to figure out the resolutions.
      </p>

      <h1>Privacy of the data</h1>
      <p>
        In this project the data privacy is a priority. All the cropping is done
        in the frontend. No image is ever uploaded, its all you, your image and
        your browser. Simple as that.
      </p>

      <h1>Tech stack</h1>
      <p>The project is written in NextJS</p>

      <h1>License and updates</h1>
      <p>The project is under MIT licence.</p>
      <p>Feature requests and pull requests are welcomed in the GitHub repo</p>

      <h1>Additional notes</h1>
      <p>
        The project was created specifically as an entry for the Hashnode x
        Netlify Hackathon.
      </p>

      <h1>Whats next?</h1>
      <p>Continue to add presets</p>

      <h1>Final notes</h1>
      <p>
        The technical formatting should be the last thing you should worry
        about. Instead you should focus on what matters, creating quality
        content.
      </p>
      <p>Leave the image cropping issues at bay. Enjoy using Cropper.</p>
    </ContentWrapper>
  );
};

export default About;
