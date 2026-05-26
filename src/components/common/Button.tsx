import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full border text-center font-semibold tracking-tight transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 disabled:pointer-events-none disabled:opacity-55',
  {
    variants: {
      variant: {
        primary:
          'border-blue-700 bg-blue-700 text-white shadow-[0_18px_45px_-24px_rgba(29,78,216,0.7)] hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-800',
        secondary:
          'border-slate-900 bg-slate-900 text-white shadow-[0_18px_45px_-24px_rgba(15,23,42,0.65)] hover:-translate-y-0.5 hover:bg-slate-800',
        outline:
          'border-slate-300 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/80',
        ghost:
          'border-transparent bg-transparent text-blue-700 hover:bg-blue-50',
        subtle:
          'border-white/70 bg-white/70 text-slate-900 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:bg-white',
      },
      size: {
        sm: 'min-h-10 px-4 text-sm',
        md: 'min-h-11 px-5 text-sm sm:text-base',
        lg: 'min-h-12 px-6 text-base',
        xl: 'min-h-14 px-7 text-base sm:text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
)

type SharedProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode
  className?: string
}

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

export type ButtonProps = LinkButtonProps | NativeButtonProps

function omitSharedProps<T extends ButtonProps>(props: T) {
  const next = { ...props } as Record<string, unknown>
  delete next.variant
  delete next.size
  delete next.fullWidth
  delete next.className
  delete next.children
  delete next.href

  return next
}

function isExternalHref(href: string) {
  return (
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  )
}

export default function Button(props: ButtonProps) {
  const { variant, size, fullWidth, className, children } = props
  const classes = buttonVariants({ variant, size, fullWidth, className })

  if ('href' in props && props.href) {
    const href = props.href
    const rest = omitSharedProps(props) as Omit<
      LinkButtonProps,
      'variant' | 'size' | 'fullWidth' | 'className' | 'children' | 'href'
    >

    if (isExternalHref(href)) {
      return (
        <a className={classes} href={href} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    )
  }

  const nativeProps = omitSharedProps(props) as Omit<
    NativeButtonProps,
    'variant' | 'size' | 'fullWidth' | 'className' | 'children' | 'href'
  >
  const { type = 'button', ...rest } = nativeProps

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  )
}
