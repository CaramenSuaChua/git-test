import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import dateFormat from 'dateformat';


const Detail = ({ staffs }) => {
    let { id } = useParams();
    console.log('id', id);
    console.log('staffs', staffs)

    const staff = staffs.filter((staff) => staff.id ===id )[0];

        return (
            <CardBody className="container">
                <div className="row">
                <div className="col-12">
                    <h3><Link to='/stafflist'>Nhân viên </Link> / {staff.name}</h3>
                   
                    <hr />
                </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12  ">
                        <CardImg className='picture' src={staff.image} />
                    </div>
                    <div className="col-md-9 col-sm-8 col-xs-12">
                        <CardTitle> Họ và tên: {staff.name} </CardTitle>
                        <CardText> Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
                        <CardText> Ngày vào công ty:{dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>
                        <CardText> Phòng ban: {staff.department.name} </CardText>
                        <CardText> Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
                        <CardText>  Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </div>
                </div>
                
            </CardBody>
        )

}

export default Detail;