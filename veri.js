/* ══════════════════════════════════════════════════════════
   YDT ANLAM BÜTÜNLÜĞÜ LAB — veri.js (DOSYA 2/2)
   index.html'deki <script src="veri.js"> satırı bu dosyayı yükler.
   Türkçe karakterler doğrudan yazılmıştır; UTF-8 olarak kaydedin.
   Soru eklerken aynı alanları kullanın:
   id, cat, stem, clue, facts[5 cümle],
   opts[['(I)',geribildirim]×5], ans(0-4), ev, why, strat
   ══════════════════════════════════════════════════════════ */

window.CATS = {
  konu:  {no:'01', name:'Konu Sapması', en:'Off-Topic Sentences', color:'#C13F14'},
  akis:  {no:'02', name:'Akış ve Sıra', en:'Flow & Sequence', color:'#0E7568'},
  bag:   {no:'03', name:'Bağlaç ve Gönderim', en:'Cohesion & Reference', color:'#8F6400'},
  tekrar:{no:'04', name:'Tekrar ve Çelişki', en:'Redundancy & Contradiction', color:'#8E2D5A'},
  uslup: {no:'05', name:'Üslup ve Kayıt', en:'Register & Tone', color:'#221B14'},
  nuan:  {no:'06', name:'Detay, Kapsam ve Ölçü', en:'Detail, Scope & Degree', color:'#5B3E96'}
};

window.LESSONS = [
  {cat:'konu', title:'Konu Sapması: Paragraftan Çıkan Cümle', en:'Off-Topic Sentences',
   roots:[
     ['Konu cümlesi testi','Paragrafın tek cümlelik özünü yazın; her cümleye "bu savı ödüyor mu?" sorun. Ödemeyen cümle yabancıdır.'],
     ['Aynı kelime ≠ aynı konu','"Çin", "klavye", "çay" gibi örtüşen sözcükler akrabalık hissi verir; ölçüt kelime değil, ODAKTIR (2. ve 11. sorular).'],
     ['Komşu paragraf testi','Bozan cümle çoğu kez başka bir paragrafın açılışı olabilir: "bu cümle hangi paragrafın konu cümlesi olurdu?" diye sorun.'],
     ['Uzak tarih/konu damgası','İcat, savaş, mimari gibi paragrafın savıyla ilgisi olmayan küçük hikâyeler klasik sapma malzemesidir (1. soru: ampulün icadı).']
   ],
   steps:[
     'İlk ve son cümleyi okuyup paragrafın özünü tek cümlede yazın.',
     'Her cümleyi bu özle karşılaştırın: sav mı geliştiriyor, başka bir hikâye mi anlatıyor?',
     'Kelime örtüşmesine kanmayın: aynı isim geçmek, aynı odağı taşımak demek değildir.',
     'Aday cümleyi çıkarıp kalan dördü okuyun: akış pürüzsüzse karar kesindir.'
   ],
   trap:{t:'Akraba Kelime Tuzağı', d:'2. soruda Çin Seddi cümlesi "Çin" kelimesini taşır, 11. soruda QWERTY cümlesi "klavye/typing" dünyasına aittir — ikisi de paragrafın savına hizmet etmediği için düşer. ÖSYM bu türde en çok kelime örtüşmesiyle yaklaştırır: silahınız "kelime benzerliği" değil "işlev benzerliği" olsun.'}},
  {cat:'akis', title:'Akış ve Sıra: Kronoloji Zinciri', en:'Flow & Sequence',
   roots:[
     ['Tarih damgaları','Biyografide 1867 → 1891 → 1903 → 1911 gibi tarihler zincir kurar; zincire giren yanlış tarih akışı kırar (5. soru: 1934).'],
     ['Süreç anlatımı','first / then / once / finally sırası bir tariftir; "finally" ile başlayan cümle ortadaysa süreç bozulur (12. soru).'],
     ['Geri sarma','Anlatı ileri giderken bir cümle çok daha erken bir ana dönerse kronoloji geri sarar (19. soru: 1798’e dönüş).'],
     ['Çıkarıp oku','Akış şüphesinde cümleyi çıkarın: kalan dört cümle zaman/süreç sırasına oturuyorsa karar doğrudur.']
   ],
   steps:[
     'Pasajdaki tüm tarih, sıra ve adım işaretlerini (first, then, finally, sayılar) daire içine alın.',
     'İşaretleri kronolojik/ mantıksal sıraya dizin; zincire uymayan konumu tespit edin.',
     'Bilginin DOĞRU olmasına kanmayın: 19. sorudaki sefer tarihi doğrudur, yanlış olan yeri.',
     'Karar sonrası kalan pasajı baştan okuyun: süreç tek yönde akmalı.'
   ],
   trap:{t:'Doğru Bilgi, Yanlış Yer', d:'Akış kırıklarının en zeki türü budur: cümle tek başına doğru, hatta konuyla ilgilidir — ama anlatının akış yönüne ters düşer. 5. soruda Curie’nin ölümü ancak KAPANIŞTA durabilirdi; 19. soruda sefer bilgisi GİRİŞTE olabilirdi. Ölçüt "doğru mu?" değil "burada mı?" sorusudur.'}},
  {cat:'bag', title:'Bağlaç ve Gönderim Zinciri', en:'Cohesion & Reference',
   roots:[
     ['Bağlaç maskesi','"by contrast", "therefore", "in other words" geçişi MEŞRU gösterir ama konu değişimini gizlemez (4. ve 13. sorular).'],
     ['Havada zamir','this / they / its öncülü yoksa gönderim zinciri kopar: "Its journey" öncesinde tekil isim arayın (17. soru).'],
     ['Yanlış adrese bağlaç','"This explains why…" öbeği paragrafın savıyla ÇELİŞEN bir sonuca bağlanırsa bağlaç değil, yön bozulur (10. soru).'],
     ['Adres denetimi','Her bağlaç ve zamirin yanına okla adresini yazın; ok boşta kalan cümle güçlü bozan adayıdır.']
   ],
   steps:[
     'this / that / they / it / such zamirlerinin öncüllerini okla işaretleyin.',
     'however / therefore / by contrast bağlaçlarının iki yakasının aynı konuda mı konuştuğunu kontrol edin.',
     'Bağlaçlı cümlede konu değişiyorsa "maske" şüphesiyle ikinci kez okuyun.',
     'Gönderimi havada kalan cümleyi çıkar; kalan pasaj zinciri tamamalı.'
   ],
   trap:{t:'Bağlaç Güvencesi Sanısı', d:'Adaylar bağlaçlı cümleyi "bağlı, dolayısıyla sağlam" sayar — tam tersine bu soru türünün en sevdiği maske budur. 4. soruda "Tea, by contrast…" geçiş mükemmel, konu kahveden çaya kayar; 13. soruda "Therefore" karga deneyinden papağan fotoğrafçılığına uçar. Kural: bağlaç cümlenin İÇ işlevidir; konu sadakati DIŞ işlevidir — ikisi de aynı anda tutmalı.'}},
  {cat:'tekrar', title:'Tekrar ve Çelişki', en:'Redundancy & Contradiction',
   roots:[
     ['"In other words" tuzağı','Yeniden ifade YENİ bilgi taşımalıdır; önceki cümleyi süsleyerek tekrar eden cümle bozandır (7. soru).'],
     ['Özet ≠ tekrar','Sonuç cümlesi savı TOPLAR; yalın tekrar hiçbir şey eklemez — ayrım bu "ekleme"dedir.'],
     ['Doğrudan çelişki','Bir cümle paragrafın tüm savının tersini iddia ediyorsa çelişki zinciri kurulur (16. soru: köleler).'],
     ['Gönderimli çelişki','"This explains why…" kalıbı savın tersini "açıklarsa" hem gönderim hem anlam bozulur (10. soru).']
   ],
   steps:[
     'İki cümlede aynı savın farklı kelimelerle mi, süslenerek mi tekrarlandığını sorun.',
     'Kural: paragrafta her cümle ya YENİ bilgi ya YENİ açı getirmelidir.',
     'Aday cümleyi çıkarın: hiçbir şey kaybolmıyorsa (anlam da, bilgi de) cümle gereksizdi.',
     'Çelişkide taraf sayın: dört cümle aynı yöne, bir cümle ters yöne konuşuyorsa azınlık bozandır.'
   ],
   trap:{t:'Süslü Tekrar Tuzağı', d:'7. soruda "In other words, taking a little exercise now and then…" cümlesi I. cümlenin savını neredeyse aynı genellik düzeyinde tekrarlar — ama bağlaç onu "açıklama" gibi gösterir. Ayrım ölçüsü: açıklama, anlaşılmayanı ANLAŞILIR yapar (basitleştirir/örneklendirir); süslü tekrar hiçbir şeyi değiştirmez. Cümleyi çıkarıp hiçbir şey kaybolmadıysa cevap ondu.'}},
  {cat:'uslup', title:'Üslup ve Kayıt Uyumu', en:'Register & Tone',
   roots:[
     ['Birinci tekil şahıs','Bilgilendirici/resmî paragrafta "nobody I know", "my uncle" gibi kişisel ses üslubu kırar (9. ve 3. lab cümleleri).'],
     ['Ünlem ve duygusal yorum','"What a terrifying experience…!" — nesnel anlatıya okuyucuya seslenen değerlendirme girer (15. soru).'],
     ['Sokak ağzı kalıpları','"And quite honestly", "to be honest", "by the way" gibi söz dizileri resmî kayıtla çelişir (9. ve 18. sorular).'],
     ['Bilgi doğru olsa bile','Üslup kuralı içeriği affetmez: doğru bir gözlem, yanlış kayıtta taşınca bozan olur.']
   ],
   steps:[
     'Paragrafın kayıt kartını yazın: resmî/bilgilendirici mi, anlatıcı/samimi mi?',
     'Zamirleri sayın: "I / you / we" geçiyorsa resmî paragrafta şüphe artar.',
     'Ünlem, "honestly / by the way" gibi işaret sözcüklerini tarayın.',
     'Üslup bozan cümlede genellikle içerik de paragrafın savına hizmet etmez — çifte teyit arayın.'
   ],
   trap:{t:'Doğru Bilgi, Yanlış Ses', d:'9. sorudaki musluk cümlesi su tasarrufu konusuyla İLGİLİDİR — içerik yakın; bozan şey ses: "And quite honestly, nobody I know…" üç cümlelik nesnel veri anlatısını sokak sohbetine çevirir. Üslup sorularında aday "konu uyumlu" görünce şıkkı eler; oysa bu türün imzası tam da budur: içerik yakın, kayıt uzak.'}},
  {cat:'nuan', title:'Detay, Kapsam ve Ölçü', en:'Detail, Scope & Degree',
   roots:[
     ['Aşırı spesifik detay','Paragrafın savını ne geliştiren ne çürüten kişisel/küçük ayrıntılar: "dişçi olan genç" (14. soru).'],
     ['Mutlak kapsam','all / without exception / never / two or three years içinde… gibi mutlaklar kanıtsız kehanete döner (8. ve 20. sorular).'],
     ['Ölçü uyumsuzluğu','Paragraf ölçülü konuşurken ("in several countries", "some") bir cümlenin uç iddiaya sıçraması ölçü kırılmasıdır.'],
     ['Hedging sözlüğü','seem / appear / at least in part / roughly ölçülü paragrafın doğal dilidir; uçlar buna ters düşer.']
   ],
   steps:[
     'Kapsam sözcüklerini (all, some, many, without exception) daire içine alın ve uçları işaretleyin.',
     'Uç iddianın paragraftaki KANITINI arayın; kanıt yoksa bozan adaydır.',
     'Kişisel ayrıntıları "savın gelişimine katkısı" ölçüsüyle tartın: katkı sıfırsa gereksizdir.',
     'Paragrafın genel ölçüsünü yazın (ölçülü/temkinli mi, iddialı mı?) ve şıkları buna göre süzün.'
   ],
   trap:{t:'İlginç Detay Tuzağı', d:'14. sorudaki "dişçi olan genç" cümlesi Lascaux’la İLGİLİ ve TARİHSEL olarak doğrudur — aday "ilgili ve doğru" görünce eler. Oysa paragrafın savı (resimler, boya, koruma) bu ayrıntıdan hiçbir şey öğrenmez. Bu türde ölçüt "doğru mu / ilgili mi" değil, "savın gelişimine bir şey KATIYOR mu" sorusudur; katkı sıfırsa cümle gereksiz, dolayısıyla bozandır.'}}
];

