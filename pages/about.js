import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";

const About = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <h1>This is About page</h1>
        <p>Frontend - value your data privacy</p>
        <p>
          The project was created as an entry for the Hashnode x Netlify
          hackathon.
        </p>
      </ContentWrapper>
    </div>
  );
};

export default About;
