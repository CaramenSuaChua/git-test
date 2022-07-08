import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap' ; 

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish:null
        };
    }

    onDishSelect(dish){
        if (this.selectedDish == null){
            console.log('dish1',dish)

            this.setState({selectedDish:dish})
        } else if (this.selectedDish ==dish) {
            console.log('dish',dish)
            this.setState({selectedDish:null})
            
        }
        
    }
    
    renderDish(dish){
        if(dish !== null){
            return(
                <Card>
                    <CardImg with='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description} </CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return (
                <div></div>
            )
        }
    };

    render() {
        // console.log(this.props.dish)
        const menu = this.props.dishes.map(dish => {
            return (
                <div key ={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                       
                            <CardImg with='100%' object src = {dish.image} alt={dish.name} />
                       
                        <CardImgOverlay>
                            <CardTitle >{dish.name}</CardTitle>
                          
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">                  
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu ;