import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import SideBar from './sidebar.js';
import { Layout } from 'antd';
import './static/style.css';
import Dashboard from './dashboard.js';
import { Route } from "react-router-dom";
import ChatBot from './chatbot.js';


export default class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userEmail: localStorage.getItem("userEmail"),
            userRole: localStorage.getItem("userRole")
        };
    }
    
    render() {
        console.log(this.state.courses);
        const { Header, Content, Footer, Sider } = Layout;
        if (localStorage.getItem("isLoggedIn") === "false") {
            return <Redirect to="/login" />
        } else {
            let pageHeading = null;
            let page = null;
            if (window.location.pathname.includes("dashboard") || window.location.pathname.includes("home")) {
                console.log("Dashboard");
                pageHeading = "Dashboard";
                page = (
                    <Dashboard/>
                );
            } else if (window.location.pathname.includes("profile")) {
                pageHeading = "Profile";
            } else if (
                window.location.pathname.includes("create") ||
                window.location.pathname.includes("enroll") ||
                window.location.pathname.includes("courses")
            ) {
                pageHeading = "Courses";
            } else if (window.location.pathname.includes("inbox")) {
                pageHeading = "Inbox";
            } else if (window.location.pathname.includes("chatbox")) {
                console.log("Chatbot");
                pageHeading = "Chatbot";
                page = (
                    <ChatBot />
                );
            }
         
            return (
                <React.Fragment>
                    <Layout>
                        <SideBar/>
                        <div className="main-layout">
                            <header
                                style={{
                                    background: "#fff",
                                    textAlign: "left",
                                    marginLeft: 150,
                                    borderBottom: "1px solid #e9e9e9",
                                    fontWeight: 400
                                }}
                                >
                                <div className="px-4 py-2">
                                    <font size="5" color="grey">
                                        {pageHeading}
                                    </font>
                                </div>
                            </header>
                            <Content>
                            
                                <Layout>
                                    {page}
                                </Layout>
                            </Content>
                        
                            <footer
                                style={{
                                    background: "#fff",
                                    textAlign: "center",
                                    marginLeft: 150,
                                    borderTop: "1px solid #e9e9e9"
                                }}
                            >
                            
                            <font size="4" color="red">
                                RMIT Instructure 
                            </font>
                            </footer>
                        </div>
                    </Layout>
                </React.Fragment>
            );
        }
    }
}




