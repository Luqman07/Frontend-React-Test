import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Verify = () => {
    const [isSelected, setIsSelected] = useState(true)
    const [isShowing, setIsShowing] = useState(false)
    const handleAcctNumberToggle = () => {
        setIsSelected(false)
    }
    const handleBvnToggle = () => {
        setIsSelected(true)
    }
    const handleHide = () => {
        setIsShowing(!isShowing)
    }
    return (
        <div className="verify">
            <p className="step">Step 1/3</p>
            <h1>Verify Account</h1>
            <div>
                <p className="select-method">Select a verification method</p>
                <button onClick={handleBvnToggle} className={isSelected ? 'btn-border-blue' : 'btn'}>BVN</button>
                <button onClick={handleAcctNumberToggle} className={isSelected ? 'btn' : 'btn-border-blue'}>Personal Account Number</button>
            </div>
            <div className="bvn-container">
            {isSelected ? (
            <div>
                <label htmlFor="">Bank Verification Number(11-digits)</label>
                <div className="input-container">
                    <input type="number" name="BVN" />
                </div>
                <div className="display-info">
                    <div className="display-description">
                        <div className="lock-container">
                            <FontAwesomeIcon className="lock" icon={faLock} />
                            <p>Why we need your BVN</p>
                        </div>
                        <div className="show-container" onClick={handleHide}>
                            <p>{isShowing ? 'Hide' : 'Show'}</p>
                            <FontAwesomeIcon className="arrow-down" icon={isShowing ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div className={isShowing ? "bvn-access-info" : 'd-none'}>
                        <p>We only need access to your:</p>
                        <ul>
                            <li>Full Name</li>
                            <li>Phone Number</li>
                            <li>Date of Birth</li>
                        </ul>
                        <div className="bvn-footer">
                            <p>Your BVN does not give us access to your bank accounts or transactions</p>
                        </div>
                    </div>
                </div>
            </div>) 
            :(<div className="d-flex-con">
                    <div className="account-number-div">
                        <label htmlFor="">Account Number</label>
                        <div className="input-container">
                            <input type="number" name="Acct-no" />
                        </div>
                    </div>
                    <div className="select-bank-div">
                        <label htmlFor="">Select Bank</label>
                        <div className="input-container">
                            <select name="" id="">
                                <option value=""></option>
                                <option value="Gtbank">Guaranty Bank</option>
                                <option value="Accessbank">Access Bank</option>
                            </select>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
            
            <div className="continue-btn">
                <button>Complete</button>
            </div>
        </div>
    );
}

export default Verify;