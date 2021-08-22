import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="page-footer">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-6">
                        <h3 className="mb-3">About</h3>
                        <p>Ứng dụng quản lý nhân viên giúp bạn quản lý được cụ thể số lượng nhân viên ở từng phòng ban, tính được lương của nhân viên và nhiều chức năng khác. Bạn hãy trải nghiệm </p>
                    </div>
                    <div className="col-4 col-md-3">
                        <h3 className="mb-3">Trang</h3>
                        <ul className="list-unstyled">
                            <li ><Link className="text-reset text-decoration-none" to="/home">Nhân viên</Link> </li>
                            <li ><Link className="text-reset text-decoration-none" to="/salary">Bảng lương</Link></li>
                            <li ><Link className="text-reset text-decoration-none" to="/departments">Phòng ban</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-3 text-center">
                        <h3 className="mb-3">Contact Us</h3>
                        <ul className="list-unstyled">
                            <li><a href="http://twitter.com" className="btn btn-social-icon btn-twitter fa fa-twitter" > </a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100039795430599" className="btn btn-social-icon btn-facebook fa fa-facebook" > </a></li>
                            <li><a href="https://google.com" className="btn btn-social-icon btn-google fa fa-google" > </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row coppyright">
                    <div className="col-12 text-center">
                        @coppyRight QuangPhong
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Footer;