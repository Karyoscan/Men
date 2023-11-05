import React, { useState } from 'react'
import Db from '../Bb'


const Body = () => {
  const [db,setdb] =useState(Db)

const [mem ,setMem]  = useState({
url : '',
top:'',
bot :''
})
 

  



const HadleChange = (e)=>{
  e.preventDefault()
  setMem(pre=>{return{
    ...pre, [e.target.name] : e.target.value
  }})
 

}





const HadleClick =(event)=>{
  event.preventDefault()
  const memRandom = Math.floor(Math.random()*db.length) 

  setMem(pre=>{return {
...pre,  url:db[memRandom].url 

  }})
 

}


  return (
    <div>
      <form>
<div>
<input  value={mem.top} onChange={HadleChange} name='top' className='body-input' type='text' placeholder='Top text'/>
<input  value ={mem.bot}onChange={HadleChange} name='bot' className='body-input' type='text' placeholder='Botton text'/>

</div>
<button 
onClick={(event)=>HadleClick(event)}
 className='body-button'>Get a new meme image 
<img 
className='body-button-img' 
src='./proje3/indir.jpg'/> 
</button>

      </form>

{mem.url&&<div className='h2-top'>{mem.top}</div>}
{mem.url&&<img className=' main-meme' src={mem.url}/>}
{mem.url&&<div className='h2-bot'>{mem.bot}</div>}




    </div>
  )
}

export default Body