import React, {Component} from "react";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import Menu  from "./StaffListComponent";
import Depart from './DepartmentComponent';
import DishDetail from "./dishDetailComponent";
import Home from './HomeComponents';
import { Switch, Route, Redirect} from 'react-router-dom'
import Salary from "./SalaryComponent";
import Detail from "./Detail";

class Main extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            staffs : STAFFS ,
            departments : DEPARTMENTS,
           
        }
    }

    render() {
        return (
            <div>
                <Switch  >
                    <Route path="/stafflist" component={() => {return <Menu staffs={this.state.staffs}/> }}/>
                    <Route path='/department'  component = {() => {return <Depart departments={this.state.departments} />  }} /> 
                    <Route path='/payroll' component={() => { return <Salary staffs={this.state.staffs} /> }} />
                    <Route path='/detail/:id' component={() => { return <Detail staffs={this.state.staffs} /> }} />
                    <Redirect to='/home' />
                </Switch >
               
            </div>
        )
    }
}  

export default Main;