window.LABTAGS = {
  top:  {name:'Konu Cümlesi', color:'#C13F14'},
  des:  {name:'Geliştirme', color:'#0E7568'},
  ornek:{name:'Örnek / Kanıt', color:'#8F6400'},
  kar:  {name:'Dönüş / Karşıtlık', color:'#8E2D5A'},
  son:  {name:'Sonuç / Özet', color:'#23608F'},
  sap:  {name:'Konu Sapması', color:'#221B14'},
  kop:  {name:'Zincir Kopması', color:'#5B3E96'},
  det:  {name:'Gereksiz Detay', color:'#6E3E75'}
};

window.LABITEMS = [
  {en:'There are three main reasons why the coastal wetlands are disappearing at such an alarming rate.', tr:'Kıyı sulak alanlarının neden bu kadar endişe verici hızda yok olduğunun başlıca üç nedeni vardır.', tag:'top', note:'Liste vaat eden açılış ("üç neden") — paragrafın konu cümlesi; kalan her cümle bu vaadi ödemek zorundadır.'},
  {en:'Consider the case of Iceland, which heats nearly ninety per cent of its homes with geothermal energy.', tr:'Evlerinin neredeyse yüzde doksanını jeotermal enerjiyle ısıtan İzlanda örneğini ele alalım.', tag:'ornek', note:'"Consider the case of…" — genel savı somutlaştıran örnek cümlesi; paragrafın omurgası değil, kanıtıdır.'},
  {en:'My uncle, who ran a bakery for thirty years, still wakes at four every morning.', tr:'Otuz yıl fırın işletmiş amcam hâlâ her sabah saat dörtte uyanıyor.', tag:'sap', note:'Kişisel anekdot: bilgilendirici paragrafta birinci tekil şahıs ve aile hikâyesi — klasik konu sapması adayı.'},
  {en:'The second reason is the spread of intensive farming, which drains the underground water table.', tr:'İkinci neden, yeraltı su tablasını kurutan yoğun tarımın yaygınlaşmasıdır.', tag:'des', note:'"The second reason…" — açılıştaki liste vaadinin ikinci taksidi; zincirin geliştirme halkası.'},
  {en:'The results were disappointing, however; attendance actually fell by a third.', tr:'Sonuçlar yine de hayal kırıcıydı; katılım üçte bir oranında geriledi.', tag:'kar', note:'"however" ile yön değişimi: beklentinin tersi veri gelir — paragrafın dönüş noktası, bozan değil.'},
  {en:'Taken together, these findings suggest that handwriting still has a place in the modern classroom.', tr:'Hepsi bir arada değerlendirildiğinde, bu bulgular el yazısının modern sınıfta hâlâ yeri olduğunu gösteriyor.', tag:'son', note:'"Taken together…" — paragrafı toparlayan özet-sonuç cümlesi; kapama işlevi.'},
  {en:'They were finally completed in 1912, three years behind schedule.', tr:'Sonunda 1912’de, planlanan süreden üç yıl geç tamamlandılar.', tag:'kop', note:'"They" havada: öncesinde çoğul bir isim yoksa gönderim zinciri kopar — akışı bozan cümlenin imzası.'},
  {en:'The Eiffel Tower, incidentally, was originally intended to stand for only twenty years.', tr:'Eyfel Kulesi, bu arada, aslında yalnızca yirmi yıl ayakta durması için yapılmıştı.', tag:'sap', note:'"incidentally" bayrağı: yazar bile konu dışına çıktığını ilan ediyor — sapma cümlesinin en dürüst örneği.'},
  {en:'In one experiment, volunteers who slept for eight hours recalled twice as many words as those who stayed awake.', tr:'Bir deneyde sekiz saat uyuyan gönüllüler, uyanık kalanlardan iki kat fazla sözcük hatırladı.', tag:'ornek', note:'"In one experiment…" — somut veriyle savı destekleyen kanıt cümlesi; sayılar onun kimlik kartıdır.'},
  {en:'Despite these advantages, few cities have invested seriously in cycling infrastructure.', tr:'Bütün bu avantajlara rağmen az sayıda şehir bisiklet altyapısına ciddi yatırım yapmıştır.', tag:'kar', note:'"Despite these advantages" — önceki cümlelere yaslanan karşıtlık; zinciri koparmaz, yönünü çevirir.'},
  {en:'This made it considerably easier, of course, for everyone involved.', tr:'Bu, elbette, işin içindeki herkes için işleri epey kolaylaştırdı.', tag:'kop', note:'"This" ve "it" ikilisi belirsiz: neyin kime kolay geldiği paragraftan çıkmıyor — kopuk gönderim.'},
  {en:'Sleep, contrary to popular belief, is not a passive shutdown but an active, selective process.', tr:'Yaygın kanının aksine uyku, pasif bir kapanma değil etkin ve seçici bir süreçtir.', tag:'top', note:'Yanlış kabule meydan okuyan açılış — paragraf bu düzeltmeyi geliştirecektir; konu cümlesi.'},
  {en:'The expedition’s captain, by the way, kept a parrot named Josiah throughout the voyage.', tr:'Bu arada, seferin kaptanı yolculuk boyunca Josiah adlı bir papağan beslemiştir.', tag:'det', note:'"by the way" ile fısıldanan kişisel ayrıntı: seferin bilimsel sonucuyla ilgisi yok — gereksiz detay, bozan aday.'},
  {en:'Tickets for the opening night, it is recorded, cost two pounds and sixpence.', tr:'Kayıtlara göre açılış gecesi biletleri iki şilin altı peni tutmuştur.', tag:'det', note:'Tarihsel fiyat ayrıntısı: paragrafın savını ne geliştirir ne çürütür — aşırı spesifik, işlevsiz bilgi.'},
  {en:'In other words, the brain treats a well-rehearsed melody much as it treats a physical habit.', tr:'Başka bir deyişle beyin, iyi prova edilmiş bir melodiyi tıpkı fiziksel bir alışkanlık gibi işler.', tag:'des', note:'"In other words" YENİ bir açı taşıdığı sürece geliştirmedir; yalın tekrara düşerse bozana dönüşür — sınır burada.'},
  {en:'Whatever the explanation, one thing is clear: the old policy has failed.', tr:'Açıklama her ne olursa olsun bir şey açık: eski politika başarısız olmuştur.', tag:'son', note:'Tartışmayı kapatan yargı cümlesi: alternatifleri süzüp tek sonuca yoğunlaştırır — kapanış.'}
];

