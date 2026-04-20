'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import GalleryPagination from '@/components/gallery/GalleryPagination'
import { cn } from '@/lib/utils'
import type { GalleryProject } from '@/lib/gallery-data'

type ProjectImageGalleryProps = {
  project: GalleryProject
  pageSize?: number
}

const detailGridPattern = [
  'md:row-span-2',
  '',
  '',
  'md:col-span-2',
  'md:col-span-2',
  '',
]

const ProjectImageGallery = ({
  project,
  pageSize = 9,
}: ProjectImageGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const totalPages = Math.ceil(project.images.length / pageSize)
  const visibleImages = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return project.images.slice(start, start + pageSize)
  }, [currentPage, pageSize, project.images])

  useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIndex])

  useEffect(() => {
    setSelectedIndex(null)
  }, [currentPage])

  const selectedImage =
    selectedIndex === null ? null : visibleImages[selectedIndex] ?? null

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[170px]">
        {visibleImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'group relative overflow-hidden rounded-[24px] bg-slate-100 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1',
              detailGridPattern[index % detailGridPattern.length],
              image.colSpan === 2 && 'md:col-span-2',
              image.rowSpan === 2 && 'md:row-span-2',
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-[32px] bg-white p-4 shadow-[0_30px_100px_rgba(15,23,42,0.25)] md:p-6">
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
            >
              <X className="size-4" />
            </button>

            <div className="relative h-[70vh] min-h-[420px] overflow-hidden rounded-[24px] bg-slate-50">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ProjectImageGallery
