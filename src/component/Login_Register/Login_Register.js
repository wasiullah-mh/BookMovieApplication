import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button } from '@material-ui/core';
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Login_Register.css'
import Login from '../../api/Login';


export default function Login_Register() {
    const [value, setValue] = React.useState(0);

    const [loginDetails, setLoginDetails] = React.useState({
        email: " ",
        password: " "
    })
    
    const [reqEmail, setReqEmail] = React.useState("dispNone");
    const [reqPassword, setReqPassword] = React.useState("dispNone");


    const [registerDetails, setRegisterDetails] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactNo: ''
    })


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <div>
                        <p>{children}</p>
                    </div>
                )}
            </div>
        );
    }

    const inputChangedHandler = (e) => {
        setReqEmail(e.target.value.split(","));
        // const state = loginDetails;
        // state[e.target.name] = e.target.value;

        // setLoginDetails({ ...state })
        // console.log(loginDetails);
    };;

    const onFormSubmitted = (e) => {
        e.preventDefault();
        console.log(loginDetails.email)
        loginDetails.email === " " ? setReqEmail("dispBlock") : setReqEmail("dispNone");
        loginDetails.password === " " ? setReqPassword("dispBlock") : setReqPassword("dispNone");
        // Login(loginDetails.email, loginDetails.password)
    }
    const { email, password } = loginDetails;
    return (
        <div >
            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label="LOGIN" />
                <Tab label="REGISTER" />
            </Tabs>
            <TabPanel value={value} index={0} style={{ textAlign: "center" }} >
                <FormControl required >
                    <InputLabel htmlFor="loginEmail">
                        Username
                    </InputLabel>
                    <Input
                        id="loginEmail"
                        value={reqEmail}
                        onChange={inputChangedHandler}
                    />
                    <FormHelperText className={reqEmail}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                {/* <FormControl required >
                    <InputLabel htmlFor="loginPassword">
                        Password
                    </InputLabel>
                    <Input
                        id="loginPassword"
                        value={password}
                        name="password"
                        type='password'
                        onChange={inputChangedHandler}
                    />
                    <FormHelperText className={reqPassword}>
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl> */}
                <FormControl required >
                    <InputLabel htmlFor="my-input1">Email asddress</InputLabel>
                    <Input id="my-input1" value={reqEmail}
                        onChange={inputChangedHandler} aria-describedby="my-helper-text" />
                    <FormHelperText >
                        <span className="red">Required</span>
                    </FormHelperText>
                </FormControl>

                <Button variant="contained" type='submit' onClick={onFormSubmitted} style={{ backgroundColor: "#040397", color: "white" }} >LOGIN</Button>

                {/* <Button variant="contained" type='submit' style={{ backgroundColor: "#040397", color: "white" }} >LOGIN</Button> */}

                <ValidatorForm onSubmit={onFormSubmitted}>
                    <TextValidator
                        id="email"
                        label="Enter Mail *"
                        type="text"
                        name="email"
                        onChange={inputChangedHandler}
                        value={email}
                        validators={['required']}
                        errorMessages={['required']}
                    >
                    </TextValidator>

                    <TextValidator
                        id="password"
                        type="password"
                        name="password"
                        onChange={inputChangedHandler}
                        label="Enter Password *"
                        value={password}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>
                    <br />

                    <Button variant="contained" type='submit' style={{ backgroundColor: "#040397", color: "white" }} >LOGIN</Button>

                </ValidatorForm>
            </TabPanel>


            <TabPanel value={value} index={1} style={{ textAlign: "center" }} >
                {/* <ValidatorForm className="subscriber-form" onSubmit={() => { }}>
                    <TextValidator
                        label="First Name *"
                        type="text"
                        onChange={(e) => setRegisterDetails({ firstName: e.target.value })}
                        value={registerDetails.firstName}
                        validators={['required']}
                        errorMessages={['required']}
                    >
                    </TextValidator>


                    <TextValidator
                        type="text"
                        onChange={(e) => { setRegisterDetails({ lastName: e.target.value }) }}
                        label="Last Name *"
                        value={registerDetails.lastName}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>

                    <TextValidator
                        type="text"
                        onChange={(e) => { setRegisterDetails({ email: e.target.value }) }}
                        label="Email *"
                        value={registerDetails.email}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>
                    <TextValidator
                        type="password"
                        onChange={(e) => { setRegisterDetails({ password: e.target.value }) }}
                        label="Password *"
                        value={registerDetails.password}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>
                    <TextValidator
                        type="text"
                        onChange={(e) => { setRegisterDetails({ contactNo: e.target.value }) }}
                        label="Contact No *"
                        value={registerDetails.contactNo}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>
                    <br />
                    <Button variant="contained" type='submit' style={{ backgroundColor: "#040397", color: "white" }} >LOGIN</Button>

                </ValidatorForm> */}
            </TabPanel>



        </div>
    );
}
