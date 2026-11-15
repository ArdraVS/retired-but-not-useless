const gear=[
{id:"lm",name:"Apollo Lunar Module Descent Stage",body:"Moon",icon:"🚀",color:"#FFD166",img:"images/lunar-module.jpg",x:22,y:62,
 mission:"Apollo missions 11, 12, 14, 15, 16 and 17 (the six Moon landings)",year:"Apollo 11 launched in 1969 and landed on the Moon on 20 July 1969.",
 designed:"The Lunar Module had two parts. The bottom part, the descent stage, carried two astronauts down from orbit to the Moon’s surface using a rocket engine that could be turned up and down for a gentle landing. After landing, it became a launch pad for the top part.",
 facts:["Six Apollo crews landed on the Moon, so six descent stages are still there.","The Lunar Module was built by a company called Grumman.","Apollo 11 landed in a flat area called the Sea of Tranquility.","Only the top part (the ascent stage) flew back up to meet the astronauts’ ship in orbit."],
 why:"The top part needed to be as light as possible to lift off the Moon, so the heavy bottom half stayed behind as a launch platform.",
 contrib:"It proved people can land on another world and come home. Apollo crews brought back about 382 kilograms of Moon rocks and soil that scientists still study today."},
{id:"lrv",name:"Lunar Roving Vehicle",body:"Moon",icon:"🛻",color:"#FF7900",img:"images/lunar-rover.jpg",x:40,y:30,
 mission:"Apollo 15, Apollo 16 and Apollo 17",year:"First driven on the Moon in 1971 (Apollo 15). Apollo 16 and 17 followed in 1972.",
 designed:"The Moon buggy let astronauts travel much farther than they could on foot. It carried two astronauts, their tools, a TV camera and the rocks they collected.",
 facts:["It folded up flat to fit on the side of the Lunar Module.","Its wheels were made of wire mesh instead of rubber tyres.","Its top speed was around 13 kilometres per hour.","On Apollo 17, scientists on Earth steered its camera to film the Lunar Module lifting off.","Three rovers were left on the Moon, one from each mission."],
 why:"The crews only had room to bring home themselves and their Moon samples, so the rovers were parked on the Moon when each mission ended.",
 contrib:"Astronauts could explore farther from their lander and bring back more kinds of rocks. The Apollo 17 rover alone drove more than 35 kilometres."},
{id:"pf",name:"Mars Pathfinder Lander",body:"Mars",icon:"🪂",color:"#FC3D21",img:"images/pathfinder.webp",x:68,y:68,
 mission:"Mars Pathfinder",year:"Launched 4 December 1996. Landed on Mars on 4 July 1997.",
 designed:"Pathfinder tested a new, low-cost way to reach Mars. It dropped in with a parachute, then bounced to a stop inside giant airbags. Once safe, it opened up, took pictures, measured Martian weather and carried the Sojourner rover.",
 facts:["It landed by bouncing on airbags, like a giant beach ball.","It was renamed the Carl Sagan Memorial Station to honour the famous scientist.","It sent back more than 16,500 pictures of Mars.","It measured wind and weather on Mars.","It landed in a place called Ares Vallis, where ancient floods may once have flowed."],
 why:"Its last signal to Earth arrived on 27 September 1997. Engineers think its battery stopped working after many cold Martian nights.",
 contrib:"Pathfinder showed that small, low-cost missions could work on Mars. Later Mars rovers, including Spirit, Opportunity, Curiosity and Perseverance, built on what it learned."},
{id:"soj",name:"Sojourner Rover",body:"Mars",icon:"🤖",color:"#00A6FF",img:"images/sojourner.jpg",x:78,y:34,
 mission:"Mars Pathfinder",year:"Launched 4 December 1996. Began exploring Mars in July 1997.",
 designed:"Sojourner was the first rover to drive on Mars. It studied rocks and soil with cameras and a tool called an alpha proton X-ray spectrometer, which tells scientists what rocks are made of.",
 facts:["It was about the size of a microwave oven.","It had six wheels and a solar panel on top.","A 12-year-old girl named Valerie Ambroise won a contest to name it after Sojourner Truth.","It was planned to work for 7 Martian days but worked for 83.","It drove about 100 metres in total, always staying close to the lander."],
 why:"Sojourner talked to Earth through the Pathfinder lander. When the lander’s last signal arrived on 27 September 1997, the rover could not send messages any more and stayed beside it.",
 contrib:"It proved that a small rover could explore Mars and study its rocks. It opened the door for the bigger rovers that came after."}];
