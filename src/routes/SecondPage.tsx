import React,{FC} from 'react'
import '../App.scss'

interface RandomProps {
    title: string
}
const SecondPage:FC<RandomProps>  = ({title}) => {
    return <div className="mainTitle headerContainer">
        {title}
    </div>
}

export default SecondPage