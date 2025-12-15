import { navLinks } from '../data/project-data'

function NavBar() {
  return (
    <div className="w-full max-w-[400px] rounded-4xl border border-gray-700 bg-[hsla(240,9%,9%,0.6)] px-3 py-4 shadow-2xl backdrop-blur-md">
      <ul className="flex items-center justify-around">
        {navLinks.map((nav) => (
          <li key={nav.name}>
            <a
              href={nav.href}
              className="text-[13px] font-semibold text-gray-400 transition-all hover:text-white"
              target={nav.name.startsWith('./') && '_blank'}
            >
              {nav.name.startsWith('./') ? (
                <img src={nav.name} width={25} />
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
