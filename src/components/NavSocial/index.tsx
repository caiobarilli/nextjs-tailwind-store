import Title from '@/components/Title'
import { Svg } from '@/lib/svg'
import Link from 'next/link'

const NavSocial = () => {
  return (
    <section className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
      <div className="px-3 md:px-0">
        <Title size="sm">Social</Title>

        <nav className="w-full flex items-center py-4 mt-0">
          <Link data-testid="social-icon" href="#" className="mx-2">
            <Svg name="facebook" />
          </Link>
          <Link data-testid="social-icon" href="#" className="mx-2">
            <Svg name="twitter" />
          </Link>
          <Link data-testid="social-icon" href="#" className="mx-2">
            <Svg name="instagram" />
          </Link>
          <Link data-testid="social-icon" href="#" className="mx-2">
            <Svg name="pinterest" />
          </Link>
        </nav>
      </div>
    </section>
  )
}
export default NavSocial
