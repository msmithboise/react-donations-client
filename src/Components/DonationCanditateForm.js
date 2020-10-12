import { TextField, Grid, withStyles, Select, FormControl, InputLabel, MenuItem, Button} from "@material-ui/core";
import React, {useState} from "react";
import useForm from "./useForm";

const styles = theme => ({
    root:{

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl:{
        margin: theme.spacing(1),
            minWidth: 230,
    },

    smMargin:{
        margin: theme.spacing(1),
    }
})

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    again: '',
    bloodGroup: '',
    address: ''
}

const DonationCandidatesForm = ({classes, ...props}) => {

    const validate = () =>{
        let temp={}
        temp.fullName = values.fullName?"": "This field is required."
        temp.bloodGroup = values.bloodGroup?"": "This field is required."
        temp.mobile = values.mobile?"": "This field is required."
        temp.email = (/^$|.+@.+..+/).test(values.email)?"": "Email is not valid."
        setErrors({
            ...temp
        })
        
        return Object.values(temp).every(x => x=="")

    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    // material ui select dropdown
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() =>{
        setLabelWidth(inputLabel.current.offsetWidth);
    },[]);
    
  const handleSubmit = e =>{
      e.preventDefault()
      if(validate())
      {
          window.alert('Validation succeded!')
      }
  }

    return ( <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>

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
             <FormControl variant="outlined"
             className={classes.formControl}
             >
                 <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                 <Select
                 name="bloodGroup"
                 value={values.bloodGroup}
                 onChange={handleInputChange}
                 labelWidth={labelWidth}
                 >
                     <MenuItem value="">Select Blood Group </MenuItem>
                     <MenuItem value="A+">A +ve </MenuItem>
                     <MenuItem value="A-">A -ve </MenuItem>
                     <MenuItem value="B+">B +ve </MenuItem>
                     <MenuItem value="B-">B -ve </MenuItem>
                     <MenuItem value="AB+">AB +ve </MenuItem>
                     <MenuItem value="AB-">AB -ve </MenuItem>
                     <MenuItem value="O+">O +ve </MenuItem>
                     <MenuItem value="O-">O -ve </MenuItem>
                     </Select>
                  
             </FormControl>
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
            <div>   
               <Button
               variant="contained"
               color="primary" type="submit" className={classes.smMargin}>
                
                   Submit
                   </Button>
                   <Button
               variant="contained"
               color="default" className={classes.smMargin}>
                   Reset
                   </Button>    
            </div>
            </Grid>
        </Grid>


    </form> );
}
 
export default withStyles(styles) (DonationCandidatesForm);