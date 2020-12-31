import React from 'react'

function CurrencyRow({rates, data, setData, onRowChange, row_num, setIsRow1, setIsRow2}) {
    console.log(data)
    const f=(e)=>{
            console.log(e.target);
            setData(prev=>{return {...data, value:e.target.value}});
            onRowChange()}
    return (
        <div>
            <input type="number"  value={data.value} 
                onChange={(e)=> { 
                    setData({...data, value:e.target.value});
                    if(num_row == 1){
                        setIsRow1(true);
                    }
                    else{
                        setIsRow2(true);
                    }
                
                }
            }/>
            <select value={data.currency} onChange={(e)=>{setData({...data, currency:e.target.value})}}>
                {Object.keys(rates).map(currency => <option key={currency} value={currency} >{currency}</option>)}
            </select>
        </div>
    )
}

export default CurrencyRow
