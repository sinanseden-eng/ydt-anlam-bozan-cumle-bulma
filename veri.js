/* ══════════════════════════════════════════════════════════
   YDT ANLAM BÜTÜNLÜĞÜ LAB — veri.js (DOSYA 2/2)
   index.html'deki <script src="veri.js"> satırı bu dosyayı yükler.
   Türkçe karakterler doğrudan yazılmıştır; UTF-8 olarak kaydedin.
   Soru eklerken aynı alanları kullanın:
   id, cat, stem, clue, facts[5 cümle],
   opts[['(I)',geribildirim]×5], ans(0-4), ev, why, strat
   ══════════════════════════════════════════════════════════ */

window.CATS = {
  konu:  {no:'01', name:'Konu Sapması', en:'Konu dışına çıkan cümle', color:'#C13F14'},
  akis:  {no:'02', name:'Akış ve Sıra', en:'Olayların ve adımların sırası', color:'#0E7568'},
  bag:   {no:'03', name:'Bağlaç ve Gönderim', en:'Bağlaçlar ve zamirler', color:'#8F6400'},
  tekrar:{no:'04', name:'Tekrar ve Çelişki', en:'Gereksiz tekrar ve çelişki', color:'#8E2D5A'},
  uslup: {no:'05', name:'Üslup ve Anlatım Dili', en:'Anlatım dili ve ton', color:'#221B14'},
  nuan:  {no:'06', name:'Ayrıntı, Kapsam ve İddia', en:'Ayrıntı ve aşırı iddia', color:'#5B3E96'}
};

