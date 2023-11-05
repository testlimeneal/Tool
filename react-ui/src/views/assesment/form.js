import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@material-ui/core';
import PersonalInfo from './personalinfo';
import AccountDetails from './accountdetails';
import ReviewInfo from './reviewinfo';
import axios from 'axios';
import configData from '../../config';
//Job Search Bar
import { useSelector } from 'react-redux';


const steps = [' Account Details', 'Personal Info', 'Review and Submit'];

const Form = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const account = useSelector((state) => state.account);
  const {setIsRegistered} = props
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      // user: '', // You need to populate this with the user's ID or object
      name: '',
      dob: '',
      gender: '',
      status: '',
      mobile_no: '',
      // email_id: '',
      address: '',
      job_aspirations: [],
      goals: '',
    },
    // validationSchema: Yup.object().shape({
    //   // user: Yup.string().required('User ID is required'),
    //   name: Yup.string().required('Name is required'),
    //   dob: Yup.date().nullable(),
    //   gender: Yup.string().required('Gender is required'),
    //   status: Yup.string().required('Status is required'),
    //   mobile_no: Yup.string()
    //     // .matches(/^[6789]\d{9}$/, 'Mobile number must be a 10-digit valid number')
    //     .required('Mobile number is required'),
    //   email_id: Yup.string()
    //     .email('Invalid email address')
    //     .required('Email address is required'),
    //   address: Yup.string().required('Address is required'),
    //   job_aspirations: Yup.array()
    //     .of(Yup.string())
    //     .required('Atleast Select 1 Aspiration'),
    //   goals: Yup.string().required('Goals are required'),
    // }),
    onSubmit: async() => {
      console.log(activeStep)
      if (activeStep === steps.length - 1) {
        const temp = formik.values

        temp['job_aspirations'] = temp['job_aspirations'].map(item => parseInt(item, 10));
        const res = await axios.post(`${configData.API_SERVER}assessment/user-profiles/`,temp, { headers: { Authorization: `${account.token}` } });
        setActiveStep((prevStep) => prevStep + 1);
        setIsRegistered(true)
        console.log(res)
        // console.log(formik.values.map(({e}) => ({...e})));
      } else {
        console.log("hello")
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <AccountDetails formik={formik} />;
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div></div>
    }
  };

  return (
    <Box
      sx={{
        // maxWidth: '600px',
        padding: 2
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={formik.handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={formik.handleSubmit}>
              Next
            </Button>
          ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form;