// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from "next/document";

export default function functionsPage(){
let helloworld2 = function (){
// return "hello world welcome back"\
return `Hello world Welcome back `;
}
const louder= (textOutputFunc ,thisName
) => {
    let thisText= textOutputFunc(thisName);
    return thisText.toUpperCase();
}
const helloworld3 = () =>{
     
}

return(
        <Main>

            <h1> Function</h1>
            <p>hello world</p>
            <p></p>
            
        </Main>
    )



}