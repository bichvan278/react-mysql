import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import React, { useEffect, useState } from 'react';
import { createUser, getUserByID, updateUser } from '../redux/actions/userAction';

const EditPage = () => {

  const {id} = useParams();
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUserByID(id));
  }, []);
  console.log("Data user edit: ", user[0]);

  // Submit modal UPDATE user
    const [updatedata, setUpdateUser] = useState(user[0]);
    function submitModal() {
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
    <div>
      <Modal id={id} data={user[0]} submitModal={submitModal} />
    </div>
  )
}

export default EditPage;