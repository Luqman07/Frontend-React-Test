import { useState } from "react";
const Business = ({setIsCheckThree}) => {
    const [pos, setPos] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setIsCheckThree(true)
    }
    const handleSelectYes = (e)=>{
        e.preventDefault()
        setPos(true)
    }
    const handleSelectNo = (e)=>{
        e.preventDefault()
        setPos(false)
    }
    return (
        <div className="business">
            <p className="step">Step 3/3</p>
            <div>
                <h1>Business Category</h1>
            </div>
            <form action="">
                <div className="d-flex-con3">
                    <div className="business-type">
                        <label htmlFor="">Type of your Business</label>
                        <div className="input-container">
                            <select name="" id="">
                                <option value=""></option>
                                <option value="Lorem">Lorem</option>
                                <option value="Ipsum">Ipsum</option>
                            </select>
                        </div>
                    </div>
                    <div className="business-category">
                        <label htmlFor="">Business Category</label>
                        <div className="input-container">
                            <select name="" id="">
                                <option value=""></option>
                                <option value="Lorem">Lorem</option>
                                <option value="Ipsum">Ipsum</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <p className="select-method">Do you use POS machines for your business</p>
                <button onClick={handleSelectYes} className={pos ? 'btn-border-blue': 'btn'}>Yes</button>
                    <button onClick={handleSelectNo} className={pos ? 'btn': 'btn-border-blue'}>No</button>
                </div>
                <div className="complete-btn">
                    <button onClick={handleClick}>Complete</button>
                </div>
            </form>


        </div>
    );
}

export default Business;