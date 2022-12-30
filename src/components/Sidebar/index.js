import React from "react";
import Logo from '../../assets/logo.png';

export default function Sidebar() {
    const general = [
        {name:"Dasboard", icon:""},
        {name:"Transaksi", icon:""},
        {name:"Profile", icon:""},
        {name:"Logs", icon:""},
    ];
    const management = [
        {name:"Layout", icon:""},
        {name:"Manage Data", icon:""},
        {name:"Manage Member", icon:""},
        {name:"Ganti Password", icon:""},
    ];
    return (
        <>
            <div className='h-screen border-r border-dashed border-gray-200 pl-5 pt-6 pr-28 w-72'>
                <div className="flex flex-row">
                    <img src={Logo} alt="sakir" className="w-40 h-14" />
                </div>
                <div>
                <ul>
                    <div className="mt-7">GENERAL</div>
                    <br></br>
                    {general.map((val, index) => {
                        return <li key={index} className="mb-4">
                            {val.name}
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <div className="mt-7">MANAGEMENT</div>
                    <br></br>
                    {management.map((val, index) => {
                        return <li key={index} className="mb-4">
                            {val.name}
                        </li>
                    })}
                </ul>
            </div> 
            </div>
        </>
    );
}