window.LESSONS = [
  {cat:'konu', title:'Konu Sapması: Paragraftan Çıkan Cümle', en:'Konu dışına çıkan cümle',
   roots:[
     ['Konu cümlesini bul','Paragrafın ne anlattığını tek cümleyle yazın. Sonra her cümlenin bu ana düşünceyi destekleyip desteklemediğine bakın.'],
     ['Aynı kelime, aynı konu demek değildir','"Çin" veya "klavye" gibi ortak sözcükler sizi yanıltabilir. Cümlenin paragrafta ne işe yaradığına bakın (2. ve 11. sorular).'],
     ['Başka bir paragrafın başlangıcı mı?','Konu dışı cümle başka bir paragrafı başlatabilecek gibi görünebilir. "Bu cümle aslında ne hakkında?" diye sorun.'],
     ['Konuyla ilgisiz bilgi','Paragrafın ana düşüncesini geliştirmeyen tarihî ya da ilginç bilgiler konu dışına çıkabilir (1. soru: ampulün icadı).']
   ],
   steps:[
     'İlk ve son cümleyi okuyup ana düşünceyi tek cümlede yazın.',
     'Her cümleyi bu özle karşılaştırın: ana düşünceyi mi geliştiriyor, başka bir konuya mı geçiyor?',
     'Kelime örtüşmesine kanmayın: aynı isim geçmek, aynı ana düşünceyi desteklemek demek değildir.',
     'Şüpheli cümleyi çıkarıp kalan dördünü okuyun. Cümleler birbirine daha iyi bağlanıyorsa seçiminizi kontrol edin.'
   ],
   trap:{t:'Ortak Kelime Tuzağı', d:'2. soruda Çin Seddi, 11. soruda QWERTY klavye paragraftaki sözcüklerle ilişkili görünür. Ancak ikisi de ana düşünceyi geliştirmez. Ortak kelimelere değil, cümlenin paragraftaki görevine bakın.'}},
  {cat:'akis', title:'Akış ve Sıra: Zaman Sırası', en:'Olayların ve adımların sırası',
   roots:[
     ['Tarih sırası','Bir yaşam öyküsündeki tarihleri sıraya koyun: 1867 → 1891 → 1903 → 1911. Araya giren 1934 yılı akışı bozar (5. soru).'],
     ['Adımların sırası','first (önce), then (sonra), finally (sonunda) gibi sözler bir sırayı gösterir. Son adım ortadaysa akış bozulur (12. soru).'],
     ['Geçmişe ani dönüş','Olaylar ileriye doğru anlatılırken bir cümle çok daha eski bir tarihe dönerse sıra bozulabilir (19. soru: 1798’e dönüş).'],
     ['Cümleyi çıkarıp oku','Şüpheli cümleyi çıkarın. Kalan dört cümle olay ya da işlem sırasına uyuyorsa seçiminizi yeniden kontrol edin.']
   ],
   steps:[
     'Pasajdaki tüm tarih, sıra ve adım işaretlerini (first, then, finally, sayılar) daire içine alın.',
     'İşaretleri zaman ya da işlem sırasına dizin; bu sırayı bozan cümleyi bulun.',
     'Bilginin DOĞRU olmasına kanmayın: 19. sorudaki sefer tarihi doğrudur, sorun cümlenin bulunduğu yerdir.',
     'Karar sonrası kalan pasajı baştan okuyun: süreç tek yönde akmalı.'
   ],
   trap:{t:'Doğru Bilgi, Yanlış Yer', d:'Cümledeki bilgi doğru ve konuyla ilgili olabilir; yine de anlatıldığı yerde akışı bozabilir. 5. soruda Curie’nin ölümü sonda, 19. soruda sefer bilgisi başta yer alabilirdi. "Bu bilgi doğru mu?" kadar "Burada anlatılmalı mı?" diye de sorun.'}},
  {cat:'bag', title:'Bağlaçlar ve Zamirler', en:'Bağlaçlar ve zamirler',
   roots:[
     ['Bağlaç sizi yanıltmasın','by contrast (buna karşılık) ve therefore (bu yüzden) gibi sözler cümleleri bağlı gösterir. Ancak aradaki konu değişimini düzeltmez (4. ve 13. sorular).'],
     ['Zamirin karşılığı var mı?','this (bu), they (onlar) ve its (onun) gibi sözlerin önceki cümlelerde kimi ya da neyi gösterdiğini bulun (17. soru).'],
     ['Sonuç gerçekten önceki bilgiden mi çıkıyor?','This explains why… (Bu, nedenini açıklar…) sözüyle başlayan cümle önceki bilgilerle çelişiyorsa bağlantı kurulmamıştır (10. soru).'],
     ['Bağlantıları kontrol et','Her zamirin neyi gösterdiğini ve her bağlacın hangi iki düşünceyi bağladığını oklarla gösterin. Bağlantısı olmayan cümleyi inceleyin.']
   ],
   steps:[
     'this / that / they / it / such sözcüklerinin kimi ya da neyi gösterdiğini okla işaretleyin.',
     'however / therefore / by contrast bağlaçlarının iki yakasının aynı konuda mı konuştuğunu kontrol edin.',
     'Bağlaçlı cümle konuyu değiştiriyorsa bağlantıyı yeniden kontrol edin.',
     'Zamirin neyi gösterdiği belli olmayan cümleyi çıkarın; kalan cümlelerin birbirine bağlanıp bağlanmadığına bakın.'
   ],
   trap:{t:'Bağlaç Varsa Doğrudur Sanmayın', d:'Bağlaç kullanılması cümleyi otomatik olarak doğru yere koymaz. 4. soruda by contrast ile kahveden çaya, 13. soruda therefore ile kargadan papağana geçilir. Önceki cümleyle gerçekten mantıklı bir bağlantı kurulup kurulmadığını sorun.'}},
  {cat:'tekrar', title:'Tekrar ve Çelişki', en:'Gereksiz tekrar ve çelişki',
   roots:[
     ['"In other words" tuzağı','Yeniden ifade bir açıklama ya da yeni bir bakış sağlamalıdır. Önceki cümleyi başka sözlerle aynen tekrar ediyorsa gereksizdir (7. soru).'],
     ['Özet ≠ tekrar','Sonuç cümlesi düşünceleri bir araya getirir. Gereksiz tekrar ise yeni bir şey söylemez.'],
     ['Doğrudan çelişki','Bir cümle paragraftaki diğer cümlelerin tam tersini söylüyorsa çelişki vardır (16. soru: piramit işçileri).'],
     ['Bağlantı kuran çelişki','This explains why… (Bu, nedenini açıklar…) sözü paragrafın ana düşüncesine ters düşen bir sonuca bağlanıyorsa anlam bozulur (10. soru).']
   ],
   steps:[
     'İki cümle aynı bilgiyi mi veriyor? İkinci cümle bir örnek ya da açıklama ekliyor mu?',
     'Kural: paragrafta her cümle ya YENİ bilgi ya YENİ açı getirmelidir.',
     'Aday cümleyi çıkarın: hiçbir şey kaybolmıyorsa (anlam da, bilgi de) cümle gereksizdi.',
     'Çelişki varsa dört cümlenin ortak düşüncesini bulun. Tek bir cümle bunun tersini söylüyorsa onu inceleyin.'
   ],
   trap:{t:'Gereksiz Tekrar Tuzağı', d:'7. soruda In other words ile başlayan cümle ilk cümlenin söylediğini yeniden söyler. Gerçek bir açıklama düşünceyi anlaşılır kılar ya da örnek verir. Bu cümleyi çıkardığınızda bilgi eksilmiyorsa gereksiz bir tekrardır.'}},
  {cat:'uslup', title:'Üslup ve Anlatım Dili', en:'Anlatım dili ve ton',
   roots:[
     ['Kişisel anlatım','Bilgi veren resmî bir paragrafta nobody I know (tanıdığım hiç kimse) ya da my uncle (amcam) gibi kişisel sözler üsluba uymayabilir (9. soru ve amca örneği).'],
     ['Ünlem ve duygu','What a terrifying experience! (Ne korkunç bir deneyim!) gibi öznel yorumlar bilgi veren tarafsız bir metnin dilinden ayrılır (15. soru).'],
     ['Sohbet dili','And quite honestly (açıkçası), to be honest (dürüst olmak gerekirse) gibi sözler resmî anlatımdan çok sohbet diline yakındır (9. ve 18. sorular).'],
     ['Doğru bilgi de uyumsuz olabilir','Cümle doğru bilgi verse bile diğer cümlelerden çok farklı bir dille yazılmışsa bütünlüğü bozabilir.']
   ],
   steps:[
     'Paragrafın dilini belirleyin: resmî ve bilgilendirici mi, yoksa samimi bir anlatım mı var?',
     'I (ben), you (sen/siz) ve we (biz) gibi kişisel sözler resmî paragrafta farklı duruyor mu, bakın.',
     'Ünlem, "honestly / by the way" gibi işaret sözcüklerini tarayın.',
     'Şüpheli cümlenin hem anlatım dilini hem ana düşünceyle ilişkisini kontrol edin.'
   ],
   trap:{t:'Doğru Bilgi, Farklı Dil', d:'9. sorudaki musluk cümlesi su tasarrufuyla ilgilidir. Fakat And quite honestly, nobody I know… sözü, verilerle anlatılan resmî bir paragrafın ortasında sohbet eder gibi durur. Konuyla ilgili olması, anlatım dilinin de uyduğu anlamına gelmez.'}},
  {cat:'nuan', title:'Ayrıntı, Kapsam ve İddia', en:'Ayrıntı ve aşırı iddia',
   roots:[
     ['Gereksiz ayrıntı','Ana düşünceye katkısı olmayan küçük bilgiler paragrafta gereksiz kalabilir: keşfi yapan gencin mesleği gibi (14. soru).'],
     ['Kesin konuşan ifadeler','all (hepsi), without exception (istisnasız) ve never (asla) gibi sözler güçlü kanıt gerektirir (8. ve 20. sorular).'],
     ['Aşırı iddia','Paragraf bazı ülkelerden söz ederken bir cümle bütün dünyaya dair kesin hüküm veriyorsa iddiası paragrafı aşar.'],
     ['Temkinli ifadeler','seem (görünmek), roughly (yaklaşık) gibi sözler kesin konuşmaz. Aşırı kesin iddialarla aralarındaki farka dikkat edin.']
   ],
   steps:[
     'all (hepsi), some (bazı), many (birçok) ve without exception (istisnasız) sözlerini işaretleyin. Hangileri kesin, hangileri temkinli?',
     'Çok kesin bir iddiayı destekleyen kanıt paragrafta var mı? Yoksa cümleyi yeniden değerlendirin.',
     'Kişisel bir ayrıntı ana düşünceyi geliştiriyor mu? Katkısı yoksa gereksiz olabilir.',
     'Paragraf temkinli mi, kesin mi konuşuyor? Şüpheli cümleyi bu anlatımla karşılaştırın.'
   ],
   trap:{t:'İlginç Ama Gereksiz Ayrıntı', d:'14. soruda mağarayı bulan gençlerden birinin dişçi olduğu bilgisi doğru ve konuyla ilgili görünür. Ama mağara resimleri, boya yapımı ve koruma hakkında anlatılanlara bir katkısı yoktur. "Bu ayrıntıyı çıkarsam ana düşünce eksilir mi?" diye sorun.'}}
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
  {en:'There are three main reasons why the coastal wetlands are disappearing at such an alarming rate.', tr:'Kıyı sulak alanlarının neden bu kadar endişe verici hızda yok olduğunun başlıca üç nedeni vardır.', tag:'top', note:'"Üç neden" sözü paragrafın neleri anlatacağını söyler. Sonraki cümleler bu nedenleri açıklamalıdır.'},
  {en:'Consider the case of Iceland, which heats nearly ninety per cent of its homes with geothermal energy.', tr:'Evlerinin neredeyse yüzde doksanını jeotermal enerjiyle ısıtan İzlanda örneğini ele alalım.', tag:'ornek', note:'Consider the case of… (Örneğin…): genel düşünceyi İzlanda örneğiyle somutlaştırır.'},
  {en:'My uncle, who ran a bakery for thirty years, still wakes at four every morning.', tr:'Otuz yıl fırın işletmiş amcam hâlâ her sabah saat dörtte uyanıyor.', tag:'sap', note:'Amcayla ilgili kişisel hikâye, bilgi veren bir paragrafın ana konusundan uzaklaşabilir.'},
  {en:'The second reason is the spread of intensive farming, which drains the underground water table.', tr:'İkinci neden, yeraltı su seviyesini kurutan yoğun tarımın yaygınlaşmasıdır.', tag:'des', note:'The second reason… (İkinci neden…) sözü, girişte belirtilen nedenlerden ikincisini açıklar.'},
  {en:'The results were disappointing, however; attendance actually fell by a third.', tr:'Sonuçlar yine de hayal kırıcıydı; katılım üçte bir oranında geriledi.', tag:'kar', note:'however (ancak) ile beklentinin tersine bir sonuç verilir. Bu karşıtlık paragrafı geliştirir.'},
  {en:'Taken together, these findings suggest that handwriting still has a place in the modern classroom.', tr:'Hepsi bir arada değerlendirildiğinde, bu bulgular el yazısının modern sınıfta hâlâ yeri olduğunu gösteriyor.', tag:'son', note:'Taken together… (Birlikte değerlendirildiğinde…) sözü önceki bulgulardan sonuç çıkarır.'},
  {en:'They were finally completed in 1912, three years behind schedule.', tr:'Sonunda 1912’de, planlanan süreden üç yıl geç tamamlandılar.', tag:'kop', note:'They (onlar) sözü önceki cümlelerde geçen çoğul bir ismi göstermelidir. Böyle bir isim yoksa bağlantı kopar.'},
  {en:'The Eiffel Tower, incidentally, was originally intended to stand for only twenty years.', tr:'Eyfel Kulesi, bu arada, aslında yalnızca yirmi yıl ayakta durması için yapılmıştı.', tag:'sap', note:'incidentally (bu arada) sözü, Eiffel Kulesi hakkındaki ayrı bir bilgiye geçildiğini gösterir.'},
  {en:'In one experiment, volunteers who slept for eight hours recalled twice as many words as those who stayed awake.', tr:'Bir deneyde sekiz saat uyuyan gönüllüler, uyanık kalanlardan iki kat fazla sözcük hatırladı.', tag:'ornek', note:'In one experiment… (Bir deneyde…) sözüyle başlayan cümle, araştırma verisiyle ana düşünceyi destekler.'},
  {en:'Despite these advantages, few cities have invested seriously in cycling infrastructure.', tr:'Bütün bu avantajlara rağmen az sayıda şehir bisiklet altyapısına ciddi yatırım yapmıştır.', tag:'kar', note:'Despite these advantages (Bu avantajlara rağmen) önceki bilgilerle karşıtlık kurar; konu aynı kalır.'},
  {en:'This made it considerably easier, of course, for everyone involved.', tr:'Bu, elbette, ilgili herkesin işini epey kolaylaştırdı.', tag:'kop', note:'This (bu) ve it (o) sözlerinin neyi gösterdiği belli değilse cümle önceki bilgilerle bağlanmaz.'},
  {en:'Sleep, contrary to popular belief, is not a passive shutdown but an active, selective process.', tr:'Yaygın kanının aksine uyku, pasif bir kapanma değil etkin ve seçici bir süreçtir.', tag:'top', note:'Yaygın bir düşünceyi düzelten giriş cümlesi: paragrafın devamında bu düşünce açıklanır.'},
  {en:'The expedition’s captain, by the way, kept a parrot named Josiah throughout the voyage.', tr:'Bu arada, seferin kaptanı yolculuk boyunca Josiah adlı bir papağan beslemiştir.', tag:'det', note:'by the way (bu arada) ile verilen papağan bilgisi, seferin bilimsel sonucunu açıklamaz; gereksiz ayrıntıdır.'},
  {en:'Tickets for the opening night, it is recorded, cost two pounds and sixpence.', tr:'Kayıtlara göre açılış gecesi biletleri iki sterlin altı peni tutmuştur.', tag:'det', note:'Bilet fiyatı tarihî bir ayrıntıdır. Paragrafın ana düşüncesine katkısı yoksa gereksiz kalır.'},
  {en:'In other words, the brain treats a well-rehearsed melody much as it treats a physical habit.', tr:'Başka bir deyişle beyin, iyi prova edilmiş bir melodiyi tıpkı fiziksel bir alışkanlık gibi işler.', tag:'des', note:'In other words (Başka bir deyişle) önceki fikri yeni bir açıdan açıklıyorsa yararlıdır. Aynı bilgiyi tekrar ediyorsa gereksizdir.'},
  {en:'Whatever the explanation, one thing is clear: the old policy has failed.', tr:'Açıklama her ne olursa olsun bir şey açık: eski politika başarısız olmuştur.', tag:'son', note:'Önceki bilgileri değerlendirip tek bir sonuca varır; paragrafı tamamlar.'}
];