const quiz=[
["What was the descent stage of the Lunar Module used for after landing?",["A launch pad for the top part","A house for the astronauts","A telescope","A space boat"],0,"Right! The top part blasted off from it."],
["How many Apollo crews landed on the Moon and left a descent stage behind?",["Two","Four","Six","Twelve"],2,"Six crews landed, so six descent stages are on the Moon."],
["Which mission first used the Lunar Roving Vehicle?",["Apollo 11","Apollo 15","Apollo 13","Apollo 8"],1,"Apollo 15 drove the first Moon buggy in 1971."],
["How did the Moon buggy travel to the Moon?",["Folded up on the side of the Lunar Module","Towed behind the rocket","Built on the Moon","Carried inside the astronauts’ backpacks"],0,"It folded flat and was unpacked on the Moon."],
["How did Mars Pathfinder land?",["On big legs","By bouncing on airbags","Swimming in water","By driving down a ramp from orbit"],1,"Airbags let it bounce to a stop on Mars."],
["Who was the Pathfinder lander renamed after?",["Neil Armstrong","Albert Einstein","Carl Sagan","Valerie Ambroise"],2,"It became the Carl Sagan Memorial Station."],
["Who was Sojourner the rover named after?",["Sojourner Truth","A NASA dog","A Martian mountain","A famous astronaut"],0,"A student’s essay chose the name of Sojourner Truth."],
["About how far did Sojourner drive in total?",["10 metres","100 metres","10 kilometres","1,000 kilometres"],1,"It drove about 100 metres, always near its lander."]];
const facts=[["1/6","The Moon’s gravity is about one sixth of Earth’s, so astronauts could take big bouncy steps.","#FFD166"],["Red","Mars looks red because its dust contains lots of iron rust.","#FC3D21"],["24h 40m","A day on Mars is a little longer than a day on Earth: about 24 hours and 40 minutes.","#FF7900"],["No wind","The Moon has no wind or rain, so footprints there can last for a very long time.","#00A6FF"],["3.8 cm","The Moon moves about 3.8 centimetres farther from Earth every year.","#FFF0D9"]];
const steps=[["4 Dec 1996","Launch","Pathfinder blasts off for Mars, carrying the Sojourner rover."],["4 Jul 1997","Bouncing landing","A parachute slows it down, then giant airbags bounce it to a stop at Ares Vallis."],["July 1997","Sojourner drives","The first rover on Mars rolls out and studies rocks. It was planned to work 7 Martian days but worked 83."],["Summer 1997","Sending the world pictures","The lander sends back more than 16,500 pictures and measures wind and weather."],["27 Sep 1997","The last signal","Engineers think the battery stopped working after many cold nights. Sojourner stayed beside the lander."],["Today","Passing it on","Spirit, Opportunity, Curiosity and Perseverance built on what Pathfinder learned."]];
const wis=[["Small can be mighty.","Pathfinder showed that small, low-cost missions can work on Mars.","Sojourner was about the size of a microwave oven, yet it explored Mars and opened the door for bigger rovers."],["Leave room for what matters.","Apollo crews could only bring home themselves and their Moon samples, so the rovers stayed.","Choosing what to leave behind helped bring back about 382 kilograms of Moon rocks and soil."],["Do more than planned.","Sojourner worked for 83 Martian days when only 7 were planned.","Keep going, keep learning, and you may surprise everyone."],["Great work needs a team.","Sojourner talked to Earth through the Pathfinder lander.","Neither machine could finish the story alone."],["A student can name a hero.","A 12-year-old girl, Valerie Ambroise, won the contest to name Sojourner.","Young people’s ideas have helped shape real missions."]];
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const ph=g=>`<div class="ph${g.img?" has":""}" style="--c:${g.color}">${g.img?`<img src="${g.img}" alt="${g.name}" loading="lazy">`:`<b>${g.icon}</b><span>Image placeholder:<br>${g.name}</span>`}</div>`;
const say=t=>{$("#bubble").textContent=t};
/* sky: 3 parallax layers, shooting stars, mouse particles */
const cv=$("#sky"),cx=cv.getContext("2d");let W,H,L=[],sh=[],mp=[],mx=0,my=0;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;const n=Math.min(260,W*H/6000|0);L=[0,1,2].map(l=>Array.from({length:n/(l+1)|0},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*(l+1)*.6+.3,p:Math.random()*6,s:(l+1)*.08})))}
addEventListener("resize",rs);rs();
addEventListener("pointermove",e=>{mx=e.clientX/W-.5;my=e.clientY/H-.5;if(!RM&&Math.random()<.4)mp.push({x:e.clientX,y:e.clientY,a:1,vx:Math.random()-.5,vy:Math.random()-.5});look(e)});
function tick(t){cx.clearRect(0,0,W,H);
 L.forEach((l,i)=>l.forEach(s=>{if(!RM)s.x-=s.s;if(s.x<0)s.x=W;const a=.5+.5*Math.sin(t/700+s.p);cx.globalAlpha=RM?.8:a;cx.fillStyle=i==2?"#FFD166":"#fff";cx.fillRect(s.x+mx*(i+1)*-14,s.y+my*(i+1)*-14,s.r,s.r)}));
 if(!RM&&Math.random()<.008)sh.push({x:Math.random()*W,y:Math.random()*H*.5,a:1});
 sh=sh.filter(s=>s.a>0);sh.forEach(s=>{cx.globalAlpha=s.a;cx.strokeStyle="#FF7900";cx.lineWidth=2;cx.beginPath();cx.moveTo(s.x,s.y);cx.lineTo(s.x-70,s.y-30);cx.stroke();s.x+=9;s.y+=4;s.a-=.02});
 mp=mp.filter(p=>p.a>0);mp.forEach(p=>{cx.globalAlpha=p.a;cx.fillStyle="#FF7900";cx.beginPath();cx.arc(p.x+=p.vx,p.y+=p.vy,2,0,7);cx.fill();p.a-=.03});
 requestAnimationFrame(tick)}
