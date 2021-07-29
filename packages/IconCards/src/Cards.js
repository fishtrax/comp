import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    makeStyles, 
    Card, 
    CardContent,
    Typography,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//import OpenCard from './OpenCard';

const BUCKET = 'https://d3izp14dmtz9lq.cloudfront.net';

const icons = {
    restroom: `${BUCKET}/restroom.svg`,
    lodging: `${BUCKET}/fishing-lodge.svg`,
    miscellaneous: `${BUCKET}/misc.svg`,
    flyShop: `${BUCKET}/fly-shop.svg`,
    hazard: `${BUCKET}/hazard.svg`,
    dam: `${BUCKET}/dam.svg`,
    bridge: `${BUCKET}/bridge.svg`,
    campSite: `${BUCKET}/camp-site.svg`,
    parking: `${BUCKET}/parking.svg`,
    boatRamp: `${BUCKET}/boat-ramp.svg`,
    accessPoint: `${BUCKET}/access-point.svg`,
}

const useStyles = makeStyles(theme => ({
    container: {
        fontFamily: 'Rajdhani, sans serif',
    },
    root: {
        margin: '10px 7px',
        minWidth: 260
    },
    backButton: {
        background: '#e3e5e4',
        color: '#696969',
        borderRadius: 20,
        fontSize: 13,
        boxShadow: '0px 2px 2px gray',
        padding: '6px 18px', 
        textTransform: 'uppercase',
        textDecoration: 'none',
        '&:hover': {
            background: '#797D83',
            color: 'white'
        },
    },
    icons: {
        width: 30,
        height: 30,
        padding: 2
    },
    sideIcons: {
        width: 25,
        height: 25,
        padding: '5px 2px 0px 3px',
        cursor: 'pointer',
        color: 'gray',
    }
}));

const IconCards = ({ content, bodyWidth, selectedCard }) => {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);
    const [selectedTile, setSelectedTile] = useState(null);
    const [tileOpen, setTileOpen] = useState(false);
    const [cardContent, setCardContent] = useState(content);

    useLayoutEffect(() => {
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', updateWindowDimensions)
        return() => window.removeEventListener('resize', updateWindowDimensions)
    });

    const deleteItem = (index) => {
        let holder = cardContent;
        holder.splice(index, 1)
        return setCardContent([...holder])
    }

    const mapCards = () => {
        return cardContent.map((location, index) => {
            return(
                <Card key={index} className={classes.root}>
                    <CardContent style={{display: 'flex', background: '#f7f7f7', position: 'relative', padding: '10px'}}>
                        <img src={icons[location.type]} className={classes.icons} /> 
                        <Typography component="h6" style={{margin: '5px 0 0 10px'}}>
                            {location.title}
                        </Typography>
                        <div style={{position: 'absolute', right: 10}}>
                            <EditIcon className={classes.sideIcons} onClick={()=>selectedCard(location.title, 'edit')} /> 
                            <DeleteOutlineIcon className={classes.sideIcons} onClick={()=>deleteItem(index)} /> 
                        </div>
                    </CardContent>    
                </Card>
            )
        })
    }

    return (
        <div className={classes.container} style={{width: bodyWidth}}>
            {
                mapCards()
            }
        </div>
    )
};

export default IconCards;