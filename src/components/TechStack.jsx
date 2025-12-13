import { useGSAP } from '@gsap/react'
import { techStack } from '../data/project-data'
import gsap, { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Technologies() {
  useGSAP(() => {
    gsap.fromTo(
      '#list',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#list',
          start: 'top 80%',
        },
      },
    )
  }, [])

  return (
    <div className="mt-50 flex flex-col items-center justify-center">
      <h1 className="my-4 text-2xl">Technologies</h1>

      <ul className="grid w-full max-w-[600px] grid-cols-4">
        {techStack.map((tech) => (
          <li key={tech.name} className="red" id="list">
            <div className="my-3 flex flex-col items-center">
              <div>
                <img src={tech.icon} width={35} />
              </div>
              <p className="my-2 text-[13px]">{tech.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Technologies
