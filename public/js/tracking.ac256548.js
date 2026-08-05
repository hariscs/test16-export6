function getParam(p){var match=RegExp('[?&]'+p+'=([^&]*)').exec(window.location.search);return match&&decodeURIComponent(match[1].replace(/\+/g,' '))}
function addUTM(){const utmKeys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','wbraid','gbraid','msclkid'];let utmParams={};let hasUTM=!1;utmKeys.forEach(key=>{const value=getParam(key);if(value){utmParams[key]=value;hasUTM=!0}});if(!Cookies.get('rr_utm_data')){Cookies.set('rr_utm_data',hasUTM?JSON.stringify(utmParams):'0',{expires:90})}}
function addLandingUrl(){if(!Cookies.get('landing_page_url')){Cookies.set('landing_page_url',window.location.href,{expires:90})}
if((!Cookies.get('referrer_url')||Cookies.get('referrer_url')==='')&&document.referrer!==''){Cookies.set('referrer_url',document.referrer,{expires:90})}else if(!Cookies.get('referrer_url')||Cookies.get('referrer_url')===''){Cookies.set('referrer_url',window.location.hostname,{expires:90})}
if(!Cookies.get('landing_page_url_last')){Cookies.set('landing_page_url_last',window.location.href)}
if(!Cookies.get('referrer_url_last')){Cookies.set('referrer_url_last',document.referrer||window.location.hostname)}}
function getGoogleCid(){var match=document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');var raw=(match)?decodeURIComponent(match[1]):null;if(raw){match=raw.match(/(\d+\.\d+)$/)}
return(match)?match[1]:''}
function setGoogleCid(){if(!Cookies.get('google_cid')){const cid=getGoogleCid();if(cid){Cookies.set('google_cid',cid,{expires:90});return!0}
return!1}
return!0}
if(!setGoogleCid()){const cidInterval=setInterval(function(){if(setGoogleCid()){clearInterval(cidInterval)}},3000)}
function trackUserNavigation(){const maxEntries=10;const historyCookieName='user_nav_history';const maxCharLength=9999;let history=[];try{history=Cookies.get(historyCookieName)?JSON.parse(Cookies.get(historyCookieName)):[]}catch(e){console.error('Failed to parse user_nav_history:',e)}
let timestamp=new Date().toISOString().replace("T"," ").split(".")[0];let currentUrl=window.location.href;history.push({url:currentUrl,"-":timestamp});const formattedHistory=history.map(entry=>`${entry.url}, ${entry["-"]}`).join('\n');let currentLength=formattedHistory.length;while(currentLength>maxCharLength&&history.length>1){history.shift();const newFormatted=history.map(entry=>`${entry.url}, ${entry["-"]}`).join('\n');currentLength=newFormatted.length}
if(history.length>maxEntries){history=history.slice(history.length-maxEntries)}
Cookies.set(historyCookieName,JSON.stringify(history),{expires:90})}
addUTM();addLandingUrl();trackUserNavigation()