import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function About() {
  useGSAP(() => {
    gsap.fromTo(
      '.about',
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          end: 'bottom',
          // scrub: true,
        },
      },

      gsap.fromTo(
        '#img',
        {
          opacity: 0,
          x: 80,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.8,
          scrollTrigger: {
            trigger: '#img',
            start: 'top 70%',
          },
        },
      ),
    )
  }, [])

  return (
    <div className="flex items-center justify-center px-3.5">
      <div className="w-[50%]">
        <h2 className="my-3 text-left text-4xl">About</h2>
        {/* <p className="about text-gray-400"> */}
        <p className="about text-gray-400">
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p className="about text-gray-400">
          {' '}
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>{' '}
        <p className="about text-gray-400">
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <p className="about text-gray-400">
          {' '}
          scrambled it to make a type specimen book. It has survived not only
        </p>{' '}
        <p className="about text-gray-400">
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>{' '}
        <p className="about text-gray-400">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages,{' '}
        </p>
        <p className="about text-gray-400">
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        {/* </p> */}
        {/* <p className="about text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p> */}
      </div>
      <div>
        <img
          src="./user-img.png"
          className="w-full max-w-[500px]"
          draggable="false"
          id="img"
        />
      </div>
    </div>
  )
}

export default About
