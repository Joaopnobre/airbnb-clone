import { useState, useEffect } from "react";
import "./PriceSlider.css";

export default function PriceSlider(props) {
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [left, setLeft] = useState("0%");
  const [right, setRight] = useState("0%");

  function changeRangeMin(e) {
    if (parseInt(e.target.value) - max >= -props.step) {
      // console.log(' Min limit reached');
    } else {
      setMin(parseInt(e.target.value));
      if (min == props.min) {
        setLeft("0%");
      } else {
        var totBar = props.max - props.min;
        var qtsSteps = min - props.min;

        setLeft((qtsSteps * 100) / totBar + "%");
      }
    }
  }

  function changeRangeMax(e) {
    if (parseInt(e.target.value) - min <= props.step) {
      //  console.log(' Max limit reached');
    } else {
      setMax(parseInt(e.target.value));
      if (max == props.max) {
        setRight("0%");
      } else {
        var totBar = props.max - props.min;
        var qtsSteps = props.max - max;

        setRight((qtsSteps * 100) / totBar + "%");
      }
    }
  }
  useEffect(() => {
    if (min == props.min) {
      document.getElementById("inputMin").value = props.min;
    } else {
      document.getElementById("inputMin").value = min;
    }
    props.filterByPrice(props.catID, min, max);
  }, [min]);

  useEffect(() => {
    if (max == props.max) {
      document.getElementById("inputMax").value = props.max + "+";
    } else {
      document.getElementById("inputMax").value = max;
    }
    props.filterByPrice(props.catID, min, max);
  }, [max]);

  function validate(e) {
    let inputMin = document.getElementById("inputMin");
    let inputMax = document.getElementById("inputMax");

    //Pegar o campo inputMin
    let value = parseInt(e.target.value);
    if (e.target.id == "inputMin") {

      // Verificar se é vazio ou nulo
      if (e.target.value == "" || e.target.value == null) {

        // Se for, setar para o mínimo permitido
        
        setMin(props.min);
        setLeft("0");
        inputMin.value = props.min;
      } else {
        // Verificar se o valor é menor que o mínimo
        if (value < props.min) {
          setMin(props.min);
          setLeft("0");
          inputMin.value = props.min;
        } else {
          // Se o mínimo for maior que o máximo
          if (value >= max) {
            let correct = max - props.step;
            setMin(correct);

            let totBar = props.max - props.min;
            let qtsSteps = value - props.min;
            setLeft((qtsSteps * 100) / totBar + "%");
            inputMin.value = correct;
          } else {
            // Caso esteja tudo certo, movimenta a barra
            setMin(value);
            let totBar = props.max - props.min;
            let qtsSteps = value - props.min;
            setLeft((qtsSteps * 100) / totBar + "%");
          }
        }
      }
    }
    // Se o campo for inputMax
    if (e.target.id == "inputMax") {
      // Verificar se é vazio ou nulo
      if (e.target.value == "" || e.target.value == null) {
        // Setar para o máximo permitido
        setMax(props.max);
        setRight("0%");
        inputMax.value = props.max + "+";
      } else {
        // Se o valor é maior que o máximo
        if (e.target.value > props.max) {
          // Setar o máximo permitido
          setMax(props.max);
          setRight("0");
          // Mudar o campo para o máximo
          inputMax.value = props.max = "+ ";
        } else {
          if (value <= min) {
            let correct = min + props.step;
            setMax(correct);
            let totBar = props.max - props.min;
            let qtsSteps = props.max - value;
            setRight((qtsSteps * 100) / totBar + "%");
            inputMax.value = correct;
          } else {
            // Tudo certo
            if (value > min) {
              setMax(value);
              let totBar = props.max - props.min;
              let qtsSteps = props.max - value;
              setRight((qtsSteps * 100) / totBar + "%");
            }
          }
        }
      }
    }
  }

  function onlyNumber (e){
    if(!/[0-9]/.test(e.key)){
        e.preventDefault();
    }
  }

  return (
    <div>
      <div className="slider">
        <div style={{ left: left, right: right }} className="progress"></div>
      </div>
      <div className="range-input">
        <input
          id="rangeMin"
          onChange={changeRangeMin}
          onKeyPress={(e)=>{(e.key == "Enter" ? validate(e) : onlyNumber(e))}}
          type="range"
          min={props.min}
          max={props.max}
          value={min}
          step={props.step}
        />
        <input
          id="rangeMax"
          onChange={changeRangeMax}
          onKeyPress={(e)=>{(e.key == "Enter" ? validate(e) : onlyNumber(e))}}
          type="range"
          min={props.min}
          max={props.max}
          value={max}
          step={props.step}
        />
      </div>
      <div className="row mt-4">
        <div className="col">
          <label className="text-muted">preço mínimo</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
            <input
              id="inputMin"
              onBlur={validate}
              type="text"
              className="form-control"
              placeholder="Min"
            />
          </div>
        </div>
        <div className="col">
          <label className="text-muted">preço máximo</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
            <input
              id="inputMax"
              onBlur={validate}
              type="text"
              className="form-control"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
