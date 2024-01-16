import '../assets/css/navbar.css'

export default function Navbar(){
    return (
        <div className={'navbar w-100 d-flex justify-content-between align-items-center'} style={{borderBottom:'solid 1px #C8CBD9',height:65}}>
            <div className={'left ms-4'}>
                <div className={'search'}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="search"/>
                            <span className="input-group-text" id="search"><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
            <div className={'right d-flex me-4 justify-content-center align-items-center'}>
                <div className={'icon me-3'}>
                    <i className="fa-solid fa-user"></i>
                </div>
                <span>Delicios Burgor</span>
                <div className={'icon-noti ms-5'}>
                    <i className="fa-solid fa-bell"></i>
                </div>
            </div>
        </div>
    )
}