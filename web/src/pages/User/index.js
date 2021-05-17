import React,{useState, useEffect} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import {Link} from "react-router-dom";
import '../User/style.css';

export default function App(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        api.get('register').then(response =>{
            setUsers(response.data);
            console.log(response.data);
        })

    }, [])

    async function handleDelete(id){
        try{
            await api.delete(`/register/${id}`)
            setUsers(users.filter(user => user.id !== id))
        }catch(err){
            alert('Erro ao deletar!')
        }
    }

    return(
        <div id="user-container">
            <Header/>

            <h1>Lista de usuários</h1>

            <div className = "addNew">
                <Link className="button" id="create-link" to={"/create"}>Adicionar novo usuário</Link>
                <Link className="button" id="create-link" to={"/dados"}>Gerar JSON</Link>
            </div>
            
            <ul className = "user-list">
                {users.map(user =>(
                    <li key = {user.id}>
                        <strong>Nome: </strong>
                        <p>{user.name}</p>

                        <strong>Universidade: </strong>
                        <p>{user.university}</p>

                        <strong>Curso: </strong>
                        <p>{user.course}</p>

                        <strong>Departamento: </strong>
                        <p>{user.department}</p>

                        <strong>Score: </strong>
                        <p>{user.score}</p>

                        <strong>Data e hora da inserção: </strong>
                        <p>{user.date}</p>

                        <div className="actions">
                            <Link className="button" to={`/update/${user.id}`}>Editar</Link>
                            <button className="button" onClick={()=>handleDelete(user.id)} type="button">Deletar</button>
                        </div>
                    </li>
                ) ) } 
            </ul>
        </div>
    );
}