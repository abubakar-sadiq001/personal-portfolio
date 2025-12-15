import { useForm, ValidationError } from '@formspree/react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const [state, handleSubmit] = useForm('mwpganvz')

  useGSAP(() => {
    gsap.fromTo(
      '#form',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: '#form',
          start: 'top 80%',
        },
      },
    )
  }, [])

  if (state?.succeeded) {
    return (
      <p className="mt-30 mb-15 text-center text-[18px]">
        Your message has been sent!
      </p>
    )
  }

  return (
    <div className="mx-auto mt-40 mb-50 w-full max-w-[600px]" id="contact">
      <form onSubmit={handleSubmit} id="form" className="mx-10">
        <h1 className="my-4 text-3xl">Contact</h1>

        <div>
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            disabled={state?.submitting}
            className={`${state?.submitting && 'cursor-not-allowed'} h-10 w-full rounded-md border border-stone-500 px-4 py-3 text-gray-500 ring-gray-900 ring-offset-1 placeholder:text-gray-600 focus:ring-2 focus:ring-offset-2 focus:outline-0`}
            placeholder="e.g John Doe"
          />

          <ValidationError prefix="Name" field="name" errors={state?.errors} />
        </div>
        <div className="my-5">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            disabled={state?.submitting}
            placeholder="e.g Johndoe@gmail.com"
            className={`${state?.submitting && 'cursor-not-allowed'} h-10 w-full rounded-md border border-stone-500 px-4 py-3 text-gray-500 ring-gray-900 ring-offset-1 placeholder:text-gray-600 focus:ring-2 focus:ring-offset-2 focus:outline-0`}
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state?.errors}
          />
        </div>

        <div className="my-4">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Write Your Message..."
            disabled={state?.submitting}
            className={`${state?.submitting && 'cursor-not-allowed'} w-full resize-none rounded-md border border-stone-500 px-4 py-3 text-gray-500 ring-gray-900 ring-offset-1 placeholder:text-gray-600 focus:ring-2 focus:ring-offset-2 focus:outline-0`}
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state?.errors}
          />
        </div>

        <Button disabled={state?.submitting}>Send Message</Button>
      </form>
    </div>
  )
}

export default Contact
