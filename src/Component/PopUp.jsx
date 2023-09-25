import React, { useState, useEffect } from 'react';
import crossIcon from "../Assets/close-circle.svg";
import infoIcon from "../Assets/Info.svg";
import { CSVLink } from 'react-csv';
// import { PrimeReactContext } from 'primereact/api';
import { Toast } from 'primereact/toast';

const PopUp = () => {

    // const { setAppendTo } = useContext(PrimeReactContext);

    // setAppendTo('self');

    const [popupOpen, setPopUpOpen] = useState(false);

    const handlePopUp = () => {
        if (popupOpen === true) {
            setPopUpOpen(false);
        }
        else {
            setPopUpOpen(true);
        }
    }

    const jsonData = [
        { name: 'John', age: 30, city: 'New York' },
        { name: 'Alice', age: 25, city: 'Los Angeles' },
        // ... more data
    ];

    useEffect(() => {
        <Toast severity="success" summary="Success Message" detail="Api call success" life={3000} closable={true} position="top-right" style={{ backgroundColor: 'green', color: 'white' }} />
    }, [])

    return (
        <>
            <div className='flex justify-end w-full'>
                <button className='rounded-full bg-blue-500 text-white h-[80px] w-[90px] p-5 me-[100px] mt-[30px]' onClick={handlePopUp}>PopUp</button>
            </div>
            {
                popupOpen && (
                    <div className='w-[98.5vw] h-[100vh] bg-blue-700 mt-[-110px]'>
                        <div className='fixed w-[570px] h-[364px] top-[22vh] left-[27vw] bg-white'>
                            <div className='flex justify-between mb-2'>
                                <span className='ms-[55px] mt-7 font-normal text-2xl leading-8'>Export data</span>
                                <button onClick={handlePopUp}><img src={crossIcon} className='me-[55px] mt-9 h-[20px] w-[20px]' /></button>
                            </div>
                            <div className='ms-[55px] mt-[50px] w-[460px]'>
                                <div className='flex justify-start gap-1 mb-[20px]'>
                                    <span className='font-normal leading-6 text-lg'>Export type</span>
                                    <img src={infoIcon} />
                                </div>
                                <select className='h-[50px] w-[460px]  bg-slate-200'>
                                    <option value="All Contacts" className='h-[80px] '>All Contacts</option>
                                    <option value="Donations">Donations</option>
                                </select>
                                <div className='flex justify-between mt-5'>
                                    <button className='h-[60px] w-[206px] border border-solid-[1px] border-blue-500' onClick={handlePopUp}>Cancel</button>
                                    <CSVLink data={jsonData} filename={"my-data.csv"}><button className='h-[60px] w-[206px] border border-solid-[1px] border-blue-500 bg-blue-500 text-white'>Export</button></CSVLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PopUp