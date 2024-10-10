import style from '../../css/login.module.css'

const InputUsername = (props)=>{
   
    return (
        <>
        <div className={style.inputPassword}>
            <label htmlFor="input-username"><b>Username</b></label>
            <input 
                id="input-username" 
                type="text" 
                placeholder="Masukan username"
                onChange={(e)=>{props.togleUsernameValue(e.target.value)}}/>
        </div>
        {  props.warning ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)',margin:'0px'}}>masukan username dengan benar!</p> : ''}
        {props.warningReg === 1 ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)',margin:'0px'}}>masukan username!</p> :""}
        {props.warningReg === 2 ? <p style={{fontSize:'14px', color: 'rgb(220,2,5)',margin:'0px'}}>username sudah digunakan!</p> :""}

        </>
    )
}

export default InputUsername;