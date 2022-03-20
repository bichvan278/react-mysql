import './../assets/css/App.css';
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createUser, getUserByID, updateUser } from '../redux/actions/userAction';
import { useParams } from 'react-router-dom';

const Modal = ({closeModal}) => {

    const {id} = useParams();
    const isCurrentMode = !id;
    const dispatch = useDispatch();
    if (id) {
        return dispatch(getUserByID(id))
        .then( result => {
            console.log(result);
            setnewUser(result);
        })
        .catch( e => console.log(e))
    }

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

    const [newUser, setnewUser] = useState({
        Fullname, 
        Email,
        Password, 
        Dob,
        Phone,
        Address,
        Status,
        RoleID
    });

    function submitModal() {
        alert("Are you sure to submit?");
        return isCurrentMode ? create(newUser) : update(id, updatedata);
    }

    // Submit data form ADD user
    function create(newUser) {
        if (newUser !== null) {
            console.log(newUser);
        } else {
            alert("Please fill in this form!");
        }
        return dispatch(createUser(newUser))
        .then(res => {
            if (res.status === 201) {
                alert("Successful!");
            }
            alert("Failed!");
        })
        .catch(error => console.log(error));
    }

    // Submit modal UPDATE user
    const [updatedata, setUpdateUser] = useState(newUser);
    function update(id, updatedata) {
        if (id !== '' || id !== undefined) {
            console.log(id);
            return dispatch(updateUser(id, updatedata))
            .then(res => {
                if (res.status === 200) {
                    alert("Successful!");
                }
                alert("Failed!");
            })
            .catch(error => console.log(error));
        }
    }

    return (
        <div className='modal-class'>
            <div className="modal-box" id="modal-box">
                <div className="container" id="c-modal">
                    <div className="modal-title">
                        <h2 className="modal-text">
                            {isCurrentMode ? 'add user' : 'edit user'}
                        </h2>
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
                                        value={newUser.Fullname} 
                                        onChange={(e) => {setFullname(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Password</span>
                                <input  type="password" name="password" id="password"
                                        value={newUser.Password}
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
                                        value={newUser.Firstname}
                                        onChange={(e) => {setFirstname(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Last name</span>
                                <input  type="text" name="lastname" id="lastname"
                                        value={newUser.Lastname}
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
                                        value={newUser.Email}
                                        onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="modal-frm-control">
                                <span className="modal-frm-text">Birthday</span>
                                <input  type="date" name="dob" id="dob"
                                        value={newUser.Dob}
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
                                        value={newUser.Phone}
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
                                        value={newUser.Addrerss}
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
                                <button className="submitAdd" id="submitAdd" type="submit" onClick={submitModal}>SAVE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;