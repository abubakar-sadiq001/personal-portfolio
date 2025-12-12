import { Link } from 'react-router-dom'
import { projectData } from '../data/project-data'

function Projects() {
  return (
    <div className="mt-[200px] items-center justify-center px-3.5">
      <div>
        {/* <div className="mx-auto flex w-[80%]">
          <h2 className="my-3 text-3xl">Projects</h2>
        </div> */}

        <ul className="mx-auto flex max-w-[80%] flex-wrap justify-center gap-20">
          {projectData.map((data) => (
            <li
              key={data.name}
              className="w-full max-w-[400px] min-w-[300px] rounded-md bg-[hsla(240,9%,9%,0.6)] p-5"
            >
              <div>
                <img
                  src={data.screenshot}
                  className="h-[170px] w-full rounded-md"
                />

                {/* NAME */}
                <div>
                  <h1 className="my-2 text-[20px] font-bold text-white">
                    {data.name}
                  </h1>
                  <p className="text-[13px] text-gray-400">
                    {data.description}
                  </p>
                </div>

                {/* STACK */}
                <div className="my-5 flex items-center gap-5">
                  {data.techStack.map((stack) => (
                    <li>
                      <img src={stack.src} className="w-[25px]" />
                    </li>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex items-end justify-start gap-4 bg-red-800">
                  <a
                    className="flex items-center rounded-md bg-white px-5 py-2 font-semibold text-gray-500"
                    href={data.live}
                  >
                    Live
                  </a>
                  <a
                    className="flex items-center rounded-md border border-gray-400 px-3 py-2"
                    href={data.code}
                  >
                    <span>
                      <img src="./github.webp" width={20} />
                    </span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
