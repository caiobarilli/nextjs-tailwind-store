const Text: React.FC<{
  children: React.ReactNode
  className?: string
  marginTop?: boolean
}> = ({ children, className, marginTop }) => {
  if (marginTop) {
    return (
      <p className={`mt-8 mb-8 ${className !== undefined && className}`}>
        {children}
      </p>
    )
  }

  return (
    <p
      data-testid="paragraph"
      className={`mb-8 ${className !== undefined && className}`}
    >
      {children}
    </p>
  )
}

export default Text
