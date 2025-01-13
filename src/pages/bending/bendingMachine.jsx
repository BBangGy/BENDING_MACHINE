import "./bendingMachine.css";
import Button from "../../atom/button";
import { useState } from "react";
import coke from "../../assets/coke.png";
import coke2 from "../../assets/coke2.png";
import coke3 from "../../assets/coke3.png";
import coke4 from "../../assets/coke4.png";
import coke5 from "../../assets/coke5.png";
import coke6 from "../../assets/coke6.png";

export default function bendingMachine() {
  const [deposit, setDeposit] = useState("");
  const [balance, setBalance] = useState(0);
  const [money,setMoney]=useState(25000);
  const handleInputChange = (e) => {
    setDeposit(e.target.value);
  };
  const onClickReturnChange = () => {
    setBalance(0);
  };
  const onClickBalance=()=>{
    if(!isNaN(deposit) && deposit.trim()!==""){
        setBalance(balance+parseInt(deposit));
        setDeposit("");
    }else{
        alert("다시 입력")
    }
  }
  const items=[
    {id:1,src:coke,alt:"Coke"},
    {id:2,src:coke2,alt:"Coke2"},
    {id:3,src:coke3,alt:"Coke3"},
    {id:4,src:coke4,alt:"Coke4"},
    {id:5,src:coke5,alt:"Coke5"},
    {id:6,src:coke6,alt:"Coke6"},
  ]

  return (
    <div className="bending-container">
      <div className="orderBox">
        <div className="itemCollector">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.src} alt={item.alt} />
                <Button size="small" text="1000" bgColor="violet" textColor="white"></Button>
            </div>
          ))}
        </div>
        <div className="totalAmount">
          <div className="box1">
            <div className="input-display">
              <span className="label">잔액:</span>
              <span className="value">{balance}원</span>
            </div>
            <Button text="거스름돈 반환" onClick={onClickReturnChange}></Button>
          </div>
          <div className="box2">
            <input
              type="text"
              placeholder="입금액 입력"
              value={deposit}
              onChange={handleInputChange}
            />
            <Button onClick={onClickBalance} text="입금"></Button>
          </div>
          <div className="box3">
            <div className="select-display">

            </div>
            <Button text="환전" size="large"></Button>
          </div>
        </div>
      </div>
      <div className="equipBox">계산</div>
    </div>
  );
}

