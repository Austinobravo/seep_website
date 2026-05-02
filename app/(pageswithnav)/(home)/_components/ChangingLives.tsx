"use client"

import React from "react"

const dataTop = [
  {
    type: "card",
    name: "Adanna Katt",
    role: "Teacher - Great Foundation",
    text: "Teaching here has been more than a job — it’s been a purpose...",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    type: "image",
    // src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    src: "/second1.jpg",
  },
  {
    type: "video",
    // src: "https://www.w3schools.com/html/mov_bbb.mp4",
    src: "/founder.mp4",
  },
]

const dataBottom = [
  {
    type: "image",
    src: "/third1.jpg",
    // src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800",
  },
  {
    type: "card",
    name: "Adanna Katt",
    role: "Teacher - Great Foundation",
    text: "The students are eager to learn and the community is supportive...",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    type: "card",
    name: "Adanna Katt",
    role: "Teacher - Great Foundation",
    text: "Every day I see real growth, not just academically but in confidence...",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
]

const Card = ({ item }: any) => {
  if (item.type === "image") {
    return (
      <div className="size-[220px] rounded-2xl overflow-hidden shrink-0">
        <img src={item.src} alt=""  className="w-full h-full object-cover"/>
      </div>
    )
  }
  /* MEDIA */
// .media-card {
//   min-width: 220px;
//   height: 220px;
//   border-radius: 16px;
//   overflow: hidden;
//   flex-shrink: 0;
// }

// .media-card img,
// .media-card video {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

  if (item.type === "video") {
    return (
      <div className="size-[220px] rounded-2xl overflow-hidden shrink-0">
        <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover"/>
      </div>
    )
  }

  return (
//     .testimonial-card {
//   min-width: 260px;
//   max-width: 260px;
//   background: #fff;
//   border-radius: 16px;
//   padding: 16px;
//   flex-shrink: 0;
//   box-shadow: 0 4px 20px rgba(0,0,0,0.05);
// }
    <div className="w-[260px] shrink-0 p-4 rounded-2xl bg-white shadow flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <img src={item.avatar} className="w-8 h-8 rounded-full" />
        <span className="font-medium">{item.name}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">"{item.text}"</p>
      <span className="text-xs text-gray-500">{item.role}</span>
    </div>
  )
}

export default function ChangingLivesSection() {
  return (
    <section className="w-full flex justify-center bg-[#f5f5f5] py-16">
      <div className="max-w-360 w-full flex gap-6 px-4 relative">

        {/* LEFT SIDE (Marquees) */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">

          {/* TOP MARQUEE (→ RIGHT) */}
          <div className="">
            <div className="flex animate-marquee gap-(--gap) hover:paused">
              {[...dataTop, ...dataTop].map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>
          </div>

          {/* BOTTOM MARQUEE (← LEFT) */}
          <div className="">
            <div className="flex animate-marquee-reverse gap-(--gap) hover:paused">
              {[...dataBottom, ...dataBottom].map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="w-1/4 md:w-100 flex items-center z-20">
          <h2 className=" md:text-4xl font-medium break-words leading-tight text-blue-600">
            Changing lives,
            <br />
            <span className="opacity-50">
                one community
            </span>
            <br />
            <span className="opacity-50">
                at a time
            </span>
          </h2>
        </div>
        <div className="pointer-events-none inset-y-0 absolute right-1/4 md:right-[400px] top-0 h-full w-13 bg-linear-to-l from-[#E8ECF41A] via-[#EEF2F673] to-[#F4F6F9] z-10" />


                    {/* <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[aparte-gray] to-transparent z-20 pointer-events-none" /> */}
        

      </div>
    </section>
  )
}