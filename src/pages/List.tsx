import './List.css'
import { useEffect,useState } from 'react'

export default function List(){
    const [data,setData]=useState<string[]>()
    useEffect(()=>{
        chrome.storage.local.get(['sharedData'])
        .then((result)=>{
            if(result.sharedData){
                const data=result.sharedData as string[]
                setData(data)
            }
        })
    },[])
    return <div><ul>{data?.map((title)=>{
        return <li>{title}</li>
    })}</ul></div>
}