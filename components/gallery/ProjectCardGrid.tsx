'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import GalleryPagination from '@/components/gallery/GalleryPagination'
import type { GalleryProjectCard } from '@/lib/gallery-data'
import { cn } from '@/lib/utils'

type ProjectCardGridProps = {
  cards: GalleryProjectCard[]
  pageSize?: number
}

const mainGridPattern = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  '',
  '',
  'md:col-span-2',
]

const ProjectCardGrid = ({
  cards,
  pageSize = 6,
}: ProjectCardGridProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(cards.length / pageSize)
  const visibleCards = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return cards.slice(start, start + pageSize)
  }, [cards, currentPage, pageSize])

  return (
    <div>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[170px] xl:auto-rows-[210px]">
        {visibleCards.map((card, index) => (
          <Link
            key={card.id}
            href={`/gallery/${card.slug}`}
            className={cn(
              'group relative overflow-hidden rounded-[28px] bg-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.12)]',
              mainGridPattern[index % mainGridPattern.length],
            )}
          >
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
              <div>
                <p className="text-[11px] font-medium tracking-[0.28em] text-white/70 uppercase">
                  {card.eyebrow}
                </p>
                <h3 className="mt-1 text-lg font-medium md:text-xl">
                  {card.title}
                </h3>
              </div>
              <span className="rounded-full border border-white/30 bg-white/12 px-3 py-1 text-xs backdrop-blur-sm transition group-hover:bg-white/20">
                View Project
              </span>
            </div>
          </Link>
        ))}
      </div>

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default ProjectCardGrid
