import Image from "next/legacy/image";
import mayorImg from "@/public/mayor.png";

export function AboutMayor() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white" aria-labelledby="mayor-heading">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          {/* Mayor's Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 relative">
              <Image
                src={mayorImg}
                alt="Mayor Mohamed Ahmed Amiir"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-primary mb-6 font-medium max-w-xl mx-auto md:mx-0 tracking-tight">
              As the Governor of the Benaadir Region and Mayor of Mogadishu, I
              stand before you with a deep sense of responsibility and
              commitment to our people.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary mb-4 font-medium max-w-xl mx-auto md:mx-0 tracking-tight">
              Mogadishu is not just a city; it is the heart of our nation, and
              together, we will make it a beacon of hope, progress, and unity.
            </p>
            <div className="p-4 sm:p-6 rounded-lg text-center w-full">
              <p className="text-lg sm:text-xl font-bold text-primary">
                Mayor: Mohamed Ahmed Amiir
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