window.QUESTIONS = [
  {id:1, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Ana konu, uyku ile bellek arasındaki ilişkidir. Her cümle bu konuyu mu anlatıyor?',
   facts:[
    'A good night’s sleep does far more than rest the body; it actively strengthens the memories formed during the day.',
    'As we sleep, the brain replays the day’s experiences, gradually transferring them from short-term to long-term storage.',
    'In laboratory experiments, students who slept for eight hours after studying recalled significantly more material than those who stayed awake.',
    'The invention of the electric light bulb in the nineteenth century extended the working day well into the night.',
    'When this consolidation process is interrupted, even well-rehearsed information can fade within days.'
   ],
   opts:[
     ['(I)','Konu cümlesi: uykunun belleği güçlendirdiğini söyler ve paragrafın ana düşüncesini verir.'],
     ['(II)','Geliştirme: As we sleep (Biz uyurken) sözü, I. cümledeki düşüncenin nasıl gerçekleştiğini açıklar.'],
     ['(III)','Kanıt: In laboratory experiments (Laboratuvar deneylerinde) ifadesi, ana düşünceyi deney sonucuyla destekler.'],
     ['(IV)','BOZAN. Ampulün icadı ve çalışma saatlerinin uzaması: konu uyku–bellek değil, aydınlatma tarihi. Paragrafın ana düşüncesiyle bağı olmayan tek cümle.'],
     ['(V)','Sonuç: this consolidation process (bu pekiştirme süreci) sözü II. cümlede anlatılan sürece işaret eder.']
   ],
   ans:3, ev:['s1-f3','s1-f0','s1-f1'],
   why:'Paragraf uykunun belleği nasıl güçlendirdiğini anlatır: I ana düşünceyi verir, II süreci açıklar, III kanıt sunar, V sonucu belirtir. IV ise ampulün icadına geçerek konudan uzaklaşır.',
   strat:'Bozan cümleyi ararken önce konu cümlesini bulun ve her cümleye tek kelimelik işlev etiketi verin (konu/mekanizma/kanıt/sonuç). Etiketi alamayan cümle yabancıdır; çıkarıp kalan dördü okuduğunuzda akış pürüzsüzse kararınız doğrudur.'},
  {id:2, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'"Çin" kelimesi geçiyor diye konu tutmaz: ana düşünce "yollar üzerinden ticaret ve fikir alışverişi".',
   facts:[
    'For more than a thousand years, a network of caravan routes known as the Silk Road connected China with the Mediterranean world.',
    'Silk was the most valuable commodity travelling westwards, but spices, paper and glass moved along the same paths.',
    'The routes also carried ideas: Buddhism spread from India to China, and paper-making techniques eventually reached Europe.',
    'Few merchants completed the entire journey; most traded their goods at the oasis cities along the way.',
    'The Great Wall of China was originally built to protect the empire from nomadic invasions from the north.'
   ],
   opts:[
     ['(I)','Konu cümlesi: İpek Yolu’nu tanıtır, paragrafın çatısını kurar.'],
     ['(II)','Geliştirme: yolda taşınan malları sayar — "but" listeyi doğal biçimde genişletir.'],
     ['(III)','Geliştirme: Malların yanında fikirlerin de yayıldığını söyler; also (ayrıca) yeni bilgiyi ekler.'],
     ['(IV)','Geliştirme: tüccarların güzergâh pratiğini anlatır; ticaret hikâyesinin ayrılmaz parçası.'],
     ['(V)','BOZAN. Çin Seddi bir savunma yapısıdır. Çin sözcüğü ortak olsa da paragraf ticaret yollarını anlatır; seddin neden yapıldığı ayrı bir konudur.']
   ],
   ans:4, ev:['s2-f4','s2-f0','s2-f1'],
   why:'I–IV yolları, taşınan malları, fikirleri ve tüccarları anlatır. V ise Çin Seddi’nin savunma amacına geçer. China (Çin) sözcüğü ortak olsa da konu değişmiştir.',
   strat:'Ortak kelime sizi yanıltmasın. Çin sözcüğünün geçmesi, Çin Seddi cümlesinin İpek Yolu hakkındaki paragrafı geliştirdiği anlamına gelmez. Cümlenin ana düşünceye katkısını sorun.'},
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
     ['(II)','Konu cümlesi: araştırmaya göre kurgu okumanın empatiyi artırabileceğini söyler.'],
     ['(III)','Kanıt: "In one study" — somut deney verisi II’nin kanıtıdır.'],
     ['(IV)','Geliştirme: mekanizmayı açıklar — romanlar bizi başkalarının iç dünyasına zorlar.'],
     ['(V)','Sonuç: This imaginative exercise (bu hayal etme çalışması) IV. cümledeki düşünceye bağlanır.']
   ],
   ans:0, ev:['s3-f0','s3-f1','s3-f2'],
   why:'II ana düşünceyi verir, III kanıt sunar, IV nedenini açıklar, V sonucu belirtir. I ise matbaanın icadını anlatır. Kitaplarla ilgili olsa da okumanın empatiye etkisini açıklamaz.',
   strat:'Bozan cümle ilk sırada da olabilir. I. cümleyi çıkarınca II. cümle paragrafı doğal biçimde başlatıyorsa I gereksizdir. Cümlenin yerine değil, görevine bakın.'},
  {id:4, cat:'bag',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'by contrast (buna karşılık) bağlacı kullanılmış. Cümle gerçekten kahveyle mi ilgili, yoksa başka bir konuya mı geçiyor?',
   facts:[
    'Coffee is today the second most widely traded commodity in the world after crude oil.',
    'Tea, by contrast, contains antioxidants that are thought to protect the heart.',
    'The coffee plant is native to the highlands of Ethiopia, where it was first cultivated more than a thousand years ago.',
    'From there, traders carried it across the Red Sea to Yemen, and by the seventeenth century coffee houses had opened in London and Paris.',
    'The beverage’s journey from a regional ritual to a global industry is one of the great stories of world trade.'
   ],
   opts:[
     ['(I)','Konu cümlesi: kahvenin ticari önemini ilan eder; paragrafın çatısı.'],
     ['(II)','BOZAN. Tea, by contrast… (Çay ise buna karşılık…) sözleri bağlantı varmış gibi görünür. Ancak paragraf kahvenin tarihiyle ilgiliyken cümle çayın sağlığına geçer.'],
     ['(III)','Geliştirme: Kahvenin kökeninin Etiyopya olduğunu söyler; tarih anlatımını başlatır.'],
     ['(IV)','Geliştirme: Kahvenin Yemen ve Avrupa’ya nasıl yayıldığını anlatır.'],
     ['(V)','Sonuç: The beverage’s (bu içeceğin) sözü kahveyi gösterir ve onun yolculuğunu özetler.']
   ],
   ans:1, ev:['s4-f1','s4-f0','s4-f2'],
   why:'I, III, IV ve V kahvenin tarihini ve ticaretini anlatır. II ise çayın sağlığa etkisinden söz eder. by contrast bağlacı doğru kullanılsa bile bu konu değişimini gidermez.',
   strat:'Bağlaç gördüğünüzde önceki ve sonraki cümleleri birlikte okuyun. by contrast, however veya therefore sözcükleri kullanılmış diye cümlenin konuyla ilgili olduğunu varsaymayın.'},
  {id:5, cat:'akis',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Tarihleri sırayla yazın: 1867 → 1891 → ? → 1903 → 1911. Hangi tarih sıraya uymuyor?',
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
     ['(III)','BOZAN. 1934’teki ölüm, 1891’den 1903’e doğru ilerleyen anlatının ortasında yer alır. Ardından zaman yeniden 1903’e döner.'],
     ['(IV)','Geliştirme: 1903 Nobel’i — III çıkarılınca II ile IV arası pürüzsüz akar.'],
     ['(V)','Geliştirme: Eight years later (Sekiz yıl sonra) sözü, IV. cümledeki 1903 yılından 1911’e geçer.']
   ],
   ans:2, ev:['s5-f2','s5-f1','s5-f3'],
   why:'Yaşam öyküsü 1867 → 1891 → 1903 → 1911 sırasıyla ilerler. III. cümlede 1934 anlatılınca bir sonraki cümle yeniden 1903’e döner. Ölüm bilgisi sonda yer alsaydı zaman sırası bozulmazdı.',
   strat:'Tarihleri ve sıra bildiren sözleri alt alta yazın. Bir bilgi doğru olabilir, fakat yanlış yerde verilmiş olabilir. "Bu bilgi burada mı anlatılmalı?" diye sorun.'},
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
     ['(I)','BOZAN. This process (bu süreç) sözüyle gösterilen bir süreç daha önce anlatılmamış. Bal yapımı cümlesi çıkarılınca II. cümle paragrafı doğal biçimde başlatır.'],
     ['(II)','Konu cümlesi: arıların tarımdaki gerçek değerinin bal değil tozlaşma olduğunu ilan eder.'],
     ['(III)','Geliştirme: As a bee moves… (Arı hareket ederken…) sözüyle tozlaşmanın nasıl gerçekleştiğini anlatır.'],
     ['(IV)','Geliştirme: Some of this pollen (bu polenlerin bir kısmı) sözü III. cümledeki polenlere işaret eder.'],
     ['(V)','Sonuç: this accidental service (bu istemeden sağlanan yarar) sözü, tozlaşmanın dünya için önemini açıklar.']
   ],
   ans:0, ev:['s6-f0','s6-f1','s6-f3'],
   why:'II–V arıların tozlaşmadaki rolünü anlatır. this pollen (bu polenler) III. cümledeki polenleri gösterir. I. cümledeki This process (bu süreç) ise önceki hiçbir bilgiye bağlanmaz; ayrıca konu bal yapımına kayar.',
   strat:'this, they, its ve however sözcüklerinin önceki cümlelerde neye bağlandığını oklarla gösterin. Bağlantısı olmayan cümleyi çıkarıp kalan paragrafı yeniden okuyun.'},
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
     ['(I)','Konu cümlesi: egzersizin ruh hâlini iyileştirdiğini söyler.'],
     ['(II)','BOZAN. In other words (Başka bir deyişle) ile başlayan cümle I. cümledeki bilgiyi yeniden söyler; yeni bir açıklama ya da örnek vermez.'],
     ['(III)','Geliştirme: mekanizma (endorfin) — ana düşünceyi açıklar, yeni bilgi katar.'],
     ['(IV)','Kanıt: "Studies have found" — istatistiksel destek; örnek cümlesi.'],
     ['(V)','Geliştirme: Even modest activity (hafif bir etkinlik bile) sözü, egzersizin küçük miktarlarda da yararlı olabileceğini ekler.']
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
     ['(II)','Geliştirme: kaplumbağanın doğduğu kumsala dönüp yumurtlamasını anlatır.'],
     ['(III)','BOZAN. All marine animals, without exception… (İstisnasız bütün deniz canlıları…) ifadesi kanıt sunmadan kesin bir yok oluş öngörür. Diğer cümleler deniz kaplumbağalarının yuvalarını ve korunmasını anlatır.'],
     ['(IV)','Dönüş: "however" ile tehditler — koruma sorununa geçiş; ölçülü dil ("many turtles").'],
     ['(V)','Sonuç: koruma çözümü — IV’teki soruna yanıt; kapanış.']
   ],
   ans:2, ev:['s8-f2','s8-f3','s8-f4'],
   why:'Paragraf birçok kaplumbağa ve tehdit altındaki yuvalardan söz ederek temkinli konuşur. III ise bütün deniz canlılarının istisnasız yok olacağını söyler; bu kesin iddia desteklenmez ve konuyu aşar.',
   strat:'all (hepsi), never (asla) ve without exception (istisnasız) gibi kesin ifadeleri görünce kanıt arayın. Diğer cümleler many (birçok) ya da some (bazı) diyerek temkinli konuşuyorsa aradaki farkı değerlendirin.'},
  {id:9, cat:'uslup',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Paragraf bilgi veren resmî bir dille yazılmış. Hangi cümle sohbet eder gibi konuşuyor?',
   facts:[
    'Fresh water accounts for less than three per cent of all the water on Earth, and most of that is locked away in glaciers.',
    'As populations grow, competition for the remaining supplies is intensifying, particularly in arid regions.',
    'Agriculture alone consumes roughly seventy per cent of the fresh water that humans use worldwide.',
    'And quite honestly, nobody I know ever thinks twice about leaving the tap running while they brush their teeth.',
    'Meeting the coming shortage, experts warn, will require both technological innovation and changes in everyday habits.'
   ],
   opts:[
     ['(I)','Açılış: dünyadaki tatlı su miktarıyla ilgili tarafsız bir bilgi verir.'],
     ['(II)','Geliştirme: rekabetin artışı — veri temelli sürdürme.'],
     ['(III)','Geliştirme: tarımın payı — "roughly" ölçülü sektör verisi.'],
     ['(IV)','BOZAN. "And quite honestly, nobody I know…" — birinci tekil şahıs ve samimi üslup: üç cümlelik nesnel anlatıyı sokak sohbetine çevirir. İçerik yakın (su israfı) ama anlatım dili paragrafla uyumsuz.'],
     ['(V)','Sonuç: experts warn (uzmanlar uyarıyor) ifadesiyle paragrafın bilgilendirici dilini sürdürür; IV. cümleden farkı belirginleşir.']
   ],
   ans:3, ev:['s9-f3','s9-f0','s9-f4'],
   why:'Paragraf veriler ve uzman görüşleriyle resmî bir dille yazılmıştır. IV. cümledeki quite honestly (açıkçası) ve nobody I know (tanıdığım hiç kimse) ise sohbet diline geçer. Konuyla ilgili olması bu dil farkını gidermez.',
   strat:'Üslubu incelerken paragrafın resmî mi samimi mi olduğunu belirleyin. I (ben), you (sen/siz), we (biz), honestly (açıkçası) gibi sözler ve ünlem işaretleri diğer cümlelerden ayrılıyor mu?'},
  {id:10, cat:'tekrar',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Son cümle "This explains why…" ile bir sonuca bağlanıyor: sonuç, paragrafın ana düşüncesiyle aynı yönde mi?',
   facts:[
    'The concrete used by Roman engineers two thousand years ago has proved astonishingly durable.',
    'Modern analysis has revealed that its secret lies in volcanic ash, which the Romans mixed with quicklime.',
    'Exposed to seawater, the material actually grows stronger, as healing minerals form in its microscopic cracks.',
    'Today’s engineers are studying the ancient recipe in the hope of designing more resilient marine structures.',
    'This explains why so few Roman buildings have survived to the present day.'
   ],
   opts:[
     ['(I)','Konu cümlesi: Roma betonunun dayanıklı olduğunu söyler.'],
     ['(II)','Geliştirme: sırrın volkanik kül — mekanizma.'],
     ['(III)','Geliştirme: deniz suyuyla güçlenme — dayanıklılığın kanıtı; "actually grows stronger" ana düşünceyi pekiştirir.'],
     ['(IV)','Geliştirme: bugünün mühendisleri eski formülü inceliyor — etki ve bağlantı.'],
     ['(V)','BOZAN. "This explains why so few… have survived": hem "this" gönderimi şaşar (paragraf dayanıklılığı anlatıyor) hem iddia I–III’le doğrudan çelişir — dayanıklıysa neden az kalmış? Çelişki zinciri.']
   ],
   ans:4, ev:['s10-f4','s10-f0','s10-f2'],
   why:'I–IV tek yönde konuşur: beton dayanıklıdır, sırrı bilinir, deniz suyu onu güçlendirir, mühendisler inceler. V ise bu zincirin tam tersini "açıklar": az yapı kaldı iddiası hem gönderim olarak havada kalır hem ana düşünceyle çelişir. Bağlaçlı çelişkinin en zarif örneği.',
   strat:'"This explains why…" kalıbını görünce iki denetim yapın: (1) "this" neye gönderiyor — adres paragrafın ana düşüncesi mi? (2) Açıklanan sonuç ana düşünceyle AYNI yönde mi? Yön tersse cümle ne kadar dilbilgisel kusursuzsa o kadar tehlikelidir.'},
  {id:11, cat:'konu',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'"Klavye" kelimesi geçiyor — ama paragrafın ana düşüncesi "el yazısının öğrenme üstünlüğü". Kelime mi odağı mı?',
   facts:[
    'The QWERTY keyboard layout was designed in the 1870s to prevent the keys of mechanical typewriters from jamming.',
    'Recent studies suggest that children who take notes by hand remember more of what they learn than those who type.',
    'Writing by hand, researchers explain, is slower, and so forces the brain to summarize rather than transcribe.',
    'The extra mental effort involved in summarizing appears to anchor ideas more firmly in memory.',
    'For this reason, some universities have begun to reintroduce pen-and-paper examinations.'
   ],
   opts:[
     ['(I)','BOZAN. QWERTY klavyenin tasarımını anlatır. Paragrafın asıl konusu el yazısıyla not almanın öğrenmeye katkısıdır. I. cümle çıkarılınca II doğal bir giriş olur.'],
     ['(II)','Konu cümlesi: El yazısıyla not almanın öğrenmeye katkısını söyler.'],
     ['(III)','Geliştirme: mekanizma — yavaşlık, özetlemeye zorlar.'],
     ['(IV)','Geliştirme: "The extra mental effort" III’ün sonucu; zincir ilerler.'],
     ['(V)','Sonuç: "For this reason" — uygulamaya geçiş; paragrafı kapatır.']
   ],
   ans:0, ev:['s11-f0','s11-f1','s11-f3'],
   why:'II–V, el yazısıyla not almanın öğrenmeye etkisini açıklar. I ise klavyenin tarihini anlatır. typing (yazı yazma) sözcüğü ortak görünse de klavye tarihi ana düşünceyi geliştirmez.',
   strat:'Klavye–el yazısı, çay–kahve ve Çin Seddi–İpek Yolu yakın konular gibi görünür. Ortak sözcükler yerine cümlenin ana düşünceyi geliştirip geliştirmediğine bakın.'},
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
   why:'I ana düşünceyi verir, II ve IV örnekler sunar, V sonuç çıkarır. III ise therefore (bu yüzden) ile başlayan bir sonuç gibi görünür; karganın tel bükmesi ile papağan fotoğrafçılığı arasında mantıklı bir bağ yoktur.',
   strat:'therefore (bu yüzden) gördüğünüzde "Hangi bilgiden hangi sonuca varılıyor?" diye sorun. Sonuç önceki bilgiden çıkmıyorsa cümle paragrafın akışını bozar.'},
  {id:14, cat:'nuan',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Gereksiz ayrıntıyı arayın: Hangi bilgi paragrafın ana düşüncesine katkıda bulunmuyor?',
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
     ['(III)','Geliştirme: boya yapımı — "they" II’deki sanatçılara bağlanır.'],
     ['(IV)','BOZAN. Mağarayı bulan gençlerden birinin sonradan dişçi olması, mağara resimleri ve koruma çalışmaları hakkında bir şey eklemiyor. Bu bilgi paragrafta gereksiz kalıyor.'],
     ['(V)','Dönüş/sonuç: turizmin zararı ve koruma — günümüze bağlanan kapanış.']
   ],
   ans:3, ev:['s14-f3','s14-f0','s14-f4'],
   why:'I, II, III ve V mağara resimlerini, boyaların yapımını ve resimlerin korunmasını anlatır. IV ise mağarayı bulan bir kişinin sonraki mesleğine geçer. Bilgi doğru olsa da paragrafın ana düşüncesini geliştirmez.',
   strat:'İlginç bir ayrıntı gördüğünüzde sorun: (1) Bu bilgi çıkarılsa ana düşünce eksilir mi? (2) Hangi cümleyi geliştiriyor? İkisine de yanıt bulamıyorsanız ayrıntı gereksiz olabilir.'},
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
     ['(I)','Açılış: volkanik patlamanın nedenini tarafsız bir dille açıklar.'],
     ['(II)','Geliştirme: gaz kabarcıkları — mekanizmanın devamı.'],
     ['(III)','Geliştirme: patlamanın görünür sonuçları.'],
     ['(IV)','Geliştirme: izleme ve öngörü — bilimsel pratik; paragrafın uygulama alanı.'],
     ['(V)','BOZAN. What a terrifying experience…! (Ne korkunç bir deneyim!) ünlemli ve öznel bir yorumdur. Önceki dört cümlenin tarafsız bilim anlatımına uymaz.']
   ],
   ans:4, ev:['s15-f4','s15-f0','s15-f3'],
   why:'I–IV volkanik patlamayı bilimsel bir dille açıklar. V. cümle ise ünlem işareti ve must be (olmalı) sözüyle kişisel bir duygu belirtir. Bu anlatım dili diğer cümlelere uymaz.',
   strat:'Ünlem işareti gördüğünüzde cümlenin kişisel bir duygu mu, doğrulanabilir bilgi mi anlattığını sorun. Paragraf tarafsızsa öznel yorum uyumsuz olabilir; konu aynı olsa bile anlatım dilini kontrol edin.'},
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
     ['(II)','Konu cümlesi: piramitleri ücretli ve becerikli işçilerin yaptığı düşüncesini verir.'],
     ['(III)','Kanıt: işçi köyleri — fırınlar, bira imalâthaneleri, klinikler.'],
     ['(IV)','Kanıt: grafitiler ve ekip adları — aidiyet ve gurur duygusu.'],
     ['(V)','Sonuç: "Far from being slaves" — I’in iddiasını kesin biçimde çürütür ve kapanış yapar.']
   ],
   ans:0, ev:['s16-f0','s16-f1','s16-f4'],
   why:'II–V, piramitleri ücretli işçilerin yaptığı düşüncesini destekler. I ise bunun tam tersini söyler. In fact (aslında) sözü kullanılmış olması, diğer dört cümleyle çelişmesini gidermez.',
   strat:'Her cümlenin ana düşünceyi destekleyip desteklemediğine bakın. Dört cümle aynı bilgiyi desteklerken biri tersini söylüyorsa o cümleyi inceleyin. In fact (aslında) gibi sözler iddiayı tek başına kanıtlamaz.'},
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
     ['(II)','BOZAN. Its journey (onun yolculuğu) tekil bir varlığı gösterir. Öncesinde ise millions of birds (milyonlarca kuş) vardır. Zamirin hangi kuşa ait olduğu belli değildir.'],
     ['(III)','Geliştirme: yağ rezervleri — göç öncesi hazırlık.'],
     ['(IV)','Geliştirme: Others (diğerleri) sözü, III. cümledeki diğer kuş türlerini gösterir.'],
     ['(V)','Sonuç: uydu takibi — modern bilginin kapanışı; "some species" zinciri taşır.']
   ],
   ans:1, ev:['s17-f1','s17-f0','s17-f3'],
   why:'I çoğul açar ("millions of birds"), III–IV çoğul geliştirir ("many species", "Others"), V çoğul kapatır ("some species"). II’nin "Its"i bu çoğul dünyada tekil bir öncül arar ve bulamaz: gönderim havada kalır — zincir kopmasının en saf biçimi.',
   strat:'Zamirleri kontrol ederken tekil ve çoğul uyumuna bakın: they (onlar) çoğul, it/its (o/onun) tekildir. Its gördüğünüzde önceki cümlede uygun bir tekil isim arayın.'},
  {id:18, cat:'uslup',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Paragraf resmî bir tarih anlatısı. Hangi cümle sohbet diline geçiyor?',
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
     ['(III)','BOZAN. "And to be honest… terribly noisy, dusty…!" — samimi üslup + ünlem + öznel tahmin ("must have been"): resmî tarih anlatısını sokak sohbetine çevirir. Bilgi kısmen doğru olsa bile anlatım dili uyumsuz.'],
     ['(IV)','Geliştirme: fikirlerin dolaşımı — etkinin somutlanması.'],
     ['(V)','Sonuç: Reform örneği — hızla pekiştirme; kapanış.']
   ],
   ans:2, ev:['s18-f2','s18-f0','s18-f4'],
   why:'I, II, IV ve V tarihsel-etkisel bir anlatı kurar: dönüş, yayılma, dolaşım, sonuç. III ise bu anlatıya "to be honest" kalıbıyla bir sohbet notu düşer: üslup, paragrafın sesiyle uyumsuz olduğu için içerik ne kadar renkli olursa olsun cümle parçaya yabancıdır.',
   strat:'to be honest (dürüst olmak gerekirse) ve by the way (bu arada) gibi sözler sohbet diline yakındır. Bu sözleri gördüğünüzde paragrafın geri kalanının resmî olup olmadığına bakın.'},
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
     ['(V)','Sonuç: His achievement (onun başarısı) sözü, III. cümlede anlatılan Champollion’un başarısını gösterir.']
   ],
   ans:3, ev:['s19-f3','s19-f2','s19-f4'],
   why:'Anlatı tek yönde ilerler: bulunma (1799) → umut → çözüm (1822) → anlamı (bugün). IV bu zincirin ortasında 1798’e geri sarar; doğru bir bilgi, yanlış bir konumda. Çıkarılınca I–II–III–V kusursuz bir "keşif hikâyesi" olur.',
   strat:'Geri sarma tuzağında bilgi doğru, yer yanlıştır: sefer tarihi gerçekten 1798’dir. Tarihsel anlatılarda her tarih cümlesinin yanına yılını yazın ve okları çizin; ok geriye dönüyorsa o cümle akışı bozuyor demektir. Çıkarma testi kararı kesinleştirir.'},
  {id:20, cat:'nuan',
   stem:'Bu parçada anlam bütünlüğünü <em class="kw">bozan cümle</em> aşağıdakilerden hangisidir?',
   clue:'Paragraf temkinli konuşurken hangi cümle gelecekle ilgili kesin bir iddiada bulunuyor?',
   facts:[
    'Electric vehicles have moved from technical curiosity to mainstream choice in little more than a decade.',
    'Improvements in battery technology have steadily extended their range while reducing costs.',
    'In several countries, electric models now account for more than half of all new cars sold.',
    'Charging networks, however, still lag far behind, especially in rural areas.',
    'The petrol engine, which will disappear from the roads within two or three years, simply cannot compete.'
   ],
   opts:[
     ['(I)','Açılış: Elektrikli araçların yaygınlaştığını söyler ve konuyu tanıtır.'],
     ['(II)','Geliştirme: batarya teknolojisi — neden-sonuç zinciri.'],
     ['(III)','Geliştirme: ülke verileri — "In several countries" ölçülü kanıt.'],
     ['(IV)','Dönüş: "however" — şarj altyapısı eksikliği; dengeli eleştiri.'],
     ['(V)','BOZAN. Benzinli araçların iki-üç yıl içinde yollardan kaybolacağı iddiası kanıtlanmıyor. IV. cümle şarj altyapısındaki eksikleri anlatırken V. cümle kesin bir öngörüye geçiyor.']
   ],
   ans:4, ev:['s20-f4','s20-f3','s20-f4'],
   why:'Paragrafın dili temkinlidir: in several countries (bazı ülkelerde) der ve şarj altyapısının eksiklerini belirtir. V. cümle ise benzinli araçların iki-üç yıl içinde yok olacağını kanıtsız biçimde söyler.',
   strat:'Ölçü denetimi: paragrafın kapsam sözcüklerini listeleyin (some, several, many, steadily) ve uçları işaretleyin (all, never, within two years). Uç iddianın paragraftaki kanıtını arayın — bulamıyorsanız cümle bozandır. IV’ün dengeli "however" cümlesi, V’in aşırılığını kıyasla görünür kılar.'}
];

window.__VERI_OK = 1;
/* VERI-SONU: Bu satırı görüyorsanız veri.js tamamdır. */
