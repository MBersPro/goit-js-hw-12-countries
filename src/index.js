import './style.css';
import handleNode from './templates/templates.hbs'
import singleCountryTemlate from "./templates/singleCountryTemlate.hbs"
import {alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';


const refs = {
    inputNode: document.querySelector('#inputNode'),
    ulNode: document.querySelector('#ulNode'),
}
const fetchUrl = (arg1) => {
    const baseUrl = "https://restcountries.eu/rest/v2/name/"
    fetch(baseUrl + arg1).then(item => item.json()).then(item => {
        const test = handleNode(item);
        const test2 = singleCountryTemlate(item);
        console.log(item)
        
        if(item.length === 1){
            refs.ulNode.innerHTML = test2;
        }else if(item.length < 10 && item.length >= 2){
            refs.ulNode.innerHTML = test;
        }else{
            alert({
                text: 'Notice me, senpai!'
              });
        }
        
    })
    
}
const onInput = () => {
    const inputVal = refs.inputNode.value
    fetchUrl(inputVal)
}
refs.inputNode.addEventListener("input", onInput)