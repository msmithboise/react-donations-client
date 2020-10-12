import { TextField, Grid} from "@material-ui/core";
import React, {useState} from "react";

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    again: '',
    bloodGroup: '',
    address: ''
}

const DonationCandidatesForm = (props) => {
    const {values,setValues} = useState(initialFieldValues)

    const handleInputChange = e =>{
        const{name, value}= e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return ( <form autoComplete="off" noValidate>

        <Grid container>
            <Grid item xs={6}>
            <TextField
            name="fullName"
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            />
             <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            />
             <div>bloodGroup</div>
            </Grid>
            <Grid item xs={6}>
            <TextField
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            /> <TextField
            name="age"
            variant="outlined"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
            /> <TextField
            name="address"
            variant="outlined"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
            />
            </Grid>
        </Grid>


    </form> );
}
 
export default DonationCandidatesForm;