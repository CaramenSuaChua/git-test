import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat'; 
import Detail from './DetailStaffComponent';
import {Link} from 'react-router-dom'


class Menu extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            selectStaff : null ,
           
        }
    }
    ///////////khi click vao thì hiển thị thông tin chi tiết //////////
    onForm(staff){
        if (!this.state.selectStaff){
            this.setState({selectStaff : staff})
        } else if (this.state.selectStaff === staff){
            this.setState({selectStaff : null})
        } else {
            this.setState({selectStaff:staff})
        }
    }

    /////////lấy tên bộ phận làm việc /////////////////
    renderPart(staff){
        if(staff !== null) {
        return staff.departments?.map((department) => {
            <div className='col-xs-12 col-sm-12 col-md-12 mt-2'>
                <CardText>{department.name}</CardText>
            </div>
        })
    }
    }

    //////////////hiển thị thông tin chi tiết//////////////
    renderInfor(staff) {
        if (staff !==null) {     
        return(
            <div className='col-xs-12 col-sm-12 col-md-10 mt-2'>
                    <Card >
                        <CardBody>
                            <CardImg src={staff.image} />
                            <CardTitle>Họ và tên :{staff.name}</CardTitle>
                            <CardText>Ngày sinh :{dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText> Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>      
                            <CardText> Phòng ban công ty : {staff.department.name}</CardText> 
                            <CardText> Số ngày nghỉ còn lại : {staff.annualLeave} </CardText>
                            <CardText> Số ngày đã làm thêm : {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>                            
        )            
        }
    }

    ///////////////hiển thị //////////
    render() {
        const menu = this.props.staffs.map ((staff) => {
            return (    
                <div key={staff.id} className = 'col-sm-12 col-xs-12 col-md-5 mt-4 '>
                    <Card  onClick={() => this.onForm(staff)}> 
                        <CardBody row >
                        <CardTitle >{staff.name}</CardTitle>
                        <CardImg src={staff.image} />
                        </CardBody>                    
                    </Card>
                </div>
            )
        })
        
        
        return (
            <div className="container">
                <div className="row">
                    <h3> Nhân viên </h3>
                </div>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderInfor(this.state.selectStaff)}
                    {this.renderPart(this.state.selectStaff)}          
                </div>
            </div>
        )
    }
}

export default Menu;