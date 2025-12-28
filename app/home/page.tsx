export const metadata = {
  title: "1O1.PROJECTS // HOME",
  description: "Portfolio by Nico Castro",
};

import Header from "@/components/headers";
import ProfileComponent from "@/components/home-components/ProfileComponent";
import HelloCard from "@/components/home-components/HelloCard";
import TitleHeader from "@/components/home-components/TitleHeader";

export default function Home() {
  return (
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url("/arches.png")' }}
      >
        <div className="homeRootLayout flex">
          <section>
            <ProfileComponent />
          </section>
          <section>
            <TitleHeader />
            <HelloCard />
          </section>
        </div>

        <Header page="home" />
      </div>
  );
}
