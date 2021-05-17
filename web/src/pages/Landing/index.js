import React, {useState,useEffect} from "react";
import Header from '../../components/Header';
import {Link, useHistory,useParams} from "react-router-dom";
import { format } from 'date-fns';
import api from '../../services/api';
import './styles.css';

export default function Landing() {
  const {id} = useParams();
  const history = useHistory();
  const initUser={
    name: '',
    university: '',
    course: '',
    department: '',
    score: '',
    data: ''
  }

  const [user,setUser] = useState(initUser);

  useEffect(()=>{
    if(id){
      api.get(`/register/${id}`).then(response=>{
        setUser(response.data)
      })
    }
  }, []);

  function onSubmit(ev){
    ev.preventDefault();
    user.date = format(new Date(), 'dd-MM-yyyy HH:mm:ss')
    const method = id ? 'put' : 'post';
    const url = id ? `/register/${id}` : '/register';
    api[method](url,user).then((response)=>{
      history.push('/');
    })
  }

  function onChange(ev){
    const {name, value} = ev.target;
    setUser({...user, [name]:value})
  }

  return (
    <div className="landing-container">
      <Header/>
      <div>
        <form onSubmit={onSubmit} className="user-form">
          
          <h1>Inserir/Alterar usuário</h1>

            <strong>Nome: </strong>
            <input name="name" onChange={onChange} value = {user.name}/>

            <strong>Universidade: </strong>
            <input name="university" onChange={onChange} value = {user.university}/>

            <strong>Curso: </strong>
            <input name="course" onChange={onChange} value = {user.course}/>

            <strong>Departamento: </strong>
            <input name="department" onChange={onChange} value = {user.department}/>

            <strong>Score: </strong>
            <input name="score" onChange={onChange} value = {user.score}/>

            {/* <strong>Data: </strong>
            <input name="date" onChange={onChange} value = {user.date}/> */}
                
            <div className="actions">
              {/* <Link className="button" id="create-link" type="submit">Salvar</Link> */}
              <button className="button" type="submit">Salvar</button>
              <Link className="button" onClick={()=>history.push('/')}>Voltar</Link>
            </div>
        </form>
      </div>  
    </div>
  );
}