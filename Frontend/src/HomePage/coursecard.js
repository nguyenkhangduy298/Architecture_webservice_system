import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import { Card, Badge } from "antd";

import cardImage from "./img/courseCard.jpg";

class CourseCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: "",
            code: "",
            redirect: false
        };
    }


  handleLinkCLick = () => {
    // NOTE We use Link to route to the course page but have also used handle link click listener - This is because we have to manually set the state so as to tell react to rerender and route to the courses page, otherwise on clicking the link, the url changes but page does not
    this.setState({ redirect: true });
  };

  componentDidMount() {
    //console.log("This Course", this.props.course);
    let titleString = `${this.props.course.name}`;
    let courseCodeString = `${this.props.course.courseCode}`;
    let link = `/course/${this.props.course.id}`; // Ex: Endpoint for this course is /view/CMPE273
    let courseTitle = (
      // NOTE Dont use <a> for including links in react. As react uses react router to route between pages, therefore, we should only us the Link tag provided by react react. <a> tag can malfunction with react router
        <Link to={link} style={{ textDecoration: "underline" }} onClick={this.handleLinkCLick}>
            <font style={{fontSize: "16px", fontWeight: "bold"}} size="2">{titleString}</font>
        </Link>
        
    );

    let courseCode = ( 
        <Link to={link} style={{ textDecoration: "underline" }} onClick={this.handleLinkCLick}>
            <font size="2">{courseCodeString}</font>
        </Link>
    );

    this.setState({ title: courseTitle, code: courseCode });
  }

  render() {
    const { Meta } = Card;
    const title = this.state.title;
    const code = this.state.code;
    //console.log("TITLE:", title);

    return (
      <Card
        className="rounded shadow"
        style={{ width: 250 }}
        cover={<img src={cardImage} />}
        actions={[
          <a href="#">
            <Badge>
              {/** FIXME Add count display to badge */}
              {/* <Icon type="notification" /> */}
            </Badge>
          </a>,
          // FIXME add links to the icons
          // <Icon type="form" />,
          // <Icon type="folder" />
        ]}
      >
        <Meta style={{ height: 15, textAlign: "left", marginBottom: "16px", fontColor: "red" }} title={title} />
        <Meta style={{ height: 15, textAlign: "left" }} title={code} />
      </Card>
    );
  }
}

export default CourseCard;
