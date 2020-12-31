import {useState, useEffect, useRef} from 'react';
import CurrencyRow from './CurrenctRow'

const url = 'https://api.exchangeratesapi.io/latest'
function App() {
  const [row1Data, setRow1Data] = useState({value:0, currency:"INR"})
  const [row2Data, setRow2Data] = useState({value:0, currency:"INR"})

  const [isRow1changed, setIsRow1] = useState(false)
  const [isRow2changed, setIsRow2] = useState(false)
  const [rates, setRates] = useState({"INR":1})
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = ()=>{
      let data = JSON.parse(xhr.response)
      data.rates[data.base] = 1
      // console.log(data)
      setRates(data.rates)
    }
    xhr.send();
  },[])
  // row1func = ()=>updateValues(true)
  // row2func = ()=>updateValues(false)

  useEffect(()=>{
    updateValues(isRow1)
  }, [row1Data, row2Data])

  // useEffect(()=>{
  //   updateValues(false)
  // }, [])
  function updateValues(is_first_row){
    const index = String(is_first_row)
    const func = {
      true: setRow2Data,
      false: setRow1Data,
    }
    const fromData = {
      true:row1Data,
      false:row2Data,
    }
    const toData = {
      true:row2Data,
      false:row1Data,
    }
    console.log("is_first_string", String(is_first_row))
    console.log("JAI MANAS", func[String(is_first_row)])
    const temp = {...toData[index]}
    temp.value = Number(fromData[index].value)*rates[toData[index].currency]/rates[fromData[index].currency]
    func[index](temp)
  }
  // console.log(rates)
  return (
    <>
      <h1>Convert Currency</h1>
      <CurrencyRow rates={rates} row_num={1} data={row1Data} setData={setRow1Data} onRowChange={()=>updateValues(true)}/>
      <div>=</div>
      <CurrencyRow rates={rates} row_num={2} data={row2Data} setData={setRow2Data} onRowChange={()=>updateValues(false)}/>
    </>
  );
}

export default App;
