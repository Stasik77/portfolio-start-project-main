import './App.css';
import { Container } from './components/Container';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Works_2 } from './layout/sections/works/work/Works_2';
import { Works } from './layout/sections/works/Works';


function App() {
    return (
        <div className="App">
            
            <Header/>           
             <Main />
            <AboutMe />
            <Skills />
            <Works />
            <Works_2 />
            {/* <Testimony /> */}
            <Contacts />
            <Slogan />
            <Footer />
           
        </div>
    );

}

export default App;
 



// * можно ли указать Container в App ??*// */