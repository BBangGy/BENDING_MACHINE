import "./bendingMachine.css";
import Button from "../../atom/button";
import { useMoney } from "../../context/MoneyContext";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import coke from "../../assets/coke.png";
import coke2 from "../../assets/coke2.png";
import coke3 from "../../assets/coke3.png";
import coke4 from "../../assets/coke4.png";
import coke5 from "../../assets/coke5.png";
import coke6 from "../../assets/coke6.png";


export default function BendingMachine() {
  const initialItems = [
    { id: 1, src: coke, alt: "Coke", name: "Original Coke 1", price: 1000, count: 5 },
    { id: 2, src: coke2, alt: "Coke2", name: "Original Coke 2", price: 1000, count: 5 },
    { id: 3, src: coke3, alt: "Coke3", name: "Original Coke 3", price: 1000, count: 5 },
    { id: 4, src: coke4, alt: "Coke4", name: "Original Coke 4", price: 1000, count: 5 },
    { id: 5, src: coke5, alt: "Coke5", name: "Original Coke 5", price: 1000, count: 5 },
    { id: 6, src: coke6, alt: "Coke6", name: "Original Coke 6", price: 1000, count: 5 },
  ];

  const [items, setItems] = useState(initialItems); // items 상태 추가
  const [deposit, setDeposit] = useState("");
  const [balance, setBalance] = useState(0);
  const { money, setMoney } = useMoney();
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [acquiredDrinks, setAcquiredDrinks] = useState([]);
  const scrollRef = useRef(null);
  const completeRef = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    if (completeRef.current) {
      completeRef.current.scrollTop = completeRef.current.scrollHeight;
    }
  }, [acquiredDrinks]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [selectedDrinks]);

  const handleInputChange = (e) => {
    setDeposit(e.target.value);
  };

  const onClickReturnChange = () => {
    if (balance > 0) {
      setMoney(money + balance);
      setBalance(0);
    } else {
      setBalance(0);
    }
  };

  const onClickBalance = () => {
    if (!isNaN(deposit) && deposit.trim() !== "") {
      if (deposit > money) {
        alert(" 충전해주세요.");
        setMoney(money);
        setDeposit("");
      } else {
        setBalance(balance + parseInt(deposit));
        setMoney(money - parseInt(deposit));
        setDeposit("");
      }
    } else {
      alert("다시 입력");
    }
  };

  const onClickComplete = () => {
    if (selectedDrinks.length === 0) {
      alert("골라주세요.");
      return;
    }

    setAcquiredDrinks([...acquiredDrinks, ...selectedDrinks]);

    // 음료 수량 감소
    setItems((prevItems) =>
      prevItems.map((item) => {
        const selectedDrinkCount = selectedDrinks.filter((drink) => drink.id === item.id).length;
        return selectedDrinkCount > 0
          ? { ...item, count: item.count - selectedDrinkCount }
          : item;
      })
    );

    setSelectedDrinks([]);
  };

  const handleBuyDrink = (price, drink) => {
    if (balance > 0) {
      if (balance >= price) {
        setBalance(balance - price);
        setSelectedDrinks([...selectedDrinks, drink]);
      } else {
        alert("잔액이 부족합니다.");
      }
    } else {
      alert("입금액을 입력하세요.");
    }
  };

  return (
    <div className="bending-container">
      <div className="orderBox">
        <div className="itemCollector">
          {items&&items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.src} alt={item.alt} />
              <span>{item.name}</span>
              <span>수량: {item.count}</span>
              <Button
                size="small"
                text={item.price + "원"}
                bgColor="violet"
                textColor="white"
                onClick={() => handleBuyDrink(item.price, item)}
              />
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
            <div className="second-input-display">
              <input
                type="text"
                placeholder="입금액 입력"
                value={deposit}
                onChange={handleInputChange}
              />
            </div>
            <Button size="normal" onClick={onClickBalance} text="입금"></Button>
          </div>
          <div className="box3">
            <div className="select-display" ref={scrollRef}>
              {selectedDrinks.map((drink, index) => (
                <div key={index} className="selected-drink-item">
                  <img src={drink.src} alt={drink.alt} className="selected-drink" />
                  <span>{drink.name}</span>
                </div>
              ))}
            </div>
            <Button text="획득" size="large" onClick={onClickComplete}></Button>
          </div>
        </div>
      </div>
      <div className="equipBox">
        <div className="myMoney">
          <div className="display">
            <span className="label">소지금:</span>
            <span className="value">{money}원</span>
          </div>
          <Button bgColor="white" text="충전" onClick={() => nav("/")}></Button>
        </div>
        <div className="equippedDrink">
          <h3>획득한 음료</h3>
          <div className="completed" ref={completeRef}>
            {acquiredDrinks.map((drink, index) => (
              <div key={index} className="completed-item">
                <img src={drink.src} alt={drink.alt} />
                <span>{drink.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
