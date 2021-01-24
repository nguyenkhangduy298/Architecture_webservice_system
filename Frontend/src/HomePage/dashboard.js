// Home page is the dashboard page

import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import './static/style.css';
import 'antd/dist/antd.css';
import CourseCard from "./coursecard.js";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            courses: null,
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

  render() {
    let coursesPresent = null;
    let allCourses = null;
    var availableCourses = this.state.courses;
    console.log("HELLO");
    console.log(availableCourses);
   

    if (!availableCourses) {
    
      allCourses = "noCourses";
      coursesPresent = (
        <font className="font-weight-bold" size="3">
          No courses available{/**If no courses present */}
        </font>
      );
    } else {
      allCourses = availableCourses;

      coursesPresent = (
        <React.Fragment>
          {Object.keys(allCourses).map(key => (
            <Col className="py-3 mx-2" span={6} key={key}>
              <CourseCard course={allCourses[key]} />
            </Col>
          ))}
        </React.Fragment>
      );
    }

    const { Content} = Layout;
    return (
      <div>
        <Layout style={{ marginLeft: 150, minHeight: 560 }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 710
            }}
          >
            <div>
              <Row>{coursesPresent}</Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}


export default Dashboard;
