import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        margin: '10px 0',
        fontFamily: 'Titillium Web, sans-serif !important',
    },
    innerContainer: {
        boxShadow: '0px 3px 3px #e3e5e4',
        marginLeft: 8,
        paddingBottom: 40,
        borderRadius: 5,
    },
    locationContainer: {
        display: 'flex',
        alignItems: 'space-between',
        width: '100%',
        marginLeft: 10
    },
    grouper: {
        padding: '0px 10px',
        margin: '10px 0 0 0'
    },
    headerSm: {
        color: '#797D83',
        fontSize: 12,
        fontWeight: 300,
        margin: 0
    },
    headerInfo: {
        color: 'black',
        fontSize: 14,
        fontWeight: 300,
        margin: '5px 0 0 0'
    },
    description: {
        color: '#797D83',
        fontSize: 14,
        fontWeight: 300,
        margin: 'auto',
        padding: '20px 0',
        width: '90%'
    },
    cardHeaders: {
        fontSize: 18,
    },
    cardCompany: {
        fontSize: 14,
        fontWeight: 600,
        margin: '0px 10px 0 0'
    }
}));

const OpenCard = ({ selectedTile }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <img className={classes.imgStyle} src={selectedTile.image} alt='riverImg' />
                <h3 className={classes.riverName}>{selectedTile.location}</h3>
                <div className={classes.locationContainer}>
                    {
                        selectedTile.state ? (
                        <div className={classes.grouper}>
                            <h6 className={classes.headerSm}>State</h6>
                            <h4 className={classes.headerInfo}>{selectedTile.state}</h4>
                        </div>
                        ) : null
                    }
                    { selectedTile.distance ? (
                        <div className={classes.grouper}>
                            <h6 className={classes.headerSm}>River Length</h6>
                            <h4 className={classes.headerInfo}>{selectedTile.distance}</h4>
                        </div>
                        ) : null
                    }
                    {    
                       selectedTile.size ? ( 
                        <div className={classes.grouper}>
                            <h6 className={classes.headerSm}>Avg. Fish Size</h6>
                            <h4 className={classes.headerInfo}>{selectedTile.size}</h4>
                        </div>
                        ): null
                    }
                </div>
            </div>
        </div>
    )
};

export default OpenCard;