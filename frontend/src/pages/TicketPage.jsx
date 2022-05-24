
import Header from '../component/Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const TicketPage = () => {
    const deleteReq = (id) =>{
        const remove = axios.delete(id, {headers: {
            "Authorization": token
          }})
        window.location.reload()
    }
    const [appState, setAppState] = useState([]);
    const token = `Token ${localStorage.getItem('token')}`
    useEffect(() => {
        const TicketUrl = 'http://127.0.0.1:8000/api/Ticket/';
        axios.get(TicketUrl, {
            headers: {
              "Authorization": token
            }
          }).then((resp) => {
          const allTicket = resp.data;
          setAppState(allTicket);
        });
      }, [setAppState]);
      console.log(appState)

    return (
        <><Header />
            <div className='myticket'>
                <h2 className="heading">Ваши билеты: </h2>
                {appState.map((Ticket)=> 
                    <div className='ticket'>
                        <div key={Ticket.id}>
                            <div className='movie_name'>
                                Номер заказа: {Ticket.url.split('/')[5]}
                            </div>
                            <div className='movie_name'>
                                Название фильма: {Ticket.movie_name}
                            </div>
                           
                            <div className='movie_no'>
                                Ваши места:  {Ticket.no.map((ticket)=>  <p>{ticket.split('/')[5]}</p>)}
                            </div>
                            <div className='movie_data'>
                                Время покупки: {Ticket.buyed_time.slice(0, 10)}
                            </div>
                            <div className='movie_data'>
                                Дата: 27.05.2022
                            </div>
                            <div className='movie_time'>
                                Время: 17:00
                            </div>
                            
                        </div>
                        <div className='delete'>
                            <button onClick={()=> deleteReq(Ticket.url)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default TicketPage;