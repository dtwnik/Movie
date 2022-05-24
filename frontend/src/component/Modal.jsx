import '../css/Modal.css'
const modal = ({active, setActive, data, title}) => {
    const refreshPage = () => {
        window.location.reload();
    }
    console.log(title)
    const username =localStorage.getItem("username")
    return (
        <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <span className='close' onClick={()=>{
                setActive(false)
                refreshPage()
            }}>X</span>
            <div className='username'>Пользователь: {username}</div>
            <div className='title'>Название фильма: {title}</div>
            {data && data.sort((a,b)=> a-b).map((value) => (
                <div>Места : {value}</div>
            ))}</div>
        </div>
    );
}

export default modal;