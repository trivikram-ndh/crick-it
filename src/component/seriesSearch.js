import { useState, useEffect, useMemo } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { getsearchlist } from "../redux/ducks/search-series";

const SeriesSearch = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getsearchlist())
      }, [dispatch]);
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        // console.log("searchValue", searchValue.length);
        if( searchValue.length === 0 ){
            searchBtn();
        }
        setSearchInput(searchValue);
    }
    const searchBtn = () => {
        dispatch(getsearchlist(searchInput))
    }
    return (
        <>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search series"
                inputProps={{ 'aria-label': 'search series' }}
                onChange={(e) => searchItems(e.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={searchBtn} color="primary" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        </>
    )
}

export default SeriesSearch;