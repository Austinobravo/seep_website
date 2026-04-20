import Link from 'next/link'
import { notFound } from 'next/navigation'

import ProjectImageGallery from '@/components/gallery/ProjectImageGallery'
import { getGalleryProjectBySlug, galleryProjects } from '@/lib/gallery-data'

type ProjectGalleryPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return galleryProjects.map((project) => ({
    slug: project.slug,
  }))
}

const ProjectGalleryPage = async ({ params }: ProjectGalleryPageProps) => {
  const { slug } = await params
  const project = getGalleryProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="px-5 pb-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="pt-4 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/gallery" className="transition hover:text-slate-600">
              Gallery
            </Link>
            <span>/</span>
            <span className="text-slate-500">{project.shortTitle}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-general-sans text-3xl font-medium tracking-tight text-slate-800 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-500 md:text-lg">
              {project.description}
            </p>
          </div>
        </div>

        <ProjectImageGallery project={project} />
      </div>
    </section>
  )
}

export default ProjectGalleryPage
