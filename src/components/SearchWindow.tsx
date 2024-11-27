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
  const [gender, setGender] = useState("");
  const [acqDate, setAcqDate] = useState(null);

  const handleGenderClick = (selectedGender: string) => {
    console.log({ selectedGender });
    setGender(selectedGender);
  };

  const handleDateChange = (date: Date) => {
    setAcqDate(date);
    console.log(date);
  };

  return (
    <div>
      <div>
        {" "}
        Patient ID <Input placeholder="Enter Patient ID " height="25px"></Input>
      </div>
      <div>
        {" "}
        Patient Name{" "}
        <Input placeholder="Enter Patient Name" height="25px"></Input>{" "}
      </div>
      <div>
        {" "}
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

      <div> Acquisition Date</div>
      {/* <Button onClick={()=> setCalendarVis(true)}> Choose Date</Button> */}
      <DatePicker
        selected={acqDate}
        onChange={handleDateChange}
        placeholderText="Please Select a Date"
      ></DatePicker>
      <div> PR Interval</div>
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <NumberInput defaultValue={10} width="200px">
            <NumberInputField />
          </NumberInput>
        </Box>
      </Flex>
      <div> QT Interval</div>
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <NumberInput defaultValue={10} width="200px">
            <NumberInputField />
          </NumberInput>
        </Box>
      </Flex>
      <div> Ventricle Rate</div>
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <NumberInput defaultValue={10} width="200px">
            <NumberInputField />
          </NumberInput>
        </Box>
      </Flex>
      <button type="button" className="btn">
        Search
      </button>
    </div>
  );
};

export default SearchWindow;
