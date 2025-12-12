const navLinks = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#about',
  },

  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

function NavBar() {
  return (
    <div className="mx-auto mt-5 w-full max-w-[400px] rounded-4xl border border-gray-700 bg-[hsla(240,9%,9%,0.6)] px-3 py-4 shadow-2xl">
      <ul className="flex items-center justify-around">
        {navLinks.map((nav) => (
          <li key={nav.name}>
            <a href={nav.href} className="text-[13px] font-semibold">
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
