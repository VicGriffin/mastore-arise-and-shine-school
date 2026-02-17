import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-[#479FBE] to-[#6ab3d4] text-white hover:from-[#2d6a8f] hover:to-[#479FBE] focus:ring-[#479FBE] shadow-lg hover:shadow-xl hover:shadow-[#479FBE]/50',
        secondary: 'bg-gradient-to-r from-[#9E8016] to-[#b8a052] text-white hover:from-[#6d5a0f] hover:to-[#9E8016] focus:ring-[#9E8016] shadow-lg hover:shadow-xl hover:shadow-[#9E8016]/50',
        accent: 'bg-gradient-to-r from-[#3C3B32] to-[#5a5955] text-white hover:from-[#2a2925] hover:to-[#3C3B32] focus:ring-[#3C3B32] shadow-lg hover:shadow-xl hover:shadow-[#3C3B32]/50',
        outline: 'border-2 border-[#479FBE] text-[#479FBE] hover:bg-[#479FBE]/10 hover:border-[#2d6a8f] focus:ring-[#479FBE] transition-colors',
        ghost: 'text-[#479FBE] hover:bg-[#479FBE]/10 focus:ring-[#479FBE] transition-colors',
        danger: 'bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white hover:from-[#92400e] hover:to-[#d97706] focus:ring-[#d97706] shadow-lg hover:shadow-xl hover:shadow-[#d97706]/50',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={buttonVariants({ variant, size, className })}
          {...(props as any)}
        />
      )
    }

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