window.QUESTIONS = [
  {id:1, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Omurga "uyku–bellek" bağı: her cümle bu savın bir halkası mı, yoksa bambaşka bir hikâyenin açılışı mı?',
   facts:[
    'A good night’s sleep does far more than rest the body; it actively strengthens the memories formed during the day.',
    'As we sleep, the brain replays the day’s experiences, gradually transferring them from short-term to long-term storage.',
    'In laboratory experiments, students who slept for eight hours after studying recalled significantly more material than those who stayed awake.',
    'The invention of the electric light bulb in the nineteenth century extended the working day well into the night.',
    'When this consolidation process is interrupted, even well-rehearsed information can fade within days.'
   ],
   opts:[
     ['(I)','Konu cümlesi: uyku–bellek bağını ilan eder ve paragrafın omurgasını kurar. Bozan değil, taşır.'],
     ['(II)','Geliştirme: "As we sleep" I’in ilan ettiği sürecin mekanizmasını açıklar — zincir sağlam.'],
     ['(III)','Kanıt: "In laboratory experiments" deney bulgusu savı somutlaştırır; örnek cümlesinin kimlik kartı budur.'],
     ['(IV)','BOZAN. Ampulün icadı ve çalışma saatlerinin uzaması: konu uyku–bellek değil, aydınlatma tarihi. Paragrafın savıyla bağı olmayan tek cümle.'],
     ['(V)','Sonuç: "this consolidation process" öbeği II’deki sürece kilitlenir; zinciri mantıklı biçimde kapatır.']
   ],
   ans:3, ev:['s1-f3','s1-f0','s1-f1'],
   why:'Paragrafın omurgası "uyku, belleği güçlendirir" savıdır: I ilan eder, II mekanizmayı, III kanıtı, V sonucu verir. IV ise ampulün icadından söz ederek bambaşka bir hikâyeye açılır — konu sapmasının ders kitabı örneği.',
   strat:'Bozan cümleyi ararken önce konu cümlesini bulun ve her cümleye tek kelimelik işlev etiketi verin (konu/mekanizma/kanıt/sonuç). Etiketi alamayan cümle yabancıdır; çıkarıp kalan dördü okuduğunuzda akış pürüzsüzse kararınız doğrudur.'},
  {id:2, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'"Çin" kelimesi geçiyor diye konu tutmaz: omurga "yollar üzerinden ticaret ve fikir alışverişi".',
   facts:[
    'For more than a thousand years, a network of caravan routes known as the Silk Road connected China with the Mediterranean world.',
    'Silk was the most valuable commodity travelling westwards, but spices, paper and glass moved along the same paths.',
    'The routes also carried ideas: Buddhism spread from India to China, and paper-making techniques eventually reached Europe.',
    'Few merchants completed the entire journey; most traded their goods at the oasis cities along the way.',
    'The Great Wall of China was originally built to protect the empire from nomadic invasions from the north.'
   ],
   opts:[
     ['(I)','Konu cümlesi: İpek Yolu’nu tanıtır, paragrafın çatısını kurar.'],
     ['(II)','Geliştirme: yolda taşınan emtiaları sayar — "but" listeyi doğal biçimde genişletir.'],
     ['(III)','Geliştirme: malların yanında fikirlerin de yolculuğunu ekler; "also" zinciri taşır.'],
     ['(IV)','Geliştirme: tüccarların güzergâh pratiğini anlatır; ticaret hikâyesinin ayrılmaz parçası.'],
     ['(V)','BOZAN. Çin Seddi bir savunma yapısıdır: Çin’le kelime bağı var ama paragrafın konusu ticaret yolları; seddin inşa amacı savunma adında yeni bir konu açar.']
   ],
   ans:4, ev:['s2-f4','s2-f0','s2-f1'],
   why:'I–IV hep aynı hikâyeyi anlatır: yollar, emtialar, fikirler, tüccarlar. V ise Çin Seddi’nin SAVUNMA amacını anlatarak bambaşka bir meseleye geçer — kelime örtüşmesi ("China") konu sapmasını gizleyemez.',
   strat:'Akraba kelime tuzağına dikkat: şıkta paragrafın dünyasından bir isim geçmesi (Çin) akrabalık kanıtı değildir. Sorulacak tek şey: "Bu cümle, konu cümlesinin vaadini ödüyor mu?" Seddi ödeyen bir işlev yok.'},
  {id:3, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Paragraf "edebi kurgu – empati" üzerine: açılış cümlesi hangi tarihi anlatıyor?',
   facts:[
    'The printing press, invented by Johannes Gutenberg in the 1450s, made books affordable for the first time in history.',
    'Recent research suggests that reading literary fiction can measurably improve our ability to understand other people’s emotions.',
    'In one study, participants who read short stories performed better on tests of emotional recognition than those who read non-fiction.',
    'Novels, the researchers argue, force us to imagine the inner lives of characters very different from ourselves.',
    'This imaginative exercise, they claim, spills over into real-life social encounters.'
   ],
   opts:[
     ['(I)','BOZAN. Gutenberg ve baskı makinesi tarihi: paragrafın konusu edebi kurgunun empatiye etkisi; baskı tarihi bambaşka bir hikâye. Çıkarılınca II temiz bir açılış olur.'],
     ['(II)','Konu cümlesi: araştırmanın savını (kurgu okumak empatiyi ölçülebilir biçimde artırıyor) ilan eder.'],
     ['(III)','Kanıt: "In one study" — somut deney verisi II’nin kanıtıdır.'],
     ['(IV)','Geliştirme: mekanizmayı açıklar — romanlar bizi başkalarının iç dünyasına zorlar.'],
     ['(V)','Sonuç: "This imaginative exercise" IV’e kilitlenir; zinciri kapatır.']
   ],
   ans:0, ev:['s3-f0','s3-f1','s3-f2'],
   why:'II konu cümlesi, III kanıt, IV mekanizma, V sonuç: dört cümle "kurgu–empati" zincirini kusursuz kurar. I ise matbaanın icadını anlatır — kitap dünyasıyla kelime bağı var, odağı yok. Klasik "komşu paragraf açılışı" döküntüsü.',
   strat:'Bozan cümle her pozisyonda olabilir — bu soruda ilk cümle. Açılış şüpheliyse test basit: cümleyi çıkar, II kendi başına paragraf açabiliyor mu? Açabiliyorsa I fazlaidı. Pozisyona değil işleve bakın.'},
  {id:4, cat:'bag',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Bir cümlede bağlaç ("by contrast") var — geçişi meşru mu kılıyor, yoksa konu değişimini mi maskeliyor?',
   facts:[
    'Coffee is today the second most widely traded commodity in the world after crude oil.',
    'Tea, by contrast, contains antioxidants that are thought to protect the heart.',
    'The coffee plant is native to the highlands of Ethiopia, where it was first cultivated more than a thousand years ago.',
    'From there, traders carried it across the Red Sea to Yemen, and by the seventeenth century coffee houses had opened in London and Paris.',
    'The beverage’s journey from a regional ritual to a global industry is one of the great stories of world trade.'
   ],
   opts:[
     ['(I)','Konu cümlesi: kahvenin ticari önemini ilan eder; paragrafın çatısı.'],
     ['(II)','BOZAN. "Tea, by contrast…" — bağlaç maskesi: geçiş mükemmel ama konu kahve tarihinden çayın sağlığına kayar. "by contrast" konu sadakatini sağlamaz.'],
     ['(III)','Geliştirme: kahvenin anavatanı Etiopya — tarihsel zincirin ilk halkası.'],
     ['(IV)','Geliştirme: Yemen’e ve Avrupa’ya yayılış — coğrafi zincir sürer.'],
     ['(V)','Sonuç: "The beverage’s" öbeği tüm parçaya kilitlenir; kahvenin yolculuğunu özetler.']
   ],
   ans:1, ev:['s4-f1','s4-f0','s4-f2'],
   why:'I, III, IV ve V kahvenin tarihi ve ticareti üzerine tek zincir kurar. II ise çayın antioksidanlarından söz eder: "by contrast" geçişi dilbilgisel olarak kusursuz görünse de paragrafın savına hizmet etmez — bağlaç cümlenin iç yapısıdır, konu sadakati dış yapısıdır.',
   strat:'Bağlaçlı cümleye rastlayınca iki kez okuyun: bağlacın iki yakası AYNI konuda mı konuşuyor? "by contrast / however / therefore" varlığı şıkkı asla otomatik sağlamlaştırmaz; bu türün en sevdiği maske budur.'},
  {id:5, cat:'akis',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Tarih damgalarını alt alta yazın: 1867 → 1891 → ? → 1903 → 1911. Zinciri kıran hangisi?',
   facts:[
    'Marie Curie was born in Warsaw in 1867, the youngest of five children in a family of teachers.',
    'Unable to study at university in Russian-occupied Poland, she moved to Paris in 1891 and enrolled at the Sorbonne.',
    'She died of aplastic anaemia in 1934, almost certainly caused by decades of exposure to radiation.',
    'In 1903, she shared the Nobel Prize in Physics with her husband Pierre for their research on radioactivity.',
    'Eight years later, she won a second Nobel, in Chemistry, for the discovery of two new elements.'
   ],
   opts:[
     ['(I)','Açılış: doğum (1867) — kronolojinin başlangıç noktası.'],
     ['(II)','Geliştirme: Paris yılları (1891) — zaman zinciri ilerler.'],
     ['(III)','BOZAN. Ölüm (1934): 1891’den 1903’e ilerleyen anlatının ortasına kırk üç yıl sonrasının finali düşer; kronoloji geri dönmek zorunda kalır.'],
     ['(IV)','Geliştirme: 1903 Nobel’i — III çıkarılınca II ile IV arası pürüzsüz akar.'],
     ['(V)','Geliştirme: 1911’deki ikinci Nobel — "Eight years later" IV’ün tarihine kilitli sağlam halka.']
   ],
   ans:2, ev:['s5-f2','s5-f1','s5-f3'],
   why:'Biyografi kronolojik zincir kurar: 1867 → 1891 → 1903 → 1911. III, anlatının ortasına 1934’ü bırakır ve IV’ten sonra zincir geriye (1903) dönmek zorunda kalır. Ölüm cümlesi ancak KAPANIŞTA durabilirdi — ortada durunca akış kırılır.',
   strat:'Tarih/sıra damgalarını önce alt alta dizin: bozan cümle çoğu kez zincire uymayan KONUMDA doğru bilgi taşır. Bilginin doğruluğuna değil, yerine bakın: "doğru ama burada mı?" sorusu akış sorularının anahtarıdır.'},
  {id:6, cat:'bag',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Zamir avı yapın: "This process" öbeğinin öncülü paragrafın neresinde?',
   facts:[
    'This process, known as evaporation, removes most of the water from the nectar.',
    'The true value of bees to agriculture, however, lies not in honey but in pollination.',
    'As a bee moves from bloom to bloom in search of nectar, pollen grains stick to the fine hairs on its body.',
    'Some of this pollen rubs off on the next flower the bee visits, allowing fertilization to take place.',
    'Roughly one third of the world’s food crops depend, at least in part, on this accidental service.'
   ],
   opts:[
     ['(I)','BOZAN. "This process" havada: öncesinde tanımlanmış bir süreç yoktur; bal yapımı anlatısı paragrafa dışarıdan girer. Çıkarılınca II temiz açılış olur.'],
     ['(II)','Konu cümlesi: arıların tarımdaki gerçek değerinin bal değil tozlaşma olduğunu ilan eder.'],
     ['(III)','Geliştirme: tozlaşma mekanizması — "As a bee moves…" zinciri kurar.'],
     ['(IV)','Geliştirme: "Some of this pollen" III’e kilitlenir; süreç tamamlanır.'],
     ['(V)','Sonuç: "this accidental service" — mekanizmadan küresel öneme ölçekleme; kapanış.']
   ],
   ans:0, ev:['s6-f0','s6-f1','s6-f3'],
   why:'II–V tozlaşma zincirini kurar ve her gönderimin adresi vardır ("this pollen" → III, "this service" → mekanizma). I’daki "This process" ise hiçbir öncüle bağlanamaz ve konu (bal yapımı) paragrafın savının dışındadır: çifte kopuş.',
   strat:'Bu türde ilk iş zamir/bağlaç avıdır: this, they, its, however sözcüklerinin yanına okla adresini yazın. Ok boşta kalan cümle güçlü adaydır; cümleyi çıkarın — kalan dördün kendi zinciri kusursuzsa karar kesindir.'},
  {id:7, cat:'tekrar',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Bir cümlede "In other words" var: yeniden ifade mi, süslü tekrar mı?',
   facts:[
    'Regular physical exercise is one of the most reliable ways to lift a low mood.',
    'In other words, taking a little exercise now and then is a fairly dependable means of cheering oneself up.',
    'A brisk thirty-minute walk triggers the release of endorphins, the brain’s natural mood elevators.',
    'Studies have found that people who exercise three times a week report fewer symptoms of mild depression.',
    'Even modest activity, such as gardening, appears to protect mental wellbeing over the long term.'
   ],
   opts:[
     ['(I)','Konu cümlesi: egzersiz–mood savını ilan eder; paragrafın omurgası.'],
     ['(II)','BOZAN. "In other words" maskesi: I’in savını neredeyse aynı kelimelerle, aynı genellikte tekrarlar; yeni bilgi sıfır. Yeniden ifade değil, yalın tekrar.'],
     ['(III)','Geliştirme: mekanizma (endorfin) — savı açıklar, yeni bilgi katar.'],
     ['(IV)','Kanıt: "Studies have found" — istatistiksel destek; örnek cümlesi.'],
     ['(V)','Geliştirme: "Even modest activity" — sınır durumu ekleyerek savı ölçekler.']
   ],
   ans:1, ev:['s7-f1','s7-f0','s7-f2'],
   why:'Paragrafta her cümle ya yeni bilgi ya yeni açı getirmelidir. III mekanizmayı, IV kanıtı, V ölçeği katar; II ise I’i süsleyerek tekrarlar — çıkarıldığında hiçbir şey kaybolmaz. "In other words" bağlacı, açıklama değil taklit üretiyorsa bozan olur.',
   strat:'Tekrar şüphesinde ölçüt "çıkarıp okuma" testidir: aday cümleyi çıkarın — anlam da bilgi de eksilmiyorsa cümle gereksizdi. Özet-sonuç cümleleriyle karıştırmayın: özet YENİ bir yargı ile kapatır, tekrar hiçbir şey eklemez.'},
  {id:8, cat:'nuan',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Kapsam sözcüklerini tarayın: "all", "without exception" gibi mutlaklar kanıt ister.',
   facts:[
    'Sea turtles have been nesting on the beaches of the eastern Mediterranean for millions of years.',
    'Every summer, females return to the very beach where they hatched in order to lay their own eggs.',
    'All marine animals, without exception, will be extinct within the next fifty years.',
    'In recent decades, however, hotel construction and light pollution have driven many turtles away from their traditional nesting sites.',
    'Conservation volunteers now move threatened nests into protected enclosures until the hatchlings emerge.'
   ],
   opts:[
     ['(I)','Açılış:caretta örnekleri — tarihsel derinlik kurar.'],
     ['(II)','Geliştirme: yuvalama davranışı — annenin doğduğu plajaya dönüşü.'],
     ['(III)','BOZAN. "All marine animals, without exception… fifty years": mutlak kapsam + kanıtsız kehanet; ne I–II’nin savıyla bağlantılı ne ölçülü bilimsel tonla uyumlu. Paragrafın kalanı umutlu koruma çalışması anlatır.'],
     ['(IV)','Dönüş: "however" ile tehditler — koruma sorununa geçiş; ölçülü dil ("many turtles").'],
     ['(V)','Sonuç: koruma çözümü — IV’teki soruna yanıt; kapanış.']
   ],
   ans:2, ev:['s8-f2','s8-f3','s8-f4'],
   why:'Paragrafın dili temkinlidir: "in recent decades", "many turtles", "threatened nests". III ise "hepsi, istisnasız, elli yılda yok olacak" diyerek hem kapsamı mutlaklaştırır hem kanıt sunmaz hem de koruma anlatısıyla çelişir — ölçü kırılmasının ders kitabı örneği.',
   strat:'Mutlak sözcükler (all, never, without exception) görünce paragrafta onun KANITINI arayın. Ölçülü bir paragrafta kanıtsız mutlak kehanet taşıyan cümle neredeyse her zaman bozandır; kalan cümlelerin "many / some / in recent decades" diliyle kontrastı kararı teyit eder.'},
  {id:9, cat:'uslup',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Kayıt kartı: paragraf resmî/bilgilendirici. Hangi cümle sokak ağzıyla konuşuyor?',
   facts:[
    'Fresh water accounts for less than three per cent of all the water on Earth, and most of that is locked away in glaciers.',
    'As populations grow, competition for the remaining supplies is intensifying, particularly in arid regions.',
    'Agriculture alone consumes roughly seventy per cent of the fresh water that humans use worldwide.',
    'And quite honestly, nobody I know ever thinks twice about leaving the tap running while they brush their teeth.',
    'Meeting the coming shortage, experts warn, will require both technological innovation and changes in everyday habits.'
   ],
   opts:[
     ['(I)','Açılış: küresel su kıtlığı verisi — nesel, resmî anlatı.'],
     ['(II)','Geliştirme: rekabetin artışı — veri temelli sürdürme.'],
     ['(III)','Geliştirme: tarımın payı — "roughly" ölçülü sektör verisi.'],
     ['(IV)','BOZAN. "And quite honestly, nobody I know…" — birinci tekil şahıs ve samimi üslup: üç cümlelik nesnel anlatıyı sokak sohbetine çevirir. İçerik yakın (su israfı) ama kayıt parçayla uyumsuz.'],
     ['(V)','Sonuç: "experts warn" — paragrafı uzman diliyle kapatır; IV ile üslup kontrastı netleşir.']
   ],
   ans:3, ev:['s9-f3','s9-f0','s9-f4'],
   why:'Paragrafın kaydı bilgilendirici ve resmîdir (veriler, "particularly", "experts warn"). IV bu kaydı "quite honestly / nobody I know" ile kırar: bilgi doğru ve konuyla ilgili olsa bile ses yanlış adrestedir. Üslup sorularında içerik yakınlığı şıkkı kurtarmaz.',
   strat:'Üslup şüphesinde paragrafın kayıt kartını yazın: kim konuşuyor (uzman mı, anlatıcı mı), hangi zamirler var (I/you/we)? Resmî paragrafta birinci tekil şahıs, "honestly / by the way" kalıpları ve ünlem işaretleri üslup bozanın imzalarıdır.'},
  {id:10, cat:'tekrar',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Son cümle "This explains why…" ile bir sonuca bağlanıyor: sonuç, paragrafın savıyla aynı yönde mi?',
   facts:[
    'The concrete used by Roman engineers two thousand years ago has proved astonishingly durable.',
    'Modern analysis has revealed that its secret lies in volcanic ash, which the Romans mixed with quicklime.',
    'Exposed to seawater, the material actually grows stronger, as healing minerals form in its microscopic cracks.',
    'Today’s engineers are studying the ancient recipe in the hope of designing more resilient marine structures.',
    'This explains why so few Roman buildings have survived to the present day.'
   ],
   opts:[
     ['(I)','Konu cümlesi: Roma betonunun dayanıklılığı — paragrafın omurgası.'],
     ['(II)','Geliştirme: sırrın volkanik kül — mekanizma.'],
     ['(III)','Geliştirme: deniz suyuyla güçlenme — dayanıklılığın kanıtı; "actually grows stronger" savı pekiştirir.'],
     ['(IV)','Geliştirme: bugünün mühendisleri eski formülü inceliyor — etki ve bağlantı.'],
     ['(V)','BOZAN. "This explains why so few… have survived": hem "this" gönderimi şaşar (paragraf dayanıklılığı anlatıyor) hem iddia I–III’le doğrudan çelişir — dayanıklıysa neden az kalmış? Çelişki zinciri.']
   ],
   ans:4, ev:['s10-f4','s10-f0','s10-f2'],
   why:'I–IV tek yönde konuşur: beton dayanıklıdır, sırrı bilinir, deniz suyu onu güçlendirir, mühendisler inceler. V ise bu zincirin tam tersini "açıklar": az yapı kaldı iddiası hem gönderim olarak havada kalır hem savla çelişir. Bağlaçlı çelişkinin en zarif örneği.',
   strat:'"This explains why…" kalıbını görünce iki denetim yapın: (1) "this" neye gönderiyor — adres paragrafın savı mı? (2) Açıklanan sonuç savla AYNI yönde mi? Yön tersse cümle ne kadar dilbilgisel kusursuzsa o kadar tehlikelidir.'},
  {id:11, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'"Klavye" kelimesi geçiyor — ama paragrafın savı "el yazısının öğrenme üstünlüğü". Kelime mi odağı mı?',
   facts:[
    'The QWERTY keyboard layout was designed in the 1870s to prevent the keys of mechanical typewriters from jamming.',
    'Recent studies suggest that children who take notes by hand remember more of what they learn than those who type.',
    'Writing by hand, researchers explain, is slower, and so forces the brain to summarize rather than transcribe.',
    'The extra mental effort involved in summarizing appears to anchor ideas more firmly in memory.',
    'For this reason, some universities have begun to reintroduce pen-and-paper examinations.'
   ],
   opts:[
     ['(I)','BOZAN. QWERTY diziliminin 1870’ler tasarım hikâyesi: paragraf "el yazısı–bellek" savını anlatır; daktilo tarihi komşu ama ayrı bir konudur. Çıkarılınca II temiz açılış olur.'],
     ['(II)','Konu cümlesi: el yazısı–bellek savını ilan eder.'],
     ['(III)','Geliştirme: mekanizma — yavaşlık, özetlemeye zorlar.'],
     ['(IV)','Geliştirme: "The extra mental effort" III’ün sonucu; zincir ilerler.'],
     ['(V)','Sonuç: "For this reason" — uygulamaya geçiş; paragrafı kapatır.']
   ],
   ans:0, ev:['s11-f0','s11-f1','s11-f3'],
   why:'II–V "el yazısı neden daha iyi öğretiyor?" zincirini kurar. I ise klavyenin doğuş hikâyesini anlatır: "typing" kelimesi paragrafta geçtiği için akraba görünür, ama paragrafın savına tek bir katkısı yoktur — kelime örtüşmesi, odaq sapmasını gizlemez.',
   strat:'ÖSYM bu türde en çok "aynı dünya, başka hikâye" üretir: klavye–el yazısı, çay–kahve, seddi–İpek Yolu. Kelime örtüşmesini görünce şıkka artı puan yazmayın; ölçüt tek: savın gelişimine katkı var mı? Yoksaysa cümle yabancıdır.'},
  {id:12, cat:'akis',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Süreç anlatımı: adım sıralamasını yazın. "finally" kelimesi nerede duruyor?',
   facts:[
    'Cheese making begins with the curdling of fresh milk, to which rennet or an acidic substance is added.',
    'The finished wheels are finally coated in wax and left to mature in cool cellars for months.',
    'Once the curds have formed, they are cut into small pieces and gently heated to release moisture.',
    'The curds are then pressed into moulds, where they slowly take the shape of a wheel.',
    'Only after several turnings and saltings does the cheese begin to resemble the product we buy in shops.'
   ],
   opts:[
     ['(I)','Açılış: sürecin ilk adımı — sütün pıhtılaştırılması.'],
     ['(II)','BOZAN. "The finished wheels are finally coated…" — sürecin SON adımını ikinci konuma taşır; III "Once the curds have formed" ile birinci adıma geri döner. "finally" kelimesi bile yerinin yanlış olduğunu haykırıyor.'],
     ['(III)','Geliştirme: pıhtının kesilip ısıtılması — adım iki.'],
     ['(IV)','Geliştirme: kalıplara basma — "then" ile adım üç.'],
     ['(V)','Sonuç: çevirme ve tuzlama — sürecin doğal kapanışı.']
   ],
   ans:1, ev:['s12-f1','s12-f2','s12-f4'],
   why:'I → III → IV → V kusursuz bir süreç zinciridir: pıhtılaştırma, kesme-ısıtma, kalıplama, olgunlaştırma. II bu zincirin sonucunu başa yakın yerleştirir ve anlatıyı geri dönmeye zorlar — konumu bozulmuş bir adım, akışın kendisini kırar.',
   strat:'Süreç anlatılarında "first / then / once / finally" işaretlerini numaralandırın: her işaret kendi konumundaki adımı tanımlamalı. "finally" ortada görünmesiyle kendini ele verir — çıkarıp kalan dördü okuyun: süreç tek yönde akıyor mu?'},
  {id:13, cat:'bag',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'"Therefore" bir sonuç çıkarır: öncülle eşleşiyor mu — tel kancadan ne çıkıyor?',
   facts:[
    'Crows have long fascinated scientists with their problem-solving abilities.',
    'In one famous experiment, a crow bent a straight wire into a hook in order to retrieve food from the neck of a narrow tube.',
    'Therefore, birdwatchers from all over the world travel to the tropics every spring to photograph rare species of parrot.',
    'Other studies have shown that crows can recognize individual human faces and remember those who have treated them badly.',
    'Such findings have led some researchers to describe crows as “feathered primates”.'
   ],
   opts:[
     ['(I)','Konu cümlesi: kargaların problem çözme yeteneği — paragrafın çatısı.'],
     ['(II)','Örnek: tel kanca deneyi — I’in ünlü kanıtı.'],
     ['(III)','BOZAN. "Therefore" yanlış adrese bağlanır: tel kancadan papağan fotoğrafçılığı çıkmaz. Bağlacın yönü boşta; konu da kargadan papağana kayar — çifte kopuş.'],
     ['(IV)','Geliştirme: yüz tanıma — "Other studies" ile yeni bulgular.'],
     ['(V)','Sonuç: "Such findings" I, II ve IV’ü toparlar; "feathered primates" kapanışı.']
   ],
   ans:2, ev:['s13-f2','s13-f1','s13-f4'],
   why:'Paragrafın örgüsü: sav (I) → kanıt (II) → başka kanıtlar (IV) → özet (V). III ise "therefore" ile bir sonuç çıkarır gibi görünür ama öncülü (karga deneyi) ile sonucu (papağan fotoğrafçıları) arasında ne mantıksal ne konusal köprü vardır: bağlaç, boşluğa kurulmuştur.',
   strat:'Sonuç bağlaçlarını görünce "neyeden neye?" sorusunu mutlaka yazın: therefore = öncül → sonuç. Uçlardan biri paragrafın dünyasının dışındaysa bağlaç değil cümle düşer. Bu, bağlaç-gönderim sorularının en hızlı eleme süzgecidir.'},
  {id:14, cat:'nuan',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Aşırı spesifik ayrıntıyı arayın: savın gelişimine katkısı sıfır olan bilgi hangisi?',
   facts:[
    'Deep in the hills of southern France lie the caves of Lascaux, whose walls are covered with paintings made some seventeen thousand years ago.',
    'The artists depicted horses, deer and bulls with a liveliness that still astonishes visitors.',
    'To make their paints, they ground coloured minerals into powder and mixed them with animal fat.',
    'The caves were discovered in 1940 by four teenagers, one of whom later became a dentist in the nearby town.',
    'Because the paintings began to deteriorate as soon as tourists were admitted, access to the caves is now strictly limited.'
   ],
   opts:[
     ['(I)','Konu cümlesi: Lascaux ve resimlerin yaşı — paragrafın çatısı.'],
     ['(II)','Geliştirme: betimlenen hayvanlar — sanatsal canlılık.'],
     ['(III)','Geliştirme: boya yapımı — "they" II’deki sanatçılara kilitlenir.'],
     ['(IV)','BOZAN. Keşfi yapan gençlerden birinin "dişçi olması": olayla ilgili ama savın gelişimine katkısı sıfır — aşırı kişisel ayrıntı. Keşif bilgisi zaten I’de mevcut.'],
     ['(V)','Dönüş/sonuç: turizmin zararı ve koruma — günümüze bağlanan kapanış.']
   ],
   ans:3, ev:['s14-f3','s14-f0','s14-f4'],
   why:'I, II, III ve V resimler–sanatçılar–tehdit–koruma zincirini kurar. IV ise keşif hikâyesinin önemsiz bir biyografik ayrıntısını taşır: doğru ve "ilgili" görünür, ama paragrafın savına hiçbir şey katmaz. Gereksiz detay, bu soru türünün en zamana yayılan tuzağıdır.',
   strat:'"İlginç ama işlevsiz" ayrıntıları iki soruyla test edin: (1) Bu bilgi olmasa paragrafın savı eksilir mi? (2) Bu bilgi hangi cümleyi geliştiriyor? İki cevap da "hiç"se cümle gereksizdir — kişisel isimler, meslekler, fiyatlar ve kur trivia’ları klasik imzalardır.'},
  {id:15, cat:'uslup',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Dört cümle nesnel bilim anlatısı — hangi cümle okuyucuya duygusal olarak sesleniyor?',
   facts:[
    'Volcanic eruptions are driven by the build-up of pressure in molten rock beneath the Earth’s crust.',
    'As gas-rich magma rises, dissolved gases form bubbles that expand rapidly near the surface.',
    'The sudden expansion propels lava, ash and rock fragments high into the atmosphere.',
    'Geologists monitor warning signs such as earthquakes and gas emissions in an attempt to forecast eruptions.',
    'What a terrifying experience it must be to watch red-hot lava sweeping away everything in its path!'
   ],
   opts:[
     ['(I)','Açılış: patlamanın fiziksel nedeni — nesel anlatı.'],
     ['(II)','Geliştirme: gaz kabarcıkları — mekanizmanın devamı.'],
     ['(III)','Geliştirme: patlamanın görünür sonuçları.'],
     ['(IV)','Geliştirme: izleme ve öngörü — bilimsel pratik; paragrafın uygulama alanı.'],
     ['(V)','BOZAN. "What a terrifying experience…!" — ünlem ve duygusal yorum: dört cümlelik nesnel bilim anlatısına okuyucuya seslenen değerlendirme girer. Kayıt kırılması.']
   ],
   ans:4, ev:['s15-f4','s15-f0','s15-f3'],
   why:'I–IV bilgilendirici bir bilim metnidir: neden, mekanizma, sonuç, uygulama. V ise bu metne bir turist rehberi sesiyle müdahale eder: ünlem işareti ve "must be" öznel tahmini, paragrafın kaydıyla taban tabana zıttır. Bilgi yanlış değildir — ses yanlış adresedir.',
   strat:'Ünlem işareti bu türde neredeyse her zaman üslup bayrağıdır. Yanına ek denetim: cümle öznel mi ("must be", "how wonderful"), nesnel mi ("geologists monitor")? Paragraf neselse, öznel-eğlenceli ses taşıyan cümle bozandır — içerik konuyla ilgili olsa bile.'},
  {id:16, cat:'tekrar',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Taraf sayın: dört cümle aynı yöne mi, bir cümle ters yöne mi konuşuyor?',
   facts:[
    'In fact, the pyramids of Egypt were built by armies of slaves, as most historians now accept.',
    'Contrary to popular belief, however, recent archaeological finds suggest that the builders were skilled, paid labourers.',
    'Workers’ villages unearthed near Giza contain bakeries, breweries and even clinics for treating injuries.',
    'Graffiti left by the work gangs proudly record team names such as “Friends of Khufu”.',
    'Far from being slaves, the workforce seems to have been drawn from farming families during the Nile’s flood season.'
   ],
   opts:[
     ['(I)','BOZAN. "Köle orduları inşa etti" — paragrafın tümü bunun TERSİNİ kanıtlar: II düzeltir, III–V ücretli işçilerin izlerini dizer. Çelişkinin ta kendisi; çıkarılınca II temiz açılış olur.'],
     ['(II)','Konu cümlesi (düzeltme): ücretli, eğitimli işçiler savı — paragrafın omurgası.'],
     ['(III)','Kanıt: işçi köyleri — fırınlar, bira imalâthaneleri, klinikler.'],
     ['(IV)','Kanıt: grafitiler ve ekip adları — aidiyet ve gurur duygusu.'],
     ['(V)','Sonuç: "Far from being slaves" — I’in iddiasını kesin biçimde çürütür ve kapanış yapar.']
   ],
   ans:0, ev:['s16-f0','s16-f1','s16-f4'],
   why:'II–V tek bir savı kanıtlar: piramitler ücretli işçilerin eseridir. I ise bu savın tam tersini "çoğu tarihçenin kabulü" diye sunar — dört cümleye karşı bir cümle. Çelişkide azınlık her zaman bozandır; "In fact" kalıbı iddiayı güçlendirmez, sadece maskeler.',
   strat:'Çelişki şüphesinde taraf sayın: her cümlenin savın lehine mi aleyhine mi olduğuna artı/eksi yazın. 4–1 dağılım varsa azınlık cümlesi bozandır. "In fact / as is well known" gibi otorite işaretleri, kanıtsız kalan iddiayı meşrulaştırmaz.'},
  {id:17, cat:'bag',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Sayı uyumunu denetleyin: paragrafın öznesi çoğul — hangi cümle tekil iyelik kullanıyor?',
   facts:[
    'Every autumn, millions of birds leave their northern breeding grounds and set off for warmer regions.',
    'Its journey, however, can be interrupted by storms, drought and the disappearance of wetlands along the route.',
    'Before departure, many species build up fat reserves, sometimes almost doubling their body weight.',
    'Others wait for days for favourable winds before finally taking off.',
    'Satellite tracking has revealed that some species fly for weeks over open ocean without a single rest.'
   ],
   opts:[
     ['(I)','Açılış: göç olgusu — "millions of birds" çoğul özne.'],
     ['(II)','BOZAN. "Its journey" tekil iyelik: öncesinde tekil bir isim yok; "millions of birds" çoğuldur. Gönderim zinciri kopar — cümle, paragrafın anlatısına dışarıdan seslenen bir başkasının cümlesidir.'],
     ['(III)','Geliştirme: yağ rezervleri — göç öncesi hazırlık.'],
     ['(IV)','Geliştirme: rüzgâr bekleme — "Others" III’teki "many species"e kilitli.'],
     ['(V)','Sonuç: uydu takibi — modern bilginin kapanışı; "some species" zinciri taşır.']
   ],
   ans:1, ev:['s17-f1','s17-f0','s17-f3'],
   why:'I çoğul açar ("millions of birds"), III–IV çoğul geliştirir ("many species", "Others"), V çoğul kapatır ("some species"). II’nin "Its"i bu çoğul dünyada tekil bir öncül arar ve bulamaz: gönderim havada kalır — zincir kopmasının en saf biçimi.',
   strat:'Zamir uyumu iki filtre: SAYI (they ↔ çoğul, it ↔ tekil) ve MESAFE (öncül en yakın makul isim olmalı). "Its" gibi tekil bir iz görürseniz öncesinde tekil isim arayın; yoksa cümle büyük olasılıkla paragraftan dışarıdan sızmıştır.'},
  {id:18, cat:'uslup',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Kayıt kartı: resmî tarih anlatısı. Hangi cümle sohbet ağzıyla giriyor?',
   facts:[
    'Gutenberg’s printing press, developed around 1450, transformed Europe more profoundly than almost any other invention in history.',
    'Within fifty years, presses in more than two hundred cities had produced millions of volumes.',
    'And to be honest, those early printing workshops must have been terribly noisy, dusty places to work in!',
    'Ideas, scientific theories and maps could now circulate freely beyond the small circles of scholars.',
    'The Reformation, in particular, spread with a speed that would have been unthinkable only a century earlier.'
   ],
   opts:[
     ['(I)','Konu cümlesi: matbaanın dönüştürücü etkisi — paragrafın çatısı.'],
     ['(II)','Geliştirme: elli yılda iki yüz şehir — yayılma verisi.'],
     ['(III)','BOZAN. "And to be honest… terribly noisy, dusty…!" — samimi üslup + ünlem + öznel tahmin ("must have been"): resmî tarih anlatısını sokak sohbetine çevirir. Bilgi kısmen doğru olsa bile kayıt uyumsuz.'],
     ['(IV)','Geliştirme: fikirlerin dolaşımı — etkinin somutlanması.'],
     ['(V)','Sonuç: Reform örneği — hızla pekiştirme; kapanış.']
   ],
   ans:2, ev:['s18-f2','s18-f0','s18-f4'],
   why:'I, II, IV ve V tarihsel-etkisel bir anlatı kurar: dönüş, yayılma, dolaşım, sonuç. III ise bu anlatıya "to be honest" kalıbıyla bir sohbet notu düşer: üslup, paragrafın sesiyle uyumsuz olduğu için içerik ne kadar renkli olursa olsun cümle parçaya yabancıdır.',
   strat:'"to be honest / by the way / quite honestly" kalıpları resmî metinde üçlü alarmdır: samimi kayıt + öznellik + genellikle ünlem. Biri bile varsa cümleyi üslup adayı listesine alın; kalan paragrafın kaydını (burada tarih anlatısı) yazıp kontrastla teyit edin.'},
  {id:19, cat:'akis',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Tarihleri sıralayın: 1799 → umut → 1822 → ? → sonuç. Hangi cümle anlatıyı geriye sarıyor?',
   facts:[
    'The Rosetta Stone, found by French soldiers in 1799, carried the same inscription in three scripts: hieroglyphic, demotic and Greek.',
    'Scholars hoped that the Greek text would at last unlock the secrets of Egyptian hieroglyphs.',
    'In 1822, after years of painstaking comparison, the French scholar Champollion announced that he had done so.',
    'Napoleon’s expedition to Egypt, during which the stone had come to light, had in fact set out from Toulon in 1798.',
    'His achievement opened three thousand years of written history to the modern world.'
   ],
   opts:[
     ['(I)','Açılış: 1799, taşın bulunması — kronolojinin başlangıcı.'],
     ['(II)','Geliştirme: umut — Yunanca metnin anahtar olması beklentisi.'],
     ['(III)','Geliştirme: 1822, Champollion — hedefe ulaşma anı.'],
     ['(IV)','BOZAN. Napolyon’un seferi 1798’de yelken açtı: anlatı 1822’deyken bir cümle 1798’e geri döner. Bilgi doğru ama konum yanlış — akış kırılması; sefer bilgisi gerekiyorsa I’in yanında ya da girişte yer almalıydı.'],
     ['(V)','Sonuç: "His achievement" III’e kilitli; üç bin yıllık tarihin açılması — kapanış.']
   ],
   ans:3, ev:['s19-f3','s19-f2','s19-f4'],
   why:'Anlatı tek yönde ilerler: bulunma (1799) → umut → çözüm (1822) → anlamı (bugün). IV bu zincirin ortasında 1798’e geri sarar; doğru bir bilgi, yanlış bir konumda. Çıkarılınca I–II–III–V kusursuz bir "keşif hikâyesi" olur.',
   strat:'Geri sarma tuzağında bilgi doğru, yer yanlıştır: sefer tarihi gerçekten 1798’dir. Tarihsel anlatılarda her tarih cümlesinin yanına yılını yazın ve okları çizin; ok geriye dönüyorsa o cümle akışı bozuyor demektir. Çıkarma testi kararı kesinleştirir.'},
  {id:20, cat:'nuan',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Ölçü sözcüklerini karşılaştırın: paragraf temkinli konuşurken hangi cümle kehanete sıçrıyor?',
   facts:[
    'Electric vehicles have moved from technical curiosity to mainstream choice in little more than a decade.',
    'Improvements in battery technology have steadily extended their range while reducing costs.',
    'In several countries, electric models now account for more than half of all new cars sold.',
    'Charging networks, however, still lag far behind, especially in rural areas.',
    'The petrol engine, which will disappear from the roads within two or three years, simply cannot compete.'
   ],
   opts:[
     ['(I)','Açılış: elektrikli araçların ana akımlaşması — paragrafın çatısı.'],
     ['(II)','Geliştirme: batarya teknolojisi — neden-sonuç zinciri.'],
     ['(III)','Geliştirme: ülke verileri — "In several countries" ölçülü kanıt.'],
     ['(IV)','Dönüş: "however" — şarj altyapısı eksikliği; dengeli eleştiri.'],
     ['(V)','BOZAN. "iki-üç yıl içinde yollardan kaybolacak" — mutlak kehanet: paragrafın ölçülü, veri temelli diliyle çelişir; IV’ün "hâlâ geride" dengeli tavrıyla da uyumsuz. Kapsam/ölçü hatası.']
   ],
   ans:4, ev:['s20-f4','s20-f3','s20-f4'],
   why:'Paragrafın dili temkinlidir: "little more than a decade", "steadily", "in several countries", "still lag far behind". V ise benzin motoruna iki-üç yıllık bir ömür biçer — ne veri ne ölçü tanır. Ölçülü anlatı içindeki uç iddia, kapsam bozanın imzasıdır.',
   strat:'Ölçü denetimi: paragrafın kapsam sözcüklerini listeleyin (some, several, many, steadily) ve uçları işaretleyin (all, never, within two years). Uç iddianın paragraftaki kanıtını arayın — bulamıyorsanız cümle bozandır. IV’ün dengeli "however" cümlesi, V’in aşırılığını kıyasla görünür kılar.'}
];

window.__VERI_OK = 1;
/* VERI-SONU: Bu satırı görüyorsanız veri.js tamamdır. */
