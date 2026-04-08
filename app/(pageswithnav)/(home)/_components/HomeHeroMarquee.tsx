import React from 'react'
import Image from "next/image";

const firstItems = ["/first1.jpg", "/first2.jpg", "/first3.jpg", "/first1.jpg", "/first2.jpg", "/first3.jpg"];
const secondItems = ["/second1.jpg", "/second2.jpg", "/second3.jpg", "/second1.jpg", "/second2.jpg", "/second3.jpg"];
const thirdItems = ["/third1.jpg", "/third2.jpg", "/third3.jpg", "/third1.jpg", "/third2.jpg", "/third3.jpg"];

const HomeHeroMarquee = () => {
    const FirstList = () => (
    <div className="flex flex-col gap-(--gap) shrink-0">
      {[...firstItems, ...firstItems].map((item, index) => (
        <Image key={index} src={item} width={500} height={500} alt={item} className="flex items-center justify-center rounded-2xl lg:min-h-[300px] min-h-[220px] object-cover" priority/>
      ))}
    </div>
  );
  const SecondList = () => (
      <div className="flex flex-col gap-(--gap) shrink-0">
      {[...secondItems, ...secondItems].map((item, index) => (
          <Image key={index} src={item} width={500} height={500} alt={item} className=" flex items-center justify-center rounded-2xl lg:min-h-[300px] min-h-[220px] object-cover"  priority/>
      ))}
    </div>
  );
    const ThirdList = () => (
    <div className="flex flex-col gap-(--gap) shrink-0">
    {[...thirdItems, ...thirdItems].map((item, index) => (
        <Image key={index} src={item} width={500} height={500} alt={item} className="flex items-center justify-center rounded-2xl lg:min-h-[300px] min-h-[220px] object-cover" priority/>
    ))}
    </div>
    );

  return (

    <>
    <div className="flex">
    <div className="relative h-178 overflow-hidden">
      {/* The Track: Holds two copies and animates vertically */}
      <div className="flex flex-col animate-marquee-vertical hover:paused gap-(--gap) p-4">
        <FirstList />
        <FirstList aria-hidden="true" />
      </div>
      
      {/* Optional: Gradient Fades (Top and Bottom) */}
    </div>
    <div className="relative h-178 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-gray-50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-gray-50 to-transparent" />
      {/* Apply the new downward animation class */}
      <div className="flex flex-col animate-marquee-down gap-(--gap) hover:paused p-4">
        <SecondList />
        <SecondList aria-hidden="true" />
      </div>
    </div>
    <div className="relative h-178 overflow-hidden">
      {/* The Track: Holds two copies and animates vertically */}
      <div className="flex flex-col animate-marquee-vertical hover:paused gap-(--gap) p-4">
        <ThirdList />
        <ThirdList aria-hidden="true" />
      </div>
      
      {/* Optional: Gradient Fades (Top and Bottom) */}
    </div>
    </div>

    </>
  );
}

export default HomeHeroMarquee