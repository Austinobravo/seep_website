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
  id: string
  slug: string
  title: string
  eyebrow: string
  image: GalleryImage
}

export const galleryProjects: GalleryProject[] = [
  {
    slug: 'seep-innovation-2019',
    title: 'A flow of student entrepreneurs into the Nigeria economy',
    shortTitle: 'Innovo8ion 2019',
    eyebrow: 'SEEP',
    description:
      'A showcase of student founders, mentors, and product builders sharing ideas that move classroom learning into real-world innovation.',
    images: [
      {
        src: '/innovation.jpg',
        alt: 'Speaker presenting at the SEEP innovation event',
        colSpan: 1,
        rowSpan: 2,
      },
      {
        src: '/first2.jpg',
        alt: 'Participant speaking into a microphone',
      },
      {
        src: '/second1.jpg',
        alt: 'Presenter addressing the audience on stage',
      },
      {
        src: '/third1.jpg',
        alt: 'Team members posing together',
        colSpan: 2,
      },
      {
        src: '/second2.jpg',
        alt: 'Students seated during the event',
        colSpan: 2,
      },
      {
        src: '/research.jpg',
        alt: 'Participant listening attentively',
      },
      {
        src: '/third2.jpg',
        alt: 'Group photo from the event',
      },
      {
        src: '/science.jpg',
        alt: 'Speaker smiling during a session',
      },
      {
        src: '/first1.jpg',
        alt: 'Panel table set up for the program',
        colSpan: 2,
      },
      {
        src: '/technology.jpg',
        alt: 'Speaker holding a microphone on stage',
        rowSpan: 2,
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
        src: '/technology.jpg',
        alt: 'Instructor teaching in a classroom',
        colSpan: 2,
        rowSpan: 2,
      },
      {
        src: '/first3.jpg',
        alt: 'Students working together at computers',
      },
      {
        src: '/third3.jpg',
        alt: 'Facilitator presenting to a class',
      },
      {
        src: '/empowerment.jpg',
        alt: 'Students seated in a training hall',
        colSpan: 2,
      },
      {
        src: '/science.jpg',
        alt: 'Instructor speaking beside a bright window',
      },
      {
        src: '/second3.jpg',
        alt: 'Student with a microphone during a session',
      },
      {
        src: '/research.jpg',
        alt: 'Focused classroom participant',
      },
      {
        src: '/innovation.jpg',
        alt: 'Facilitator guiding participants',
        colSpan: 2,
      },
    ],
  },
  {
    slug: 'seep-founders-lab',
    title: 'SEEP founders lab and startup readiness moments',
    shortTitle: 'Founders Lab',
    eyebrow: 'SEEP',
    description:
      'Mentorship, pitching, team photos, and behind-the-scenes snapshots from early-stage startup support programs.',
    images: [
      {
        src: '/third1.jpg',
        alt: 'Founders standing together for a photo',
        colSpan: 2,
      },
      {
        src: '/second1.jpg',
        alt: 'Founder speaking on stage',
        rowSpan: 2,
      },
      {
        src: '/technology.jpg',
        alt: 'Instructor speaking during a training',
      },
      {
        src: '/first2.jpg',
        alt: 'Participant asking a question',
      },
      {
        src: '/science.jpg',
        alt: 'Mentor speaking into a microphone',
        colSpan: 2,
      },
      {
        src: '/empowerment.jpg',
        alt: 'Audience listening during a program',
        colSpan: 2,
      },
      {
        src: '/research.jpg',
        alt: 'Participant watching a presentation',
      },
      {
        src: '/first1.jpg',
        alt: 'Program table with guests',
      },
    ],
  },
  {
    slug: 'community-innovation-outreach',
    title: 'Community innovation outreach and training highlights',
    shortTitle: 'Innovation Outreach',
    eyebrow: 'SEEP',
    description:
      'Snapshots from community-centered outreach sessions connecting practical innovation training with local impact.',
    images: [
      {
        src: '/empowerment.jpg',
        alt: 'Participants gathered in a large room',
        colSpan: 2,
      },
      {
        src: '/innovation.jpg',
        alt: 'Lead speaker presenting to attendees',
        rowSpan: 2,
      },
      {
        src: '/third2.jpg',
        alt: 'Community group photo',
      },
      {
        src: '/first3.jpg',
        alt: 'Students participating at workstations',
      },
      {
        src: '/third3.jpg',
        alt: 'Presenter in front of a classroom',
      },
      {
        src: '/science.jpg',
        alt: 'Guest speaker by the window',
        colSpan: 2,
      },
      {
        src: '/second2.jpg',
        alt: 'Attendees seated and listening',
        colSpan: 2,
      },
      {
        src: '/technology.jpg',
        alt: 'Facilitator with projector screen',
      },
    ],
  },
]

export const galleryProjectCards: GalleryProjectCard[] = galleryProjects.flatMap((project) =>
  project.images.slice(0, 3).map((image, index) => ({
    id: `${project.slug}-${index}`,
    slug: project.slug,
    title: project.shortTitle,
    eyebrow: project.eyebrow,
    image,
  })),
)

export const getGalleryProjectBySlug = (slug: string) =>
  galleryProjects.find((project) => project.slug === slug)
