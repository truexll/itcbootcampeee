
import React, { useState } from 'react'
// import './input.css'


const Clone = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formData ,setFormData ] = useState({
     gender: "пол"
    })
    const [itData, setItdata] = useState({
        it: 'напровление'
    })



    let token = '5516090799:AAFZWHBc4QiUBQ3pCAYFMWHycc1eK_BaPIk'
    let api_telegram = `https://api.telegram.org/bot${token}`



    const sendMessageTelegram = async () => {
        const res = await fetch(`
    ${api_telegram}/sendMessage?chat_id=1060219267&text=

   
   ИМЯ: ${username}
   
   НОМЕР: ${phone}

   E-mail: ${email}
   
   ПОЛ:${formData.gender}
   `)

        console.log(res)
        setUsername("")
        setEmail("")
        setPhone("")
        setFormData("")
    }

    const genderClick = event =>{
       const target = event.target
        const name = target.name
        const value = target.type==="checkbox" ? target.checked : target.value

        setFormData(
            {...formData,
                [name] : value
            }
        )
    }


    return (
        <div className={'input-item'}>
           <div className={'input-item2'}>
               <div className={'input-block'}>
                   <div className={'input-item3'}>
                       <h1>Оставить заявку</h1>
                       <input value={username} onChange={(e) => setUsername(e.target.value)} type="  text" placeholder='  Имя' />
                       <input  value={email} onChange={(e) => setEmail(e.target.value)} type="  email" placeholder='  E-mail' />
                       <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name='phone' placeholder='   Телефон' />

                       <form className={'checkbox-block'}>
                           <div className={'male'}>
                               <p> девушка</p>
                               <input type='radio'
                                      value="девушка"
                                      checked={formData.gender=="девушка"}
                                      onChange={genderClick}
                                      name="gender" id="mc1"/>
                           </div>

                           <div className={'female'}>
                               <p> парень</p>
                               <input type='radio'
                                      value="парень"
                                      checked={formData.gender=="парень"}
                                      onChange={genderClick}
                                      name="gender" id="mc1"/>
                           </div>
                       </form>

                       <div className={'it-block'}>
                           <form className={'checkbox-block'}>
                               <div className={'male'}>
                                   <p> девушка</p>
                                   <input type='radio'
                                          value="девушка"
                                          checked={formData.gender=="девушка"}
                                          onChange={genderClick}
                                          name="gender" id="mc1"/>
                               </div>

                               <div className={'female'}>
                                   <p> парень</p>
                                   <input type='radio'
                                          value="парень"
                                          checked={formData.gender=="парень"}
                                          onChange={genderClick}
                                          name="gender" id="mc1"/>
                               </div>


<div className={'female'}>
                                   <p> парень</p>
                                   <input type='radio'
                                          value="парень"
                                          checked={formData.gender=="парень"}
                                          onChange={genderClick}
                                          name="gender" id="mc1"/>
                               </div>

                               <div className={'female'}>
                                   <p> парень</p>
                                   <input type='radio'
                                          value="парень"
                                          checked={formData.gender=="парень"}
                                          onChange={genderClick}
                                          name="gender" id="mc1"/>
                               </div>

                               <div className={'female'}>
                                   <p> парень</p>
                                   <input type='radio'
                                          value="парень"
                                          checked={formData.gender=="парень"}
                                          onChange={genderClick}
                                          name="gender" id="mc1"/>
                               </div>
                           </form>
                       </div>
                   </div>
                   <button onClick={sendMessageTelegram} className='zapis'>
                       ЗАПИСАТЬСЯ
                   </button>
               </div>
           </div>
        </div>
    );
};

export default Clone;