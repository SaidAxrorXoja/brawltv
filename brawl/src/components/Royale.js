import '../components/brawl.css'
import React from 'react';
import tara from './img/tara.jpg';
import pin from './img/pins.png';
import sprey from './img/sprey.png';
import grom from './img/skins-removebg-preview.png'
import hd from './img/hayday-removebg-preview.png'
import clh from "./img/royale.png";
import bs from './img/image-removebg-preview.png'
import bb from './img/bommremovebg-preview.png'
import clrl from './img/clashroyale.png'
import clash from './img/clash-removebg-preview.png'

function Royale() {
  return (
   <>
   

   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid bg-dark">
<a className="navbar-brand" href="#"><img className='bsd' src={bs} alt="" /></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="main_nav">
<ul className="navbar-nav">
  <li className="nav-item active" id='tr'> <a className="nav-link" href="app">Home </a> </li>
  <li className="nav-item"><a className="nav-link" href="#"> Games </a></li>
  <li className="nav-item" id='li3'><a className="nav-link" href="https://supercell.com/en/" target={'_blank'}> My favorite site</a></li>
  <li className="nav-item"><a className="nav-link" href="#"> Discord </a></li>
  <li className="nav-item dropdown" id="myDropdown">
    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Game menu  </a>
    <ul className="dropdown-menu">
      <li> <a className="dropdown-item" href="brawl"><img className='imm' src={bs} alt="" /> Brawl Stars </a></li>
      <li><a className="dropdown-item" href="boom"><img className='imm' src={clash} alt="" /> Clash of Clans </a></li>
      <li><a className="dropdown-item" href="royale"><img className='imm' src={clrl} alt="" /> Clash Royale </a></li>
    </ul>
  </li>
</ul>
</div>
<div className="container-fluid">
  <form className="d-flex formm">
    <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success" type="submit">Search</button>
    <a href="sign" class="btn btn-outline-success  w-25 mx-3" role="button" aria-pressed="true">Sign In</a>
  </form>
  
</div>
</div>
</nav>

<div className="divbody p-3">
<div className='header'>
<div className="div1"><h3 >Clash Royale - bu minoraga shoshilish video oʻyini boʻlib, oʻyinchilarni ikki yoki toʻrtta oʻyinchi 1v1 yoki 2v2 ishtirokidagi oʻyinlarga qoʻyadi, uning maqsadi eng qarama-qarshi minoralarni yoʻq qilish, “Qirol minorasi”ni yoʻq qilish bir zumda gʻalaba qozonishdir. Uch daqiqadan so'ng, agar ikkala o'yinchi/jamoa ham teng miqdordagi tojga ega bo'lsa yoki umuman bo'lmasa, o'yin 2 daqiqalik qo'shimcha vaqt oralig'ida davom etadi va raqib minorasini buzgan o'yinchi bir zumda g'alaba qozonadi. Agar qo'shimcha ish vaqtida hech qanday minora vayron bo'lmasa, barcha minoralar tezda sog'lig'ini yo'qotadigan va eng kam sog'lig'i bo'lgan minora vayron bo'ladigan taybreyker mavjud. Ikki minoraning sog'lig'i bir xil bo'lsa, durang bo'ladi.

Clash Royale-da o'yinchilar sovrinlar soni bo'yicha tartiblanadi. O'yinchilar kartalarni sovg'a qilish va yangilash orqali Tajriba balllarini to'plash orqali darajaga ko'tariladi. King Tower darajalari 14-darajaga, o'yinchilar darajasi esa 50-darajaga yetishi mumkin; bu omillar raqobatbardosh o'yinlarni o'tkazishga yordam beradi.

Kuboklar ko'p o'yinchi janglari orqali yutiladi yoki yo'qoladi. O'yinchi jangda raqibga qaraganda ko'proq minoralarni yo'q qilish har bir vayron qilingan minora "toj" sifatida tasvirlangan yoki raqibning Qirol minorasini yo'q qilish orqali g'alaba qozonadi, natijada avtomatik ravishda "uch toj" g'alaba qozonadi agar Qirol minorasi vayron bo'lmasa. bir vaqtning o'zida ikkala o'yinchi tomonidan, natijada kamdan-kam durang.

Hammasi boʻlib yigirma bitta oʻyin maydonchasi mavjud mashgʻulot lageri oʻquv maydonidan tashqari: Goblin stadioni, Bone Pit, Barbar Bowl, P.E.K.K.A oʻyingohi, Spell Valley, Quruvchilar ustaxonasi, Royal Arena, Frozen Peak, Jungle Arena, Hog Mountain, Elektr vodiysi, Dahshatli shaharcha, Raskalning boshpanasi, Serenity cho'qqisi, konchilar koni, jallodlar oshxonasi, Royal Crypt, Silent Sanctuary, Dragon Spa va Legendary Arena. Har bir arena ma'lum bir kubok oralig'iga mos keladi.

Asl Legendary Arena Serenity Peakdan keyingi yakuniy arenani ifodalagan va u 2017-yilning mart oyida oʻyinga qoʻshilgan “Ligalar”dan iborat edi. Liga tizimida oʻyinchilar Challenger I dan Ultimategacha boʻlgan 5000 dan ortiq kuboklardan iborat toʻqqiz xil ligada oʻynashadi. Chempion. Har bir mavsum oxirida o'yinchi 5000 dan ortiq kuboklarni qo'lga kiritgan kuboklarining yarmiga qaytariladi. 2022-yil oktabr oyidagi yangilanishda ushbu qayta oʻrnatish tizimi koʻproq arenalarga ega boʻlgan uzunroq kubok yoʻli hamda Legendary Arenaga oʻxshash modelga mos keladigan alohida raqobatbardosh oʻyin rejimi foydasiga bekor qilindi.

Kartalar
O'ynaladigan qo'shinlar, binolar va afsunlar kartalar sifatida ifodalanadi. Ko'pgina kartalar to'g'ridan-to'g'ri Supercellning oldingi Clash of Clans o'yinidagi gigantlar va to'plar kabi qo'shinlar va binolarga asoslangan va o'yin xuddi shunday badiiy uslubdan foydalanadi. Har bir jang oldidan mashg'ulot lageridagi birinchi jang bundan mustasno o'yinchilar sakkizta kartadan iborat paluba tuzadilar, ular hujum qilish va raqibning kartalariga qarshi himoya qilish uchun foydalanadilar. Har bir o'yin boshida ikkala o'yinchi ham sakkiztadan tasodifiy tanlangan to'rtta kartadan boshlanadi, Mirror va Elixir Collector bundan mustasno.

Har bir kartani o'ynash uchun ma'lum miqdorda eliksir to'lanadi. O'yinchilar jangni beshta eliksir ball bilan boshlaydi ikki martalik va uch martalik eliksir rejimlarida nol va bitta eliksir nuqtasi har 2,8 soniyada to'ldiriladi yoki Double eliksir rejimida 1,4 soniya, o'yinning oxirgi 60 soniyasi va qo'shimcha vaqtning birinchi daqiqasi; va taxminan har 0,9 soniyada Triple Eliksir rejimida va qo'shimcha ishning oxirgi daqiqasida maksimal o'n eliksir ballgacha. Karta o'ynalgandan so'ng, o'yinchining sakkizta kartasidan avtomatik ravishda yangi karta chiqariladi.

Clash Royale birinchi marta 42 ta kartadan iborat bo'lib, uchta noyoblikning har biri uchun 14 ta kartadan iborat: Umumiy, Nodir va Epic. 2016 yil fevral oyidagi yangilanish yangi noyoblik darajasida ikkita yangi kartani qo'shdi: Afsonaviy. 2021-yil oktabr oyida o‘yinga yangi Chempion kartasi kamyob qo‘shildi, unga uchta yangi karta qo‘shildi. Bu kartalar boshqa kartalardan farq qiladi, chunki oʻyinchi oʻz kemasida faqat bitta chempionga ega boʻlishi mumkin va har bir chempion qoʻshimcha eliksir sarflash orqali faollashtirilishi mumkin boʻlgan maxsus qobiliyatga ega masalan, “Oltin Ritsarning Dash qobiliyati” qoʻshimcha 1 eliksir turadi. Keyingi yangilanishlar yuqorida aytib o'tilgan barcha noyob darajalarga kartalarni qo'shdi. 2022-yil oktabr holatiga ko‘ra, o‘yinda jami 109 ta karta mavjud.

Endi barcha kartalar 14-darajadan boshlanadi. Umumiy kartalar 1-darajadan boshlanadi, Nodir kartalar 3-darajadan boshlanadi, Epik kartalar 6-darajadan boshlanadi, afsonaviy kartalar 9-darajadan boshlanadi va Champion kartalari 11-darajadan boshlanadi. Barcha kartalar va toj minorasi darajalari shaxsiy turnirlar bundan mustasno, barcha turnirlar uchun 11-darajadir, bu erda siz karta va toj minorasi darajalariga chek qo'yishingiz mumkin.

2018 yil dekabr oyidagi yangilanish Max Level kartalari uchun maxsus oltin kosmetikani ochish uchun Yulduzli ballarni qo'shdi. 2021-yil oktabr yangilanishida bu 7-darajadan foydalanish mumkin bo‘lib o‘zgartirildi. O‘yinchilar tajriba orttirganlarida, shuningdek, o‘z kartalariga yangilangan vizual terini, odatda oltin rangni berish uchun ishlatilishi mumkin bo‘lgan Yulduzli ballarni olishadi. Har bir karta uchun uchtagacha yulduz darajasi mavjud, ular karta 7-darajaga tenglashtirilganda ochiladi.<div className="row">
  <div className="col-sm-6 bordered"><img src={clh} alt="" className='wp' /></div>
  <div className="col-sm-6 bordered"><img src={ bb} alt="" className='wp' /></div>
</div>
 </h3></div>

  </div>
</div>
   </>
  );
}
export default Royale;