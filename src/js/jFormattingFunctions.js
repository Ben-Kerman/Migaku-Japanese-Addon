function processJIphoneEnter(e){var t,i;if(e.classList.contains("hovered-word"))hideRuby(e);else{var a=document.getElementsByClassName("hovered-word")[0];a&&hideRuby(a),e.classList.contains("unhovered-word")&&showRuby(e)}if(i=e.getElementsByClassName("pitch-accent-popup")[0])if("block"==i.style.display)i.style.display="none",i.style.top="",i.style.left="";else{if(t=document.getElementsByClassName("pitch-accent-popup"))for(var s=0;s<t.length;s++)t[s].style&&(t[s].style.display="none",t[s].style.left="",i.style.top="");i&&formatPopup(i,e)}}function formatPopup(e,t){e.style.position="absolute",e.style.display="block";var i=t.closest(".card"),a=i.getBoundingClientRect().top+i.offsetHeight,s=document.body.offsetWidth,n=mobileAndTabletcheck();n&&(s=i.getBoundingClientRect().left+i.offsetWidth);var c=0;document.body.scrollHeight>document.body.clientHeight&&(c=14),e.getBoundingClientRect().left<s&&(e.style.left="2px");var r=t.offsetHeight,o=0;t.classList.contains("pitch-shape-box")&&(o=-5),e.style.top=r+"px";var p=e.getBoundingClientRect().left+e.offsetWidth;if(p+c+10>s){var l=p-s;e.style.left="-"+(l+2+c)+"px"}var d=e.getBoundingClientRect().top+e.offsetHeight,h=a;!n&&h>200&&d>h?e.style.top="-"+(e.offsetHeight+3-o)+"px":n&&h>300&&d>h&&(e.style.top="-"+(e.offsetHeight+3-o)+"px")}function processEntry(e){var t;e.classList.contains("unhovered-word")&&showRuby(e),(t=e.getElementsByClassName("pitch-accent-popup")[0])&&formatPopup(t,e)}function processExit(e){var t;if(e?e.classList.contains("hovered-word")&&hideRuby(e):hideRuby(!1),t=document.getElementsByClassName("pitch-accent-popup"))for(var i=0;i<t.length;i++)t[i].style&&(t[i].style.display="none",t[i].style.left="",t[i].style.top="")}function bracketEscape(e){var t,i=/\[\d*\]+/g;if(i.test(e)){t=e.match(i);for(var a=0;a<t.length;a++)e=e.replace(t[a],"☶")}return t?[e,t]:[e,[]]}function replaceBrackets(e,t){if(t)for(var i=0;i<t.length;i++)e=e.replace("☶",t[i]);return e}function htmlEscape(e){var t=/<[^<]*?>/g,i=!1;if(t.test(e)){i=e.match(t);for(var a=0;a<i.length;a++)e=e.replace(i[a],"☷")}return i?[e,i]:[e,!1]}function returnHTML(e,t){if(t)for(var i=0;i<t.length;i++)e=e.replace("☷",t[i]);return e}function hideRuby(e){var t;if(void 0!==e&&(e.classList.add("unhovered-word"),e.classList.remove("hovered-word")),(t=document.getElementsByClassName("hovered-word"))&&t.length>0)for(var i=0;i<t.length;i++)t[i].classList&&(t[i].classList.add("unhovered-word"),t[i].classList.remove("hovered-word"))}function showRuby(e){e.classList.remove("unhovered-word"),e.classList.add("hovered-word")}function cleanUpSpaces(e){return e.replace(/\n/g,"").replace(/ /g,"")}function convertToHira(e){for(var t="ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッヰヱ",i="",a=0;a<e.length;a++)-1!==t.indexOf(e[a])?i+="がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉゃゅょっゐゑ"[t.indexOf(e[a])]:i+=e[a];return i}function fetchColoredPitchIds(e){for(var t,i=[],a=0;a<e.length;a++){(t=e[a].match(/(n[\d]{1,2})|(k[\d]{1,2})+?|[hanok]/g)).length>1?i.push('<span class="'+pitchConvert(t[0][0])+'">'+t[0].toUpperCase()+'</span><span style="color:black;">-</span><span class="'+pitchConvert(t[1][0])+'">'+t[1].toUpperCase()+"</span>"):i.push('<span class="'+pitchConvert(t[0][0])+'">'+t[0].toUpperCase()+"</span>")}return'<span style="font-family:Arial;">'+i.join('<span class="popup-comma">, </span>')+"</span>"}var mobileBrowser=mobileAndTabletcheck();function getJEvents(){return mobileBrowser?' ontouchend="processJIphoneEnter(this)" ':' onmouseleave="processExit(this)" onmouseenter="processEntry(this)" '}function callPy(e){"undefined"!=typeof pycmd&&pycmd(e)}function fetchPitchShapes(e,t,i,a,s,n,c){var r,o,p,l="",d=[];o=getJEvents();for(var h=1;h<e.length;h++){var v=" onclick=\"callPy('playAudio;"+n+";"+c+";"+h+"')\" ";if(s&&(l='<div class="pitch-accent-popup no-ruby"><div class="no-ruby-pitch">'+t+"</div></div>"),pitch=e[h],(r=pitch.match(/(n[\d]{1,2})|(k[\d]{1,2})+?|[hanok]/g)).length>1)p="<div "+v+' class="pitch-shape-box pitch-circle-box" '+o+'><div class="pitch-circle-box-left"  ><div class="left-pitch-circle '+pitchConvert(r[0][0],!0)+'"></div></div><div class="pitch-circle-box-right"><div class="right-pitch-circle '+pitchConvert(r[1][0],!0)+'"></div></div>'+l+"</div>";else{var u=!1,m=r[0][0];r[0].length>1&&(u=parseInt(r[0].substring(1))),""===i&&""===a||!s||(a||"k"!=r[0][0]&&"k"!=e[0][0]?(a&&"k"==r[0][0]&&(i=a),l='<div class="pitch-accent-popup"><div class="pitch-graph-container"><span class="'+pitchConvert(r[0][0])+'">'+getPitchGraph(i,m,u,a)+'</span></div><div class="pitch-numbers">'+t+"</div></div>"):l='<div class="pitch-accent-popup no-ruby"><div class="no-ruby-pitch">'+t+"</div></div>"),p="<div "+v+' class="pitch-shape-box pitch-diamond-box"  '+o+'><div class="pitch-diamond '+pitchConvert(r[0][0],!0)+'"></div>'+l+"</div>"}d.push(p)}return d.join("")}function pitchConvert(e,t){var i="";switch(e){case"h":i="heiban";break;case"a":i="atamadaka";break;case"n":i="nakadaka";break;case"o":i="odaka";break;case"k":i="kifuku"}return void 0!==t?" bg"+i.charAt(0).toUpperCase()+i.slice(1):i}function fetchPitch(e){var t,i;if(/(n[\d]{1,2})|(k[\d]{1,2})+?/g.test(e)){t=e.match(/(n[\d]{1,2})|(k[\d]{1,2})+?|[hanok]/g);var a="";i=[];for(var s=0;s<t.length;s++)t[s].length>1&&0==s?(i.push(t[s].substring(0,1)),a=parseInt(t[s].substring(1))):i.push(t[s]);return[pitchConvert(i[0].substring(0,1)),[!0,i,a]]}return/[hanok]{2,}/g.test(e)?[pitchConvert((i=e.split(""))[0]),[!1,pitchConvert(i[1],!0)]]:[pitchConvert(e),!1]}function getPitchGraph(e,t,i,a){var s=1,n=["ゃ","ょ","ゅ","ぁ","ぃ","ぇ","ぉ","ぅ","ャ","ョ","ュ","ァ","ィ","ェ","ォ","ゥ"];if(-1!==n.indexOf(e[1])&&(s=2),"a"===t)return'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e.substring(0,s)+'</span><div class="pitch-drop"></div></div>'+e.substring(s);if("n"==t||"k"===t){var c,r=1,o=!1;if("k"===t){if(void 0===a)return!1;e=a}if(void 0===i)return e;r=i;for(var p=0;p<r+1;p++)-1!==n.indexOf(e[p])&&r++;return c=r,1===i&&(o=!0),o?'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e.substring(0,r)+'</span><div class="pitch-drop"></div></div>'+e.substring(r):e.substring(0,s)+'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e.substring(s,c)+'</span><div class="pitch-drop"></div></div>'+e.substring(c)}return"h"===t?(a&&(e=a),e.substring(0,s)+'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e.substring(s)+"</span></div>"):"o"===t?(a&&(e=a),1===e.length||2==e.length&&-1!==n.indexOf(e[1])?'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e+'</span><div class="pitch-drop"></div></div>':e.substring(0,s)+'<div class="pitch-box"><div class="pitch-overbar"></div><span class="high-pitch">'+e.substring(s)+'</span><div class="pitch-drop"></div></div>'):void 0}function fetchFuriWrapper(e,t){return e?'<div class="rtMIA kana-ruby'+t+'"><span class="kana-ruby">'+e+"</span></div>":""}function mobileAndTabletcheck(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e}function doSetTimeout(e,t,i,a,s,n,c,r,o,p,l,d){setTimeout(function(){t=formatJapanese(t,c,r,o,p,l,d),i.innerHTML+=t.replace(/&nbsp;/g,"&ensp;"),sizeShapes(i)},500*e),e+1==a&&(s||n)&&setTimeout(function(){s&&(i.innerHTML=returnHTML(i.innerHTML,s)),n&&(i.innerHTML=replaceBrackets(i.innerHTML,n))},500*(e+1))}var japaneseWordContainers=0;function sizeShapes(e){var t;if(t=e.getElementsByClassName("japanese-word")[0]){var i="jwCont"+ ++japaneseWordContainers;e.classList.add(i),i="."+i;var a,s,n=!1;if((s=document.getElementsByClassName("pitchShapeCss"+japaneseWordContainers)).length>0)s=s[0],n=!0;else(s=document.createElement("style")).classList.add("pitchShapeCss"+japaneseWordContainers),s.type="text/css",a=document.getElementsByTagName("head")[0];var c="",r=parseInt(window.getComputedStyle(t,null).getPropertyValue("font-size"))+3,o=Math.round(10*r)/10,p=Math.round(r/10*10)/10,l=o/2;document.getElementsByClassName("pitch-diamond")&&(c+=i+" .pitch-diamond{",c+="width:"+l+"px;",c+="height:"+l+"px;",c+="bottom:"+p+"px;",c+="}"),l=(o=l+2)/2,p*=.6,document.getElementsByClassName("right-pitch-circle")&&(c+=i+" .right-pitch-circle{",c+="width:"+l+"px;",c+="height:"+o+"px;",c+="bottom:"+p+"px;",c+="border-top-right-radius:"+o+"px;",c+="border-bottom-right-radius:"+o+"px;",c+="}"),document.getElementsByClassName("left-pitch-circle")&&(c+=i+" .left-pitch-circle{",c+="width:"+l+"px;",c+="height:"+o+"px;",c+="bottom:"+p+"px;",c+="border-top-left-radius:"+o+"px;",c+="border-bottom-left-radius:"+o+"px;",c+="}"),n?s.innerHTML=c:(a.appendChild(s),s.appendChild(document.createTextNode(c)))}}function setInHTML(e,t,i,a){t.innerHTML=e,a&&(t.innerHTML=replaceBrackets(t.innerHTML,a).replace(/&nbsp;/g,"&ensp;")),setTimeout(function(){sizeShapes(t),t.style.visibility="visible"},5)}function formatJapanese(e,t,i,a,s,n,c){var r;if(r=e.match(/[^ 　&>;☷\n]+?\[[^\]]+\][^ 　&<;☷\n]*/g)){c||(e=cleanUpSpaces(e));for(var o=0;o<r.length;o++){var p,l,d=r[o],h=d.replace(/\[([^\]]+)\]/,""),v=d.match(/\[([^\]]+)\]/)[1],u=d.replace(/\[[^\]]+\]/,"---SEPERATOR---");[p,l]=u.split("---SEPERATOR---");var m,g="";-1!==v.indexOf(";")?([m,g]=v.split(";"),c||""!=m||(m=p),g=-1!==g.indexOf(",")?g.split(","):[g]):m=v,g&&(g=g.filter(Boolean));var f="";-1!==m.indexOf(",")&&([m,f]=m.split(",")),""===m||m.match(/^[\u3040-\u309f\u30a0-\u30ff]+$/)||(m=""),c&&""==m&&p.match(/^[\u3040-\u309f\u30a0-\u30ff]+$/)&&(m=p);var b,y,k="",w="",x="",C=!0,E=!1,j="",L="";if(g){b=fetchColoredPitchIds(g),[k,w]=fetchPitch(g[0]),w&&(w[0]?w[1].length>1?(C=!1,x=pitchConvert(w[1][1].replace(/\d/g,""),!0)):E=!0:(C=!1,w[1].length>1&&(x=w[1])));var T="";p.match(/^[\u3040-\u309f\u30a0-\u30ff]+$/)&&""==m&&(T=p);var B="";C&&i&&(""!==m||""!==T||""!==f)&&(B=T||m,(j=E?getPitchGraph(convertToHira(B+l),w[1][0],w[2],f):getPitchGraph(convertToHira(B+l),g[0],!1,f))?(L=" thumb-hover",j='<div class="pitch-accent-popup '+k+'"><div class="pitch-graph-container">'+j+'</div><div class="pitch-numbers">'+b+"</div></div>"):j=""),!j&&i&&(!n||n&&!C?j='<div class="pitch-accent-popup no-ruby"><div class="no-ruby-pitch">'+b+"</div></div>":E&&(j='<div class="pitch-accent-popup no-ruby"><div class="no-ruby-pitch">'+b+"</div></div>"))}""===m&&""!==f&&i&&!j&&(j='<div class="pitch-accent-popup"><div class="pitch-graph-container">'+f+"&ensp;</div></div>"),y=getJEvents();var H="",M=m+l;if(f){M=f;var P=h.match(/.*[^\u3040-\u309f\u30a0-\u30ff ]/);P||(P=""),h=P+f.replace(m,"")}g.length>1&&n&&"coloredhover"!==t&&a&&(H=fetchPitchShapes(g,b,m?m+l:"",f,i,h,M)),p.match(/^[\u3040-\u309f\u30a0-\u30ff]+$/)&&(m=""),n||(k="",x=""),""===m&&c&&(m=p+l);if(g.length < 2){var A=" onclick=\"callPy('playAudio;"+h+";"+M+";100')\" "; }else{ var A=" onclick=\"callPy('playAudio;"+h+";"+M+";0')\" ";}"coloredkanji"==t?e=e.replace(d,'<div class="j-mia-cont"><span'+A+' class="japanese-word '+k+x+L+'"'+y+">"+p+l+j+"</span>"+H+"</div>"):"kanji"==t?e=e.replace(d,"<span"+A+'  class="japanese-word"'+y+">"+p+l+j+"</span>"):"coloredkanjireading"==t||"kanjireading"==t?(m=fetchFuriWrapper(m,s),e=e.replace(d,'<div class="j-mia-cont"><span'+A+' class="japanese-word '+k+x+L+'"'+y+'><div class="rubyMIA">'+m+'<div class="rbMIA"><span class="kanji-ruby">'+p+"</span></div></div>"+l+j+"</span>"+H+"</div>")):"coloredhover"==t||"hover"==t?(m=fetchFuriWrapper(m,s),e=e.replace(d,"<span"+A+' class="japanese-word unhovered-word '+k+x+L+'"'+y+'><div class="rubyMIA">'+m+'<div class="rbMIA"><span class="kanji-ruby">'+p+"</span></div></div>"+l+j+"</span>")):"coloredreading"!=t&&"reading"!=t||(e=e.replace(d,'<div class="j-mia-cont"><span'+A+' class="japanese-word '+k+x+L+'"'+y+">"+m+l+j+"</span>"+H+"</div>"))}return e}return c||(e=cleanUpSpaces(e)),e}