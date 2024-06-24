const Container: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className, ...props }) => {
  return (
    <div
      className={`container md:mx-auto ${className ? ' ' + className : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
