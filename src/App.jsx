import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainComponent from './MainComponent'
import ProjectsListComponent from './components/projects/ProjectsListComponent'
import ForInvestors from './components/forInvestors/ForInvestors'
import NotFound from './components/notFound/NotFound'
import Layout from './components/Layout'
import Industries from './components/industry/Industries'
import Contacts from './contacts/Contacts'
import ClickedProject from './components/projects/clickedProject/ClickedProject'
import Career from './components/career/Career'
import NewsListComponent from './components/news/NewsListComponent'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element ={<MainComponent/>}/>
        <Route path='industries' element={<Industries/>} />
        <Route path='news' element={<NewsListComponent/>}/>
        <Route path='projects'  element ={<ProjectsListComponent/>}/>
        <Route path='projects/:projectId' element ={<ClickedProject/>} />
        <Route path='for-investors' element ={<ForInvestors/>}  />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='career' element={<Career/>} />
        <Route path='*' element={<NotFound/>} />
      </Route> 
    </Routes>
    </>
  )
}

export default App
