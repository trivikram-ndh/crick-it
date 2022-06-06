import { useState, useEffect, useMemo,} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from "react-redux";
import { deleteSeries, editSeriesList, getseries } from "../redux/ducks/series";
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";

const SeriesList = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getseries())
      }, [dispatch]);
    const series = useSelector((state) => state.series.seriesState);
    const searchList = useSelector((state) => state.series.searchSeries);
    // console.log("search list", searchList);
    
    let seriesList = useMemo(() => {
        // console.log( "payload", series )
        let data = [];
        if( !searchList?.length ){
            data = series ? series : [];
        } else {
            data = searchList.length > 0 ? searchList : [];
        }
        // let data = series ? series : [];
        return data;
    }, [series, searchList])
    
    // console.log("search series list::", seriesList);

    const openMtachDetails = ( id ) => {
        navigate(`/matches/${id}`)    
    }

    const editItem = ( index, status) => {
        dispatch(editSeriesList({index, status}));
    }

    const deleteItem = ( id ) => {
        dispatch(deleteSeries(id))     
    }

    return (
        <>
        <List>
            { seriesList.length>0 && seriesList.map((item, index ) => {
                return (
                <>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ListItemButton key={ item.name } onClick={ () => openMtachDetails( item.id ) }>
                            <ListItemText primary={item.name} secondary={item.endDate} />
                            <ChevronRightIcon />
                        </ListItemButton>
                        <IconButton onClick={(e) => editItem(index, true)} sx={{ m: '0px 10px' }} aria-label="edit" size="small" color="primary">
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => deleteItem(index)} sx={{ m: '0px 10px' }} aria-label="delete" size="small" color="error">
                            <DeleteIcon />
                        </IconButton>
                    </div>
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