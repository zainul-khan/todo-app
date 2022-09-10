import React,{useState} from "react"
import './App.css'
function App() {
  const[activity, setActivity] = useState();
  const[listData, setListData] = useState([])
  const addActivity = ()=>{
      // setListData([...listData, activity])
      // console.log(listData)
      setListData((listData)=>{
        const updatedList = [...listData, activity]
        console.log(updatedList)
        setActivity('')
        return updatedList
      })
  }
  const removeActivity=(index)=>{
    const updatedListData = listData.filter((elem, id)=>{
        return index !== id
    })
    setListData(updatedListData)
  }
  return (
    <>
    <div className="container text-center bg-dark text-light py-3 my-3">
      <div className="header text-primary my-4" style={{fontSize:"2rem", fontWeight:"500"}}>Todo List</div>
      <input type="text" placeholder="Add activity" value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
      <button className="btn btn-primary mx-3" onClick={addActivity}>Add</button>
      <p className="my-5 text-danger" style={{fontSize:"1.4rem", fontWeight:"500"}}>Here is your list :{")"}</p>
      {listData!==[] && listData.map((data, index)=>{
        return(
          <>
          <p key={index}>
            <div className="bg-secondary text-dark py-3" style={{fontWeight:"500"}}>{data} <button className="bg-danger mybtn" onClick={()=>removeActivity(index)}>X</button></div>
          </p>
          </>
        )
      })}
    </div>
    </>
  );
}

export default App;
