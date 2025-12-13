import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      '#heading',
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: 'power1.inOut',
        opacity: 1,
        y: 0,
        delay: 1,
      },
    )

    gsap.fromTo(
      '.para',
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        stagger: 0.5,
      },
    )
  }, [])

  return (
    // <div className=" bg-linear-to-br from-black via-gray-900 to-black h-[500px] mt-20 overscroll-contain">
    <div className="bg-img mt-5 flex h-[400px] justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1
          id="heading"
          className="text-7xl text-white max-[638px]:text-6xl max-[566px]:text-4xl"
        >
          Hi👋, I'm Sdik
        </h1>
        {/* <p className="para my-4 w-full max-w-[500px] text-center text-[18px] text-gray-400">
          A passionate and self taught front-end enginner, with strong potential
          to upskill in further.
        </p> */}
        <p className="para mt-3 w-full max-w-[500px] text-center text-[18px] text-gray-400 max-[505px]:text-[12px]">
          A passionate and self taught front-end enginner,
        </p>
        <p className="para mt-1 w-full max-w-[500px] text-center text-[18px] text-gray-400 max-[505px]:text-[12px]">
          with strong potential to upskill in further.
        </p>
      </div>
    </div>
  )
}

export default Hero
