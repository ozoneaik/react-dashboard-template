import Layout from "../components/Layout.jsx";
import '../assets/css/view/dashboard.css'
import {OrderTime} from "../components/dashboard/OrderTime.jsx";
import {Revenue} from "../components/dashboard/Revenue.jsx";


export default function Dashboard() {

    return (
        <Layout HeaderTitle={'Dashboard'}>
            <div className={'row'}>
                <div className={'col-8'}>
                    <div className={'card'}>
                        <div className={'card-header d-flex justify-content-between align-items-center'}>
                            <div>
                                <h6 className={'card-title'}>Revenue</h6>
                                <p className={'value'}>IDR 7.852.000</p>
                                <div className={'rate'}>
                                    <i className="fa-solid fa-arrow-up me-2"></i>
                                    <span>
                                    <span className={'up'}>2.1%</span> vs last week
                                </span>
                                </div>
                            </div>
                            <button className={'btn btn-sm btn-primary'}>View Report</button>
                        </div>
                        <div className={'card-body'}>

                            <div className={'graph'}>
                                <div className={'graph-header'}>Sales from 1-12 Dec, 2020</div>
                                <div className={'graph'}>
                                    <Revenue/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-4'}>
                    <div className={'card'}>
                        <div className={'card-header d-flex justify-content-between align-items-center'}>
                            <div>
                                <h6 className={'card-title'}>Order Time</h6>
                            </div>
                            <button className={'btn btn-sm btn-primary'}>View Report</button>
                        </div>
                        <div className={'card-body'}>
                            <div className={'graph'}>
                                <div className={'graph-header'}>From 1-6 Dec, 2020</div>
                                <div className={'graph'}>
                                    <OrderTime/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-8'}>content....</div>
                <div className={'col-4'}>content....</div>
            </div>
        </Layout>
    )
}