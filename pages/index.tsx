import Button from "components/Button";
import Container from "components/Container";
import { Footer } from "components/Footer";
import Lorem from "components/Lorem";
import Nav from "components/Nav";
import Image from "next/image";
import featureImage from "../images/bike-on-cane.jpg";

function HomeHeader() {
  return (
    <header className="bg-gray-100">
      <Nav />
      <Container className="md:pb-16">
        <h2 className="text-xl md:text-center md:text-2xl text-gray-700 font-normal my-2 md:my-8">
          Sugarcity.io is a community owned and run group of technologists,
          engineers, digital marketers and innovation enthusiasts, based in
          Mackay, Queensland.
        </h2>
        <h3 className="text-lg md:mx-auto md:max-w-[500px] w-full md:text-center text-gray-600">
          Our purpose is to bring the Mackay technology community together,
          break down silos and foster a positive and inclusive environment for
          all to participate in.
        </h3>
        <div className="flex flex-wrap align-center md:justify-center gap-y-2 gap-x-4 my-2 md:my-8">
          <Button large accent>
            Join us on Slack!
          </Button>
          <Button large>Some other CTA!</Button>
        </div>
        <div className="w-full mt-12 border-[16px] rounded-md border-gray-700 drop-shadow-xl">
          <Image src={featureImage} alt="bike on cane" />
        </div>
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
