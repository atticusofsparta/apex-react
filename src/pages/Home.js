import {useState, useEffect} from 'react';
import '../styles/App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/menus/Navbar';
import UploadFiles from '../components/uploadFiles';
import TempNav from '../components/menus/tempNav';
import SignUp from '../components/modals/SignUp';
import Login from '../components/modals/Login';



function Home({loggedIn, setLoggedIn, onboarded,setOnboarded,wallet,setWallet}) {



    return (
        <div className='home'>
            <Navbar />
           {/* <HeroSection /> : <></>}
            {/* <Cards />
            <Footer /> <Footer /> */ 

            }
            {!onboarded ? <SignUp 
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            /> : 
            !loggedIn ?
            <Login 
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            wallet={wallet}
            setWallet={setWallet}
            setOnboarded={setOnboarded}
            /> : <div className="home-overlay"></div>
            }
            <TempNav />
            <UploadFiles />

        </div>
    );
}

export default Home;