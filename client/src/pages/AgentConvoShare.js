import {useState,useEffect,useRef} from 'react';
import '../styles/agent-convo.css'
import { Button, Stack, Image, Form,Modal, Spinner, } from "react-bootstrap";
import { ReactComponent as Bot1Icon } from "../assets/user-1.svg";
import { ReactComponent as Bot2Icon } from "../assets/user-2.svg";
import { ReactComponent as Bot3Icon } from "../assets/user-3.svg";
import { ReactComponent as Bot4Icon } from "../assets/user-4.svg";
import logoImage from '../assets/camelagi.png'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ReactComponent as ShareIcon } from "../assets/share-white.svg";
import { useSearchParams, useParams } from "react-router-dom";


function AgentConvoShare() {

    const [ranUser1, setRanUser1] = useState(null);
    const [ranUser2, setRanUser2] = useState(null);
    const navigate = useNavigate()
    const [showBanner, setShowBanner] = useState(false);
    const [user, setUser] = useState(false);
    const [role1, setRole1] = useState("");
    const [role2, setRole2] = useState("");
    const [task, setTask] = useState("");
    const [chat,setChat] = useState([])
    const [sessId,setSessId] = useState(0)
    const sessionRef = useRef(null)
    sessionRef.current = sessId
    const chatRef = useRef(null)
    chatRef.current = chat
    let [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        setRanUser1(Math.random())
        setRanUser2(Math.random())
        axios.get("/rp/get_chat?sessId="+searchParams.get("session")).then((res)=>{
           setChat(res.data.messages)
           setRole1(res.data.role1)
           setRole2(res.data.role2)
           setTask(res.data.task)

            
          }).catch((err)=>{
            console.log(err)
        })
        window.setTimeout(()=>setShowBanner(true),30000)
    },[])
    // useEffect(() => {
    //     if(document.querySelector('.end-chat')!=null){document.querySelector('.end-chat').scrollIntoView({ behavior: 'smooth', block: 'end' });}
    // }, [chat])
    
    return (
        <>
            <div className="agent-convo-container vh-100 d-flex justify-content-center align-items-center">
                <div className="agent-convo-box px-3 py-4 p-md-5 text-white">
                    <div className="d-flex justify-content-between mb-3">
                        <h4 className="m-0"><b className="pt-2">CamelAGI</b><Image className="logo ms-3" src={logoImage}/></h4>
                        <Button className="continue-button mt-auto" onClick={()=>navigate('/conversation')}>Create your own</Button>

                    </div>

                    <Stack className="scroll-container " gap={3}>

                        <Stack className="agent-scroll" gap={3}>
                            <span className="py-2">Check out this conversation between <b style={{color:'#763FF9'}}>{role1}</b> and <b style={{color:'#3f65f9'}}>{role2}</b> to discuss:<br/> <b>{task}</b></span>
                            {chatRef.current.length>0&&chatRef.current.map((message)=>
                                message.role==0?
                            <div className="d-flex align-items-end align-self-start me-4 role1-container">
                                {ranUser1!=null&&ranUser1>0.5?<Bot1Icon className="agent-chat-icon"/>:<Bot2Icon className="agent-chat-icon"/>}
                                <div className="d-flex flex-column gap-1">
                                    <div className="bubble agent-1-chat ">
                                        {message.msg==null?
                                        <Stack className="p-2 loading" direction="horizontal" gap={2}>
                                            <Spinner size="sm" animation="grow" />
                                            <Spinner size="sm" animation="grow" />
                                            <Spinner size="sm" animation="grow" />
                                        </Stack>:
                                        <p className="p-2 m-0 agent-msg-container"><ReactMarkdown children={message.msg} remarkPlugins={[remarkGfm]} /></p>}
                                    </div>
                                    <small className="role-name ms-2 align-self-start">{role1}</small>
                                </div>
                            </div>:
                            <div className="d-flex align-items-end align-self-end ms-4 role2-container">
                                <div className="d-flex flex-column gap-1">
                                    <div className="bubble agent-2-chat ">
                                        {message.msg==null?
                                        <Stack className="p-2 loading" direction="horizontal" gap={2}>
                                            <Spinner size="sm" animation="grow" />
                                            <Spinner size="sm" animation="grow" />
                                            <Spinner size="sm" animation="grow" />
                                        </Stack>:
                                        <p className="p-2 m-0 agent-msg-container"><ReactMarkdown children={message.msg} remarkPlugins={[remarkGfm]} /></p>}
                                    </div>
                                    <small className="role-name me-2 align-self-end">{role2}</small>
                                </div>
                                {ranUser2!=null&&ranUser2>0.5?<Bot3Icon className="agent-chat-icon"/>:<Bot4Icon className="agent-chat-icon"/>}
                            </div>
                            )}
                            <div className="end-chat"></div>
                        </Stack>
                        
                    </Stack>
                
                    
                </div>
                <ToastContainer />	
                <Modal className="banner-modal" centered show={showBanner} onHide={()=>setShowBanner(false)}>
                    <Modal.Body className="p-5 position-relative">
                    <b style={{cursor:'pointer'}} onClick={()=>setShowBanner(false)} className="position-absolute top-0 end-0 me-4 mt-2">X</b>
                    <Stack className="align-items-center" gap={3}>
                    <a href="https://www.producthunt.com/posts/camel-agi?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-camel&#0045;agi" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=389872&theme=light" alt="Camel&#0032;AGI - Communicative&#0032;Agents&#0032;on&#0032;GPT | Product Hunt" /></a>                        
                    </Stack>
                </Modal.Body>
            </Modal> 
            </div>
        </>
    )

}

export default AgentConvoShare;