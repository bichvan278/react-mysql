import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './../assets/css/App.css';
import Modal from './Modal';
import axios from 'axios';
import ModalDetail from './ModalDetail';
import { getAllUser, deleteUser, getUserByID } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const TableUser = () => {

    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getAllUser());
    }, []);
    console.log("Data all users: ", users);

    // Open Modal Add User
    const [openModal, setOpenModal] = useState(false);
    const isOpenning = () => setOpenModal(true);

    // Open Modal Detail by ID

    // const [openModalDetail, setOpenModalDetail] = useState(false);
    // const [userDetail, setuserDetail] = useState({});
    const nagative = useNavigate();
    function isOpenningDetail(e) {
        const id = e.target.value;
        console.log(id);
        if (id === '' || id === undefined) {
            alert("Cannot find user!");
            window.location.reload(true);
        } else {
            nagative(`/detail/${id}`);
        }
    };

    // Function update user
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [userEdit, setuserEdit] = useState({});

    function isOpenningEdit(e) {
        const id = e.target.value;
        console.log("Edit:", id)
        if (id === '' || id === undefined) {
            alert("Cannot find user!");
            window.location.reload(true);
        } else {
            nagative(`/edit/${id}`);
        }
    }
    // console.log("Edit:", userDetail[0]);

    // Function delete user
    function deleteCurrentUser(e) {
        const id = e.target.value;
        console.log(id);
        if( id === '' || id === undefined){
            alert("Cannot find user to remove!");
            window.location.reload(true);
        }
        else {
            dispatch(deleteUser(id))
            .then( result => {
                if(result.status === 200 || result.data === 204) {
                    alert("Removed!");
                    window.location.reload(true);
                }
                else {
                    alert("Try again!");
                }
            })
            .catch(error => console.log(error));
        }
    };

    return (
        <div className="tab-content">
            <table cellSpacing="0" cellPadding="5" border="2" id="tab-users">
                <thead>
                    <tr>
                        <th rowSpan="2">STT</th>
                        <th rowSpan="2">UserID</th>
                        <th rowSpan="2">Fullname</th>
                        <th rowSpan="2">Email</th>
                        <th rowSpan="2">Birthday</th>
                        <th colSpan="2">Activity Date</th>
                        <th rowSpan="2">Admin</th>
                        <th rowSpan="2">Status</th>
                        <th colSpan="3" rowSpan="3">
                            <button className="btnOpenModal" 
                                    onClick={isOpenning}>Add
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>First login date</th>
                        <th>Last login date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.UserID}</td>
                            <td>{user.Fullname}</td>
                            <td>{user.Email}</td>
                            <td>{user.Dob}</td>
                            <td>{user.Firstlogin}</td>
                            <td>{user.Lastlogin}</td>
                            <td>
                                <input type="checkbox" name="role" id="role" value="Admin" />
                            </td>
                            <td>
                                <div className='stt-class'>
                                    <input type="radio" name="status" id="status" value="Status" />
                                    <span>{user.status === 1 ? 'Active' : 'InActive'}</span>
                                </div>
                            </td>
                            <td>
                                <button className="btnDetail" onClick={isOpenningDetail} value={user.UserID}>
                                    <i className="fas fa-info-circle"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btnEdit" onClick={isOpenningEdit} value={user.UserID}>
                                    <i className="fas fa-user-edit"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btnDel" onClick={deleteCurrentUser} value={user.UserID}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="8" className="sum-title">Count users is active</td>
                        <td colSpan="4" className="sum-text">6</td>
                    </tr>
                </tfoot>
            </table>
            {/* Modal */}
            { openModal && <Modal closeModal={setOpenModal} />}
            {/* { openModalDetail && <ModalDetail userdetail={userDetail[0]} closeModalDetail={setOpenModalDetail} />} */}
            {/* { openModalEdit && <Modal userData={userDetail[0]} closeModal={setOpenModalEdit} />} */}
        </div>
    )
}

export default TableUser;