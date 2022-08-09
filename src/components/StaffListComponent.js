import React, { Component, useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


///////////////hiển thị //////////
const Menu = ({ staffs }) => {
    // lúc đầu e cũng k để cái on click ở đấy 
    // xog a bảo lấy giá trị id nên e thêm vào 
    let history = useHistory();

    const RenderMenuItem = ({ staff, onClick }) => {
        return (
            <Card >
                <CardBody onClick={() => {
                    history.push(`/detail/${staff.id}`)
                }}>
                    <CardImg src={staff.image} />
                    <CardText> {staff.name}</CardText>
                    
                </CardBody>
            </Card>
        )
    }

    const menu = staffs.map((staff) => {
        return (
            <div key={staff.id} className='col-sm-4 col-xs-6 col-md-2 mt-4 '>

                <RenderMenuItem staff={staff}  />

            </div>
        )

    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Nhân viên</h3>
                    <hr />
                </div>

            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}


export default Menu;