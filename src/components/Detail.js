import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import dateFormat from 'dateformat';
import { Loading } from "./LoadingComponent";
import { Button } from "react-bootstrap";
// import ModalEditStaff from './ModalEditStaff'

////////////khai báo hàm thông tin chi tiết nhân viên 
const Detail = ({ staffs, departs }) => {
    let { id } = useParams();
    let { name } = useParams();
    console.log('id', id);
    console.log('staffs', staffs)
    console.log('asa', departs)
    //////////lọc giá trị nhân viên theo id 
    const staff = staffs.filter((staff) => staff.id == id * 1)[0];
    /////////lọc giá trị phòng ban của nhân viên 
    // const depart = departs.filter((depart) => depart.name === name )[0];
    console.log('asaaaa', staff)
    // console.log('bbbbbbbbbbbbbbbbbbb', depart)


    //////////nếu staff có giá trị thì loading
    if (staff?.isLoading) {
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
    }
    /////////nếu staff có giá trị thì báo fail
    else if (staff?.errMess) {
        <div className="container">
            <div className="row">
                <h4> {staff.errMess} </h4>
            </div>
        </div>
    }
    else
        return (
            <CardBody className="container">
                <div className="row">
                    <div className="col-12">
                        <h3><Link to='/stafflist'>Nhân viên </Link> / {staff?.name}</h3>

                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12  ">
                        <CardImg className='picture' src={staff?.image} />
                    </div>
                    <div className="col-md-9 col-sm-8 col-xs-12">
                        <CardTitle> Họ và tên: {staff?.name} </CardTitle>
                        <CardText> Ngày sinh: {dateFormat(staff?.doB, "dd/mm/yyyy")} </CardText>
                        <CardText> Ngày vào công ty:{dateFormat(staff?.startDate, "dd/mm/yyyy")} </CardText>
                        <CardText> Phòng ban: { staff?.department.name} </CardText>
                        <CardText> Hệ số lương : {staff?.salaryScale} </CardText>
                        <CardText> Số ngày nghỉ còn lại: {staff?.annualLeave} </CardText>
                        <CardText>  Số ngày đã làm thêm: {staff?.overTime}</CardText>
                    </div>
                </div>
            </CardBody>
        )

}

export default Detail;