import React, {useRef, useState } from "react"
import {Button } from "react-bootstrap"
import { Download } from "react-bootstrap-icons"


function Feedcheck() {
  const inputRef = useRef({})
  const [datas,setDatas]=useState({rawvendor:"",rows:"",date:"",rawsource:""})

  const handleChange = (e) => {
    e.preventDefault()
    setDatas({...datas,[e.target.name]:e.target.value})
  }
  const handleSubmit = () => {
     if(datas.rawvendor === ""){
      inputRef.current.rawvendor.focus()
    }
    else if(datas.rows === ""){
      inputRef.current.rows.focus()
    }
    else if(datas.date === ""){
      inputRef.current.date.focus()
    }
    else if(datas.rawsource === ""){
      inputRef.current.rawsource.focus()
    }
    else if( setDatas({rawvendor:"",rows:"",date:"",rawsource:""})){
    }
  }
    console.log("datas",datas)
  return (
    <>
  <section class="h-100 h-custom" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <img src="https://media.istockphoto.com/id/1393553083/photo/dark-keyboard-with-cloud-computing-diagram.jpg?b=1&s=170667a&w=0&k=20&c=cIG-QWUNsMAI5gYLw1p9uFNYHzUW-E06SxESnFfOpyY="
            class="w-100" 
            alt="Sample photo" style={{height:"300px"}}/>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Feed Check</h3>
            <form class="px-md-2">
              <div class="form-outline mb-4">
                <input type="text"  class="form-control" placeholder="enter vendor" name="rawvendor" value={datas.rawvendor} onChange={handleChange} ref={ref=>inputRef.current.rawvendor = ref}/>
              </div>
              <div class="form-outline mb-4">
                <input type="number"  class="form-control" placeholder="enter no of Rows" min={0} name="rows" value={datas.rows} onChange={handleChange} ref={ref=>inputRef.current.rows = ref}/>
              </div>
              <div class="form-outline mb-4">
                <input type="date"  class="form-control" placeholder="enter Date" name="date" value={datas.date} onChange={handleChange} ref={ref=>inputRef.current.date = ref}/>
              </div>
              <div  style={{width:"100%"}} >
                <select  class="form-select  h-150 w-250" onChange={handleChange} name="rawsource" value={datas.rawsource} ref={ref=>inputRef.current.rawsource = ref}>
                  <option value="">select the rawsource</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <br/>
              <Button onClick={handleSubmit}><Download/> Download</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
export default Feedcheck