import React from "react";
import { useParams } from "react-router-dom";
import { CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";



const DetailDepart = ({ departs, staffs }) => {
    console.log('departs', departs)
    console.log('staffs:', staffs)
    let { id } = useParams()
    console.log("id", id)
    const depart = departs.filter((depart) => depart.id == id)[0]
    const staff = staffs.filter((staff) => staff.departmentId == id )
    console.log('depart', depart)
    console.log('staffsâ', staff)

    if (depart?.isLoading) {
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
    }
    else if (depart?.errMess) {
        <div className="container">
            <div className="row">
                <h4> {depart.errMess} </h4>
            </div>
        </div>
    }

    return (
        <CardBody className="container">
            <div className="row">
                <div className="col-12">
                    <h3><Link to='/department'>Phòng Ban </Link> / {depart?.name}</h3>

                    <hr />
                </div>
            </div>
         
            {staff.map((item) => {
                return (
                    <div className="row ">
                        <div className="col-md-3 col-sm-4 col-xs-12  mt-5">
                            <CardImg className='picture' src={item.image} />
                        </div>
                        <div className="col-md-5 col-sm-4 col-xs-12 mt-5">
                            <CardTitle> Họ và tên: {item.name} </CardTitle>
                            <CardText> Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")} </CardText>
                            <CardText> Ngày vào công ty:{dateFormat(item.startDate, "dd/mm/yyyy")} </CardText>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 mt-5">
                            <CardText> Phòng ban: {depart?.name } </CardText>
                            <CardText> Số ngày nghỉ còn lại: {item.annualLeave} </CardText>
                            <CardText>  Số ngày đã làm thêm: {item.overTime}</CardText>
                    
                        </div>
                        <hr/>
                    </div>
                )
            })}


        </CardBody>
    )
}

export default DetailDepart;