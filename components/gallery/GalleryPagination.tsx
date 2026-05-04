'use client'

import { ArrowLeft, ArrowRight, Ellipsis } from 'lucide-react'

import { cn } from '@/lib/utils'

type GalleryPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const GalleryPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: GalleryPaginationProps) => {
  if (totalPages <= 1) {
    return null
  }

  const getVisiblePages = () => {
    const pages: (number | "...")[] = []

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    pages.push(1)

    if (currentPage > 3) {
      pages.push("...")
    }

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push("...")
    }

    pages.push(totalPages)

    return pages
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-6 px-4 py-8 text-slate-500',
        className,
      )}
    >
      <button
        type="button"
        aria-label="Previous page"
        // onClick={() => onPageChange(currentPage - 1)}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        <ArrowLeft className="size-4" />
      </button>

      {/* <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1

          return (
            <button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={() => onPageChange(page)}
              className={cn(
                'size-2.5 rounded-full bg-slate-200 transition',
                currentPage === page && 'w-6 bg-slate-900',
              )}
            />
          )
        })}
      </div> */}
      <div className="flex items-center gap-3">
        {getVisiblePages().map((item, index) => {
          if (item === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="text-lg text-seep-primary px-1"
              >
               <Ellipsis />
              </span>
            )
          }

          const page = item as number

          return (
            <button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={cn(
                "size-2.5 rounded-full bg-slate-200 transition",
                currentPage === page && "w-6 bg-slate-900"
              )}
            />
          )
        })}
      </div>

      <button
        type="button"
        aria-label="Next page"
        // onClick={() => onPageChange(currentPage + 1)}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex size-9 items-center justify-center rounded-full bg-slate-200 text-slate-400 transition hover:bg-slate-300 disabled:cursor-not-allowed"
      >
        <ArrowRight className="size-4" />
      </button>
    </div>
  )
}

export default GalleryPagination
