(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const F={initial:`Oh my gosh, this whole trip is terrible. I can't believe she's gone. 
 Poor Liam - he's just lost his fiancee 
just as she was about to be his wife.
 My heart breaks for him. We've been 
 through so much together, 
 but I never thought we'd have to go 
 through this.`,alibi:`I was sitting in the bar with Liam at 
 3pm, looking out at the back deck. 
 We were having a good time, looking 
 through old photos and listening 
 to the music that was playing. 
 There was a song playing, 
 I don't remember what it was, but it 
 was what me and Liam used to 
 listen to when we were at University together.`,accusation:`If you were to ask me, I would say Tom. 
 He's always been obsessed with Tessa, 
 and I know he rubbed Liam up the wrong way. 
 He used to suspect that there was something going on 
 between them.`,summary:"Angela: A close friend of Liam. She was in the bar at 3pm with Liam, facing the back deck. She accuses Tom, due to his obsessions with Tessa.",result:"Nope, it wasn't Angela! Her and Liam really were at the bar together. They had been sleeping together for five years, however. Angela was waiting for Liam to leave Tessa, and reminiscing at the bar was her last attempt."},G={initial:`*You struggle to even make out what
George is saying through his slurs.
He slumps against the railings.*
I'll tell you what, if I'd got the
promotion to Captain, this wouldn't
be happening on my watch!`,alibi:`I was fixing some of the navigational
systems below deck - by myself, but
The Captain had asked me to take a
look at them. I'm something of a whiz
with machines.`,accusation:`I don't even know who these people
are, they've only been with us for
two days! It's always the partner in
cases like this. Although, I did see
the maid of honour going towards the
deck earlier today...`,summary:"George: Employee on the ship, passed over for a promotion to be Captain. Has been drinking heavily all afternoon. He was fixing a naviagional system below deck at 3pm. He accuses the maid of honour, as he saw her going towards the deck.",result:"Nope, it wasn't George! I mean he didn't even really have a motive, he was just salty about not becoming Captain. Wouldn't make sense for him to do it. Not to make you feel bad, but really you should. He has been putting faulty objects all over the ship as petty revenge, though."},Y={initial:`*Liam appears to be stumling around
the deck, drunk.* I can't even believe
what's happening right now. We were
about to get married. I had been talking
to Angela in the bar, I thought she
would be right back. At least I have a
good friend in Angela to help me
through this, I couldn't go through it
without her.`,alibi:`I was sitting in a window seat at the
bar, looking out towards the back of
the boat. Me and Angela were
reminiscing about the good old days,
listening to the music in the bar,
drinking cocktails...`,accusation:`Definitely Tom, he's always had a
thing for Tessa and never seemed to
like me. I don't even know why she
invited him to the wedding, I asked
her not to but it ended in an
arguemnt. As it always did.`,summary:"Liam: Fiancee. He and Angela were sat in the bar looking out at the back deck at 3pm. He accuses Tom, on account of his obvious feelings for her. ",result:"Nope, it wasn't Liam! He really was with Angela at the bar, but he had been cheating on Tessa with her for five years. He said he felt bad about breaking off the marriage, and had only proposed because Tessa was dropping hints. His only crime is not growing a pair."},V={initial:`How can this happen?! My sister! She
was supposed to be getting married
next week! What am I supposed to tell
our parents? All the guests? What is
going to happen about all the
deposits?!`,alibi:`I was in the toilet when it happened,
the one below deck. I heard some
clanging but it sounded like someone
was working on some machinery.`,accusation:`If I were to look at anyone I'd look
at Rachel. They've had a strained
relationship for years, and I was
surprised that she was her maid of
honour. Tessa owed her a LOT of money
for their failed hairdressing business
a few years ago.`,summary:"Olivia: Sister, but not maid of honour. She was in the toilet on the lower deck at 3pm. She suspects Rachel, on account that Tessa owed her money.",result:"Nope, it wasn't Olivia! She really was in the toilet at 3pm. Bit insensitive of her to be thinking of wedding deposits when her sister died, but she didn't kill her."},z={initial:`I haven't stopped crying since I found
out. I'm in bits. I can't believe she's
been killed right before her wedding.
We had our rough moments, and yes she
did owe me a lot of money after our
hairdressing business went under, but
I was still her maid of honour.`,alibi:`I had gone to speak to Tessa on the
deck, I was upset with her because she
has spent a lot of money on this
wedding and still hasn't paid me her
share of the failed hairdressing
business. It got a bit heated and I
stormed off, leaving her crying on the
deck. But this was at about 2:30,
not 3.`,accusation:`My money is on Olivia - Tessa was
the golden child and Olivia was
always in her shadow. She wasn't even
her maid of honour! You could see it
on her face for the whole trip, she
has been in a rotten mood.`,summary:"Rachel: Maid of Honour.  She had spoken to Tessa, or more argued with her about money, at about 2:30 on the deck. She accuses Olivia, on the grounds she was a jealous sister.",result:"Nope, it wasn't Rachel! Tessa did owe her a lot of money, but all she did was yell at her and make her cry. Bad, but not murder. She is actually in a worse situation now that her debtee is dead."},U={initial:`I don't even know what to think. I
would've done anything for her at the
salon. I DID do anything for her,
anything she asked me to. Now she's
gone. She deserved so much better than
that useless husband-to-be. She
deserved someone that would give her
the world.`,alibi:`I was in my room, watching TV. I
could hear some partying going on in
the bar, but I'm not really a social
person. I did have a couple of beers
to myself, though.`,accusation:`It has to be that fiance of hers.
There's no other explanation. He's
terrible through and through, and
it's so clear he's in love with
Angela. Tessa told me they used to
argue about it all the time, and she
had suspicions they were sleeping
together.`,summary:"Tom: Tessa's friend and coworker. He was in his room at 3pm, watching TV. Heavily accuses Liam, partly to do with his alleged feelings for Angela.",result:"Yes, it was Tom! He didn't have a solid alibi. He heard Tessa crying out of his window whilst watching TV. He went down to comfort her, thinking she wanted to call off the wedding. She yelled in his face, saying that they would never be together. Tom snapped, then instantly regretted his actions."},$={initial:`Tessa has not been dead for very long,
her wound on the back of her skull is
still bleeding. It's clear that she was
hit over the head with a heavy object.
It also appears she has broken her
leg, from the position that she is in.
Her clothes are drenched and red, any
sort of dust, rust or paint chippings
are not visible at all.`,alibi:`The last person to see Tessa was
Rachel at about 2:30. They had an
argument about money that Tessa had
owed her a lot of money. Rachel had
stormed off and Tessa was left crying
on the deck.`,accusation:`I mean obviously she knows, not that
we can ask her.`,summary:"Tessa was murdered at 3pm, seemingly by a hit to the head with something heavy. No sign of any rust or paint on her due to the amount of blood. She had last been seen at 2:30, having an argument with Rachel.",result:"No, she didn't kill herself. You're not clever."},K={initial:`You spot a large bucket filled with
sand. For a bucket on the deck of a
ship, it seems suspiciously clean... no
rust, no bird waste, nothing. Could it
have been cleaned recently?`,closer:`There is a label on the side of the
bucket, indicating it had only been
bought recently. Explains the
cleanliness.`,under:`As expected, there isn't much of a
mark on the deck underneath the
bucket. There is some sand leaking
out of the bottom of the bucket as
you pick it up, strange for a brand
new bucket...`,summary:"Bucket: Brand new, label still on it, no marks or dents. It is leaking sand out of the bottom.",result:"Nope, the bucket wasn't used! Someone, i.e. George, may have bought it because it was faulty though..."},J={initial:`The body is lying next to the deck
chair, and its fabric seat is splashed
with blood. The splahes are long and
stretch across the whole chair in a
diagonal fashion."`,closer:`Near the top of the blood splatters,
there is a large dent in the wooden
frame. The force that was used to
make this dent must've been big as it
has started to splinter.`,under:`You can see under the chair without
even having to lift it up: lots of
blood. Granted, the chair is very
close to Tessa's body so this isn't
surprising. However, you do spot
something strange - four darker spots
in the wood on the deck, as if they
haven't been bleached by sunlight.
Definitive proof that the chair has
been moved.`,summary:"Chair: Very close to the body, blood on the fabric and underneath. The wooden frame is dented and splintering, and it looks like the chair has been moved.",result:"Weirdly enough, it wasn't the chair! The reason it is broken is because Tessa fell on it after being hit. The murderer placed it upright again once he realised what he had done. Really, if you'd used fingerprints, you'd have them dead to rights straight away."},Q={initial:`There is a large, heavy pile of rope
by the edge of the deck. It is mostly
clean, but there are a few spots of
blood on the top. Maybe blood
splattered onto it? Or was the rope
the cause of the blood?`,closer:`The blood splatters seem to be
concentrated in one area. This area
shows some cleaner, less-exposed
sections of the rope. Has it been
moved recently? Or forced to move?`,under:`As you pick the rope up, it moves as
one. It is a very old rope, held
together by salt air and various
types of algae it has encountered in
the sea water. Clearly, it hasn't
been in the water for a good while,
and has sat here fusing together in
the sun.`,summary:"Rope: Giant, heavily pile which is stuck together due to long exposure to sea air and water. One part has been exposed, showing the unexposed inside sections. Some blood splashes.",result:"Nope, it wasn't the rope! The reason it had been moved was because the murderer had leant against it, feeling overwhelmed after the murder."},X={initial:`Similar to the other chair, this one
also has splatters of blood on its
fabric seat, however these seem more
to be in a vertical fashion instead
of horizontal. The fabric of the
chair is sligtly ripped on the left
hand side.`,closer:`The rip on the right-hand side has
frayed quite a bit, suggesting that
it ripped quite a while ago. Strange
for a luxury boat to keep a chair
like this, but not uncommon.`,under:`Strangely enough, there are no darker
marks underneath this chair, so the
space under it has bleached in the
sun at the same time as the rest of
the deck. Why would they put out a
broken chair so recently?`,summary:"Other Chair: Seems to be broken for a long time(fabric ripped from frame). No marks underneath, only just put on the deck.",result:"Nope, it wasn't this chair! It is strange it has only just been put out, maybe to make the crew look neglectful under neglectful management? Who would possibly want to sabotage the Captain?"},Z={initial:`The fire extinguisher is heavy and
looks brand new. You can't see any
blood on it, some scratches but no
dust at all. It does also have a
small dent near the bottom.`,closer:`There are actually a few specks of
blood on the extinguisher, but not
very noticeable due to its colour.
The paint is chipping inside the
dent, showing it has been pained
several times before.`,under:`Under the fire extinguisher, there
is a safety log sticker surrounded
by chipping paint. This shows all the
times that this extinguisher has been
checked to make sure it is fit for
use. The last time it was checked
was 18 months ago - the first time
it was checked was 1999. Is this safe?`,summary:"Fire Extinguisher: Looks new, but the sticker underneath indicates it is very old and possibly unsafe. No dust, but there is a small dent. Inside the dent, the paint is chipping.",result:"Yes, you're absolutely right! The lack of dust is due to the murderer wiping it down with their sleeve, but some of the blood had already dried and wasn't obvious in the moment. It's a very old fire extinguisher, which has actually been put out by George in an act of pettiness towards the Captain."},ee={initial:`The barrel is empty, and there is
blood splashes on its front. However,
there is significantly less blood on
the barrel than on other items.`,closer:`There are several small dents on the
metal around the top, as well as a
few specks of rust. To be expected
when it's on the top deck of a boat.`,under:`There is a darker circle under the
barrel, possibly protected from the
sun, but it seems darker than the
other circles. This looks like water
damage to the deck.`,summary:"Barrel: Empty, but looks like it was leaking water before. Several small dents and a few specks of rust at the top.",result:"There's literally no evidence that it's the barrel. How would someone be able to hit someone over the head with it. The only 'crime' the barrel has committed is being leaky."},te={initial:`A rusted bell lays on the floor, the
captain has told you that they use it
to inform the staff of rougher waters.
Assumingly so they can secure items
such as plates and alcohol bottles
so they don't smash.`,closer:`The bell still seems to work, despite
the copious amounts of rust. If someone
had used this to kill Tessa, they
would've alerted others.`,under:`There is absolutely nothing different
about the deck under the bell, indicating
it had only just been placed there.
However, on the deck, you spot several
flakes of rust.`,summary:"Bell: Rusty, but still works. Has only just been placed there on the deck, but has been shedding small rust flakes.",result:"Nope, not the bell! It would've made too much noise. Olivia heard some clanging from the toilet, but that was just George messing with the pipes in an act of sabotage towards the Captain."},l=({text:e,clues:t,speed:s=50,scrollAt:a=20})=>{const o=e.split(`
`);let n=0,r=0;const S=()=>{let E="",H=Math.max(0,n-a);for(;H<n;)E+=o[H++]+"<br />";t.innerHTML=E+o[n].substring(0,r),r++<o[n].length?setTimeout(S,s):(r=0,n++,n<o.length&&setTimeout(S,10))};S()},oe=document.querySelector(".background"),ae=document.querySelector(".board"),ne=document.querySelectorAll(".board__piece"),se=document.querySelectorAll(".board__piece--person"),ie=document.querySelectorAll(".board__piece--tool"),A=document.querySelector(".openingScreen"),C=document.querySelector(".openingScreen__btn"),b=document.querySelector(".cluesOverlay"),i=document.querySelector(".cluesOverlay__text"),w=document.querySelector(".cluesOverlay__btnbox"),u=document.querySelectorAll(".cluesOverlay__btnbox--btn"),N=document.querySelector(".cluesOverlay__close"),I=document.querySelector(".notebookOverlay"),B=document.querySelector(".header__notebook"),m=document.querySelector(".header__captain"),f=document.querySelector(".notebookOverlay__bulletPts"),D=document.querySelector(".notebookOverlay__addNote"),g=document.querySelector(".notebookOverlay__addNote--input"),y=document.querySelector(".notebookOverlay__close"),x=document.querySelector(".captainOverlay"),W=document.querySelector(".captainOverlay__close"),k=document.querySelector(".captainOverlay__initial"),re=document.querySelectorAll(".captainOverlay__initial--btn"),P=document.querySelector(".captainOverlay__info--close"),_=document.querySelector(".captainOverlay__final--close"),v=document.querySelector(".captainOverlay__info"),T=document.querySelector(".captainOverlay__final"),M=document.querySelector(".accusationForm__suspects"),R=document.querySelector(".accusationForm__weapons"),p=document.querySelector(".accusationForm"),h=document.querySelector(".captainOverlay__final--person-result"),d=document.querySelector(".captainOverlay__final--weapon-result"),O=document.querySelector(".captainOverlay__final--text"),c=document.querySelector(".captainOverlay__final--end-game"),L={bucket:K,chair:J,rope:Q,chair2:X,extinguisher:Z,barrel:ee,bell:te},q={angela:F,george:G,liam:Y,olivia:V,rachel:z,tom:U,tessa:$};if(!ae||!ne||!oe||!C||!A||!i||!N||!b||!w||!I||!B||!f||!D||!g||!y||!m||!x||!W||!k||!v||!P||!_||!T||!M||!R||!p||!h||!d||!O||!c)throw new Error("Something went wrong! ");const le=e=>{e.preventDefault(),A.style.display="none"},he=e=>{if(!i||!e.currentTarget)throw new Error("Something went wrong! ");b.style.display="flex";const t=e.currentTarget,s=t.id;w.id=t.id;const a=q[s];a&&(i.innerText="",l({text:a.initial,clues:i}),u[0].innerText="Where were you at 3pm?",u[1].innerText="Who do you think it was?")},de=e=>{if(!i||!e.currentTarget)throw new Error("Something went wrong! ");b.style.display="flex";const t=e.currentTarget,s=t.id;w.id=t.id;const a=L[s];a&&l({text:a.initial,clues:i}),u[0].innerText="Inspect closer",u[1].innerText="Look underneath"},ce=e=>{const t=e.currentTarget;if(!t.parentElement)throw new Error("whoops! something went wrong :/");const s=t.parentElement.id,a=q[s],o=L[s];if(t.id==="btn-1"&&(i.innerText="",l(a?{text:a.alibi,clues:i}:{text:o.closer,clues:i})),t.id==="btn-2"&&(i.innerText="",l(a?{text:a.accusation,clues:i}:{text:o.under,clues:i})),t.id==="post-to-notepad"){const n=a?a.summary:o.summary,r=document.createElement("li");r.innerHTML=`${n} <button class="deleteText">Delete</button>`,f.appendChild(r),g.value=""}},ue=e=>{e.preventDefault(),i.innerText="",w.id="",b.style.display="none"},pe=e=>{e.preventDefault(),I.style.display="flex"},me=e=>{e.preventDefault();const t=g.value;if(!t)return;const s=document.createElement("li");s.innerHTML=`${t} <button class="deleteText" >Delete</button>`,f.appendChild(s),g.value=""},ye=e=>{e.preventDefault(),I.style.display="none"},ge=e=>{e.preventDefault(),x.style.display="grid",k.style.display="grid"},be=e=>{e.preventDefault(),x.style.display="none",v.style.display="none",T.style.display="none",p.style.display="none"},we=e=>{if(e.preventDefault(),e.target){O.style.display="flex";const t=e.currentTarget;k.style.display="none",t.id==="moreInfo"?v.style.display="flex":(T.style.display="flex",p.style.display="flex")}},j=e=>{e.preventDefault(),v.style.display="none",T.style.display="none",k.style.display="grid",h.innerText="",d.innerText=""},fe=e=>{e.preventDefault(),p.style.display="none",O.style.display="none",d.style.display="flex",h.style.display="flex";const t=M.value,s=R.value,a=q[t],o=L[s];t==="tom"&&s==="extinguisher"?(h.innerHTML=a.result,d.innerText=o.result,_.style.display="none",c.style.display="flex"):(h.innerText=a.result,d.innerText=o.result)};se.forEach(e=>e.addEventListener("click",he));ie.forEach(e=>e.addEventListener("click",de));C.addEventListener("click",le);N.addEventListener("click",ue);u.forEach(e=>{e.addEventListener("click",ce)});B.addEventListener("click",pe);D.addEventListener("submit",me);y==null||y.addEventListener("click",ye);f.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("deleteText")){const s=t.closest("li");s&&s.remove()}});m==null||m.addEventListener("click",ge);W.addEventListener("click",be);re.forEach(e=>{e.addEventListener("click",we)});P.addEventListener("click",j);_.addEventListener("click",j);p.addEventListener("submit",fe);c==null||c.addEventListener("click",()=>{location.reload()});
