var g=["Mladým: víte, že dokážete rozhodnout volby?","Hnutí ano prostě chce žít v minulosti bez perspektivy.","Boj s korupcí, ne udávání lidí.","Investice do sportu a kultury jsou zárukou zdravé společnosti.","Potřebujeme obnovit rovnováhu přírody!","Byty je třeba stavět, ne danit.","Nejvyšší čas zastavit zadlužování naší země!","udělejme z česka sebevědomého spojence","Místo byrokratického pekla skutečná digitalizace","Staňme se digitálním tygrem!","Veřejné finance průhledně a čistě","Dítě potřebuje náruč jedné pečující osoby!","Politik má sloužit lidem a nutit stát, aby fungoval stejně","Podpořte finančně piráty a starosty","pojďme postavit ekonomiku na nohy","2 % z rozpočtu pro armádu vybojujeme!","kultura si zaslouží 1 % z rozpočtu","na šikaně živnostníků se podílet nebudeme","skutečně digitální stát, na co máme internet?","pojďme zreformovat školství. od základů.","finance řízené podle plánu","vraťme lesům jejich zdraví","1000 korun pro každého seniora z dotací Agrofertu. Ať si pan Babiš platí předvolební dárečky ze svého.","Máme už dost nekonečných korupčních kauz. Po volbách s nimi zatočíme.","Místo jednolitých polí pestrá krajina.","je čas vyrazit pomoci na jižní moravu!"],v=[{url:"https://picsum.photos/800",weight:5},{url:"https://source.unsplash.com/800x800",weight:10},{url:"https://source.unsplash.com/800x800/?communism",weight:3},{url:"https://source.unsplash.com/800x800/?cat",weight:1},{url:"https://source.unsplash.com/800x800/?puppy",weight:1},{url:"https://source.unsplash.com/800x800/?chicken",weight:1},{url:"https://source.unsplash.com/800x800/?angry",weight:3}];var z=(t,s)=>{let a=[];for(;t.length>s;){let e=t.substring(0,s).lastIndexOf(" ");e=e<=0?s:e,a.push(t.substring(0,e));let o=t.indexOf(" ",e)+1;(o<e||o>e+s)&&(o=e),t=t.substring(o)}return a.push(t),a},k=t=>t[Math.floor(Math.random()*t.length)],y=document.getElementById("picture"),n=y.getContext("2d"),b=new FontFace("Bebas Neue","url(public/BebasNeue-Bold.ttf)"),j=async()=>{await b.load(),document.fonts.add(b)},w=v.flatMap(({url:t,weight:s})=>Array(s).fill(t)),r=async t=>{let s=()=>{let o=new Image;o.src="public/logo.png",o.addEventListener("load",()=>{n.drawImage(o,525,20);let i=document.getElementById("save");i.setAttribute("download","PirStanKampan.png"),setTimeout(()=>{i.setAttribute("href",y.toDataURL("image/png").replace("image/png","image/octet-stream"))},500)})},a=await fetch(k(w)),e=new Image;e.crossOrigin="anonymous",e.src=a.url,e.addEventListener("load",()=>{n.drawImage(e,0,0),s();let o=t!=null?t:k(g),i=z(o,20).reverse(),c=i.length<5?60:40;n.font=`${c}px 'Bebas Neue'`,i.forEach((p,d)=>{let m=30,h=685,l=15,u=l+c;n.fillStyle="#f9dc4d",n.fillRect(m,h-d*u,n.measureText(p).width+2*l,u),n.textBaseline="top",n.fillStyle="black",n.fillText(p,m+l,h+l-d*u)})})},B=document.getElementById("randomize");B.onclick=()=>r();var f=document.getElementById("customText"),I=document.getElementById("submitCustomText");I.onclick=()=>{f.value&&r(f.value)};j();r();
//# sourceMappingURL=index.js.map