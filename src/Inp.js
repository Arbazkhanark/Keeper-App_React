import {useState} from "react";

const Inp = () => {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [data, setData] = useState([]);


  function add(){
    setData([...data,{name,mail}])
    setName("");
    setEmail("");
  }

  const removeItem=(index )=>{
    let tempArr=data;
    tempArr.splice(index,1);
    setData([...tempArr]);
  }

  return (
    <>
      <div className="input-container">
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" />
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
        <button onClick={add}>+</button>
      </div>

      {data.map((ele,index)=>{
        return(
            <div className="info">
                  <h1>{ele.name}</h1>
                  <h1>{ele.mail}</h1>
                  <button onClick={()=>removeItem(index)} className="removeBtn">-</button>
            </div>
        )
      })}
      
    </>
  )
}

export default Inp;