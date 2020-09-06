(this["webpackJsonpsapient-assignment"]=this["webpackJsonpsapient-assignment"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(8),l=t.n(c),r=(t(17),t(1)),o=t(2),s=t(3);function d(){var e=Object(o.a)(["\n    background: #FFF;\n    width: 90%;\n    // border-radius: 10px;\n    height: 563px;\n    .filter-title {\n        text-align: left;\n        left: 6px;\n        position: relative;\n        font-weight: 700;\n    }\n    .filter-individual-container{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 17px;\n        .filter-content-container {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            .item {\n                text-align: center;\n                margin: 5px 22px;\n                background: #c6e099;\n                padding: 6px;\n                border-radius: 7px;\n                width: 37px;\n                cursor: pointer;\n                color: #000;\n                font-size: 12px;\n                font-weight: 600;\n                &.active {\n                    background: #7bbb00;\n                }       \n            }\n        }\n        .title {\n            border-bottom: 1px solid #dedddb;\n            width: 70%;\n            padding-bottom: 3px;\n            margin-bottom: 6px;\n            font-size: 13px;\n        }\n    }\n"]);return d=function(){return e},e}var m=s.a.div(d()),u=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],f=function(e){var n=e.setIsManuallyChanges,t=e.activeYear,a=e.setActiveYear,c=e.successfulLaunch,l=e.setSuccessfulLaunch,r=e.successfulLanding,o=e.setSuccessfulLanding;return i.a.createElement(m,null,i.a.createElement("p",{className:"filter-title"},"Filter"),i.a.createElement("div",{className:"filter-individual-container"},i.a.createElement("div",{className:"title"},"Launch Year"),i.a.createElement("div",{className:"filter-content-container"},u.map((function(e){return i.a.createElement("div",{onClick:function(){n(!0),a(e)},className:parseInt(t)===e?"active item":"item",key:e},e)})))),i.a.createElement("div",{className:"filter-individual-container"},i.a.createElement("div",{className:"title"},"Successful Launch"),i.a.createElement("div",{className:"filter-content-container"},i.a.createElement("div",{onClick:function(){n(!0),l("true")},className:"true"===c?"active item":"item"},"True"),i.a.createElement("div",{onClick:function(){n(!0),l("false")},className:"false"===c?"active item":"item"},"False"))),i.a.createElement("div",{className:"filter-individual-container"},i.a.createElement("div",{className:"title"},"Successful Landing"),i.a.createElement("div",{className:"filter-content-container"},i.a.createElement("div",{onClick:function(){o("true")},className:"true"===r?"active item":"item"},"True"),i.a.createElement("div",{onClick:function(){o("false")},className:"false"===r?"active item":"item"},"False"))))};function p(){var e=Object(o.a)(["\n    display: grid;\n    grid-gap: 15px;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    .individual-content-container {\n        padding: 10px 10px 24px 10px;\n        background: #FFF;\n        img {\n            width: 256px;\n            min-width: 256px;\n            background: #f2f2f2;\n            min-height: 256px;\n            color: #000;\n            word-break: break-all;\n            font-size: 13px;\n        }\n        .individual-content-details-container {\n            .title {\n                margin-top: 7px;\n                color: #4c558f;\n                font-size: 13px;\n                font-weight: 800;\n            }\n            .details-row-container {\n                display: flex;\n                flex-direction: column;\n                margin-top: 15px;\n               .details-row{\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    align-items: baseline;\n                    .row-label {\n                        font-weight: bold;\n                        font-family: fantasy;\n                        text-align: right;\n                    }\n                    .row-value{\n                        text-align: left;\n                        color: #bfc3d3;\n                        font-size: 13px;\n                        font-weight: bold;\n                        word-break: break-word;\n                        left: 10px;\n                        position: relative;\n                    }\n               } \n            }\n        }\n    }\n    @media screen and (max-width: 1024px) {\n        grid-template-columns: 1fr 1fr;\n    }\n    @media screen and (max-width: 700px) {\n\t\tgrid-template-columns: 1fr;\n\t}\n"]);return p=function(){return e},e}var v=s.a.div(p()),g=function(e){var n=e.rocketDetails;return i.a.createElement(v,null,n.map((function(e){var n=e||{},t=n.details,a=void 0===t?"":t,c=n.mission_name,l=void 0===c?"":c,r=n.flight_number,o=void 0===r?"":r,s=n.mission_id,d=void 0===s?[]:s,m=n.launch_year,u=void 0===m?"":m,f=n.launch_success,p=n.launch_landing,v=n.links,g=((void 0===v?{}:v)||{}).mission_patch_small,h=void 0===g?"":g;return i.a.createElement("div",{className:"individual-content-container",key:o},i.a.createElement("img",{src:h,alt:a||l}),i.a.createElement("div",{className:"individual-content-details-container"},i.a.createElement("div",{className:"title"},"".concat(l," #").concat(o)),i.a.createElement("div",{className:"details-row-container"},i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-label"},"Mission Id's:"),i.a.createElement("div",{className:"row-value"},d&&d.length>0?d.map((function(e,n){return i.a.createElement("span",{className:"id-list",key:n},"".concat(e,", "))})):"-")),i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-label"},"Launch Year:"),i.a.createElement("div",{className:"row-value"},u)),i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-label"},"Successful Launch:"),i.a.createElement("div",{className:"row-value"},f?"Yes":"No")),i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-label"},"Successful Land:"),i.a.createElement("div",{className:"row-value"},void 0===p?"-":p?"Yes":"No")))))})))};function h(){var e=Object(o.a)(["\n\tbackground: #f2f2f2;\n\theader {\n\t\tfont-size: 23px;\n\t\tfont-weight: 600;\n\t\ttext-align: left;\n\t}\n\t.app-container {\n\t\theight: 93vh;\n    \toverflow: auto;\n\t\tdisplay: grid;\n\t\tgrid-column-gap: 15px;\n\t\tgrid-template-columns: 1fr 5fr;\n\t\t.filter-container {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tbackground: #f2f2f2;\n\t\t\tpadding-top: 14px;\n\t\t}\n\t\t.content-container {\n            padding: 0 10px 24px 10px;\n            margin-top: 15px;\n            overflow: auto;\n\t\t\t.loading {\n                font-size: 16px;\n                font-family: fantasy;\n                font-weight: bold;\n                position: absolute;\n                text-align: center;\n                left: 50%;\n                top: 50%;\n                transform: translate(-50%);\n            }\n\t\t}\n\t}\n\tfooter {\n\t\tmargin-top:7px;\n\t\tfont-size: 16px;\n\t\tfont-weight: bold;\n\t\t.developer-name {\n\t\t\tfont-weight: 500;\n\t\t}\n\t}\n\t@media screen and (max-width: 700px) {\n\t\t.app-container {\n            grid-template-columns: 1fr;\n            .content-container {\n                overflow: visible;\n            }\n\t\t}\n\t}\n\t\n"]);return h=function(){return e},e}var w=s.a.div(h());var x=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(),o=Object(r.a)(l,2),s=o[0],d=o[1],m=Object(a.useState)(),u=Object(r.a)(m,2),p=u[0],v=u[1],h=Object(a.useState)(),x=Object(r.a)(h,2),b=x[0],E=x[1],N=Object(a.useState)(!0),k=Object(r.a)(N,2),y=k[0],j=k[1],O=Object(a.useState)(!0),S=Object(r.a)(O,2),L=S[0],_=S[1];Object(a.useEffect)((function(){var e=z();F("?"!==e?e:"?limit=100")}),[]),Object(a.useEffect)((function(){if(L&&(s||p||b)){var e="?limit=100";s&&" "!==s?("/".concat(s),e+="&launch_year=".concat(s)):"/ ",p?("/".concat(p),e+="&launch_success=".concat(p)):"/ ",b?("/".concat(b),e+="&land_success=".concat(b)):"/ ",F(e);var n=window.location.protocol+"//"+window.location.host+"/sapient-assignment"+e;console.log(n),window.history.pushState({path:n},"",n)}}),[L,s,p,b]);var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";j(!0),fetch("https://api.spacexdata.com/v3/launches".concat(e)).then((function(e){return e.json()})).then((function(e){c(e),j(!1)}))},z=function(){var e="?",n=function(){var e=window.location.search.substring(1);return e?JSON.parse('{"'+e.replace(/&/g,'","').replace(/=/g,'":"')+'"}',(function(e,n){return""===e?n:decodeURIComponent(n)})):{}}()||{};for(var t in console.log(n),n)n[t]&&" "!==n[t]&&("launch_year"===t?d(n[t]):"launch_success"===t?v(n[t]):"land_success"===t&&E(n[t]),_(!1),e+="&".concat(t,"=").concat(n[t]));return e};return i.a.createElement(w,null,i.a.createElement("div",{className:"App"},i.a.createElement("header",null,"SpaceX Launch Programs"),i.a.createElement("div",{className:"app-container"},i.a.createElement("div",{className:"filter-container"},i.a.createElement(f,{activeYear:s,setActiveYear:d,successfulLaunch:p,setSuccessfulLaunch:v,successfulLanding:b,setSuccessfulLanding:E,setIsManuallyChanges:_})),i.a.createElement("div",{className:"content-container"},y&&i.a.createElement("p",{className:"loading"},"Loading Please Wait..."),!y&&t.length>0&&i.a.createElement(g,{rocketDetails:t}),!y&&!t.length&&i.a.createElement("p",{className:"loading"},"No Missions found..."))),i.a.createElement("footer",null,"Developed By: ",i.a.createElement("span",{className:"developer-name"},"Gowtham V"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.98af2118.chunk.js.map