import React  from 'react';


const winW=window.innerWidth
const winH=window.innerHeight;
const userAgent = navigator.userAgent;


global.gData={
    version:'0.3.2',
    user_name:'',
    screenH:winH,
    screenW:winW,
    user_id:'',
    accToken:'',
    refToken:'',
    acc_token_life:900,
    ref_token_life:864000,
    cdn_domain:'',
    api_domain:'',
    focus_uid:0,
    isMobile:userAgent.match(/(iPhone|iPod|Android|ios|iPad|AppleWebKit.*Mobile.*)/i)

}


global.trend = [
     {
        name:"name1"
    },
    {
        name:"name1"
    },
    {
        name:"name1"
    },
]

