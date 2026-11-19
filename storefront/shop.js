const products = [
  { slug: 'fridge-magnets', family: 'Fridge magnets', name: 'The Little Magnet Set', img: 'magnet', price: 349, info: 'A little colour for the fridge door. Keep the studio artwork or add a favourite photo.' },
  { slug: 'photo-frame', family: 'Photo frames', name: 'The Colour Frame', img: 'frame', price: 899, info: 'A frame for a favourite corner. Pick a finish and keep the studio print, or bring a picture of your own.' },
  { slug: 'gifting-hamper', family: 'Gifting hampers', name: 'The Keepsake Hamper', img: 'hamper', price: 1499, info: 'A considered little assortment, packed together. Add a personal message to the card inside.' }
];
const money = n => '₹' + n.toLocaleString('en-IN');
const url = p => '/products/' + p.slug + '/';
const pic = p => '/assets/' + p.img + '.webp';
const main = document.querySelector('main');
const dialog = document.querySelector('dialog');
const mark = '<i class="flower" aria-hidden="true">✳</i>';
const arrow = '<span aria-hidden="true">↗</span>';
const product = products.find(p => location.pathname.replace(/\/$/,'') === url(p).slice(0,-1));
const colors = ['Oak','Clay','Marigold','Cream','Forest'];
const card = p => `<a class="tile" href="${url(p)}"><div class="photo"><img src="${pic(p)}" alt="${p.name}" loading="lazy"><span class="round">${arrow}</span></div><div class="tileInfo"><h3>${p.family}</h3><span>From ${money(p.price)}</span></div></a>`;
function home() {
 main.innerHTML = `<section class="hero"><div class="heroArt"><img fetchpriority="high" src="/assets/hero.webp" alt="Studio still life of the Aura gift collection"></div><div class="heroCopy"><div class="eyebrow"><b class="rule"></b> THE GIFTING STUDIO</div><h1>Small gifts.<br>Big feelings<span>.</span></h1><p>Fridge-door favourites, frames to keep close, and hampers made just for them.</p><a class="primary" href="#collection">Explore the gifts <span>↗</span></a></div><div class="caption">FIG. 01 &nbsp; / &nbsp; THE STUDIO COLLECTION</div></section>
 <section id="collection"><div class="sectionHead"><div><div class="eyebrow">${mark} THE COLLECTION</div><h2>Pick your gift.</h2></div><p>Choose the studio design<br>or make it personal.</p></div><div class="grid">${products.map(card).join('')}</div></section>
 <section id="studio"><div class="eyebrow">${mark} THE STUDIO</div><h2>Yours, down to the detail.</h2><p>Each gift starts with a studio design. Choose it as shown, or use your own photo or words to make it theirs.</p><a href="${url(products[1])}">Try the Colour Frame ${arrow}</a></section>`;
}
let bag = [];
try { const saved = JSON.parse(sessionStorage.getItem('aura-bag-v1')); if (Array.isArray(saved)) bag = saved.filter(l => products.some(p => p.slug === l.slug) && Number.isFinite(l.total)); } catch {}
function save() { try { sessionStorage.setItem('aura-bag-v1',JSON.stringify(bag)); } catch {} }
function drawBag() {
 document.querySelector('#count').textContent = bag.length;
 const lines = document.querySelector('#lines'); lines.replaceChildren();
 bag.forEach((l,i) => {
  const p = products.find(p => p.slug === l.slug);
  const line = document.createElement('article'); line.className = 'bagLine';
  line.innerHTML = `<img src="${pic(p)}" alt=""><div><strong></strong><p></p><b></b></div><button aria-label="Remove item">×</button>`;
  line.querySelector('strong').textContent = p.name;
  line.querySelector('p').textContent = [l.mode,l.color,l.detail].filter(Boolean).join(' · ');
  line.querySelector('b').textContent = money(l.total);
  line.querySelector('button').onclick = () => {bag.splice(i,1); save(); drawBag();};
  lines.append(line);
 });
 const summary = document.createElement('p'); summary.textContent = bag.length ? 'Subtotal  ' + money(bag.reduce((a,l)=>a+l.total,0)) : 'Your bag is empty.';
 lines.append(summary);
}
function showBag(){drawBag(); dialog.showModal();}
document.querySelector('.bagButton').onclick = showBag;
document.querySelector('#close').onclick = () => dialog.close();
dialog.onclick = e => {if(e.target===dialog && e.clientX < dialog.getBoundingClientRect().left)dialog.close();};
function detail(p) {
 const frame = p.img === 'frame', hamper = p.img === 'hamper';
 main.innerHTML = `<div class="crumb"><a href="/#collection">Shop gifts</a> / ${p.family}</div><section class="pdp"><figure><img id="packshot" src="${pic(p)}" alt="${p.name} studio design"><figcaption>STUDIO EDITION &nbsp; / &nbsp; ${p.family.toUpperCase()}</figcaption></figure><form><div class="eyebrow">${mark} ${p.family.toUpperCase()}</div><h1>${p.name}</h1><p>${p.info}</p><strong id="price"></strong><div class="fine">Illustrative studio price</div>${frame ? '<fieldset><legend>Frame finish · <span id="finish">Oak</span></legend><div class="swatches">'+colors.map((c,i)=>`<label title="${c}${i===4?' · unavailable':''}"><input type="radio" name="color" value="${c}" ${i===0?'checked':''} ${i===4?'disabled':''}><span style="--sw:${['#ba8a58','#c17355','#e7b437','#e7deca','#274e39'][i]}"></span><small>${c}</small></label>`).join('')+'</div></fieldset>':''}
 <fieldset><legend>Choose your design</legend><div class="modes"><label><input type="radio" name="mode" value="As shown" checked>As shown</label><label><input type="radio" name="mode" value="Personalize">Personalize <small>+₹100</small></label></div></fieldset>
 <div id="custom" hidden>${hamper ? '<label>Your gift message<textarea maxlength="160" rows="2" placeholder="Something just for them…"></textarea></label>' : '<label>Your photo<input type="file" accept="image/jpeg,image/png,image/webp"></label><img id="preview" hidden alt="Your selected photo"><small>JPG, PNG or WebP · up to 5 MB. Photo stays on this device.</small>'}</div>
 <button class="primary add">Add to bag <span>↗</span></button><details ${hamper?'open':''}><summary>What’s included</summary><p id="includes"></p></details><details><summary>Personalization details</summary><p>${hamper?'Your message is printed on the included card.':'Your photo replaces the studio artwork. In this preview you can check your image locally.'}</p></details></form></section><section class="related"><div class="eyebrow">FROM THE STUDIO</div><h2>More to give.</h2><div class="grid">${products.filter(x=>x!==p).map(card).join('')}</div></section>`;
 document.querySelector('#includes').textContent = {magnet:'Two illustrated fridge magnets with the studio artwork or your selected image.',frame:'One frame in the selected finish with a studio print or your own photo.',hamper:'One Colour Frame, two illustrated fridge magnets and one message card, packed in a ribboned gift box.'}[p.img];
 const form=main.querySelector('form'), custom=form.querySelector('#custom'), field=custom.querySelector('input,textarea');
 let objectURL = '';
 function update(){
  const personal=form.elements.mode.value==='Personalize';
  custom.hidden=!personal; field.disabled=!personal; field.required=personal;
  document.querySelector('#price').textContent=money(p.price+(personal?100:0));
  if(frame){let c=form.elements.color.value; document.querySelector('#finish').textContent=c; document.querySelector('#packshot').src=c==='Oak'?pic(p):'/assets/frame-'+c.toLowerCase()+'.webp';}
 }
 if(!hamper)field.onchange=()=>{
  const f=field.files[0], preview=document.querySelector('#preview'); if(objectURL)URL.revokeObjectURL(objectURL);
  preview.hidden=true;field.setCustomValidity('');
  if(!f)return;
  if(!['image/png','image/webp','image/jpeg'].includes(f.type)||f.size>5*1024*1024){field.setCustomValidity('Choose a JPG, PNG or WebP under 5 MB.');field.reportValidity();return;}
  preview.src=objectURL=URL.createObjectURL(f); preview.hidden=false;
 };
 form.addEventListener('change',update); update();
 form.onsubmit=e=>{e.preventDefault();const mode=form.elements.mode.value, personal=mode==='Personalize';if(personal && hamper && !field.value.trim()){field.setCustomValidity('Enter your message.');field.reportValidity();field.oninput=()=>field.setCustomValidity('');return;}
 bag.push({slug:p.slug,mode,color:frame?form.elements.color.value:'',detail:personal?(hamper?field.value.trim():field.files[0].name):'',total:p.price+(personal?100:0)});save();showBag();};
}
product ? detail(product) : home(); drawBag();
if(window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.from('.heroCopy > *, .pdp figure, .pdp h1',{y:14,opacity:0,duration:.55,stagger:.06,ease:'power2.out'});
