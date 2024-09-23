import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminTest from './components/AdminTest';
import ClassClick from './components/ClassClick';
import DataFetchAll from './components/DataFetchAll';
import DataFetchBlog from './components/DataFetchBlog';
import DataFetchContact from './components/Contact/DataFetchContact';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchTodos from './components/DataFetchTodos';
import DataResultsReducer from './components/DataResultsReducer';
import DataTodosReducer from './components/DataTodosReducer';
import Film from './components/Film';
import Formulaire from './components/Formulaire';
import FunctionClick from './components/FunctionClick';
import Inline from './components/Inline';
import NameList from './components/NameList';
import NewContact from './components/Contact/NewContact';
import Newsletter from './components/Newsletter';
import Stylesheets from './components/Stylesheets';
import UserGreeting from './components/UserGreeting';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import FetchOneContact from './components/Contact/FetchOneContact/FetchOneContact';
import FetchOneBlog from './components/FetchOneBlog/FetchOneBlog';
import { Button } from './components/Button.style';
import UpdateContact from './components/Contact/UpdateContact/UpdateContact';
import Connexion from './components/User/Connexion/Connexion';
// import Greet from './components/Greet';
// import Hero from './components/Hero';
// import Message from './components/Message';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}

      {/* <Greet name="Thomas" age= "30 ans">
        Thomas est super !
      </Greet>
      <Greet name="Toto" age= "90 ans" />
      <Greet name="John" age= "23 ans" />

      <Hero name="Bruce" hero="Batman" >
        This is children props
      </Hero>
      <Hero name="Clark" hero="Superman" />
      <Hero name="Diane" hero="Wonder Woman" /> */}

      {/* <Welcome name="Thomas" age="24 ans">
          ceci est un test !
      </Welcome>
      <Welcome name="Titi" age="74 ans" />
      <Welcome name="Vincent" age="12 ans" /> */}

      {/* <Message />

      <Greet name="Thomas" age="24 ans" />
      <Greet name="Titi" age="68 ans" />
      <Greet name="Titi" age="68 ans">
        texte enfant 
      </Greet> */}

      {/* <FunctionClick />
      <ClassClick />
      <UserGreeting /> */}

      {/* <AdminTest /> */}
      {/* <NameList /> */}
      {/* <Inline /> */}
      {/* <Stylesheets primary={false} /> */}
      
      {/* <Formulaire /> */}

      {/* <Newsletter /> */}
      {/* <DataFetchingOne /> */}
      {/* <Film /> */}

      {/* <DataFetchAll /> */}

      {/* <DataFetchTodos /> */}

      {/* <DataTodosReducer /> */}
      {/* <DataResultsReducer /> */}
      {/* <NewContact />
      <DataFetchContact /> */}
      {/* <DataFetchBlog /> */}

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />} >
          <Route path='/services/developpement' element={<Developpement />} />
          <Route path='/services/marketing' element={<Marketing />} />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/gestionpost' element={<GestionPost />} />
        </Route>
        <Route path='/profile/:id' element={<Profile />}/>
        
        <Route path='/allcontacts/' element={<DataFetchContact />} />
        <Route path='/contact/:id' element={<FetchOneContact />}/>
        <Route path='/updatecontact' element={<UpdateContact />} />
        <Route path='/newcontact' element={<NewContact />} />


        <Route path='/allblogs' element={<DataFetchBlog />}/>
        <Route path='/blog/:id' element={<FetchOneBlog />}/>


        <Route path='/connexion' element={<Connexion />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>



    </div>
  );
}

export default App;
