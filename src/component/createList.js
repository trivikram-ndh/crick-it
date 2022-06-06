import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { createSeriesList, editSeriesList, updateSeriesList } from '../redux/ducks/series';

const CreateList = (props) => {
    const dispatch = useDispatch();
    const btnChange = useSelector((state) => state.series.btnState);
    const getEditData = useSelector((state) => state.series.editState);
    const [btn, setBtn] = useState(false);
    // console.log("btn status", btn);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const seriesTitle = (value) => {
        setTitle(value);
    }
    const seriesDate = (value) => {
        setDate(value);
    }
    const handleCancle = (index, status) => {
      dispatch(editSeriesList({index, status}));
    }
    const getValue = () => {
        let randomID = Math.floor(Math.random() * 10000);
        let seriesObj = {
            endDate: date,
            id: randomID,
            matches: 8,
            name: title,
            odi: 3,
            squads: 0,
            startDate: date,
            t20: 5,
            test: 0,
        }
        if (title !== '' && date !== '') {
            dispatch(createSeriesList(seriesObj));
        }
    }
    const updateValue = (index) => {
      let updateObj = {...getEditData, name: title, endDate: date};
      if (title !== '' && date !== '') {
        dispatch(updateSeriesList({updateObj, index}));
      }
    }
    useEffect(() => {
      // btnChange?.status === true ? (setBtn(true), setTitleValue(getEditData.name), setDateValue(getEditData.endDate)) : (setBtn(false), setTitleValue(''), setDateValue(''));
      if (btnChange?.status === true) {
        setBtn(true);
        setTitle(getEditData.name);
        setDate(getEditData.endDate);
      } else {
        setBtn(false);
        setTitle('');
        setDate('');
      }
    }, [btnChange]);
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth onChange={(e) => seriesTitle(e.target.value)} value={title} label="Title" sx={{marginBottom: 2}} variant="outlined" />
      <TextField fullWidth onChange={(e) => seriesDate(e.target.value)} value={date} label="Date" sx={{marginBottom: 2}} variant="outlined" />
      {
        btn ? <><Button variant="contained" onClick={() => updateValue(btnChange.index)}>Update</Button> <Button onClick={() => handleCancle(btnChange.index, false)}>Cancel</Button></> :
        <Button variant="contained" onClick={() => getValue()}>Save</Button>
      }
    </Box>
  );
}

export default CreateList;