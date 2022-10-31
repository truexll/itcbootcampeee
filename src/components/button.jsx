import React, { useState } from 'react'
import './button.css'


const Button = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')



  let token = '5665112210:AAHXlngllzcfR2QjqYxv3AcWYUBnxuD8dSg'
  // let myId = 2122055277
  // https://api.telegram.org/bot5665112210:AAHXlngllzcfR2QjqYxv3AcWYUBnxuD8dSg/getUpdates
  let api_telegram = `https://api.telegram.org/bot${token}`
  // let group_id = -2122055277


  const sendMessageTelegram = async () => {
   const res = await fetch(`
    ${api_telegram}/sendMessage?chat_id=2122055277&text=

   
   ИМЯ: ${username}
   
   НОМЕР: ${phone}

   E-mail: ${email}
   
   `)

   
   
   console.log(res)
  setUsername("")
  setEmail("")
  setPhone("")
  }


  return (

    <div className='all'>

      <h2 style={{ fontFamily: 'fantasy', color: ' black ', left: '10px' }}>ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Имя' />
      <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail' />
      <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name='phone' placeholder='Телефон' />

      <button onClick={sendMessageTelegram} className='zapis'>
        ЗАПИСАТЬСЯ
      </button>
    </div>



  )
}

export default Button;
