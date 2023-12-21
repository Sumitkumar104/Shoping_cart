import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <NavLink to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Vanamo_Logo.png/900px-Vanamo_Logo.png" alt="" className="h-10" />
                </NavLink>

                <div className='flex flex-row'>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <BsCartCheckFill />
                    </NavLink>

                </div>
            </div>

        </div>
    )
}
