import React, { useState } from 'react'
import './button.css'



const Button = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [formData ,setFormData ] = useState({
    gender:""
    
   })
   const [group, setGroup] = useState ({
   groupit:""
   })
   
 
const inputs = document.querySelectorAll('.hide')
const databbb = () => {
  inputs.forEach(element => {
    if (element.value.trim().length === 0) {
      element.classList.add('err')
    } else {
      element.classList.remove('err')
    }
  });
}

  const genderClick = event =>{
    const target = event.target
     const name = target.name
     const value = target.type==="checkbox" ? target.checked : target.value
 
     setFormData(
         {...formData,
             [name] : value,
           
         }
     )
 }
  const typesClick = event =>{
    

    const target2 = event.target
    const name2 = target2.name
    const value2 = target2.type==="checkbox" ? target2.checked : target2.value
  setGroup(
    {...group,
    [name2] : value2
    }
  )
  
  }


  let token = '5665112210:AAHXlngllzcfR2QjqYxv3AcWYUBnxuD8dSg'
  // let myId = 2122055277
  // https://api.telegram.org/bot5665112210:AAHXlngllzcfR2QjqYxv3AcWYUBnxuD8dSg/getUpdates
  let api_telegram = `https://api.telegram.org/bot${token}`
  // let group_id = -2122055277


  const sendMessageTelegram = async () => {
   const res = await fetch(`
    ${api_telegram}/sendMessage?chat_id=2122055277&text=

   
   ИМЯ: ${username}
   
   ТЕЛЕФОН: ${phone}

   TELEGRAM: ${email}
   
   ПОЛ: ${formData.gender}
 
   НАПРАВЛЕНИЕ: ${group.groupit}

  

   
   `)

   
   
   console.log(res)
  setUsername("")
  setEmail("")
  setPhone("")
  setFormData("")
  setGroup ("")
  


  }



  return (

    
    <div className='all'>

      <h2 style={{  color: ' black ', left: '10px' }}>ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК</h2>
      <input className='hide' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Имя' />
      <input className='hide'  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Ваш телеграмм'  />
      <input className='hide'  value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name='phone' placeholder='Телефон' />
      
      <form className='grid' >
    <div className='gen' >
        <p style={{color:'#252525'}}> <img style={{height:'30px', display:'flex'}} src="https://w7.pngwing.com/pngs/287/684/png-transparent-businessperson-computer-icons-business-women-company-people-logo.png" alt="" /></p>
        <input style={{borderRadius:"20px"}} type='radio'
               value="девушка"
               checked={formData.gender=="девушка"}
               onChange={genderClick}
               name="gender" id="mc1"/>


    </div>
     

 <hr />
    <div className='gen' >
        <p style={{color:'#252525'}} >  <img style={{height:'30px', display:'flex'}} src="https://e7.pngegg.com/pngimages/134/822/png-clipart-computer-icons-business-man-people-logo.png" alt="" /></p>
        <input type='radio'
               value="парень"
               checked={formData.gender=="парень"}
               onChange={genderClick}
               name="gender" id="mc1"/>
            </div>
 <hr />
 <br />
 <div>
      <p style={{border:"3px solid red",borderRadius:'10px',background:'red'}}>НАПРАВЛЕНИЕ:</p>
     </div>
     <hr />
     <br />
    <div>
      <p style={{color:'#252525',}}>FRONTEND</p>
    <input type='radio'
               value="FRONTEND"
               checked={group.groupit=="FRONTEND"}
               onChange={typesClick}
               name="groupit" id="mc1"/>

               
       </div>
       <hr />
       <div>
       <p style={{color:'#252525'}}>BACK-END</p>
    <input type='radio'
               value="BACK-END"
               checked={group.groupit=="BACK-END"}
               onChange={typesClick}
               name="groupit" id="mc1"/>

       </div>
   <hr />
   <div>
       <p style={{color:'#252525'}}>FullStack</p>
    <input type='radio'
               value="FullStack"
               checked={group.groupit=="FullStack"}
               onChange={typesClick}
               name="groupit" id="mc1"/>

       </div>
       <hr />
   <div>
       <p style={{color:'#252525'}}>UI/UX</p>
    <input type='radio'
               value="UI/UX"
               checked={group.groupit=="UI/UX"}
               onChange={typesClick}
               name="groupit" id="mc1"/>

       </div>
   
   

</form>

    

      <button   onClick={sendMessageTelegram} className='zapis'>
        ЗАПИСАТЬСЯ
      </button>
    </div>
    



  )
}

export default Button;
