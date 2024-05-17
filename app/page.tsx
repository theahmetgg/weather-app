import Navbar from "./Components/Navbar";
export const metadata = {
  title: "Weather App",
  description: "So Cool",
};
export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx=[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
    </main>
  );
}
