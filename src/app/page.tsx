import Image from "next/image";
import HowToPlay from "../components/HowToPlay";
import PlayButton from "../components/PlayButton";
import Logo from "../components/Logo";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <main className="h-full main flex items-center justify-center ">
      <Landing />
    </main>
  );
}
