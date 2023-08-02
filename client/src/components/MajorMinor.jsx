import React, { useState } from "react";
import { Dropdown, Navbar, Nav } from "react-bootstrap";
import "../App.scss"

export const MajorMinor = () => {
    // State to keep track of the selected options
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedMinor, setSelectedMinor] = useState('');

    // Function to handle option selection for the major dropdown
    const handleMajorSelect = (eventKey) => {
      setSelectedMajor(eventKey);
    };

    // Function to handle option selection for the minor dropdown
    const handleMinorSelect = (eventKey) => {
      setSelectedMinor(eventKey);
    };

    // const options = {Option1: "Applied Mathematics", Option2: "Art and Media Studies", Option3: "Computer Science", Option4: "Economics", Option5: "Engineering", Option6: "History", Option7: "Intergrated Science", Option8: "Literature", Option9: "Psychology", Option10: "Social Studies", Option11: "Vietnam Studies"}

    const options = ["Applied Mathematics","Art and Media Studies", "Computer Science", "Economics","Engineering", "History", "Intergrated Science", "Literature","Psychology", "Social Studies", "Vietnam Studies"]

    // Function to display the result based on the selected option for the major dropdown
    const getMajorResult = () => {
      return options[selectedMajor] || null;
    };

    // Function to display the result based on the selected option for the minor dropdown
    const getMinorResult = () => {
      return options[selectedMinor] || null;
    };

    const titleStyle = {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '18px',
      color: 'var(--bs-secondary)',
    };

    return (
      <div className="container">
        <div style={{ marginTop: "100px" }}>
          <div className="d-flex justify-content-center">
            <div className="col">
              <div className="dropdown-title" style = {titleStyle}> Majors </div>
              <Dropdown onSelect={handleMajorSelect}>
                <Dropdown.Toggle variant="primary" id="major-dropdown-basic" style = {{width:'500px'}}>
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
              <div className="mt-3">
                {selectedMajor ? (
                  getMajorResult()
                ) : (
                  <div className="text-muted" style={{fontSize: '50px',position:'relative'}}>PLEASE CHOOSE YOUR MAJOR!?</div>
                )}
              </div>
            </div>

            <div className="col">
              <div className="dropdown-title" style = {titleStyle}> Majors/Minor </div>
              <Dropdown onSelect={handleMinorSelect}>
                <Dropdown.Toggle variant="primary" id="minor-dropdown-basic" style = {{width:'500px'}}>
                    Select one option for major or minor
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {options.map((option, index) => (
                      <Dropdown.Item key={index} eventKey={option}>
                          {option}
                      </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div className="mt-3">
                {selectedMinor ? (
                  getMinorResult()
                ) : (
                  <div className="text-muted" style={{fontSize: '50px',position:'relative'}}>PLEASE CHOOSE YOUR MAJOR?!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MajorMinor;


