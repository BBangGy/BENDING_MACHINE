import { useNavigate } from "react-router-dom"
import "./first.css"
import Button from "../../atom/button";
export default function First(){
    const nav = useNavigate();
    return(
        <div className="first-container">
            <div className="header">
                <h2>BENDING MACHINE</h2>    
            </div>
            <Button onClick={()=>nav("/bending")} size="large" text="BENDINGMAC"></Button>
        </div>
    )
}