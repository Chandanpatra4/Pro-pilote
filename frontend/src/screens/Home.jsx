import React, { useContext, useState, useEffect, use } from 'react'
import { UserContext } from '../context/user.context'
import axios from '../config/axios.js'

const Home = () => {

  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [project, setProject] = useState([])

  function createProject(e) {
    e.preventDefault()
    console.log({ projectName })

    axios.post('/projects/create', {
      name: projectName,
    }).then((res) => {
      console.log(res)
      setIsModalOpen(false)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get('/projects/all').then((res) => {
      setProject(res.data.projects)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <main className='p-4' >

      <div className='projects' >
        <button
          onClick={() => setIsModalOpen(true)}
          className="project p-4 border border-slate-300 rounded-md ">
          New Project
          <i className="ri-link ml-2"></i>
        </button>

        {project.map((project) => (
          <div
            key={project._id}
            className="project p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center cursor-pointer bg-white mt-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
            <i className="ri-arrow-right-line text-gray-400 text-2xl"></i>
          </div>
        ))}




      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  id="projectName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </main>
  )
}

export default Home