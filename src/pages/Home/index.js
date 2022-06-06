import { useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SeriesList from "../../component/seriesList";
import SeriesSearch from "../../component/seriesSearch";
import CreateList from "../../component/createList";

const Home = () =>{

    return (
        <Container maxWidth="sm" sx={{ marginTop: '25px' }}>
            <CreateList />
            <Box sx={{ bgcolor: '#fbfbfb', marginTop: '25px', marginBottom: '25px' }}>
                <div style={{display: "flex", paddingTop: "25px", justifyContent: "center"}}>
                    <SeriesSearch />
                </div>
                <SeriesList />
            </Box>
        </Container>
    )
}

export default Home;