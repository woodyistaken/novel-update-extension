import "./Button.css"

export default function Button(){
    let titleTds=Array.from(document.body.querySelectorAll("td.title_shorten"))
    let titles=titleTds.map((td)=>{
        return td.querySelector('a')?.textContent
    })
    function onclick(){
        chrome.runtime.sendMessage({
            action:"openCustomTab",
            payload:titles
        })
    }

    return <div><button onClick={onclick} className="importButton">Import List</button></div>
}