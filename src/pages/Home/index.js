import { useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SeriesList from "../../component/seriesList";
import SeriesSearch from "../../component/seriesSearch";
import CreateList from "../../component/createList";

const Home = () =>{
    const [test, setTest] = useState('value');
    console.log("test", test);
    console.log("set test", setTest);
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