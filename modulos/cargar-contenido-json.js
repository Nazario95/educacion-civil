import e from"../db-Json/tabla-libros.json"assert{type:"json"};import t from"../db-Json/libros-mas-leidos.json"assert{type:"json"};window.addEventListener("DOMContentLoaded",(function(){for(var n,o,d,a,l,r,c,m=document.querySelector("tbody.elementos-fila"),i=document.querySelector("ul.menu-encabezado"),p=0;p<e.length;p++){n=e[p].id,o=e[p].nombreLibro,d=e[p].fecha,a=e[p].enlace;var s=document.createElement("LI"),h=document.createElement("A");h.className="dropdown-item",h.href=a,h.textContent=o,s.appendChild(h),i.appendChild(s)}for(p=0;p<e.length;p++){n=e[p].id,o=e[p].nombreLibro,d=e[p].fecha,a=e[p].enlace;var u=document.createElement("TR"),C=document.createElement("TH"),b=document.createElement("A"),f=document.createElement("TD"),E=document.createElement("A"),v=document.createElement("TD");C.scope="row",b.classList="nav-link",b.href="#",b.textContent=n,E.classList="nav-link",E.href=a,E.textContent=o,v.textContent=d,C.appendChild(b),f.appendChild(E),u.appendChild(C),u.appendChild(f),u.appendChild(v),m.appendChild(u)}for(p=0;p<t.length;p++){l=t[p].id,r=t[p].nombreLibro,c=t[p].enlace;var L=document.createElement("TR"),y=document.createElement("TH"),T=document.createElement("TD"),x=document.createElement("A");y.scope="row",y.textContent=l,x.className="nav-link",x.href=c,x.textContent=r,T.appendChild(x),L.appendChild(y),L.appendChild(T),document.querySelector("tbody.elementos-tabla").appendChild(L)}}));
