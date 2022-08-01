import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const Menu = (props) => {

    let history = useHistory();
    const RenderMenuItem = ({ dish}) => {
        return (
            <Card >
                <Link onClick={() => history.push(`/menu/${dish.id}`)}>
                    <CardImg with='100%' object src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay >
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        )
    }
    
    const menu = props.dishes.dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-sm-12 col-xs-12 col-md-5 m-1'>
                <RenderMenuItem dish={dish}  />
            </div>
        );
    });

    if(props.dishes.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            );
    }

    if(props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );

}

export default Menu;