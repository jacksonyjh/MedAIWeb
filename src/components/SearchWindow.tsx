import React, { useState } from "react";
import "./SearchWindow.css";

import {
  Button,
  Input,
  Stack,
  Box,
  NumberInput,
  NumberInputField,
  Flex,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchWindow = () => {
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [gender, setGender] = useState("");
  const [acqDate, setAcqDate] = useState(null);
  const [prInterval, setPrInterval] = useState("");
  const [qtInterval, setQtInterval] = useState("");
  const [ventricleRate, setVentricleRate] = useState("");

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleDateChange = (date) => {
    setAcqDate(date);
  };

  const handleSearchClick = () => {
    const searchData = {
      patientId,
      patientName,
      gender,
      acqDate,
      prInterval,
      qtInterval,
      ventricleRate,
    };
    console.log("Search Data:", searchData);
  };

  return (
    <div>
      <form>
        <div>
          Patient ID
          <Input
            placeholder="Enter Patient ID"
            height="25px"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>
        <div>
          Patient Name
          <Input
            placeholder="Enter Patient Name"
            height="25px"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div>
          Gender
          <Stack direction="row" justify="center">
            {["Male", "Female", "Other"].map((genderOption) => (
              <Button
                key={genderOption}
                className="gen btn"
                onClick={() => handleGenderClick(genderOption)}
                style={{
                  backgroundColor:
                    gender === genderOption ? "lightblue" : "white",
                }}
              >
                {genderOption}
              </Button>
            ))}
          </Stack>
        </div>
        <div>Acquisition Date</div>
        <DatePicker
          selected={acqDate}
          onChange={handleDateChange}
          placeholderText="Please Select a Date"
        />
        <div>PR Interval</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={prInterval}
              onChange={(valueString) => setPrInterval(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <div>QT Interval</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={qtInterval}
              onChange={(valueString) => setQtInterval(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <div>Ventricle Rate</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={ventricleRate}
              onChange={(valueString) => setVentricleRate(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <Button className="btn" onClick={handleSearchClick}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchWindow;
