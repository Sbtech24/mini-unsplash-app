import ImageContainer from "@/components/ImageContainer";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <>
    <header className="bg-[#DDE3EA] w-full p-20">
      <Input placeholder="Search for Photo" className="max-w-1/2 bg-white mx-auto"/>
    </header>
    <main>
      <ImageContainer/>

    </main>
    </>
  );
}
