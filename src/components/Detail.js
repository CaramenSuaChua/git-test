import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import dateFormat from 'dateformat';
import { Loading } from "./LoadingComponent";
import { deleteStaff, updateStaffs } from "../redux/ActionCreator";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ModalEditStaff from './ModalEditStaff'

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
    const depart = departs.filter((depart) => depart.id === staff.departmentId)[0];
    console.log('asaaaa', staff)
    // console.log('b', depart)
    const dispatch = useDispatch();

    /////////// hàm xóa nhân viên ///////////////
    const deleteStaffs = () => {
        dispatch(deleteStaff(id));
    }

    /////////// hàm update thông tin
    const handleUpdateStaffs = (updateStaff) => {
        dispatch(updateStaffs(updateStaff))
    }

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
                        <Button color='primary' className="delete" md={{ size: 1 }} forHtml='delete'
                            onClick={deleteStaffs}> Delete {' '}</Button>
                        {/* //////////////hàm patch cập nhật thông tin  */}
                        <ModalEditStaff handleUpdateStaffs={handleUpdateStaffs} staff={staff} />

                    </div>
                    <div className="col-md-9 col-sm-8 col-xs-12">
                        <CardTitle> Họ và tên: {staff?.name} </CardTitle>
                        <CardText> Ngày sinh: {dateFormat(staff?.doB, "dd/mm/yyyy")} </CardText>
                        <CardText> Ngày vào công ty:{dateFormat(staff?.startDate, "dd/mm/yyyy")} </CardText>
                        <CardText> Phòng ban: {depart?.name} </CardText>
                        <CardText> Số ngày nghỉ còn lại: {staff?.overTime} </CardText>
                        <CardText> Hệ số lương : {staff?.salaryScale} </CardText>
                        <CardText>  Số ngày đã làm thêm: {staff?.overTime}</CardText>
                    </div>

                </div>




            </CardBody>
        )

}

export default Detail;