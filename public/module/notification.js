import { elements } from "../interface/script/elements";



export function Err(err){
    elements.err.innerHTML(err);
    elements.errIframe.style.display = "flex";
}

export function corr(corr){
    elements.err.innerHTML(corr);
    elements.corrIframe.style.display = "flex";   
}