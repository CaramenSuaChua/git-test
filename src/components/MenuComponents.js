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
        if (!this.state.selectedDish ){
            console.log('dish1',dish)
            this.setState({selectedDish:dish})
        } else if (this.state.selectedDish === dish) {
            console.log('dish',dish)
            this.setState({selectedDish:null})

        } else {
            this.setState({selectedDish:dish})

        }
        
    }
    
    renderDish(dish){
        if(dish !== null){
            return(
                <div className='col-xs-12 col-sm-12 col-md-5 mt-2'>
                <Card >
                    <CardImg with='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description} </CardText>
                        {/* <CardText> {dish.comments}</CardText> */}
                        <CardText> {dish.price}, {dish.label} </CardText>
                    </CardBody>
                </Card>
                </div>
                
            )
        }else{
            return (
                <div></div>
            )
        }
    };
    

    renderComments(dish) {
        if(dish  && dish.comments.length){
        console.log(dish);      
            return dish.comments.map((comment) => {
                return (
                    
                    <div className="col-xs-12 col-sm-12 col-md-5 mt-2 ">   
                  
                   
                    <h4>{comment.comment}</h4>
                        <p> -- {comment.author}, {comment.date} </p>
                   
                        
                    </div>
                )
            })
        } else {
            <div> No CMT</div>
        }
    }

    render() {
        // console.log(this.props.dish)
        const menu = this.props.dishes.map(dish => {
            return (
                <div key ={dish.id} className='col-12 col-sm-12 col-xs-12 col-md-5 m-1'>
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
                
                {/* <div className=" col-sm-12 col-xs-12 col-md-5 m-1 row"> */}
                    {this.renderComments(this.state.selectedDish)}
                  {/* </div>  */}
                </div>
            </div>
        );
    }
}

export default Menu ;