requestAnimationFrame(tick);
/* robot */
function look(e){const r=$("#robot").getBoundingClientRect(),dx=Math.max(-1,Math.min(1,(e.clientX-r.x-r.width/2)/300)),dy=Math.max(-1,Math.min(1,(e.clientY-r.y-r.height/2)/300));$("#eyes").style.transform=`translate(${dx*8}px,${dy*5}px)`;$("#head").style.transform=`rotate(${dx*4}deg)`}
let rc=0;$("#robot").onclick=()=>{rc++;cheer();say(rc>=5?"You found my secret: every story is a star! ⭐":"Beep boop! Try the glowing stars.")};
function cheer(){const r=$("#robot");r.classList.remove("cheer");void r.offsetWidth;r.classList.add("cheer")}
/* confetti */
function confetti(){if(RM)return;const c=$("#conf"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;const P=Array.from({length:90},()=>({x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*14,vy:Math.random()*-14,c:["#FF7900","#FFD166","#00A6FF","#fff"][Math.random()*4|0]}));let f=0;(function d(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.35;x.fillStyle=p.c;x.fillRect(p.x+=p.vx,p.y+=p.vy,6,6)});if(f++<90)requestAnimationFrame(d);else x.clearRect(0,0,c.width,c.height)})()}
/* galaxy */
const found=new Set();
$("#galaxy").innerHTML=gear.map(g=>`<button class="star" style="left:${g.x}%;top:${g.y}%;--c:${g.color};animation-delay:-${g.x/10}s" data-o="${g.id}" aria-label="Open story: ${g.name}"><span>${g.name.split(" ").slice(-2).join(" ")}</span></button>`).join("")+
`<button class="star tiny" style="left:90%;top:12%;--c:#fff" id="secret" aria-label="A tiny hidden star"></button><button class="star tiny" style="left:8%;top:14%;--c:#FFD166" id="secret2" aria-label="Another tiny star"></button>`;
$("#galaxy").onclick=e=>{const b=e.target.closest("[data-o]");if(b)openStory(b.dataset.o)};
$("#secret").onclick=()=>pop("Hidden lesson ✨","Sojourner was built to work 7 Martian days. It worked 83. Doing more than expected is a superpower.");
$("#secret2").onclick=()=>pop("Hidden lesson ✨","Footprints on the Moon can last a very long time because there is no wind or rain. What you do can last too.");
/* modal */
let lastBtn;
function show(html,c){lastBtn=document.activeElement;$("#mbody").innerHTML=html;$(".sheet").style.setProperty("--c",c||"#FF7900");$("#modal").hidden=false;document.body.style.overflow="hidden";$("#mclose").focus()}
function pop(t,p){show(`<h2 id="mtitle">${t}</h2><p style="margin-top:.8rem">${p}</p>`);cheer()}
function openStory(id){const g=gear.find(x=>x.id===id);found.add(id);$("#fcount").textContent=found.size;
 show(`${ph(g)}<h2 id="mtitle">${g.name}</h2><span class="chip">${g.body}</span><h4>Mission</h4><p>${g.mission}</p><h4>When</h4><p>${g.year}</p><h4>What it was built to do</h4><p>${g.designed}</p><h4>Cool facts</h4><ul>${g.facts.map(f=>`<li>${f}</li>`).join("")}</ul><h4>Why it stopped or was left behind</h4><p>${g.why}</p><h4>Its gift to space exploration</h4><p>${g.contrib}</p>`,g.color);
 cheer();say(`Great! You found ${found.size} of 4 stories.`);if(found.size==4){say("You found all four! Amazing explorer! 🎉");confetti()}}
