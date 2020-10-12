import { Grid,Paper, TableContainer, TableHead, TableRow, TableCell, Table, TableBody} from "@material-ui/core";
import React, { Component, useState, useEffect } from "react"
import { connect } from "react-redux";
import * as actions from "../Actions/dCandidates";
import DonationCandidatesForm from "./DonationCanditateForm";

const DonationCandidates = (props) => {


    useEffect(() =>{
props.fetchAllDCandidates()
    }, [])// componentDidMount

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <DonationCandidatesForm/>
                </Grid>
                <Grid item xs={6}>
                     <TableContainer>
                         <Table>
                        <TableHead>
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
                                return(<TableRow key={index}>
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


 
export default connect(mapStateToProps, mapActionToProps) (DonationCandidates);