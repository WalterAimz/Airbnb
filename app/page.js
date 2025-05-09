//import Image from "next/image";
import Header from "./header";
import Barner from "./Barner";
import SmallCard from "./smallCard";
import MiddleCard from "./middleCard";
import LargeCard from "./largeCard";
import Footer from "./footer";

export const metadata = {
  title: "Airbnb",
  description: "Clone by Walter",
};

export default async function Home() {
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'; // fallback for local dev

const [exploreRes, cardRes] = await Promise.all([
  fetch(`${baseUrl}/api/exploreData`, { cache: 'no-store' }),
  fetch(`${baseUrl}/api/cardData`, { cache: 'no-store' }),
]);

  const [exploreData, cardData] = await Promise.all([
    exploreRes.json(),
    cardRes.json(),
  ]);

  return (
    <div>
      <Header />
      <Barner />
      <main className="max-w-7xl mx-auto  px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl font-semibold pb-5">Explore Nearby</h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ id, img, location, distance }) => (
              <SmallCard
                key={id}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -m-3"
          >
            {cardData.map(({ title, img }) => (
              <MiddleCard title={title} img={img} key={img} />
            ))}
          </div>
        </section>

        <LargeCard 
        img='/outdoor.jpg'
        title='The Greatest Outdoors'
        description="Wishlist cursted by Airbnb"
        buttonText="Get Inspired"
        />

      </main>
      <Footer />
    </div>
  );
}
