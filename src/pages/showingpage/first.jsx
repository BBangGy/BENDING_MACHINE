import { useNavigate } from "react-router-dom";
import "./first.css";
import Button from "../../atom/button";
import { useMoney } from "../../context/MoneyContext";
export default function First() {
  const nav = useNavigate();
  const { money, setMoney } = useMoney();
  const handleInputChange = (e) => {
    if (isNaN(e.target.value)) {
      alert("다시 입력해주세요.");
    } else {
      const value = parseInt(e.target.value);
      setMoney(value);
    }
  };
  return (
    <div className="first-container">
      <div className="header">
        <h2>BENDING MACHINE</h2>
        <span>소지금: </span>
        <input type="text" value={money} onChange={handleInputChange} />
      </div>
      <Button
        onClick={() => nav("/bending")}
        size="large"
        text="BENDINGMAC"
      ></Button>
    </div>
  );
}
