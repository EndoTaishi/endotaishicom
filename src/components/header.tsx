import Container from './container'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-12 md:py-20 font-display tracking-wide">
        <h1 className="text-2xl md:text-3xl">
          <Link legacyBehavior href="/">
            <a className="hover:no-underline">Taishi Endo</a>
          </Link>
        </h1>
        <div className="text-sm leading-none">
          <Link legacyBehavior href="/notes">
            <a className="leading-none">NOTES</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Header