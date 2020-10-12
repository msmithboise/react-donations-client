import { Grid,Paper, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, withStyles} from "@material-ui/core";
import React, { Component, useState, useEffect } from "react"
import { connect } from "react-redux";
import * as actions from "../Actions/dCandidates";
import DonationCandidatesForm from "./DonationCanditateForm";

const styles = theme => ({
    root:{
        "& .MuiTableCell-head":{
            fontSize:"1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

//props.classes
// const

const DonationCandidates = ({classes,...props}) => {


    useEffect(() =>{
props.fetchAllDCandidates()
    }, [])// componentDidMount

    return (
        <Paper className = {classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <DonationCandidatesForm/>
                </Grid>
                <Grid item xs={6}>
                     <TableContainer>
                         <Table>
                        <TableHead  className={classes.root}>
                        <TableRow>
                            <TableCell>
                            Name
                            </TableCell>
                            <TableCell>
                            Mobile
                            </TableCell>
                            <TableCell>
                            Blood Group
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            props.dCandidateList.map((record,index) =>{
                                return(<TableRow key={index} hover>
                                    <TableCell>{record.fullName}</TableCell>
                                    <TableCell>{record.mobile}</TableCell>
                                    <TableCell>{record.bloodGroup}</TableCell>
                                </TableRow>)
                            })
                        }
                        </TableBody>
                        </Table>
                     </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );

}

const mapStateToProps = state=> ({
        dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates : actions.fetchAll
}


 
export default connect(mapStateToProps, mapActionToProps) (withStyles(styles) (DonationCandidates));