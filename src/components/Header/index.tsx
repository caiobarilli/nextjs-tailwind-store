import Menu from '@/components/Menu'

const Header = () => {
  return (
    <nav id="header" data-testid="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <Menu />
      </div>
    </nav>
  )
}

export default Header
