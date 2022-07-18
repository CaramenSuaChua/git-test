import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Loading from './LoadingComponent';
import About from './AboutComponent'

function RenderMenuItem ({dish, onClick}) {
    return (
    <Card onClick ={() => onClick(dish.id)}>

    <CardImg with='100%' object src={dish.image} alt={dish.name}  />

    <CardImgOverlay >
        <CardTitle>{dish.name}</CardTitle>

    </CardImgOverlay>
    </Card>
    )
}   
 

    const Menu = (props) => {
        // console.log(this.props.dish)
        const menu = props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-sm-12 col-xs-12 col-md-5 m-1'>
                   <RenderMenuItem  dish = {dish} onClick = {props.onClick}/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
               
            </div>
        );
    
        }

export default Menu 