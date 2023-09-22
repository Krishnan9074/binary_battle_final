'use client';
import React from 'react'
import { useEffect, useState } from 'react'
import {
  updateDoc,
  collection,
  doc,
  getDocs,
} from 'firebase/firestore';
import { database} from '../../config/firebaseConfig';
const r1 = () => {
  const [ans, setans] = useState('');
  const [email, setemail] = useState('');
  const [uid, setuid] = useState('');

    useEffect(() => {
        const storedemail = sessionStorage.getItem('user.email');
        const storeduid = sessionStorage.getItem('user.uid');
        setemail(storedemail || '');
        setuid(storeduid || '');
    }, []);
  let user_data;
  if (email && uid) {
    user_data = doc(database, email, uid);
  } else {
    console.error('Email or UID is empty.');
  }

  const mainAns_data = doc(database, 'answer', 'q');
      const fetchFieldValue = async (a) => {
        try {
          const user_doc = await getDoc(user_data);
          const teamname = user_doc.get('name');
          const team_data = doc(database,"teams",teamname);
        
          const mainAns_doc = await getDoc(mainAns_data);
          const team_doc = await getDoc(team_data);
    
          if (mainAns_doc.exists()) {
            const mainAns = mainAns_doc.get(a);
            const userAns = user_doc.get(a);
            const teamMark = team_doc.get(a);
            
            const mark = ()=>{
              if (userAns==mainAns){
                return true;             
              }
              else {
                if(teamMark==true){
                  return true;
               }
               else{
                return false;
               }
            };
            }
            updateDoc(team_data,{
              [a]: mark()
            }
            )
            var count=0;
            const q1 = team_doc.get("r1q1");
            const q2 = team_doc.get("r1q2");
            const q3 = team_doc.get("r1q3");
            const q4 = team_doc.get("r1q4");
            const q5 = team_doc.get("r1q5");
            const q6 = team_doc.get("r1q6");
            const q7 = team_doc.get("r1q7");
            const q8 = team_doc.get("r1q8");
            const q9 = team_doc.get("r1q9");
            const q10 = team_doc.get("r1q10");
            const q11 = team_doc.get("r1q11");
            const q12 = team_doc.get("r1q12");
            const q13 = team_doc.get("r1q13");
            const q14 = team_doc.get("r1q14");
            if(q1==true){
              console.log("sdgfae");
              count=count+1;
            }
            if(q2==true){
              count=count+1;
            }
            if(q3==true){
              count=count+1;
            }
            if(q4==true){
              count=count+1;
            }
            if(q5==true){
              count=count+1;
            }
            if(q6==true){
              count=count+1;
            }
            if(q7==true){
              count=count+1;
            }
            if(q8==true){
              count=count+1;
            }
            if(q9==true){
              count=count+1;
            }
            if(q10==true){
              count=count+1;
            }
            if(q11==true){
              count=count+1;
            } 
            if(q12==true){
              count=count+1;
            }
            if(q13==true){
              count=count+1;
            }
            if(q14==true){
              count=count+1;
            }
            count=count*10;
            console.log(count);
            updateDoc(team_data,{
              r1mark:Number(count)
            })
            } else {
              console.log('No such document');
            }
            } catch (error) {
              console.error('Error fetching field value:', error);
            }
      };
      const [teamlist,setteamlist]=useState([]);
      const teamref=collection(database,"question")
      const fetchquestion = async() => {
        try{
          const data = await getDocs(teamref);
          const filtereddata=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
          }));
          setteamlist(filtereddata);
          } catch(err){
            console.error(err);
          }
      }
      fetchquestion();
  const addData = (a) => {
      updateDoc(user_data, { 
        [a]: ans
    })
    fetchFieldValue(a)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        console.error(err);
      })
    }

    let isTrueQ1 = false;

  
  return (
    <div className="bg-[#010c34] min-h-[100vh] ">
      <div className='w-screen overflow-auto max-h-[20%] '>
        <div className='max-w-[100%] max-h-[100%] flex justify-around '>
          {/* <div className='w-[25%] max-h-[100%] m-auto' >
               
          </div> */}
          <div className='w-[70%] max-h-[100%] m-auto'>
            <div className='max-h-[90%]  m-auto'>
            <div className="bg-opacity-10 bg-gradient-to-b from-[#4d4f4f6a] from-10% via-[#42434462] via-30% to-[#41414100] to-100% ... text-white max-h-[100%] max-w-[100%] overflow-y-auto grid grid-rows-auto gap-0 z-0 m-2">
            <ul className={"md:flex-auto px-4 z-0 py-3"}>
            <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 1</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q1}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 2</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q2}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q2')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 3</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q3}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q3')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 4</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q4}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q4')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 5</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q5}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q5')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 6</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q6}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q6')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 7</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q7}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q7')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 8</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q8}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q8')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 9</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q9}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q9')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 10</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q10}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q10')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 11</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q11}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q11')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 12</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q12}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q12')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 13</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q13}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q13')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                <p className="text-white text-xl font-bold">Question 14</p>
                <div>
                  {teamlist.map((team)=>(
            <div className="bg-[#01071D] p-3 rounded-md text-left ">
              <span className='mb-4'>{team.r1q14}</span>
              </div>))}
                  </div>       
                    </div>
                    <div className="bg-[#01071D] p-3 rounded-md text-left ">
                      
                        <input
                            className="bg-[#292b30] w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72 rounded-md"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        className="bg-[#010c34] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => addData('r1q14')}>
                          submit
                        </button>
                    </div>
                </li>
                </ul>
        </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default r1