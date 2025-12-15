import { socialLinks } from '../data/project-data'

function Footer() {
  const date = new Date().getFullYear()

  return (
    <div className="absolute bottom-0 w-full bg-[hsla(240,9%,9%,0.6)] p-5 text-gray-400">
      <div className="flex flex-col items-center gap-y-2.5">
        <ul className="flex gap-4">
          {socialLinks.map((social) => (
            <li key={social.iconName}>
              <a href={social.link}>
                <ion-icon size="large" name={social.iconName}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
        <p>&copy; Sdik {date}. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
