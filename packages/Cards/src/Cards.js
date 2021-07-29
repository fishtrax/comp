import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    makeStyles, 
    Button,
    Card, 
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    InputBase
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import OpenCard from './OpenCard';

const useStyles = makeStyles(theme => ({
    container: {
        opacity: "90%",
        fontFamily: 'Rajdhani, sans serif',
    },
    root: {
        margin: '10px 7px'
    },
    media: {
        height: 140,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: 5,
        '&:hover': {
          opacity: 0.7,
        },
        maxWidth: 345,
        width: '95%',
        marginLeft: 10,
        background: '#E3E5E4'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'sticky',
        top: 20,
        left: 40,
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
    }
}));

const Cards = ({ content, bodyWidth }) => {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);
    const [tileOpened, setTileOpened] = useState(false);
    const [selectedTile, setSelectedTile] = useState(null);
    const [cardData, setCardData] = useState(content);
    const [search, setSearch] = useState(' ');

    useLayoutEffect(() => {
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', updateWindowDimensions)
        return() => window.removeEventListener('resize', updateWindowDimensions)
    });

    useEffect(() => {
        filterResults()
    }, [search]);

    const mapCards = () => {
        return Object.keys(cardData).sort().map((location, index) => {
            return(
                <Card key={index} className={classes.root} onClick={()=> {setSelectedTile(cardData[location]), setTileOpened(true)}}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`${cardData[location].image}`}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6">
                                {cardData[location].location}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {cardData[location].state}
                                {cardData[location].distance ? '  •  ' + cardData[location].distance : null}
                                {cardData[location].size ? '  •  ' + cardData[location].size : null}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        })
    }

    const filterResults = () => {
        let output = {}
        Object.keys(content).map((item) => {
            item.toLowerCase().includes(search.toLowerCase()) ? output[item] = content[item] : null
        })
        return setCardData(output)
    }

    const searchResults = (value) => {
        setSearch(value)
    }

    const searchBar = () => {
        return(
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=> searchResults(e.target.value)}
                />
            </div>
        )
    }
    
    return (
        <div className={classes.container} style={{width: bodyWidth}}>
            {
                tileOpened ? <Button className={classes.backButton} children={'Back to results'} onClick={()=>setTileOpened(false)}/> : searchBar()
            }
            {
                tileOpened ? <OpenCard selectedTile={selectedTile} /> : mapCards()
            }
        </div>
    )
};

export default Cards;