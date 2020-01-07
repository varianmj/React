import React from 'react'

class Header extends React.Component {
    constructor(){
        super()
    }
    render() {
        return(
        <div>
         <h1> This Is Header Component </h1>
         <ul>
        <li>HOME</li>
        <li>LIST MAHASISWA</li>
        <li>TAMBAH MAHASIWA</li>
      </ul>
         </div>
        )
  }
}

export default Header