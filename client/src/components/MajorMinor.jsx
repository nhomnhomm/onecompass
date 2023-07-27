import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

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

  // Function to display the result based on the selected option for the major dropdown
  const getMajorResult = () => {
    return <div>Result for {selectedMajor} on the major dropdown</div>;
  };

  // Function to display the result based on the selected option for the minor dropdown
  const getMinorResult = () => {
    return <div>Result for {selectedMinor} on the minor dropdown</div>;
  };

  const options = ["Applied Mathematics", "Art and Media Studies", "Computer Science", "Economics", "Engineering", "History", "Intergrated Science", "Literature", "Psychology", "Social Studies", "Vietnam Studies"]

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Dropdown onSelect={handleMajorSelect}>
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
          <div className="mt-3">
            {selectedMajor ? (
              getMajorResult()
            ) : (
              <div className="text-muted">Select an option for major to see the result.</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <Dropdown onSelect={handleMinorSelect}>
            <Dropdown.Toggle variant="primary" id="minor-dropdown-basic">
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
              <div className="text-muted">Select an option for the minor dropdown to see the result.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorMinor;


