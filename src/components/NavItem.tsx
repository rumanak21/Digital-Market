"use client"
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { cn } from '@/lib/utils'


type Category = (typeof PRODUCT_CATEGORIES)[number]
interface NavItemProps {
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}
const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className='relative'>
      <Button className='gap-1.5' onClick={handleOpen} variant={isOpen?'secondary': 'ghost' }>
        {category.label}
        <ChevronDown className={cn("h-4 w-4 transition-all to-muted-foreground", {'-rotate-180': isOpen})}/>
      </Button>
    </div>
  )
}

export default NavItem