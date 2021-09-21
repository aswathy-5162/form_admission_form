import React, { Component } from "react";    
import './AdmissionForm.css'    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',       
            dob: '',
            gender:'radio',    
            division: 'select',        
            class_s: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;
        
    }    
         
    handleFormValidation() {    
        const { studName, dob, division, class_s } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
            if (!studName) {    
             formIsValid = false;    
             formErrors["studNameErr"] = "Only letters and space.";
            }
            else {    
                var pattern = /^[A-Za-z\s]+$/;    
                if (!pattern.test(studName)) {    
                    formIsValid = false;    
                    formErrors["studNameErr"] = "Invalid name";    
                }    
            }          
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern1 = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern1.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
        //gender   
        
                         
        //division    
        if (division === '' || division === "select") {    
            formIsValid = false;    
            formErrors["divisionErr"] = "Select division.";    
        }    
    
        //Phone number    
        //Class   
        if (class_s === '' || class_s === "select") {    
            formIsValid = false;    
            formErrors["class_sErr"] = "Select class.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, dobErr,divisionErr, class_sErr } = this.state.formErrors;    
    
        return ( 
              
            <div  className="formDiv">    
                <h3 style={{ textAlign: "center" }} >ADMISSION FORM </ h3>    
                <div>  
                   
                    <form onSubmit={this.handleSubmit }>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 5 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        <div>
                            
                            <label>Gender</label>  <br/>                             
                               <input type="radio" value="Male" name="gender" /> Male
                                <input type="radio" value="Female" name="gender" /> Female
                          </div>
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 5 }}>{dobErr}</div>    
                            }    
                        </div> 
                          
                        <div>    
                            <label htmlFor="division">Divistion</label>    
                            <select name="division" onChange={this.handleChange}    
                                className={divisionErr ? ' showError' : ''}    
                                value={this.state.division} >    
                                <option value="select">--Select--</option>    
                                <option value="A">A</option>    
                                <option value="B">B</option>    
                                <option value="C">C</option>    
                            </select>    
                            {divisionErr &&    
                                <div style={{ color: "red", paddingBottom: 5 }}>{divisionErr}</div>    
                            }    
                        </div>    
                            
                        <div>    
                            <label htmlFor="class_s">Class</label>    
                            <select name="class_s"    
                                value={this.state.class_s}    
                                onChange={this.handleChange}    
                                className={class_sErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="1">I</option>    
                                <option value="2">II</option>    
                                <option value="3">III</option> 
                                <option value="4">IV</option>
                                <option value="5">V</option>
                                <option value="6">VI</option>
                                <option value="7">VII</option>
                                <option value="8">VIII</option>
                                <option value="9">IX</option>
                                <option value="10">X</option>
                                <option value="11">XI</option>
                                <option value="12">XII</option>
                            </select>    
                            {class_sErr &&    
                                <div style={{ color: "red", paddingBottom: 5 }}>{class_sErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default AdmissionForm;