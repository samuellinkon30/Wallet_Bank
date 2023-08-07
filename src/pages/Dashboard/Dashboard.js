import React from "react";
import Nav from "../../components/Nav";
import DashboardComponent from "../../components/Dashboard";
import Footer from "../../components/Footer";

const Dashboard = () => {
    return(
        <div className="dashboard page">
            <Nav></Nav>
            <DashboardComponent></DashboardComponent>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard