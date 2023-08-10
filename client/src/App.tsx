import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div
          className='
          w-screen
          h-screen 
          bg-gradient-to-tr 
          from-purple-500 
          to-pink-500
        '
        >
          <div className='container flex items-center justify-center m-auto h-full'>
            <div className='bg-slate-100 rounded-lg shadow-sm shadow-slate-100 p-8 h-4/5 w-4/5 m-auto'>
              <Routes>
                <Route path='/' element={<Navigate to='/projects' />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:id' element={<ProjectDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}
