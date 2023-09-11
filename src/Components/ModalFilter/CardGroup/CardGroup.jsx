import "./CardGroup.css";
import { useState } from "react";
function CardGroup({options}) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);
        console.log('clicked index:' + i);
    }

  return (
    <>
    <div className="row mt-4">
      {options.map((item, i) => (
        <div key={i} className={'col'}>
            <div 
            onClick={(e) => handleClick(e, i)}
            className={i == clickedId ? "w-100 cardGroup active" : "w-100 cardGroup" }>
                <i className={item.icon} ></i>
            <p className="text-truncate">{item.text}</p>
            </div>
        
        </div>
      ))}
    </div>
  </>
  )
}

export default CardGroup