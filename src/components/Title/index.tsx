import Link from 'next/link'

const Title: React.FC<{
  children: string
  size: 'sm' | 'md'
  className?: string
  href?: string
}> = ({ children, className, href, size }) => {
  switch (size) {
    case 'sm':
      if (href) {
        return (
          <Link
            href={href}
            className={`dark:text-white text-left font-bold text-gray-900 ${className !== undefined && className}`}
          >
            {children}
          </Link>
        )
      }
      return (
        <h3
          className={`dark:text-white text-left font-bold text-gray-900 ${className !== undefined && className}`}
        >
          {children}
        </h3>
      )

    case 'md':
      if (href) {
        return (
          <Link
            href={href}
            className={`dark:text-white uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ${className !== undefined && className}`}
          >
            {children}
          </Link>
        )
      }
      return (
        <h2
          className={`dark:text-white uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ${className !== undefined && className}`}
        >
          {children}
        </h2>
      )

    default:
      break
  }
}

export default Title
