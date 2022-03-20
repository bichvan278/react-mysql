import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getUserByID } from '../redux/actions/userAction';
import ModalDetail from '../components/ModalDetail';


const DetailPage = (props) => {

    const {id} = useParams();
    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getUserByID(id));
    }, []);
    console.log("Data user detail: ", user[0]);

    return (
        <div>
            <ModalDetail userdetail={user[0]} />    
        </div>
    )
}

export default DetailPage;