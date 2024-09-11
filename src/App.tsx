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
import { WorksWhatIDo } from './layout/sections/works/WorksWhatIDo';


function App() {
    return (
        <div className="App">
            
            <Header/>           
             <Main />
            <AboutMe />
            <Skills />
            <WorksWhatIDo />
            <Works_2 />
            {/* <Testimony /> */}
            
            <Slogan />
            {/* <Contacts /> */}
            <Footer />
           
        </div>
    );

}

export default App;
 



// * можно ли указать Container в App ??*// */
// - делать отступы между секциями с помощью  padding (margin нельзя). т.е в секции делать внутренний отступ ?
// перенос с новой строки Skillwrap
// 
// - почему  медиа запросе   на 1020 он заканчивается на 800 