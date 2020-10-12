import { Grid,Paper, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, withStyles, ButtonGroup, Button} from "@material-ui/core";
import React, { Component, useState, useEffect, setState } from "react"
import { connect } from "react-redux";
import * as actions from "../Actions/dCandidates";
import DonationCandidatesForm from "./DonationCanditateForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";

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

const DonationCandidates = ({classes, ...props}) => {

const [currentId, setCurrentId] = useState(0)

    useEffect(() =>{
props.fetchAllDCandidates()
    }, [])// componentDidMount

        //Toast msg.

        const {addToast} = useToasts()


const onDelete = id =>{
    if(window.confirm('Are you sure you want to delete this record?'))
    props.deleteDCandidate(id, ()=>  addToast("Deleted Succesfully!", {appearance: 'info'}))
}

    return (
        <Paper className = {classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <DonationCandidatesForm {...({ currentId, setCurrentId})} />
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
                                    <TableCell>
                                        <ButtonGroup variant="text">
                                            <Button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/></Button>
                                            <Button><DeleteIcon color="secondary" onClick={()=> onDelete(record.id)}/></Button>
                                        </ButtonGroup>
                                    </TableCell>
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
    fetchAllDCandidates : actions.fetchAll,
    deleteDCandidate: actions.Delete
}


 
export default connect(mapStateToProps, mapActionToProps) (withStyles(styles) (DonationCandidates));