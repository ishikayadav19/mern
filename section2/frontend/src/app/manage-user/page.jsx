'use client';
import axios from 'axios';
import React, { useEffect } from 'react'

const ManageUser
    = () => {

        const fetchUsers = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/getall`)
            console.table(res.data)
        }

        useEffect(() => {
            fetchUsers()
        }, []);

        return (
            <div>
                ManageUser
            </div>
        )
    };

export default ManageUser;
