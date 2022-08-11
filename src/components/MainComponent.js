import React, { Component } from "react";
import Menu from "./StaffListComponent";
import Depart from './DepartmentComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Salary from "./SalaryComponent";
import Detail from "./Detail";
import { fetchSalary, fetchStaffs, fetchDeparts, postStaff, updateStaffs } from '../redux/ActionCreator';
import { connect } from 'react-redux';
import Home from './HomeComponents';
import DetailDepart from "./DetailDeparts";


const mapStateToProps = (state) => {
    // console.log('this', this.props)
    console.log("deparmentsss", state.departments)
    console.log("deparment", state.staffs)

    return {
        staffs: state.staffs,
        departs: state.departments.departments,
        salarys: state.salarys,
    }
};

const mapDispatchToProps = (dispatch) => ({
    postStaff: (staff) => {
        dispatch(postStaff(staff));
      },
    fetchStaffs: () => {
        dispatch(fetchStaffs()) },
    fetchDeparts: () => { dispatch(fetchDeparts()) },
    fetchSalary: () => { dispatch(fetchSalary()) },
    updateStaffs: (staff) => {
        dispatch(updateStaffs(staff));
      },
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDeparts();
        this.props.fetchSalary();
    }

    /////////post nhân viên mới 
    postStaff = (newStaff) => {
        this.setState({ staffs: [...this.props.staffs.staffs, newStaff] });
    };

    //////////////sửa thông tin nhân viên 
    updateStaff  = (updateStaff) => {
        this.setState({staffs: [...this.props.staffs.staffs, updateStaff]})
    }
    
    render() {
        // console.log('this.props.departs', this.props.departs)
        // console.log('this', this.props)
        // const HomePage = () => {
        //     return (
        //         <Home staff={this.props.staffs.staffs.filter(staffs => staffs.featured)[0]}
        //             staffsLoading={this.props.staffs.isLoading}
        //             staffsErrMess={this.props.staffs.errMess}
        //             depart={this.props.departments.departments.filter(departs => departs.featured)[0]}
        //             departsLoading={this.props.departs.isLoading}
        //             departsErrMess={this.props.departs.errMess}
        //             salary={this.props.salary.salary.filter(salarys => salarys.featured)[0]}
        //             salarysLoading={this.props.salary.isLoading}
        //             salarysErrMess={this.props.salary.errMess}
        //         />
        //     )
        // }

        return (
            <div>
                <Switch  >
                    {/* <Route path='/home' component={HomePage} /> */}
                    <Route path="/stafflist" component={() => { return <Menu staffs={this.props.staffs.staffs} 
                    postStaff={this.props.postStaff} /> }} />
                    <Route path='/department' component={() => { return <Depart departs={this.props.departs} staffs={this.props.staffs.staffs} /> }} />
                    <Route path='/payroll' component={() => { return <Salary staffs={this.props.staffs.staffs} /> }} />
                    <Route path='/detail/:id' component={() => { return <Detail staffs={this.props.staffs.staffs} departs={this.props.departs}  updateStaff={this.props.updateStaff} /> }} />
                    <Route path='/detailDepart/:id' component={() => { return <DetailDepart departs={this.props.departs} staffs={this.props.staffs.staffs} /> }} />
                    <Redirect to='/stafflist' />
                </Switch >
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));