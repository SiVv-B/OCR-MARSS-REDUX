
import React from 'react'
const logoMARSS = require('./pictures/logoMARSS.png')

function Home() {
  return (
    <div>
      <div>
      <br />
        <h5>A propos de M.A.R.S.S-OCR</h5>
        <br />
      </div>
      <div  className='container'>
        <p>
          La société M.A.R.S.S a été créée en 2011 en qualité en bureau d’étude.{' '}
        </p>
        <p>
          OCR (Organisme Compétent en Radioprotection) a été certifié et fondé
          en juin 2021.
        </p>
        <p>M.A.R.S.S est donc aujourd’hui un bureau d’étude et un OCR. </p>
        <br />
      <img src={logoMARSS} />
      </div>
    </div>
  )
}

export default Home
