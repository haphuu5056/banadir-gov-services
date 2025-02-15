import Image from "next/image";
import mayorImg from "@/public/mayor.png";

export function AboutMayor() {
  return (
    <section className="py-16 px-6 bg-white" aria-labelledby="mayor-heading">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-1/3 flex flex-col items-end relative">
            {/* Mayor's Image */}
            <div className="w-[22rem] h-[22rem] relative">
              <Image
                src={mayorImg}
                alt="Mayor Mohamed Ahmed Amiir"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          {/* Left: Content Section */}
          <div className="md:w-1/2 mt-5">
            <p className="text-2xl text-primary mb-6 font-normal max-w-xl tracking-tight ">
              As the Governor of the Benaadir Region and Mayor of Mogadishu, I
              stand before you with a deep sense of responsibility and
              commitment to our people.
            </p>
            <p className="text-2xl text-primary mb-1 font-normal max-w-xl tracking-tight">
              Mogadishu is not just a city; it is the heart of our nation, and
              together, we will make it a beacon of hope, progress, and unity.
            </p>

            <div className=" p-6 rounded-lg text-center w-full">
              <p className="text-xl font-bold text-primary">
                Mayor: Mohamed Ahmed Amiir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
