import Button from "components/Button";
import Container from "components/Container";
import { Footer } from "components/Footer";
import Lorem from "components/Lorem";
import Nav from "components/Nav";

function HomeHeader() {
  return (
    <header className="bg-gray-100 py-2">
      <Nav />
      <Container className="md:my-16">
        <h2 className="text-lg w-full max-w-[1200px] md:mx-auto md:text-1xl md:text-left text-gray-500 font-normal my-2 md:my-8">
          Sugarcity.io is a community owned and run group of technologists, engineers, digital marketers and innovation enthusiasts, based in Mackay, Queensland.
          <br/>
          Our purpose is to bring the Mackay technology community together, break down silos and foster a positive and inclusive environment for all to participate in.
        </h2>
        <div className="flex flex-wrap align-center md:justify-center gap-y-2 gap-x-4 my-2 md:my-8">
          <Button large accent>
            Join us on Slack!
          </Button>
          <Button large>Some other CTA!</Button>
        </div>
        <img
          className="w-full mt-12 border-[16px] rounded-md border-gray-700 drop-shadow-xl"
          src="https://d33wubrfki0l68.cloudfront.net/10c522e1893fe76a55c3e32f8d6840b1e23889ce/c45a3/images/teaser.jpg"
        />
      </Container>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Container>
        <Lorem />
      </Container>
      <Footer />
    </>
  );
}
