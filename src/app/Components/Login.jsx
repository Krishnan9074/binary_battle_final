"use client"
import Head from 'next/head';
import { useEffect,useState } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'next/navigation';

import { database} from '../config/firebaseConfig';
export default function Login() {
    const auth = getAuth();
    const user = auth.currentUser;
    const router=useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token1', response.user.accessToken);
                sessionStorage.setItem('user.email', user.email);
                sessionStorage.setItem('user.uid', user.uid);
                console.log(user.email);
                sessionStorage.removeItem('Token2')
                router.push('/rounds/round1')
            })
            .catch((err) => {
                alert('Cannot Log in')
                console.error(err);
            })
    }
    useEffect(() => {
        let token1 = sessionStorage.getItem('Token1')
        let token2 = sessionStorage.getItem('Token2')

        if(token1){
            router.push('/rounds/round1')
        }
        if(token2){
          router.push('/')
      }
    }, [])
    return (
      <div className="flex h-screen bg-indigo-700 m-auto">
        <div className="w-full max-w-xs  bg-indigo-500 p-5 m-auto rounded">
          <img className="w-20 h-20 mx-auto mb-5" src="https://ik.imagekit.io/jmd1/logo.png?updatedAt=1695337750981" />
          <div className="py-4 px-4 flex-col">
            <div>
              <label className=" mb-2 text-indigo-500" htmlFor="username">Team Email</label>
              <input
                type="text"
                placeholder="Enter your Team Email"
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    )
}
