import Banner from "../components/about/banner";
import Info from "../components/about/info";
import Team from "../components/about/team";

function About() {
  return (
    <section className="space-y-[80px]">
      <Banner />
      <Info />
      <Team />
    </section>
  );
}

export default About;
