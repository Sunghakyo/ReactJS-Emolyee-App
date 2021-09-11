import React, {useEffect} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from '../common/LoadingComponent';
import {connect} from 'react-redux';
import {fetchStaffsDepart} from '../../redux/ActionCreator'; 

function RenderStaffs({ staffs, depart,isLoading ,errMess,}) {
    if (isLoading) {
        console.log('staffs',staffs)
      return  <Loading /> 
    } 
    if (errMess) {
        return {errMess}
    } 
    if (staffs) {
        return staffs.map(staff => {
            return (
                <div key={staff.id} className="row" >
                    <div className="col-12 col-md-2 col-lg-2">
                        <img src="/assets/images/alberto.png" alt="avatar" />
                    </div>
                    <div className=" col-12 col-md-10 col-lg-10 ">
                        <h2>Họ và tên: {staff.name}</h2>
                        <p> Ngày sinh: {staff.doB} </p>
                        <p>Ngày vào công ty:{staff.startDate}</p>
                        <p>Phòng ban: {depart.name}</p>
                        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                        <p>Số ngày làm thêm: {staff.overTime}</p>
                    </div>
                </div >
    
            )
        })
    }
   
   }
   
 const StaffOfDepart = (props) => {
    
    useEffect(()=> {
        props.fetchStaffsDepart(props.departId)
    },[])

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link
                        className="text-reset text-decoration-none"
                        to="/home">
                        Trang Chủ
                    </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem> <Link
                        className="text-reset text-decoration-none"
                        to="/home/departments">
                        Phòng Ban
                    </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link active className="text-reset text-decoration-none" to={`/home/department/${props.depart.id}`}>{props.depart.name}
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <RenderStaffs
                staffs={props.staffsDepart.staffsDepart}
                isLoading={props.staffsDepart.isLoading}
                errMess={props.staffsDepart.errMess}
                depart={props.depart} /> 
        </div>
    )
}

const mapStateToProps = (state) => ({
    staffsDepart: state.staffsDepart
})

const mapDispatchToProps = (dispatch)=> ({
    fetchStaffsDepart: (id) => dispatch(fetchStaffsDepart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(StaffOfDepart);