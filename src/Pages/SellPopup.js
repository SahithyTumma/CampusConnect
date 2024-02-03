import React, { useState } from "react";
import "./SellPopup.css";

const SellPopup = ({ isOpen, onClose }) => {
    const [rollNo, setRollNo] = useState('');
    const [category, setCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [image, setImage] = useState('');
    const [phNum, setPhNum] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        // For demonstration purposes, just set 'registered' to true
        setRegistered(true);
    };

    return (
        <div className={`sell-popup ${isOpen ? "open" : ""}`}>
            <div className="sell-popup-content">
                <span className="sell-popup-close" onClick={onClose}>
                    &times;
                </span>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Roll No:
                        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Category:
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Item Name:
                        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Phone Number:
                        <input type="text" value={phNum} onChange={(e) => setPhNum(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SellPopup;
