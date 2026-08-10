export type GalleryImage = {
  src: string
  alt: string
  colSpan?: 1 | 2
  rowSpan?: 1 | 2
}

export type GalleryProject = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  images: GalleryImage[]
}

export type GalleryProjectCard = {
  // id: string
  slug: string
  title: string
  eyebrow: string
  shortTitle: string
  description: string
  image?: GalleryImage
  images: GalleryImage[]
}

export const galleryProjects: GalleryProjectCard[] = [
  {
    slug: 'seep-innovation-2019',
    title: 'A flow of student entrepreneurs into the Nigeria economy',
    shortTitle: 'Innovo8ion 2019',
    eyebrow: 'SEEP',
    description:
      'A showcase of student founders, mentors, and product builders sharing ideas that move classroom learning into real-world innovation.',
    images: [
      {
        src: '/innovation-2019/innovation-2019-1.png',
        alt: 'Speaker presenting at the SEEP innovation event',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-2.png',
        alt: 'Participant speaking into a microphone',
      },
      {
        src: '/innovation-2019/innovation-2019-3.png',
        alt: 'Presenter addressing the audience on stage',
      },
      {
        src: '/innovation-2019/innovation-2019-4.png',
        alt: 'Team members posing together',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-5.png',
        alt: 'Students seated during the event',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-6.png',
        alt: 'Participant listening attentively',
      },
      {
        src: '/innovation-2019/innovation-2019-7.png',
        alt: 'Group photo from the event',
      },
      {
        src: '/innovation-2019/innovation-2019-8.png',
        alt: 'Speaker smiling during a session',
      },
      {
        src: '/innovation-2019/innovation-2019-9.png',
        alt: 'Panel table set up for the program',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-10.png',
        alt: 'Speaker holding a microphone on stage',
        rowSpan: 2,
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-11.png',
        alt: 'Speaker presenting at the SEEP innovation event',
        // rowSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-12.png',
        alt: 'Participant speaking into a microphone',
      },
      {
        src: '/innovation-2019/innovation-2019-13.png',
        alt: 'Presenter addressing the audience on stage',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-14.png',
        alt: 'Team members posing together',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-15.png',
        alt: 'Students seated during the event',
        // colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-16.png',
        alt: 'Participant listening attentively',
      },
      {
        src: '/innovation-2019/innovation-2019-17.png',
        alt: 'Group photo from the event',
      },
      {
        src: '/innovation-2019/innovation-2019-18.png',
        alt: 'Speaker smiling during a session',
        colSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-19.png',
        alt: 'Panel table set up for the program',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/innovation-2019/innovation-2019-20.png',
        alt: 'Speaker holding a microphone on stage',
      },
    ],
  },
  {
    slug: 'tech-2-school',
    title: 'Tech-2-School digital skills classrooms',
    shortTitle: 'Tech-2-School',
    eyebrow: 'SEEP',
    description:
      'Hands-on classroom moments from digital literacy sessions, coding workshops, and tech exposure programs for young learners.',
    images: [
      {
        src: '/tech2school-2022/tech2school-2022-1.png',
        alt: 'Instructor teaching in a classroom',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/tech2school-2022/tech2school-2022-2.png',
        alt: 'Students working together at computers',
      },
      {
        src: '/tech2school-2022/tech2school-2022-3.png',
        alt: 'Facilitator presenting to a class',
      },
      {
        src: '/tech2school-2022/tech2school-2022-4.png',
        alt: 'Students seated in a training hall',
        colSpan: 2,
      },
      {
        src: '/tech2school-2022/tech2school-2022-5.png',
        alt: 'Instructor speaking beside a bright window',
      },
      {
        src: '/tech2school-2022/tech2school-2022-6.png',
        alt: 'Student with a microphone during a session',
      },
      {
        src: '/tech2school-2022/tech2school-2022-7.png',
        alt: 'Focused classroom participant',
      },
      {
        src: '/tech2school-2022/tech2school-2022-8.png',
        alt: 'Focused classroom participant',
      },
      {
        src: '/tech2school-2022/tech2school-2022-9.png',
        alt: 'Facilitator guiding participants',
        colSpan: 2,
      },
      {
        src: '/tech2school-2022/tech2school-2022-10.png',
        alt: 'Instructor teaching in a classroom',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/tech2school-2022/tech2school-2022-11.png',
        alt: 'Students working together at computers',
      },
      {
        src: '/tech2school-2022/tech2school-2022-12.png',
        alt: 'Facilitator presenting to a class',
      },
      {
        src: '/first1.jpg',
        alt: 'Students seated in a training hall',
        colSpan: 2,
      },
      {
        src: '/first2.jpg',
        alt: 'Instructor speaking beside a bright window',
      },
      {
        src: '/first3.jpg',
        alt: 'Student with a microphone during a session',
      },
      {
        src: '/second1.jpg',
        alt: 'Focused classroom participant',
      },
      {
        src: '/second2.jpg',
        alt: 'Focused classroom participant',
      },
      {
        src: '/second3.jpg',
        alt: 'Facilitator guiding participants',
        colSpan: 2,
      },
      {
        src: '/technology.jpg',
        alt: 'Instructor teaching in a classroom',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/about.jpg',
        alt: 'Students working together at computers',
      },
    ],
  },
  // {
  //   slug: 'seep-founders-lab',
  //   title: 'SEEP founders lab and startup readiness moments',
  //   shortTitle: 'Founders Lab',
  //   eyebrow: 'SEEP',
  //   description:
  //     'Mentorship, pitching, team photos, and behind-the-scenes snapshots from early-stage startup support programs.',
  //   images: [
  //     {
  //       src: '/third1.jpg',
  //       alt: 'Founders standing together for a photo',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/second1.jpg',
  //       alt: 'Founder speaking on stage',
  //       rowSpan: 2,
  //     },
  //     {
  //       src: '/technology.jpg',
  //       alt: 'Instructor speaking during a training',
  //     },
  //     {
  //       src: '/first2.jpg',
  //       alt: 'Participant asking a question',
  //     },
  //     {
  //       src: '/science.jpg',
  //       alt: 'Mentor speaking into a microphone',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/empowerment.jpg',
  //       alt: 'Audience listening during a program',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/research.jpg',
  //       alt: 'Participant watching a presentation',
  //     },
  //     {
  //       src: '/first1.jpg',
  //       alt: 'Program table with guests',
  //     },
  //   ],
  // },
  // {
  //   slug: 'community-innovation-outreach',
  //   title: 'Community innovation outreach and training highlights',
  //   shortTitle: 'Innovation Outreach',
  //   eyebrow: 'SEEP',
  //   description:
  //     'Snapshots from community-centered outreach sessions connecting practical innovation training with local impact.',
  //   images: [
  //     {
  //       src: '/empowerment.jpg',
  //       alt: 'Participants gathered in a large room',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/innovation.jpg',
  //       alt: 'Lead speaker presenting to attendees',
  //       rowSpan: 2,
  //     },
  //     {
  //       src: '/third2.jpg',
  //       alt: 'Community group photo',
  //     },
  //     {
  //       src: '/first3.jpg',
  //       alt: 'Students participating at workstations',
  //     },
  //     {
  //       src: '/third3.jpg',
  //       alt: 'Presenter in front of a classroom',
  //     },
  //     {
  //       src: '/science.jpg',
  //       alt: 'Guest speaker by the window',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/second2.jpg',
  //       alt: 'Attendees seated and listening',
  //       colSpan: 2,
  //     },
  //     {
  //       src: '/technology.jpg',
  //       alt: 'Facilitator with projector screen',
  //     },
  //   ],
  // },
]

// export const galleryProjectCards: GalleryProjectCard[] = galleryProjects.flatMap((project) =>
//   project.images.slice(0, 3).map((image, index) => ({
//     id: `${project.slug}-${index}`,
//     slug: project.slug,
//     title: project.shortTitle,
//     eyebrow: project.eyebrow,
//     image,
//   })),
// )

export const getGalleryProjectBySlug = (slug: string) =>
  galleryProjects.find((project) => project.slug === slug)
