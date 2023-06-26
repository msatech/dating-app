import React from 'react'
import * as ReactIcon from '../../lib/icons'
import { cn } from '../../lib/utils'

const IconButton = ({icon, iconClass, className}, children) => {
    let Icon = ReactIcon[icon]
  return (
    <div className={cn('h-12 w-12 rounded-full cursor-pointer transition-all duration-200 text-lg text-gray-800 font-bold bg-gray-200 hover:bg-gray-300 flex justify-center items-center', className)} {...children}>
        <Icon className={iconClass} />
    </div>
  )
}

export default IconButton