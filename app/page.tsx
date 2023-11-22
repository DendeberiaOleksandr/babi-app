import Image from "next/image";
import bgImage from "@/public/bg/bg-1.png";

export default function Home() {
  return (
    <main>
      <div
        className="fixed top-0 left-0 blur-[5px] w-screen h-screen"
        style={{
          overflow: "hidden",
          zIndex: 0,
          backgroundImage: `url(${bgImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        style={{ zIndex: 1 }}
        className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-center items-center"
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
          className="min-w-[364px] min-h-[832px] flex flex-col px-8 py-20 rounded-md shadow justify-between"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-pink1 drop-shadow opacity-60">Babi</h1>
          </div>
          <input
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
            placeholder="Username"
            className="text-gray-600 drop-shadow-sm drop-shadow-pink1 placeholder:text-gray-500 px-4 py-2 rounded-md"
          />
          <input type="submit" className="px-4 py-2 rounded-md bg-primary text-white shadow-md opacity-80 hover:bg-pink1 duration-200 transition-colors"/>
        </div>
      </div>
    </main>
  );
}
