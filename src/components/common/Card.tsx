import { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  'rounded-xl shadow-lg transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-md hover:shadow-xl',
        elevated: 'bg-white shadow-xl hover:shadow-2xl',
        outlined: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
        gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, padding, className })}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card
