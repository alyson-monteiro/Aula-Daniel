import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    // vamos criar duas variáveis de estado para username e password   
    // setUsername é uma função que altera o valor de username
    // useState é um hook do ReactJS, cria e inicia a variável de estado
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        navigate('/produto',{state: {username: username }})
    }
    return (
       <div className="bg-slate-700 flex items-center justify-center h-screen w-screen">
            <div className="bg-teal-600 p-8 rounded-lg drop-shadow-2x1 w-96 flex flex-col items-center">
                <h2 className="font-bold mb-4"> Login </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="username">
                            Username
                        </label>
                        <input type="text" id="username" value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <button 
                    type="submit"
                    className="w-full bg-teal-500 text-black font-semibold p-2 rounded">
                        Login
                    </button>
                </form>
            </div>
       </div>
    )
}