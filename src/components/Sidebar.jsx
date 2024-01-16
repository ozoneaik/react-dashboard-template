import '../assets/css/sidebar.css'
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={'sidebar'} style={{background: "#f1f2f7", width: 250, height: '100dvh'}}>
            <div className={'LogoSidebar p-3 text-center mb-3'}>
                <i className="fa-brands fa-google me-3"></i>
                <span>GOODFOOD</span>
            </div>
            <div className={'list'}>
                <ul className={'group'}>
                    <li className={'header-menu'}>MENU</li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-chart-simple me-3"></i>
                            <span>Dashboard</span>
                        </Link>

                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-cart-shopping me-3"></i>
                            <span>Food Order</span>
                        </Link>
                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-table-list me-3"></i>
                            <span>Manage Menu</span>
                        </Link>
                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-comment-dots me-3"></i>
                            <span>Customer Review</span>
                        </Link>
                    </li>
                </ul>

                <ul className={'group'}>
                    <li className={'header-menu'}>OTHERS</li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-gear me-3"></i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-credit-card me-3"></i>
                            <span>Payment</span>
                        </Link>
                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-user me-3"></i>
                            <span>Accounts</span>
                        </Link>
                    </li>
                    <li className={'menu'}>
                        <Link to={''}>
                            <i className="fa-solid fa-square-info me-3"></i>
                            <span>Help</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}