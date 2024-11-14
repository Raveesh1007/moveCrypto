import { Coins } from "./Components/Coin";
import { Navbar } from "./Components/ui/Navbar";

export default async function Home() {
  return (
    <div className="bg-gradient-to-b from-black from-30% via-violet-950 via-60% to-violet-300 rounded-b-3xl sm:bg-gradient-to-br sm:from-black sm:from-30% sm:via-violet-950 sm:via-60% sm:to-violet-300 sm:rounded-b-3xl ">
      <Navbar />
      <div>
        <Coins />
      </div>
    </div>
  );
}