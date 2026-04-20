import ProjectCardGrid from '@/components/gallery/ProjectCardGrid'
import { galleryProjectCards } from '@/lib/gallery-data'

const GalleryPage = () => {
  return (
    <section className="px-5 pb-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 pt-4 md:mb-12">
          <p className="text-[11px] font-medium tracking-[0.3em] text-[#335CFF] uppercase">
            Gallery
          </p>
          <div className="max-w-3xl">
            <h1 className="font-general-sans text-3xl font-medium tracking-tight text-slate-800 md:text-5xl">
              Stories from SEEP programs, classrooms, and innovation moments.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              Explore the projects and events shaping our community. Selecting
              any tile opens its dedicated project gallery with paginated image
              collections and a focused preview view.
            </p>
          </div>
        </div>

        <ProjectCardGrid cards={galleryProjectCards} />
      </div>
    </section>
  )
}

export default GalleryPage
