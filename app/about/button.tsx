"use client"
 const serverSide = () =>{
    return alert("button clicked, client")
  }


const ButtonComponent = () =>{

  return <button onClick={serverSide}>CLICK HERE </button>
}

export default ButtonComponent