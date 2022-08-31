import React, { useContext } from "react";
import headerLogo from '../../assets/logo.svg';
import './Header.css';
import { Button } from '@material-ui/core';
import Login from '../../api/Login';
import Register from '../../api/Register';
import { UserDetailsContext } from "../UserDetailsContext";
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const TabPanel = (props) => {
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

const Header = () => {
    var userDetails = useContext(UserDetailsContext);
    const [value, setValue] = React.useState(0);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [loginDetails, setLoginDetails] = React.useState({
        userName: "",
        password: ""
    })

    const path = window.location.pathname;


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const inputChangedHandler = (e) => {
        const state = loginDetails;
        state[e.target.name] = e.target.value;

        setLoginDetails({ ...state })
        console.log(loginDetails);
    };

    const { userName, password } = loginDetails;
    const { firstName, lastName, ReguserName, Regpassword, contactNo } = loginDetails;

    const onFormSubmitted = (e) => {
        e.preventDefault();
        Login(loginDetails.userName, loginDetails.password)
    }
    const onRegister = (e) => {
        console.log("result")

        e.preventDefault();
        Register();
    }
    return (
        <div className="headerClass">
            <img src={headerLogo} className="headerLogo" />

            {userDetails.access_token ?
                <Button variant="contained" style={{ float: 'right' }} onClick={Register}>Logout</Button>
                :
                <Button variant="contained" style={{ float: 'right' }} onClick={() => setIsOpen(true)}>Login</Button>
            }
            {
                path && path.split('/')[1] == 'movie' &&
                <Button style={{ float: 'right', marginRight: "10px", backgroundColor: 'blue' }}>
                    <a href="/bookshow/:id=009ae262-a234-11e8-b475-720006ceb890" style={{ color: 'white', textDecoration: 'none' }}>Book Show</a>
                </Button>
            }


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                style={customStyles}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="LOGIN" />
                    <Tab label="REGISTER" />
                </Tabs>
                <TabPanel value={value} index={0} style={{ textAlign: "center" }} >

                    <ValidatorForm onSubmit={onFormSubmitted}>
                        <TextValidator
                            id="userName"
                            label="Username *"
                            type="text"
                            name="userName"
                            onChange={inputChangedHandler}
                            value={userName}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        >
                        </TextValidator>

                        <TextValidator
                            id="password"
                            type="password"
                            name="password"
                            onChange={inputChangedHandler}
                            label="Password *"
                            value={password}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        ></TextValidator>
                        <br />

                        <Button variant="contained" type='submit' style={{ margin: '10px', backgroundColor: "#040397", color: "white" }} >LOGIN</Button>

                    </ValidatorForm>

                </TabPanel>
                <TabPanel value={value} index={1} style={{ textAlign: "center" }} >

                    <ValidatorForm onSubmit={ onRegister}>
                        <TextValidator
                            id="firstName"
                            label="First Name *"
                            type="text"
                            name="firstName"
                            onChange={inputChangedHandler}
                            value={firstName}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        >
                        </TextValidator>

                        <TextValidator
                            id="lastName"
                            type="text"
                            name="lastName"
                            onChange={inputChangedHandler}
                            label="Last Name *"
                            value={lastName}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        ></TextValidator>

                        <TextValidator
                            id="ReguserName"
                            label="Email *"
                            type="text"
                            name="ReguserName"
                            onChange={inputChangedHandler}
                            value={ReguserName}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        >
                        </TextValidator>

                        <TextValidator
                            id="Regpassword"
                            type="password"
                            name="Regpassword"
                            onChange={inputChangedHandler}
                            label="Password *"
                            value={Regpassword}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        ></TextValidator>
                        <TextValidator
                            id="contactNo"
                            type="text"
                            name="contactNo"
                            onChange={inputChangedHandler}
                            label="Contact No *"
                            value={contactNo}
                            validators={['required']}
                            errorMessages={['required']}
                            style={{ margin: '10px' }}
                        ></TextValidator>
                        <br />
                        <Button variant="contained" type='submit' style={{ margin: '10px', backgroundColor: "#040397", color: "white" }} >REGISTER</Button>

                    </ValidatorForm>
                </TabPanel>
            </Modal>

        </div>

    )
}
export default Header;