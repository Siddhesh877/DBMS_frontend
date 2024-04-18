import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import UserView from './pages/UserView';
import { useRef, useEffect,useState } from 'react';
import Form from './components/Form';
import PostFeed from './components/posts/PostFeed';
import Layer from './components/Layer';
import { Toaster } from "react-hot-toast";
import LoginModal from './components/modals/LoginModal';
import RegistrationModal from './components/modals/RegistrationModal';
import EditModal from './components/modals/EditModal';
import useLoginModal from './hooks/useLoginModal';
import useRegisterModal from './hooks/useRegisterModal';
import Notifications from './components/notification/Notifications';
import Home from './pages/Home';


function App() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const renderCount = useRef(0);

  const [headerProps, setHeaderProps] = useState({
    label: 'Home',
    showBackArrow: false,
  }); 
  useEffect(() => {
    renderCount.current++;
    console.log(`App component rendered ${renderCount.current} times`);
  });
  
  // const navigate = useNavigateInit();
  

  
  return (
    <>
    
    <Toaster />
    <Router>
    <RegistrationModal />
    <LoginModal loginModal={loginModal} registerModal={registerModal}/>
    <Layer >
    <>
      <Header />
      {/* <Form placeholder={"What's happening"}/> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/users/:userId" element={<UserView />}/>
        </Routes>
    </>
    </Layer>
    </Router>
    <EditModal/>
    </>
    

  );
}

export default App;