function closeS(){$("#modal").hidden=true;document.body.style.overflow="";lastBtn&&lastBtn.focus&&lastBtn.focus()}
$("#mclose").onclick=closeS;$("#modal").onclick=e=>{if(e.target.id==="modal")closeS()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#modal").hidden)closeS()});
/* timeline */
$("#tlist").innerHTML=steps.map((s,i)=>`<button class="ms rv" data-i="${i}"><b>${s[0]}</b><strong>${s[1]}</strong><p>${s[2]}</p></button>`).join("");
const ms=[...$$(".ms")];function setMs(i){ms.forEach((m,k)=>m.classList.toggle("on",k<=i&&k===i));$("#tlp").style.height=(ms[i].offsetTop+30)+"px"}
ms.forEach(m=>m.onclick=()=>setMs(+m.dataset.i));
function tlScroll(){const mid=innerHeight*.55;let a=0;ms.forEach((m,i)=>{if(m.getBoundingClientRect().top<mid)a=i});setMs(a)}
addEventListener("scroll",tlScroll,{passive:true});tlScroll();
/* cards */
function showCards(f){$("#cards").innerHTML=gear.filter(g=>f==="all"||g.body===f).map(g=>`<article class="card" style="--c:${g.color}">${ph(g)}<div class="cbody"><span class="chip">${g.body}</span><h3>${g.name}</h3><p>${g.year}</p><button class="btn" data-open="${g.id}">Read the story</button></div></article>`).join("");
 $$(".tab").forEach(t=>{const on=t.dataset.f===f;t.classList.toggle("active",on);t.setAttribute("aria-pressed",on)})}
$$(".tab").forEach(t=>t.onclick=()=>showCards(t.dataset.f));
$("#cards").onclick=e=>{const b=e.target.closest("[data-open]");if(b)openStory(b.dataset.open)};
$("#cards").addEventListener("pointermove",e=>{const c=e.target.closest(".card");if(!c||RM)return;const r=c.getBoundingClientRect();c.style.transform=`rotateY(${((e.clientX-r.x)/r.width-.5)*14}deg) rotateX(${-((e.clientY-r.y)/r.height-.5)*14}deg)`});
$("#cards").addEventListener("pointerout",e=>{const c=e.target.closest(".card");if(c)c.style.transform=""});
showCards("all");
/* wisdom */
$("#wis").innerHTML=wis.map(w=>`<button class="q" aria-expanded="false"><p>“${w[0]}”</p><em>${w[1]}</em><small>${w[2]}</small></button>`).join("");
$("#wis").onclick=e=>{const q=e.target.closest(".q");if(q)q.setAttribute("aria-expanded",q.getAttribute("aria-expanded")!=="true")};
/* quiz */
let qi=0,sc=0;
function rq(){if(qi>=quiz.length){const m=sc==8?"Perfect! You’re a space expert! 🌟":sc>=6?"Great job, explorer! 🚀":sc>=4?"Good try! Read the stories again. 🌙":"Keep exploring! The stories are waiting. 🪐";$("#quizbox").innerHTML=`<div class="bar"><i style="width:100%"></i></div><p>Your final score</p><p class="score">${sc} / 8</p><p class="fb">${m}</p><button class="btn" id="again">Play again</button>`;$("#again").onclick=()=>{qi=sc=0;rq()};if(sc>=6){confetti();cheer()}return}
 const [q,o]=quiz[qi];$("#quizbox").innerHTML=`<div class="bar"><i style="width:${qi/8*100}%"></i></div><p>Question ${qi+1} of 8</p><p class="qtext">${q}</p><div class="opts">${o.map((t,i)=>`<button class="opt" data-i="${i}">${t}</button>`).join("")}</div><p class="fb" aria-live="polite"></p><div id="nx"></div>`;
 $$(".opt").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,[, ,a,n]=quiz[qi],ok=i===a;if(ok)sc++;$$(".opt").forEach((x,k)=>{x.disabled=true;if(k===a)x.classList.add("right");else if(k===i)x.classList.add("wrong")});$(".fb").textContent=(ok?"✅ Correct! ":"❌ Not quite. ")+n;$("#nx").innerHTML=`<button class="btn" id="next">${qi==7?"See my score":"Next question"}</button>`;$("#next").onclick=()=>{qi++;rq()};$("#next").focus()})}
