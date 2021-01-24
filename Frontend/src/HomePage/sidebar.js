import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';
import canvasImage from "./img/canvasLogo_light.jpg";
import './static/style.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Drawer, Button, Col, Row, Switch, Divider } from "antd";
import { BookOutlined, DashboardOutlined, UserOutlined, RobotOutlined} from '@ant-design/icons';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        // this.showAccountDrawer = this.showAccountDrawer.bind(this);
        // this.showCoursesDrawer = this.showCoursesDrawer.bind(this);
        // this.onClose = this.onClose.bind(this);
        
        this.state = {
            accountDrawerVisible: false, 
            coursesDrawerVisible: false,
            courses: null,
            userEmail: localStorage.getItem("userEmail"),
            userRole: localStorage.getItem("userRole")
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

    // // Checking the persona and displaying either Create a course or Enroll into a Course
    // let enrolOrCreate = null;
    // if (localStorage.getItem("userRole") === 'student') {
    //   enrolOrCreate = (
    //     <Link to="/create" style={{ textDecoration: "underline" }} onClick={this.onClose}>
    //       {/**FIXME Make routes under the courses page
    //   NOTE This Link tag is not of html and is the link of react-router-dom. The latter link can be used for routing */}
    //       <font size="4">Create a Course</font>
    //     </Link>
    //   );
    // } else if (localStorage.getItem("userRole") === 'teacher') {
    //   // FIXME Configure app so as to enroll course on url /courses/enroll and create courses on /courses/create
    //   enrolOrCreate = (
    //     <Link to="/enroll" style={{ textDecoration: "underline" }} onClick={this.onClose}>
    //       {/**FIXME Make routes under the courses page
    //   NOTE This Link tag is not of html and is the link of react-router-dom. The latter link can be used for routing */}
    //       <font size="4">Enroll into a Course</font>
    //     </Link>
    //   );
    // }

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
           
          </Drawer>
        </Layout>
      </div>
    );
  }
}

export default withRouter (SideBar);
