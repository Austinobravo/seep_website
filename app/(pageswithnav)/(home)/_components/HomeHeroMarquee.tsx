import React from 'react'
import Image from "next/image";

const firstItems = ["/first1.jpg", "/first2.jpg", "/first3.jpg", "/first1.jpg", "/first2.jpg", "/first3.jpg"];
const secondItems = ["/second1.jpg", "/second2.jpg", "/second3.jpg", "/second1.jpg", "/second2.jpg", "/second3.jpg"];
const thirdItems = ["/third1.jpg", "/third2.jpg", "/third3.jpg", "/third1.jpg", "/third2.jpg", "/third3.jpg"];

const HomeHeroMarquee = () => {
    const FirstList = () => (
    <div className="flex flex-col gap-(--gap) shrink-0">
      {[...firstItems, ...firstItems].map((item, index) => (
        <Image key={index} src={item} width={500} height={500} alt={item} className="flex items-center justify-center rounded lg:min-h-[181px] min-h-[220px] min-w-[168px] object-cover" priority/>
      ))}
    </div>
  );
  const SecondList = () => (
      <div className="flex flex-col gap-(--gap) shrink-0">
      {[...secondItems, ...secondItems].map((item, index) => (
          <Image key={index} src={item} width={500} height={500} alt={item} className=" flex items-center justify-center rounded lg:min-h-[181px] min-h-[220px] min-w-[168px] object-cover"  priority/>
      ))}
    </div>
  );
    const ThirdList = () => (
    <div className="flex flex-col gap-(--gap) shrink-0">
    {[...thirdItems, ...thirdItems].map((item, index) => (
        <Image key={index} src={item} width={500} height={500} alt={item} className="flex items-center justify-center rounded lg:min-h-[181px] min-h-[220px] min-w-[168px] object-cover" priority/>
    ))}
    </div>
    );

  return (

    <>
     <div className="relative h-full w-full overflow-hidden">
      {/* Global Gradient Fades - Placed outside the scrolling containers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />

      <div className="flex h-full">
        {/* Column 1 */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex flex-col animate-marquee-vertical hover:paused gap-(--gap) p-2 lg:p-4">
            <FirstList />
            <FirstList aria-hidden="true" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex flex-col animate-marquee-down hover:paused gap-(--gap) p-2 lg:p-4">
            <SecondList />
            <SecondList aria-hidden="true" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex flex-col animate-marquee-vertical hover:paused gap-(--gap) p-2 lg:p-4">
            <ThirdList />
            <ThirdList aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default HomeHeroMarquee