rq();
$("#factlist").innerHTML=facts.map(f=>`<div class="fact" style="--c:${f[2]}"><b>${f[0]}</b><p>${f[1]}</p></div>`).join("");
/* memory capsule (frontend prototype) */
const mems=[];
/* BACKEND INTEGRATION POINT: replace the body with fetch("/api/memories",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}) and keep entries unpublished until moderated. */
async function submitMemory(data){mems.push(data);return{ok:true}}
$("#form").onsubmit=async e=>{e.preventDefault();const cat=$("#cat").value,st=$("#st").value.trim(),ok=$("#ok").checked;
 $("#e1").textContent=cat?"":"Please choose a category.";$("#e2").textContent=st.length>=20?"":"Please write at least 20 characters.";$("#e3").textContent=ok?"":"Please tick the permission box to continue.";
 if(!cat||st.length<20||!ok)return;
 await submitMemory({name:$("#nm").value.trim(),cat,st,status:"pending review"});
 $("#mems").innerHTML=mems.map(m=>`<div class="mem"><span class="chip">${m.cat}</span> <small>Saved on this device · not public</small><p></p></div>`).join("");
 $$("#mems p").forEach((p,i)=>p.textContent=(mems[i].name?mems[i].name+": ":"")+mems[i].st);
 $("#fmsg").textContent="Thank you! Your memory is saved and will not be shown publicly.";e.target.reset();cheer();say("Thanks for sharing a memory! 💛")};
/* nav, reveal */
$("#menu").onclick=()=>{const o=$("#nv").classList.toggle("open");$("#menu").setAttribute("aria-expanded",o)};
$$("#nv a").forEach(a=>a.addEventListener("click",()=>$("#nv").classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.15});
$$(".rv,footer").forEach(el=>io.observe(el));
const links=[...$$("#nv a")],so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main,section[id]").forEach(s=>so.observe(s));
