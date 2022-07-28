import React, { useState, useEffect } from 'react';
import '../../App.css';
import SidebarMenu from '../SidebarMenu';
import ViewerOuterSettings from '../viewerOuterSettings';
import LoginBox from '../LoginBox';
import NavbarFiles from '../navbarFiles';


export default function NFTFolder() {


    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 978);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);

    }, []);


    return (


        <div>
            {isDesktop ? (
                <>

                    <SidebarMenu />
                    <ViewerOuterSettings />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <ViewerOuterSettings />
                    </div>

                </>
            )}
        </div>






    );
}