import React, { useEffect, useState, useMemo } from "react";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import SeriesList from "../../component/seriesList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getmatch } from "../../redux/ducks/match";


const Matches = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();

    // console.log("matchUrlParams", id)

    useEffect(() => {
        if( id ){
            dispatch( getmatch( { id: id }) );
        }
    }, [id])
    const matches = useSelector((state) => state.matches.matchState);

    let { info, matchList } = useMemo(() => {
        let data = matches ? matches : null;
        let info = null;
        let matchList = [];
        if( data ){
            info = data.info;
            matchList = data.matchList;
        }
        return { info, matchList };
    }, [matches])
    // console.log("matches list::", matchList);

    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#fbfbfb', padding: "25px", marginTop: "25px" }}>
            { info && <Typography variant="h5" component="div" sx={{ marginBottom: "15px" }}>{ info.name }</Typography>}
                <Grid container spacing={2}>
                    {
                        matchList.length > 0 ? matchList.map((item, index ) => 
                            <Grid item key={ item.name } >
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {item.venue}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Chip label={item.status} color="primary" variant="outlined" />
                                        <Chip label={item.date} variant="outlined" sx={{ marginRight: "5px" }} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                        :
                        <p>No matches found</p>
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default Matches;