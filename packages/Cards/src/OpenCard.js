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
    imgStyle: {
        height: 230,
        width: '100%',
        overflow: 'hide',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    riverName: {
        fontSize: '1.5rem',
        fontWeight: 600,
        margin: '10px 0 0 20px'
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
    cardExtras: {
        borderTop: '2px solid #e3e5e4',
        padding: '10px 0',
        width: '90%',
        margin: 'auto'
    },
    cardHeaders: {
        fontSize: 18,
    },
    cardCompany: {
        fontSize: 14,
        fontWeight: 600,
        margin: '0px 10px 0 0'
    },
    cardCompanySm: {
        fontSize: 14,
        fontWeight: 600,
        margin: '0 0 0 14px'
    },
    cardPhone: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 300,
        margin: 0,
        textDecoration: 'none',
        color: '#696969',
    },
    cardWebsite: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 300,
        margin: '0 0 2px 5px',
        textDecoration: 'none',
        color: '#696969',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    cardPhoneSm: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 300,
        margin: '0 0 0 10px',
        textDecoration: 'none',
        color: '#696969',
    },
    cardWebsiteSm: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 300,
        margin: '0 0 2px 10px',
        textDecoration: 'none',
        color: '#696969',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    cardAddress: {
        fontSize: 14,
        fontWeight: 300,
        margin: '0 0 2px 10px',
        color: '#696969',
    },
    cardImg: {
        width: 20
    },
    cardRegs: {
        fontSize: 14,
        fontWeight: 600,
        margin: '10px 0 -10px 14px'
    }
}));

const OpenCard = ({ selectedTile }) => {
    const classes = useStyles();

    const outputReport = () => {
        return (
            <div className={classes.cardExtras}>
                <h4 className={classes.cardHeaders}>{selectedTile.report.title}</h4>
                {
                    selectedTile.report.content.map((data, index) => {
                        return(
                            <div key={index} style={{margin: '20px 0'}}>
                                <div style={{display: 'flex'}}>
                                    <h4 className={classes.cardCompany}>{data.company}</h4>
                                    <a className={classes.cardPhone} href={`tel:${data.phone}`}>{data.phone}</a>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='website-icon' className={classes.cardImg} />
                                    <a href={`https://www.${data.website}`} className={classes.cardWebsite} target='_blank'>{data.website}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const outputShops = () => {
        return (
            <div className={classes.cardExtras}>
                <h4 className={classes.cardHeaders}>{selectedTile.shops.title}</h4>
                {
                    selectedTile.shops.content.map((data, index) => {
                        return(
                            <div key={index} style={{margin: '20px 0'}}>
                                <h4 className={classes.cardCompanySm}>{data.company}</h4>
                                <p className={classes.description}>{data.description}</p>
                                <div style={{display: 'flex', margin: '5px 0 10px 0'}}>
                                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='phone' className={classes.cardImg} />
                                    <a className={classes.cardPhoneSm} href={`tel:${data.phone}`}>{data.phone}</a>
                                </div>
                                <div style={{display: 'flex', margin: '5px 0 10px 0'}}>
                                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='website-icon' className={classes.cardImg} />
                                    <a href={`https://www.${data.website}`} className={classes.cardWebsiteSm} target='_blank'>{data.website}</a>
                                </div>
                                <div style={{display: 'flex', margin: '5px 0 10px 0'}}>
                                <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='website-icon' className={classes.cardImg} />
                                    <p className={classes.cardAddress} >{data.address}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const outputRegulations = () => {
        return (
            <div className={classes.cardExtras}>
                <h4 className={classes.cardRegs}>{selectedTile.regulations.title}</h4>
                <p className={classes.description}>{selectedTile.regulations.description}</p>
                <div style={{display: 'flex'}}>
                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='website-icon' className={classes.cardImg} />
                    <a href={`https://www.${selectedTile.regulations.website}`} className={classes.cardWebsiteSm} target='_blank'>{selectedTile.regulations.website}</a>
                </div>
            </div>
        )
    }

    const outputShuttles = () => {
        return (
            <div className={classes.cardExtras}>
                <h4 className={classes.cardRegs}>{selectedTile.shuttle.title}</h4>
                {
                    selectedTile.shuttle.content.map((data, index) => {
                        return(
                            <div key={index} style={{margin: '20px 0'}}>
                                <h4 className={classes.cardCompanySm}>{data.company}</h4>
                                <p className={classes.description}>{data.description}</p>
                                <div style={{display: 'flex', margin: '5px 0 10px 0'}}>
                                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='phone' className={classes.cardImg} />
                                    <a className={classes.cardPhoneSm} href={`tel:${data.phone}`}>{data.phone}</a>
                                </div>
                                <div style={{display: 'flex', margin: '5px 0 10px 0'}}>
                                    <img src={'https://ow-web.s3.amazonaws.com/misc.svg'} alt='website-icon' className={classes.cardImg} />
                                    <a href={`https://www.${data.website}`} className={classes.cardWebsiteSm} target='_blank'>{data.website}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


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
                {   selectedTile.description ? <p className={classes.description}>{selectedTile.description}</p> : null }
                {
                    selectedTile.report ? outputReport() : null
                }
                {
                    selectedTile.shops ? outputShops() : null
                }
                {
                    selectedTile.regulations ? outputRegulations() : null
                }
                {
                    selectedTile.shuttle ? outputShuttles() : null
                }
            </div>
        </div>
    )
};

export default OpenCard;