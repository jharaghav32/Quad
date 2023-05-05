import React, { useState } from 'react'
import Loader from './Loader';

const Modal = ({ title }) => {
    const [formvalue, setformvalue] = useState({});
    const handleChange = (e) => {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value });
       
    }
    const handleSubmit = () => {
        for (let key in formvalue) {
            localStorage.setItem(key, formvalue[key]);
        }
        document.getElementById('myform').reset()
    }
   console.log(title)
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Book My Tickets
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-black" id="staticBackdropLabel">Book ticket to watch  : {title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id='myform'>
                                <div className='d-flex flex-column gap-2'>


                                    <input type='text' name="name" className=' p-2 rounded' placeholder='Enter Your Name' onChange={handleChange} />

                                    <input type='number' name="age" className=' p-2 rounded' placeholder='Enter Your Age' onChange={handleChange} />
                                </div>
                                <div>

                                    <select className="form-select my-2 p-2 rounded border-black" onChange={handleChange} aria-label="Default select example" name="language">
                                        <option selected >Select Language to Watch Movies</option>
                                        <option name="language" value="English" >English</option>
                                        <option name="language" value="Hindi"  >Hindi</option>
                                    </select>
                                </div>
                                <div className="d-flex my-2 gap-2">

                                    <input type="radio" className="btn-check" name="video" id="optionview1-outlined" autoComplete="off" value="2D" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="optionview1-outlined">2D</label>

                                    <input type="radio" className="btn-check" name="video" id="optionview2-outlined" autoComplete="off" value="3D" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="optionview2-outlined">3D</label>
                                    <input type="radio" className="btn-check" name="video" id="optionview3-outlined" autoComplete="off" value="4DX 3D" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="optionview3-outlined">4DX 3D</label>
                                    <input type="radio" className="btn-check" name="video" id="optionview4-outlined" autoComplete="off" value="ICE 3D" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="optionview4-outlined">ICE 3D</label>



                                </div>
                                <div className="d-flex my-2 gap-2">

                                    <input type="radio" className="btn-check" name="date" id="optiondate1-outlined" autoComplete="off" onChange={handleChange} value="5 May" />
                                    <label className="btn btn-outline-success" for="optiondate1-outlined">5 MAY</label>

                                    <input type="radio" className="btn-check" name="date" id="optiondate2-outlined" autoComplete="off" onChange={handleChange} value="6 May" />
                                    <label className="btn btn-outline-success" for="optiondate2-outlined">6 MAY</label>
                                    <input type="radio" className="btn-check" name="date" id="optiondate3-outlined" autoComplete="off" onChange={handleChange} value="7 May" />
                                    <label className="btn btn-outline-success" for="optiondate3-outlined">7 MAY</label>
                                    <input type="radio" className="btn-check" name="date" id="optiondate4-outlined" autoComplete="off" onChange={handleChange} value="8 May" />
                                    <label className="btn btn-outline-success" for="optiondate4-outlined">8 MAY</label>



                                </div>
                                <div className="d-flex my-2 gap-2">

                                    <input type="radio" className="btn-check" name="time" id="option1-outlined" autoComplete="off" value="10:00 AM" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="option1-outlined">10:00 AM</label>

                                    <input type="radio" className="btn-check" name="time" id="option2-outlined" autoComplete="off" value="1:00 PM" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="option2-outlined">1:00 PM</label>
                                    <input type="radio" className="btn-check" name="time" id="option3-outlined" autoComplete="off" value="4:00 PM" onChange={handleChange} />
                                    <label className="btn btn-outline-success" for="option3-outlined">4:00 PM</label>
                                    <input type="radio" className="btn-check" name="time" id="option4-outlined" autoComplete="off" onChange={handleChange} value="7:00 PM" />
                                    <label className="btn btn-outline-success" for="option4-outlined">7:00 PM</label>



                                </div>
                    </form>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary " data-bs-dismiss="modal" aria-label='close' >Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit} >Confirm</button>
                    </div>

                </div>
            </div>
        </div>
        </div >

    )
}

export default Modal