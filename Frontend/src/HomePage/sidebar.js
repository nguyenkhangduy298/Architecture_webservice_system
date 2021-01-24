import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';
import canvasImage from "./img/canvasLogo_light.jpg";
import './static/style.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Drawer, Button, Col, Row, Switch, Divider, Modal } from "antd";
import { BookOutlined, DashboardOutlined, UserOutlined, RobotOutlined} from '@ant-design/icons';
import AddCourseForm from './forms/addcourseform.js'




class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
      
        this.state = {
            accountDrawerVisible: false, 
            coursesDrawerVisible: false,
            courses: null,
            userEmail: localStorage.getItem("userEmail"),
            userRole: localStorage.getItem("userRole"),
            modalVisible: false
        };
    }


    async componentWillMount() {
        fetch("http://localhost:8080/course")
            .then(response => response.json())
            .then(courseList => {
                if (courseList.length > 0) {
                    this.setState({
                        courses: courseList
                    })
                }
            })
            .catch(error => console.log(error))
    }

  showAccountDrawer = () => {
    this.setState({accountDrawerVisible: true});
  };
 
  showCoursesDrawer = () =>  {
    this.setState({coursesDrawerVisible: true});
  };

  onClose = () => {
    this.setState({
        accountDrawerVisible: false,
        coursesDrawerVisible: false
    });
  };

  openModal = () => {
    this.setState({modalVisible: true});
  }

  closeModal = () => {
    this.setState({modalVisible: false});
  }

  handleLogout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("userRole", "");
    localStorage.setItem("availableCourses", []);
    this.props.history.push('/login');
  };

  render() {
    let coursesPresent = null;
    let allCourses = null;
    var availableCourses = this.state.courses;
    console.log("IN SIDEBAR");
    console.log(availableCourses);
    if (!availableCourses) {
        coursesPresent = (
            <font className="font-weight-bold" size="3">
            No courses available{/**If no courses present */}
            </font>
      );
    } else {
        
      Object.keys(availableCourses).map(key => {
        let linkString = `${availableCourses[key].Id}`;
        Object.assign(availableCourses[key], { Link: `/course/${linkString}` });
      });

      coursesPresent = (
        //let link = `/courseview/${this.props.course.Id}`;
        <React.Fragment>
          {Object.keys(availableCourses).map(key => (
            // NOTE Dont use <a> for including links in react. As react uses react router to route between pages, therefore, we should only us the Link tag provided by react react. <a> tag can malfunction with react router
            <Link to={availableCourses[key].Link} style={{ textDecoration: "underline" }} onClick={this.onClose} key={key}>
              {/** NOTE This Link tag is not of html and is the link of react-router-dom. The latter link can be used for routing */}
              <font size="4">{availableCourses[key].courseCode} - {availableCourses[key].name}</font>
              
              <br />
              <br />
            </Link>
          ))}
        </React.Fragment>
      );
    }

 
   
    let createCourse = (
      <Link to="#" style={{ textDecoration: "underline" }} onClick={this.openModal}>
  
        <font size="4">Add Course</font>
      </Link>
    );
    

    const { Header, Content, Footer, Sider } = Layout;
    return (
      <div>
        <Layout className="menu-layout">
          <Sider
            className="shadow menu-sider"
            style={{
              overflow: "auto",
              height: "110vh",
              position: "fixed",
              left: 0,
            }}
            width="150"
            
          >
            <Header className="px-1 menu-header" style={{ textAlign: "left" }}>
              <img src={canvasImage} style={{ width: 140 }} />
            </Header>
            <Menu defaultSelectedKeys={['2']} theme="light" mode="inline">
              <Menu.Item key="1" onClick={this.showAccountDrawer}>
                <UserOutlined style={{ color: "black" }} />
                <span className="nav-text">
                  <Link to="#">
                   
                    <font size="2" color="black">
                      Profile
                    </font>
                  </Link>
                  
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <DashboardOutlined style={{ color: "black" }} />
                <span className="nav-text">
                  <Link to="/home">
                    {/** NOTE This Link tag is not of html and is the link of react-router-dom. The latter link can be used for routing */}
                    <font size="2" color="black">
                      Dashboard
                    </font>
                  </Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3" onClick={this.showCoursesDrawer}>
                <BookOutlined style={{ color: "black" }} />
                <span className="nav-text">
                  <Link to="#">
                    {/** NOTE This Link tag is not of html and is the link of react-router-dom. The latter link can be used for routing */}
                    <font size="2" color="black">
                      Courses
                    </font>
                  </Link>
                </span>
              </Menu.Item>
              <Menu.Item key="4">
                <RobotOutlined style={{ color: "black" }} />
                <span className="nav-text">
                    <a href="/chatbot" >
                        <font size="2" color="black">
                        Chatbot
                        </font>
                    </a>
                  
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          {/* FIXME Move the drawer after the sider */}

          <Drawer
            title={this.state.userEmail}
            placement="left"
            style={{ textAlign: "center" }}
            width={300}
            onClose={this.onClose}
            visible={this.state.accountDrawerVisible}
          >

            <Button className="shadow" type="primary" onClick={this.handleLogout}>
            Log Out
            </Button>
        
          </Drawer>
          <Drawer
            title="Courses"
            placement="left"
            style={{ textAlign: "center" }}
            width={300}
            onClose={this.onClose}
            visible={this.state.coursesDrawerVisible}
          >
            {coursesPresent}
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "10px 16px",
                background: "#fff",
                textAlign: "center"
              }}
            >
              {createCourse}
            </div>
          </Drawer>
        </Layout>
        <Modal
          title="Add New Course"
          centered
          visible={this.state.modalVisible}
          onCancel={this.closeModal}
          okButtonProps={{style: {display: 'none'}}}
        >
          <AddCourseForm />
        </Modal>
      </div>
    );
  }
}

export default withRouter (SideBar);
