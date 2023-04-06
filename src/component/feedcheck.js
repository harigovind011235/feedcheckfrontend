import React, {useRef, useState } from "react"
import { Download} from "react-bootstrap-icons"
import Header from "./header"


function FeedCheck() {
  const inputRef = useRef({})
  const [datas,setDatas]=useState({rawvendor:"",rows:"",date:"",rawsource:""})


  const handleChange = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setDatas({...datas,[name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
 
  return (
    <>
  <Header/>
  <section class="h-100 h-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100 mt-4">
      <div class="col-lg-8 col-xl-6">
        <div class="card shadow-lg my-4" style={{borderRadius:"30px"}} >
          <img src="https://media.istockphoto.com/id/1393553083/photo/dark-keyboard-with-cloud-computing-diagram.jpg?b=1&s=170667a&w=0&k=20&c=cIG-QWUNsMAI5gYLw1p9uFNYHzUW-E06SxESnFfOpyY="
            alt="Sample" style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:"300px"}}/>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Feed Check</h3>
            <form  class="user">
              <div class="form-group form-outline mb-4">
                <input type="text"  class="form-control form-control-user" placeholder="enter vendor" name="rawvendor" value={datas.rawvendor} onChange={handleChange} ref={ref=>inputRef.current.rawvendor = ref}/>
              </div>
              <div class="form-group form-outline mb-4">
                <input type="number"  class="form-control form-control-user" placeholder="enter no of Rows" min={0} name="rows" value={datas.rows} onChange={handleChange} ref={ref=>inputRef.current.rows = ref}/>
              </div>
              <div class="form-group form-outline mb-4">
                <input type="date"  class="form-control form-control-user" placeholder="enter Date" name="date" value={datas.date} onChange={handleChange} ref={ref=>inputRef.current.date = ref}/>
              </div>
              <div  class="form-group form-outline mb-4">
                <select  class="form-select " onChange={handleChange} name="rawsource" value={datas.rawsource} ref={ref=>inputRef.current.rawsource = ref}style={{borderRadius:"20px",fontFamily:"nunito",fontSize:"13px",height:"50px"}}>
                  <option value="">select the rawsource</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <br/>
              <button class="btn btn-primary btn-user btn-block" onClick={handleSubmit} style={{fontSize:"16px"}}><Download/> Download</button>
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
export default FeedCheck