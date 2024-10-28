import {useState} from 'react'
import style from '../../css/login.module.css'
import visibilityof from '../../assets/images/visibility_off.svg'
import visibilityon from '../../assets/images/visibility_on.svg'

const InputPassword = (props)=>{

    const [passwordValaue,setPasswordValue] = useState('')
    const [visibel, setVisibel] = useState(true)

    const togleVisibel = ()=>{
        setVisibel(!visibel)
    }


    return (
        <>
        <div className={style.inputPassword}>
            <label htmlFor="password"><b>{props.title ? props.title : 'Kata Sandi'}</b></label>
            <input 
                type={visibel ? 'password' : 'text'} 
                placeholder="Masukan kata sandi"
                onChange={(e)=>{props.toglePasswordValue(e.target.value)}}
                onKeyDown={(e)=>{e.key === 'Enter' && props.togleMasuk()}}/>
            <img 
                src={visibel ? visibilityof : visibilityon} 
                onClick={()=>{togleVisibel()}}/>
        </div>
        {props.warning ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)'}}>masukan password dengan benar!</p> : '' }
        {props.warningReg === 3 ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)',margin:'0px'}}>masukan password!</p> :""}
        {props.warningReg === 4 ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)',margin:'0px'}}>password berbeda</p> :""}
        </>
    )
}

export default InputPassword;