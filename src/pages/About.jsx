import React from 'react'
import { BrowserRouter } from 'react-router-dom'



export const About = () => {
  return (
    <div>
        <li>
            <ul>
                Home
            </ul>
            <ul>
                Contacts
            </ul>
            <ul>
                About
            </ul>
        </li>
        <main>
            <h1>Delta Educatin - это лучшая школа программирования в городе Семей</h1>
            <p>Delta Education предоставляет курсы на выбор Python-developer, PHP-developer, HTML & CSS, Базы данных, Unity-developer
, Frontend-developer </p>
        </main>
        <footer>
            <div>
            Адрес: город Семей, улица Гагарина 32
            </div>
            <div>
            График работы: пн-пт 09:00 - 18:00
            </div>
        </footer>
    </div>
  )
}

