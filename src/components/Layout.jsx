import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import '../assets/css/layout.css'

// eslint-disable-next-line react/prop-types
export default function Layout({children,HeaderTitle}){
    return (
        <div className={'d-flex'}>
            <Sidebar/>
            <div className={'container-fluid m-0 p-0'}>
                <Navbar/>
                <div className={'content p-4'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h1 className={'HeaderTitle'}>{HeaderTitle}</h1>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}