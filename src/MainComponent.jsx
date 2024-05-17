import News from './components/news/News'
import Partners from './components/partners/Partners'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Industries from './components/industry/Industries'
import Main from './components/main/Main'


export default function MainComponent() {
    return(
        <>
            <Main/>
            <About/>
            <Industries/>
            <News/>
            <Projects/>
            <Partners/>
        </> 
    )
};
