import {useHistory} from "react-router-dom"

const Social = ({setIsCheckTwo}) => {
    const history = useHistory()
    const handleClick = () => {
        setIsCheckTwo(true)
        history.push("/business");
    }

    return (
        <div className="social">
            <p className="step">Step 2/3</p>
            <div>
                <h1>Social Handles</h1>
                <p className="select-method">Enter you business social media handles</p>
            </div>
            <form>
                <label htmlFor="">Choose your Abeg Tag(required)</label>
                <div className="input-container">
                    <input type="text" name="Abeg" placeholder="@" />
                </div>
                <div className="d-flex-con2">
                    <div className="ig-div">
                        <label htmlFor="">Instagram</label>
                        <div className="input-container-flex">
                            <input type="text" name="instagram" placeholder="@"/>
                        </div>
                    </div>
                    <div className="twitter-div">
                        <label htmlFor="">Twitter</label>
                        <div className="input-container-flex">
                            <input type="text" name="twitter" placeholder="@"/>
                        </div>
                    </div>
                </div>
                <div className="continue-btn">
                    <button onClick={handleClick}>Confirm Social Handles</button>
                </div>
            </form>
            
        </div>
    );
}

export default Social;