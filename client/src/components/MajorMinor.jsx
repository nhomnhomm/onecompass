import React, { useState } from "react";
import { Dropdown, Navbar, Nav, Form } from "react-bootstrap";
import "../App.scss"

export const MajorMinor = () => {
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [selectedMinor, setSelectedMinor] = useState(null);
  const [showMajorMessage, setShowMajorMessage] = useState(true);
  const [showMinorMessage, setShowMinorMessage] = useState(true);

  const majors = [
    {
      name: "Applied Mathematics",
      courses: {
        foundation: ["Linear Algebra", "Calculus", "Multivariable Calculus", "Introduction to Data Analysis"],
        intermediate: ["Discrete Mathematics", "Probability", "Differential Equations", "Real Analysis"],
        advance: ["Advanced Statistics", "Optimization", "Statistical Learning", "Stochastic Calculus"],
        capstone: ["Capstone 1", "Capstone 2"],
      },
    },
    {
      name: "Art and Media Studies",
      courses: {
        foundation: ["Course 1", "Course 2", "Course 3", "Course 4"],
        intermediate: ["Course A", "Course B", "Course C", "Course D"],
        advance: ["Course X", "Course Y", "Course Z", "Course W"],
        capstone: ["Course I", "Course II", "Course III", "Course IV"],
      },
    },
    {
      name: "Computer Science",
      courses: {
        foundation: ["Course 1", "Course 2", "Course 3", "Course 4"],
        intermediate: ["Course A", "Course B", "Course C", "Course D"],
        advance: ["Course X", "Course Y", "Course Z", "Course W"],
        capstone: ["Course I", "Course II", "Course III", "Course IV"],
      },
    },
    {
      name: "Economics",
      courses: {
        foundation: ["Course 1", "Course 2", "Course 3", "Course 4"],
        intermediate: ["Course A", "Course B", "Course C", "Course D"],
        advance: ["Course X", "Course Y", "Course Z", "Course W"],
        capstone: ["Course I", "Course II", "Course III", "Course IV"],
      },
    },
  ];

  const minors = [
    {
      name: "Applied Mathematics",
      courses: {
        foundation: ["Linear Algebra", "Calculus"],
        intermediate: ["Discrete Mathematics", "Probability"],
        advance: ["Advanced Statistics", "Optimization"],
        capstone: ["Statistical Learning", "Stochastic Calculus"],
      },
    },
    {
      name: "Art and Media Studies",
      courses: {
        foundation: ["Course 1", "Course 2"],
        intermediate: ["Course A", "Course B"],
        advance: ["Course X", "Course Y"],
        capstone: ["Course I", "Course II"],
      },
    },
    {
      name: "Computer Science",
      courses: {
        foundation: ["Computer Science 1", "Computer Science 2"],
        intermediate: ["Discrete Mathematics", "Computer Architecture"],
        advance: ["Algorithms and Theory of Computing", "Software Engineering"],
        capstone: ["Advanced Deep Learning"],
      },
    },
    {
      name: "Economics",
      courses: {
        foundation: ["Course 1", "Course 2"],
        intermediate: ["Course 3", "Course 4"],
        advance: ["Course 5", "Course 6"],
        capstone: ["Course 7", "Course 8"],
      },
    },
  ];

  const handleMajorSelect = (eventKey) => {
    setSelectedMajor(eventKey);
    setShowMajorMessage(false);
  };

  const handleMinorSelect = (eventKey) => {
    setSelectedMinor(eventKey);
    setShowMinorMessage(false);
  };

  const options = ["Applied Mathematics","Art and Media Studies", "Computer Science", "Economics","Engineering", "History", "Intergrated Science", "Literature","Psychology", "Social Studies", "Vietnam Studies"]

  const cardStyle = {
    backgroundColor: '#E9E9E9',
    borderRadius: '10px',
    padding: "10px 10px 10px 27px",
  };

  const courseStyle = {
    backgroundColor: '#F8F8F8',
    borderRadius: '5px',
    marginBottom: '5px',
  };

  const levelStyle = {
    borderRadius: '10px',
    backgroundColor: '#B9B9B9',
    width: '150px',
    height: '80px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '18px',
          fontSize: '30px',
          color: 'var(--bs-secondary)',
        };
    
  const linkStyle = {
    color:'white',
    fontWeight:'500',
  };

  const textStyle = {
    fontWeight:'500',
    fontSize:'90px',
    paddingRight:'50px',
    paddingLeft:'150px'
  };

  const containerStyle = {
    paddingTop: "230px", // Set the top padding to make space for the fixed navbar
    height: "150vh", // Set the container height to 100% of the viewport
    overflowY: "auto", // Allow the content to scroll vertically when it overflows
  };

  return (
    <div className="container-fluid mt-5" style={containerStyle}>
      <div className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
          <p className="webName text-center" style={{
          position:'relative',
          fontSize:22, 
          color:"white", 
          marginLeft: '45px',
          marginTop: '25px'}}>ONECOMPASS</p>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style = {{marginRight: "40px"}}>
              <Nav.Link href="/majorminor" style = {linkStyle}>Major/Minor</Nav.Link>
              <Nav.Link href="/exploratory" style = {linkStyle}>Exploratory</Nav.Link>
              <Nav.Link href="/upcomingterm" style = {linkStyle}>Upcoming Term</Nav.Link>
              <Nav.Link href="/roadmap" style = {linkStyle}>Roadmap</Nav.Link>
              <Nav.Link href="/gpa" style = {linkStyle}>GPA & Credits</Nav.Link>
              <Nav.Link href="/profile" style = {linkStyle}>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </div>

      <div style={{ marginTop: "250px" }}>
        <div className="d-flex justify-content-center">
          <div className="col">
            <div className="dropdown-title text-center" style={titleStyle}>
              Majors
            </div>
            <Dropdown className="d-flex justify-content-center" onSelect={handleMajorSelect}>
            <Dropdown.Toggle variant="primary" id="major-dropdown-basic">
                   Select one option for major
                 </Dropdown.Toggle>
                 <Dropdown.Menu>
                   {options.map((option, index) => (
                      <Dropdown.Item key={index} eventKey={option}>
                          {option}
                      </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
            </Dropdown>
            {showMajorMessage && !selectedMajor && (
                  <p className="d-flex justify-content-center" style={textStyle}>
                    PLEASE CHOOSE YOUR MAJOR!?
                  </p>
                )}
            {selectedMajor && majors.find((major) => major.name === selectedMajor) && (
                  <React.Fragment>
                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Foundation</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {majors.find((major) => major.name === selectedMajor).courses.foundation.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>
          
                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Intermediate</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {majors.find((major) => major.name === selectedMajor).courses.intermediate.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check/> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Advanced</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {majors.find((major) => major.name === selectedMajor).courses.advance.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Capstone</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {majors.find((major) => major.name === selectedMajor).courses.capstone.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                  )}
          </div>

          <div className="col">
            <div className="dropdown-title text-center" style={titleStyle}>
              Majors/Minors
            </div>
            <Dropdown className="d-flex justify-content-center" onSelect={handleMinorSelect}>
            <Dropdown.Toggle variant="primary" id="major-dropdown-basic">
                   Select one option for major/minor
                 </Dropdown.Toggle>
                 <Dropdown.Menu>
                   {options.map((option, index) => (
                      <Dropdown.Item key={index} eventKey={option}>
                          {option}
                      </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
            </Dropdown>
            {showMinorMessage && !selectedMinor && (
                  <p className="d-flex justify-content-center" style={textStyle}>
                    GIỜ MÀ CHƯA CHỌN ĐƯỢC À?!
                  </p>
                )}
            {selectedMinor && minors.find((minor) => minor.name === selectedMinor) && (
                <React.Fragment>
                  <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Foundation</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {minors.find((minor) => minor.name === selectedMinor).courses.foundation.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>
          
                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Intermediate</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {minors.find((minor) => minor.name === selectedMinor).courses.intermediate.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Advanced</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {minors.find((minor) => minor.name === selectedMinor).courses.advance.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                      <div className='col'>
                        <h5 style={levelStyle}>Capstone</h5>
                      </div>
                      <div className="col">
                        <ul style={cardStyle}>
                          {minors.find((minor) => minor.name === selectedMinor).courses.capstone.map((course, index) => (
                                      <li key={index} style={courseStyle}> 
                                      <Form.Check aria-label="option 1" /> {course}</li>
                                    ))}
                        </ul>
                      </div>
                    </div>
                </React.Fragment>
                  )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorMinor;


