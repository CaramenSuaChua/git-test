import React, { Component } from "react";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import Menu from "./StaffListComponent";
import Depart from './DepartmentComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import Salary from "./SalaryComponent";
import Detail from "./Detail";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: JSON.parse(localStorage.getItem('staffs')) || STAFFS,
            departments: DEPARTMENTS,
        }
        this.handleAddStaff = this.handleAddStaff.bind(this);
    }

    handleAddStaff(staff) {
        const item = {
            ...staff,
            id: this.state.staffs.length,
            image: '/assets/images/alberto.png',
        }
        this.setState({
            staffs: [...this.state.staffs, item]
            
        });
        localStorage.setItem('staffs', JSON.stringify([...this.state.staffs, item]))
    }

    render() {
        return (
            <div>
                <Switch  >
                    <Route path="/stafflist" component={() => { return <Menu staffs={this.state.staffs} handleAddStaff={this.handleAddStaff} departments={this.state.departments}  /> }} />
                    <Route path='/department' component={() => { return <Depart departments={this.state.departments} /> }} />
                    <Route path='/payroll' component={() => { return <Salary staffs={this.state.staffs} /> }} />
                    <Route path='/detail/:id' component={() => { return <Detail staffs={this.state.staffs} departs = {this.state.departments} /> }} />
                    <Redirect to='/home' />
                </Switch >

            </div>
        )
    }
}

export default Main;