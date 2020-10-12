import { TextField, Grid, withStyles, Select, FormControl, InputLabel, MenuItem, Button, FormHelperText} from "@material-ui/core";
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

    //validate()
    //validate({fullName: 'Jenny'})
    const validate = (fieldValues = values) =>{
        let temp={}
        if('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName?"": "This field is required."
        if('bloodGroup' in fieldValues)
        temp.bloodGroup = fieldValues.bloodGroup?"": "This field is required."
        if('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile?"": "This field is required."
        if('email' in fieldValues)
        temp.email = (/^$|.+@.+..+/).test(fieldValues.email)?"": "Email is not valid."
        setErrors({
            ...temp
        })
        
        if (fieldValues == values) 
            
        return Object.values(temp).every(x => x=="")

    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

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
            error={false}
            helperText = {errors.fullName}
            {...(errors.fullName && {error:true, helperText:errors.fullName})}
            />
             <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && {error:true, helperText:errors.email})}
            />
             <FormControl variant="outlined"
             className={classes.formControl}
             {...(errors.bloodGroup && {error:true})}
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
                    {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
             </FormControl>
            </Grid>
            <Grid item xs={6}>
            <TextField
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            {...(errors.mobile && {error:true, helperText:errors.mobile})}
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