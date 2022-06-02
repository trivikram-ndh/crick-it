import { useState, useEffect, useMemo } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector, useDispatch } from "react-redux";
import { getseries } from "../redux/ducks/series";
import { useNavigate } from 'react-router-dom';

const SeriesList = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getseries())
      }, [dispatch]);
    const series = useSelector((state) => state.series.seriesState);
    // const searchList = useSelector((state) => state.serachSeries.seriesState);
    
    let seriesList = useMemo(() => {
        // console.log( "payload", series, searchList )
        // let data = [];
        // if( !searchList?.length ){
        //     data = series ? series : [];
        // } else {
        //     data = searchList.length > 0 ? searchList : [];
        // }
        let data = series ? series : [];
        return data;
    }, [series])

    
    // console.log("search series list::", seriesList);

    const openMtachDetails = ( id ) => {
        navigate(`/matches/${id}`)     
    }

    return (
        <>
        <List>
            { seriesList.length>0 && seriesList.map((item, index ) => {
                return (
                <>
                    <ListItemButton key={ item.name } onClick={ () => openMtachDetails( item.id ) }>
                        <ListItemText primary={item.name} secondary={item.endDate} />
                        <ChevronRightIcon />
                    </ListItemButton>
                    {
                        (seriesList.length - 1) === index ? <></> : <Divider key={index} />
                    }
                </>
                )
            })}
        </List>
        </>
    )
}

export default SeriesList;