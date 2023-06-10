import React from 'react'

function FormBot(name, soni, jamiball, tugson, notugson) { 
    // console.log(name);
    let my_text = `Talaba ismi: ${name} %0A 
        Testlar soni: ${soni} %0A
        Jami yig'ilgan ball: ${jamiball} %0A
        To'g'ri topilgan savollar soni: ${tugson} %0A
        Noto'g'ri topilgan savollar soni: ${notugson} %0A
        ` 

    const token = "6051771947:AAFCd1NgJzopfZEs2zRn6au6nL_kLLlc22c";
    const chat_id = -808060562;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        console.log("Hammasi joyida ishladi");
    return (
        <></>
    )
}

export default FormBot;