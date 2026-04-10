import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = ComponentProps<'button'> &{
    title: string
    icon?: LucideIcon
    className?: String
}
const CustomizedButton = ({title,icon:Icon, className, ...otherTags}:Props) => {
  return (
      <Button {...otherTags} className={cn(className, 'bg-seep-primary overflow-hidden relative cursor-pointer hover:bg-seep-primary/90 hover:scale-105 transition-all duration-700 py-2 px-4 text-white space-x-3 w-fit items-center flex ')}>
        <span>{title}</span>
        <span className='bg-black inset-0 absolute translate-x-0 opacity-0 delay-75 hover:opacity-50 transition-all duration-700 hover:translate-x-full'></span>
        {Icon && <Icon/>} 
      </Button>

  )
}

export default CustomizedButton