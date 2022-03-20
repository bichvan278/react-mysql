import './../assets/css/App.css';
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createUser } from '../redux/actions/userAction';

const Modal = ({closeModal, submitAddUser, dataAdd}) => {

    const [Fullname, setFullname] = useState();
    const [Password, setPassword] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Phone, setPhone] = useState('');
    const [Dob, setDob] = useState('');
    const [Address, setAddress] = useState('');
    const [Status, setStatus] = useState(1);
    const [RoleID, setRoleID] = useState(2);
    const [Email, setEmail] = useState('');

    const dataAdd = {
        Fullname, 
        Email,
        Password, 
        Dob,
        Phone,
        Address,
        Status,
        RoleID
    }

    return (
        <div className='modal-class'>
            <div className="modal-box" id="modal-box">
                <div className="container" id="c-modal">
                    <div className="modal-title">
                        <h2 className="modal-text">add user</h2>
                        <span   className="modal-close" 
                                id="modal-close"
                                onClick={() => closeModal(false)}>
                            &times;
                        </span>
                    </div>
                    <form action="#" id="frmAdduser">
                        {/* <!-- Row 1 --> */}
                        <div className="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Fullname</span>
                                <input  type="text" name="username" id="username"
                                        value={dataAdd.Fullname} 
                                        onChange={(e) => {setFullname(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Password</span>
                                <input  type="password" name="password" id="password"
                                        value={dataAdd.Password}
                                        onChange={(e) => {setPassword(e.target.value)}} />
                            </div>
                        </div>
                        {/* Row mess-err */}
                        <div className="row">
                            <div className="mess-error">
                                <span  id="mess-error1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Please check again your username!
                                </span>
                            </div>
                            <div className="mess-error">
                                <span  id="mess-error2">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Please check again your password!
                                </span>
                            </div>
                        </div>
                
                        {/* <!-- Row 2 --> */}
                        <div className="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">First name</span>
                                <input  type="text" className="firstname" id="firstname"
                                        value={dataAdd.Firstname}
                                        onChange={(e) => {setFirstname(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Last name</span>
                                <input  type="text" name="lastname" id="lastname"
                                        value={dataAdd.Lastname}
                                        onChange={(e) => {setLastname(e.target.value)}} />
                            </div>
                        </div>
                        {/* Row mess-error */}
                        <div className="row">
                            <div className="mess-error">
                                <span  id="mess-error3">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Please check again your last name!
                                </span>
                            </div>
                        </div>
                
                        {/* <!-- Row 3 --> */}
                        <div className="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Role</span>
                                <select name="role" id="role">
                                    <option value="1" id="op-role">Administrator</option>
                                    <option value="2" id="op-role">Member</option>
                                </select>
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Status</span>
                                <select name="status" id="status" >
                                    <option value="0" id="op-stt">Active</option>
                                    <option value="1" id="op-stt">InActive</option>
                                </select>
                            </div>
                        </div>
                
                        {/* <!-- Row full form --> */}
                        <div className="row" id="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Email</span>
                                <input  type="email" name="email" id="email"
                                        value={dataAdd.Email}
                                        onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Birthday</span>
                                <input  type="date" name="dob" id="dob"
                                        value={dataAdd.Dob}
                                        onChange={(e) => {setDob(e.target.value)}} />
                            </div>
                            {/* <div className="mess-error">
                                <span  id="mess-error4">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Please check again your email!
                                </span>
                            </div> */}
                        </div>
                        {/* Row full */}
                        <div className="row" id="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Phone</span>
                                <select name="firstphone" id="firstphone" >
                                    <option value="0" id="op-phone">+84</option>
                                    <option value="1" id="op-phone">+82</option>
                                </select>
                                <input  type="number" name="phone" id="phone"
                                        value={dataAdd.Phone}
                                        onChange={(e) => {setPhone(e.target.value)}} />
                            </div>
                            <div className="mess-error">
                                <span  id="mess-error5">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Please check again your phone number!
                                </span>
                            </div>
                        </div>

                        {/* Row full */}
                        <div className="row" id="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Address</span>
                                <div id="modal-select">
                                    <div className="s-modal-select">
                                        <select name="country" id="country" defaultValue={""}>
                                            <option value="" >Choose country</option>
                                        </select>
                                        <div className="mess-error">
                                            <span  id="mess-error6">
                                                <i className="fas fa-exclamation-circle"></i>
                                                Please select your country!
                                            </span>
                                        </div>
                                    </div>
                                    <div className="s-modal-select">
                                        <select name="city" id="city" defaultValue={""}>
                                            <option value="" >Choose city</option>
                                        </select>
                                        <div className="mess-error">
                                            <span  id="mess-error7">
                                                <i className="fas fa-exclamation-circle"></i>
                                                Please select your city!
                                            </span>
                                        </div>
                                    </div>
                                    <div className="s-modal-select">
                                        <select name="district" id="district" defaultValue={""}>
                                            <option value="" >Choose district</option>
                                        </select>
                                        <div className="mess-error">
                                            <span  id="mess-error8">
                                                <i className="fas fa-exclamation-circle"></i>
                                                Please select your district!
                                            </span>
                                        </div>
                                    </div>
                                    <div className="s-modal-select">
                                        <select name="ward" id="ward" defaultValue={""}>
                                            <option value="" >Choose ward</option>
                                        </select>
                                        <div className="mess-error">
                                            <span  id="mess-error9">
                                                <i className="fas fa-exclamation-circle"></i>
                                                Please select your ward!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row full */}
                        <div className="row" id="row">
                            <div className="modal-frm-control">
                            <span className="modal-frm-text"></span>
                                <input  type="text" name="address" id="address"
                                        value={dataAdd.Addrerss}
                                        onChange={(e) => {setAddress(e.target.value)}} />
                                <div className="mess-error">
                                    <span  id="mess-error10">
                                        <i className="fas fa-exclamation-circle"></i>
                                        Please check again your address!
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Row full */}
                        <div className="row" id="row">
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Note</span>
                                <textarea name="note" id="note"></textarea>
                            </div>
                        </div>
    
                        {/* <!-- Row button --> */}
                        <div className="row" id="row">
                            <div className="modal-btn-control">
                                <button className="cancelAdd" id="cancelAdd" type="reset">CANCEL</button>
                                <button className="submitAdd" id="submitAdd" type="submit" onClick={submitAddUser}>SAVE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;