'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

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
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        <ArrowLeft className="size-4" />
      </button>

      <div className="flex items-center gap-3">
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
      </div>

      <button
        type="button"
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex size-9 items-center justify-center rounded-full bg-slate-200 text-slate-400 transition hover:bg-slate-300 disabled:cursor-not-allowed"
      >
        <ArrowRight className="size-4" />
      </button>
    </div>
  )
}

export default GalleryPagination
