import React, { Component, useState, useEffect } from "react"
import { connect } from "react-redux";
import * as actions from "../Actions/dCandidates";

const DonationCandidates = (props) => {


    useEffect(() =>{
props.fetchAllDCandidates()
    }, [])// componentDidMount

    return (<div>from DonationCandidates</div>);

}

const mapStateToProps = state=> ({
        dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates : actions.fetchAll
}


 
export default connect(mapStateToProps, mapActionToProps) (DonationCandidates);