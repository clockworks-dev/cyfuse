/* =========================================================
   Kibernetička sigurnost — interakcije i podaci
   ========================================================= */

/* ---------- Podaci: satnica modula ---------- */
const MODULES = [
  {
    num: '01',
    name: 'Cyber Security Awareness',
    hrs: 3,
    chips: ['phishing', 'lozinke i 2FA', 'privatnost', 'pravni okvir'],
    outcomes: [
      'objasniti <strong>CIA trijadu</strong> (povjerljivost, cjelovitost, dostupnost)',
      'razlikovati vrste <strong>prijetnji, napadača i napada</strong>',
      'prepoznati <strong>phishing</strong> i socijalni inženjering',
      'primijeniti dobre prakse <strong>digitalne higijene</strong> (lozinke, dvofaktorska autentifikacija, upravitelji lozinki) i objasniti osnove pravnog okvira (GDPR, neovlašteni pristup kao kazneno djelo)'
    ],
    content: [
      'Zašto je sigurnost važna: stvarni incidenti i posljedice (<strong>WannaCry</strong>, povrede podataka)',
      '<strong>CIA trijada</strong>; prijetnja, ranjivost, rizik — kako napadač razmišlja',
      'Vrste napadača i motivacije: <strong>phishing, malware, ransomware, DDoS</strong>',
      'Socijalni inženjering i psihologija prijevare (hitnost, autoritet, strah)',
      'Lozinke i upravitelji lozinki, <strong>dvofaktorska autentifikacija</strong> (2FA/MFA)',
      'Privatnost, digitalni otisak i sigurnost na društvenim mrežama',
      'Pravni okvir: <strong>GDPR</strong>, prijava incidenta Nacionalnom CERT-u, neovlašteni pristup kao kazneno djelo'
    ],
    sources: [
      ['CARNET Nacionalni CERT (cert.hr) — #SurfajSigurnije', 'https://www.cert.hr/'],
      ['Have I Been Pwned — provjera curenja lozinki', 'https://haveibeenpwned.com/'],
      ['NIST SP 800-63B — Digital Identity Guidelines', 'https://pages.nist.gov/800-63-4/sp800-63b.html'],
      ['Kazneni zakon RH, čl. 266. — Neovlašteni pristup', 'https://www.zakon.hr/z/98/kazneni-zakon'],
      ['CERT.hr — Sigurna knjižica', 'https://www.cert.hr/sigurna-knjizica/'],
      ['CARNET — Osnove kibernetičke zaštite (priručnik, 2025)', 'https://edutorij.carnet.hr/']
    ],
    tasks: [
      {
        badge: 'Zadatak 1',
        title: 'Analiza phishing e-pošte — „Uoči prijevaru"',
        steps: [
          'Nastavnik pripremi <strong>6 primjera poruka</strong> (e-pošta, SMS, poruka na društvenoj mreži): 4 lažne (phishing, lažna nagrada, lažna hitna obavijest IT podrške, lažna trgovina) i 2 stvarne i legitimne.',
          'Učenici u parovima pregledavaju poruke i za svaku ispunjavaju tablicu: pošiljateljeva adresa, prikazani naslov veze naspram stvarnog URL-a, ton poruke, gramatičke greške, privici.',
          'Za svaku poruku odlučuju: legitimna ili prijevara? Obrazlažu najmanje tri indikatora.',
          'Pouka: napadači koriste emocije (hitnost, strah, pohlepa) i lažni identitet; uvijek provjeriti stvarnu adresu pošiljatelja i URL.'
        ],
        outcome: 'Popunjena tablica analize svih 6 poruka s obrazloženjem i ispravno razvrstanih primjera; učenik samostalno navodi najmanje 5 tipičnih obilježja phishing poruke.'
      },
      {
        badge: 'Zadatak 2',
        title: 'Moja lozinka u procijepu — provjera curenja podataka',
        steps: [
          'Učenik provjerava jednu svoju (ili školsku demonstracijsku) e-adresu na servisu <strong>Have I Been Pwned</strong> i bilježi u kojim je curenjima podataka adresa kompromitirana.',
          'Procjenjuje rizik: je li uz adresu procurila i lozinka, a je li ta lozinka negdje još u upotrebi?',
          'Postavlja jedinstvenu lozinku (najmanje 8 znakova uz 2FA, odnosno najmanje 15 znakova bez 2FA prema NIST preporukama) i omogućuje 2FA na jednom vlastitom računu.',
          'Rasprava: zašto ne koristiti istu lozinku na više servisa i kako upravitelj lozinki rješava taj problem.'
        ],
        outcome: 'Izvješće o statusu provjere curenja, jedna novopostavljena jedinstvena lozinka i aktiviran 2FA na konkretnom računu; učenik objašnjava zašto duljina lozinke povećava sigurnost.'
      }
    ]
  },
  {
    num: '02',
    name: 'Etičko hakiranje',
    hrs: 4,
    chips: ['white/grey/black hat', 'pentest faze', 'Nmap', 'MITRE ATT&CK'],
    outcomes: [
      'razlikovati <strong>white/grey/black hat</strong> pristupe',
      'opisati <strong>faze penetracijskog testiranja</strong>',
      'navesti pravna i etička pravila (pisano odobrenje, rules of engagement)',
      'samostalno provesti jednostavno <strong>skeniranje u laboratoriju</strong>',
      'objasniti <strong>responsible disclosure</strong> i bug bounty programe'
    ],
    content: [
      'Što je etičko hakiranje, razlike između white/grey/black hat, <strong>pravila angažmana</strong> (rules of engagement) i pisano odobrenje',
      'Faze penetracijskog testiranja: izviđanje, skeniranje, dobivanje pristupa, održavanje pristupa, izvješćivanje',
      '<strong>Cyber Kill Chain</strong> i pregled <strong>MITRE ATT&CK</strong> matrice — kako se opisuje ponašanje napadača',
      'Priprema laboratorija: virtualni strojevi (<strong>Kali Linux</strong> i ranjivi ciljevi), osnove naredbene linije',
      'Prvi alat: <strong>Nmap</strong> (skeniranje otvorenih portova i verzija usluga), dopušteni cilj scanme.nmap.org',
      'Responsible disclosure i bug bounty; <strong>Hacknite</strong> i <strong>Hackultet</strong> natjecanja Nacionalnog CERT-a'
    ],
    sources: [
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner'],
      ['MITRE ATT&CK — baza znanja o taktikama napadača', 'https://attack.mitre.org/'],
      ['Nmap — dokumentacija (scanme.nmap.org)', 'https://nmap.org/book/man-examples.html'],
      ['Hacknite — CTF natjecanje Nacionalnog CERT-a', 'https://www.cert.hr/hacknite'],
      ['Hackultet — platforma za vježbanje CTF zadataka', 'https://platforma.hackultet.hr/'],
      ['CARNET — Osnove kibernetičke zaštite (priručnik, 2025)', 'https://edutorij.carnet.hr/']
    ],
    tasks: [
      {
        badge: 'Zadatak 3',
        title: 'Postavi laboratorij i skeniraj ranjivi cilj',
        steps: [
          'Učenik instalira <strong>VirtualBox</strong> i pokreće pripremljene <strong>Kali Linux i Metasploitable2</strong> virtualne strojeve (ili koristi TryHackMe sobe ako škola nema dovoljno resursa).',
          'Iz Kali Linuxa izvršava osnovno skeniranje virtualnog cilja: <code>nmap -sV [IP adresa cilja]</code> i bilježi koje su usluge (port, verzija) vidljive.',
          'Ponavlja skeniranje na dopuštenom javnom cilju <code>scanme.nmap.org</code> i uspoređuje rezultate — koji je port otvoren i zašto.',
          'Izrađuje mini-izvješće: popis otkrivenih usluga, procjena napadnog vektora i jednostavna preporuka za obranu (npr. isključiti nepotrebne usluge).'
        ],
        outcome: 'Dva uspješna skeniranja (lokalni laboratorij i scanme.nmap.org) te mini-izvješće s nalazima; učenik razlikuje legitimno vježbovno skeniranje od neovlaštenog skeniranja tuđih sustava.'
      },
      {
        badge: 'Zadatak 4',
        title: 'Put napadača — MITRE ATT&CK karta',
        steps: [
          'U parovima odaberite jednu stvarnu tehniku iz MITRE ATT&CK baze (npr. <strong>T1566 Phishing</strong> ili <strong>T1110 Brute Force</strong>) i proučite njezin opis, taktiku i povezane ranjivosti.',
          'Nacrtajte na A4 „kartu napada": taktike (zašto) → tehnika (kako) → primjer u stvarnom svijetu → moguća obrana (detekcija, ublažavanje).',
          'Prezentirajte kartu razredu u 3 minute; razred dopunjava propuštene obrambene mjere.',
          'Veza s praksom: nacionalni CTF Hacknite i Hackultet koriste slične scenarije — prijavite se na sljedeće natjecanje.'
        ],
        outcome: 'Jedna prezentirana ATT&CK karta s jasno označenim putem napada i protumjerama; učenik objašnjava razliku između taktike i tehnike.'
      }
    ]
  },
  {
    num: '03',
    name: 'Mrežna sigurnost',
    hrs: 5,
    chips: ['Wireshark', 'OSI/TCP-IP', 'ARP spoofing', 'vatrozid', 'WPA3'],
    outcomes: [
      'objasniti kako mreže rade sa sigurnosnog stajališta (<strong>OSI/TCP-IP, IP, portovi, DNS, DHCP, HTTP/HTTPS</strong>)',
      'analizirati mrežni promet alatom <strong>Wireshark</strong>',
      'prepoznati česte mrežne napade (<strong>sniffing, ARP spoofing, DoS/DDoS, man-in-the-middle</strong>)',
      'konfigurirati osnovne zaštite (<strong>vatrozid, segmentacija, IDS/IPS, VPN</strong>) i objasniti sigurnost bežičnih mreža (WPA2/WPA3)'
    ],
    content: [
      'Ponavljanje: <strong>OSI/TCP-IP model</strong>, IP adrese i portovi, DNS, DHCP, HTTP/HTTPS',
      'Analiza prometa alatom <strong>Wireshark</strong> — hvatanje, filtriranje i čitanje paketa',
      'Mrežni napadi: sniffing, ARP spoofing, DoS/DDoS, man-in-the-middle (konceptualno i u laboratoriju)',
      'Zaštite: vatrozid, <strong>VLAN segmentacija</strong>, IDS/IPS, VPN, princip najmanjih privilegija i obrana u dubini',
      'Sigurnost bežičnih mreža: <strong>WPA2/WPA3</strong> i tipični propusti (slabe lozinke, WPS, „evil twin")'
    ],
    sources: [
      ['Wireshark — SampleCaptures (uzorci prometa)', 'https://wiki.wireshark.org/SampleCaptures'],
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner'],
      ['CARNET — Osnove kibernetičke zaštite (priručnik, 2025)', 'https://edutorij.carnet.hr/']
    ],
    tasks: [
      {
        badge: 'Zadatak 5',
        title: 'HTTP ili HTTPS — tko može čitati vaše poruke?',
        steps: [
          'U laboratoriju učenik pokreće <strong>Wireshark</strong> na sučelju i otvara jednostavnu stranicu preko HTTP-a (primjer s ranjivom prijavnom formom u lokalnom laboratoriju).',
          'U snimci mrežnog prometa filtrira HTTP promet i promatra zahtjev za prijavu — može li se vidjeti korisničko ime i lozinka u čitljivom obliku?',
          'Isti postupak ponavlja preko <strong>HTTPS-a</strong>: promet je sada šifriran i sadržaj se ne može pročitati.',
          'Usporedite i zaključite: zašto je HTTPS zaštita od sniffinga i zašto javni Wi-Fi bez šifriranja nosi rizik.'
        ],
        outcome: 'Dvije usporedne snimke mrežnog prometa (HTTP i HTTPS) koje jasno pokazuju razliku u čitljivosti prijavnih podataka; učenik objašnjava ulogu TLS-a u zaštiti prometa.'
      },
      {
        badge: 'Zadatak 6',
        title: 'Detektiv prometa — prepoznaj napad u snimci',
        steps: [
          'Nastavnik podijeli pripremljenu <strong>.pcap snimku</strong> (s Wireshark SampleCaptures ili vlastitu laboratorijsku) sa sumnjivim događajima: ARP spoofing, čudan DNS ili DDoS-sličan obrazac.',
          'Učenici u Wiresharku analiziraju promet: korištenjem statistike (Statistics → Protocol Hierarchy, Conversations) i filtera (<code>arp</code>, <code>dns</code>, <code>icmp</code>) pronalaze anomalije.',
          'Za svaku anomaliju zapisuju: što se dogodilo, tko su sudionici (IP/MAC), kako bi to otkrio obrambeni sustav (IDS pravilo, upozorenje).',
          'U završnom izvješću predlažu jednu obrambenu mjeru po napadu (vatrozidno pravilo, segmentacija, nadogradnja na WPA3).'
        ],
        outcome: 'Izvješće s najmanje dvije prepoznate anomalije i predloženim obrambenim mjerama; učenik samostalno koristi osnovne Wireshark filtere i statistiku.'
      }
    ]
  },
  {
    num: '04',
    name: 'OSINT',
    hrs: 3,
    chips: ['Google dorking', 'metapodaci', 'geolokacija', 'dezinformacije'],
    outcomes: [
      'objasniti što je <strong>OSINT</strong> i čemu služi',
      'koristiti javne izvore za prikupljanje informacija (<strong>napredno pretraživanje, metapodaci, geolokacija</strong>)',
      'procijeniti <strong>pouzdanost izvora</strong>',
      'poštovati <strong>etiku i privatnost</strong> (istražuju se samo fiktivni ciljevi) i prepoznati dezinformacije'
    ],
    content: [
      'Definicija OSINT-a, <strong>obavještajni ciklus</strong> i primjene (sigurnost, novinarstvo, provjera činjenica)',
      'Napredno pretraživanje (<strong>Google dorking</strong>), WHOIS i DNS zapisi, arhivirane verzije stranica (Wayback Machine)',
      '<strong>Metapodaci</strong> datoteka i fotografija, geolokacija na temelju slika',
      'Provjera činjenica i prepoznavanje dezinformacija, <strong>obrnuti pretraživanje slika</strong>',
      'Etika: što je dopušteno, a što nije, zaštita vlastitog digitalnog otiska. Pravilo: <strong>nikada se ne istražuju stvarne privatne osobe, kolege ili nastavnici</strong>'
    ],
    sources: [
      ["Bellingcat's Online Investigation Toolkit (OSINT alati)", 'https://www.bellingcat.com/toolkit/'],
      ['Trace Labs — OSINT Search Party CTF', 'https://www.tracelabs.org/'],
      ['CARNET — Osnove kibernetičke zaštite (priručnik, 2025)', 'https://edutorij.carnet.hr/']
    ],
    tasks: [
      {
        badge: 'Zadatak 7',
        title: 'Izmišljeni cilj: operacija „Digitalni trag"',
        steps: [
          'Nastavnik pripremi fiktivnu osobu „Ivana K." — izmišljeni profil s nekoliko javno dostupnih tragova: lažni profil na društvenoj mreži, slika s metapodacima, izmišljena tvrtka s web stranicom.',
          'Učenici u timovima koriste samo javne izvore: napredno pretraživanje (<code>site:</code>, <code>filetype:</code>), pregled metapodataka slike i arhivirane verzije stranice.',
          'Svaki pronalazak upisuju u tablicu: izvor → podatak → procjena pouzdanosti (potvrđeno / vjerojatno / neprovjerljivo).',
          'Izvještaj: profil fiktivne osobe + procjena koliko bi netko zlonamjeran mogao saznati, te 3 mjere za smanjenje vlastitog digitalnog otiska.'
        ],
        outcome: 'Timski izvještaj s popisom pronalazaka i procjenom pouzdanosti; učenik objašnjava kako se vlastiti digitalni otisak smanjuje (postavke privatnosti, brisanje starih računa, razumna dijeljenja).'
      },
      {
        badge: 'Zadatak 8',
        title: 'Geolokacijski zadatak: gdje je snimljena ova slika?',
        steps: [
          'Nastavnik podijeli nekoliko fotografija pripremljenih za vježbu (pogled, detalji iz okoline, natpisi) — cilj je odrediti lokaciju isključivo iz javno vidljivih detalja na slici.',
          'Učenici koriste tehniku iz <strong>Bellingcatovog priručnika</strong>: prepoznavanje objekata (planine, arhitektura, prometna signalizacija), obrnuto pretraživanje slike i usporedba s kartama i satelitskim snimkama.',
          'Za svaku sliku bilježe redoslijed zaključaka: koji je detalj bio odlučujući i kako bi se zaključak mogao potvrditi.',
          'Rasprava o granicama: što sve objavljena fotografija otkriva o pošiljatelju i zašto se prije objave uklanjaju metapodaci.'
        ],
        outcome: 'Za najmanje jednu fotografiju ispravno određena lokacija s obrazloženim redoslijedom zaključaka; učenik opisuje postupak uklanjanja metapodataka prije objave slika.'
      }
    ]
  },
  {
    num: '05',
    name: 'Kriptografija',
    hrs: 4,
    chips: ['AES i RSA', 'hash i salt', 'TLS/HTTPS', 'CyberChef'],
    outcomes: [
      'razlikovati <strong>kodiranje, sažimanje (hash) i šifriranje</strong>',
      'objasniti <strong>simetrične (AES)</strong> i <strong>asimetrične (RSA)</strong> algoritme',
      'razumjeti <strong>hash funkcije, salt</strong> i zašto se lozinke ne pohranjuju kao običan tekst',
      'objasniti <strong>digitalne potpise, certifikate i TLS/HTTPS</strong> te prepoznati česte pogreške (vlastiti algoritmi, slabi ključevi)'
    ],
    content: [
      'Kratka povijest: <strong>Cezarova šifra, Vigenère, Enigma</strong> — zašto se „skrivanje" razvilo u modernu kriptografiju',
      'Simetrična kriptografija (<strong>AES</strong>), asimetrična (<strong>RSA</strong> — osnovna ideja), razmjena ključeva',
      'Hash funkcije (<strong>SHA-256</strong>): jednosmjernost, kolizije, salt i sigurno pohranjivanje lozinki',
      'Digitalni potpisi, certifikati, PKI, <strong>TLS/HTTPS</strong>',
      'Česte pogreške: izmišljanje vlastitih algoritama, prekratki ključevi, ponovno korištenje ključeva',
      'Rad u alatu <strong>CyberChef</strong>: kodiranje, hashiranje i šifriranje „drag-and-drop" receptima'
    ],
    sources: [
      ['CyberChef (GCHQ) — analiza i dekodiranje podataka', 'https://gchq.github.io/CyberChef/'],
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner'],
      ['CERT.hr — Sigurna knjižica', 'https://www.cert.hr/sigurna-knjizica/']
    ],
    tasks: [
      {
        badge: 'Zadatak 9',
        title: 'Cezarova šifra u Pythonu — šifriraj, dešifriraj, slomi',
        steps: [
          'Učenik u Pythonu piše funkcije za Cezarovu šifru: šifriranje, dešifriranje i <strong>brute-force</strong> ispis svih 25 mogućih ključeva za zadani šifrirani tekst.',
          'Test: šifrirajte poruku „ZNANJE JE NAJBOLJA ZASTITA" ključem 11 i proslijedite drugom učeniku koji je mora dešifrirati bez ključa — isključivo brute-force metodom.',
          'Usporedite s kategorijom „cryptography" na picoCTF/picoGym: isti principi, samo moderniji alati (CyberChef, base64, XOR).',
          'Zaključak: ključni prostor od 25 mogućnosti slomljiv je u sekundi — zašto su moderni algoritmi (AES-256) praktički ne slomljivi brute-forceom.'
        ],
        outcome: 'Izrađen Python program s tri funkcije (šifriranje, dešifriranje, brute-force) i uspješno dešifrirana poruka bez ključa; učenik objašnjava zašto ključni prostor određuje otpornost na brute-force.',
        code: {
          label: 'Pomoć za učenike (radni okvir)',
          body: `def cezar(tekst, kljuc):
    rezultat = []
    for znak in tekst:
        if znak.isalpha():
            baza = ord("a") if znak.islower() else ord("A")
            rezultat.append(chr((ord(znak) - baza + kljuc) % 26 + baza))
        else:
            rezultat.append(znak)
    return "".join(rezultat)

poruka = cezar("ZNANJE JE NAJBOLJA ZASTITA", 11)
print("Sifrirano:", poruka)
for kljuc in range(26):
    print(kljuc, cezar(poruka, -kljuc))`
        }
      },
      {
        badge: 'Zadatak 10',
        title: 'CyberChef — hash, kodiranje i recept za rješavanje',
        steps: [
          'U CyberChef-u učenik izračunava <strong>SHA-256 hash</strong> dvije inačice datoteke: izvorne i one u kojoj je promijenjeno jedno slovo — uspoređuje i zaključuje o osjetljivosti hasha (efekt lavine) i upotrebi za provjeru integriteta.',
          'Zatim gradi „recept": zadana je Base64 kodirana poruka → ROT13 → HEX; učenik složi lanac operacija i dekodira poruku.',
          'Rješava jednostavni kripto zadatak iz <strong>picoCTF picoGym</strong> kategorije „Cryptography" pomoću CyberChefa.',
          'Ekstra: provjera zašto se lozinke ne pohranjuju kao običan tekst — simulacija: hash lozinke s i bez sala i pokušaj pretraživanja po poznatom hashu.'
        ],
        outcome: 'Riješena dva CyberChef recepta (hash + dekodiranje) i jedan picoCTF kripto zadatak; učenik razlikuje hash (jednosmjeran, integritet) od šifriranja (dvosmjeran, povjerljivost).'
      }
    ]
  },
  {
    num: '06',
    name: 'OWASP — sigurnost web aplikacija',
    hrs: 5,
    chips: ['OWASP Top 10:2025', 'SQL injection', 'XSS', 'Juice Shop', 'DVWA'],
    outcomes: [
      'navesti glavne kategorije <strong>OWASP Top 10:2025</strong>',
      'objasniti kako rade web aplikacije (<strong>zahtjev/odgovor, sesije, kolačići</strong>)',
      'prepoznati ranjivosti <strong>Broken Access Control, Security Misconfiguration, Injection (SQL/XSS), Authentication Failures</strong>',
      'primijeniti osnovne ispravke (<strong>parametrizirani upiti, validacija i kodiranje izlaza, pristupne kontrole</strong>) i raditi u namjerno ranjivim aplikacijama'
    ],
    content: [
      'Kako rade web aplikacije: HTTP zahtjev/odgovor, sesije i kolačići',
      '<strong>OWASP Top 10:2025</strong> — pregled liste i novosti (Software Supply Chain Failures, Mishandling of Exceptional Conditions; SSRF je sada dio Broken Access Control)',
      'Broken Access Control (A01) — zašto „samo frontend" provjera nije provjera',
      'Injection (A05): <strong>SQL injection i XSS</strong> — kako nastaju i kako se sprječavaju (parametrizirani upiti, validacija, kodiranje izlaza)',
      'Authentication Failures (A07), Security Misconfiguration (A02), Cryptographic Failures (A04) — prepoznati i ispraviti',
      'Rad u namjerno ranjivim aplikacijama: <strong>OWASP Juice Shop, DVWA, WebGoat</strong> — na lokalnom računalu'
    ],
    sources: [
      ['OWASP Top 10:2025 — lista kritičnih rizika', 'https://top10.owasp.org/2025/'],
      ['OWASP Juice Shop — ranjiva aplikacija za vježbe', 'https://owasp.org/projects/juice-shop'],
      ['OWASP Vulnerable Web Applications Directory (DVWA, WebGoat)', 'https://vwad.owasp.org/']
    ],
    tasks: [
      {
        badge: 'Zadatak 11',
        title: 'SQL injection — prijava bez ispravne lozinke',
        steps: [
          'U lokalnoj <strong>DVWA</strong> (razina „low") učenik pokušava prijavu kao admin s lozinkom koju ne zna.',
          'U polje korisničko ime unosi klasični payload: <code>admin" --</code> (ili <code>" OR 1=1 --</code>) i promatra — prijava uspijeva bez ispravne lozinke.',
          'Rasprava: zašto je uspjelo? SQL upit sastavljen spajanjem korisničkog unosa; posebni znakovi mijenjaju logiku upita (komentar <code>--</code> poništava provjeru lozinke).',
          'Ispravak: usporedni primjer koda — spajanje stringova (ranjivo) naspram parametriziranog upita (sigurno).',
          'Klasifikacija nalaza: Injection (A05:2025, CWE-89 SQL Injection) iz OWASP Top 10:2025.'
        ],
        outcome: 'Uspješna prijava na administratorski račun u DVWA (razina „low"); učenik objašnjava kako ograničavanje broja pokušaja prijave (rate limiting) ili složenija lozinka sprječavaju ovakav napad.',
        code: {
          label: 'Usporedba — ranjivo naspram sigurnog upita',
          body: `# 1) RANJIVO — unos se spaja u SQL naredbu:
upit = f"SELECT * FROM korisnici WHERE ime = '{ime}' AND lozinka = '{lozinka}'"

# 2) SIGURNO — parametrizirani upit, unos se nikad ne spaja:
upit = "SELECT * FROM korisnici WHERE ime = ? AND lozinka = ?"
cursor.execute(upit, (ime, lozinka))`
        }
      },
      {
        badge: 'Zadatak 12',
        title: 'XSS — ukradi „kolačić" iz Juice Shopa',
        steps: [
          'U lokalno pokrenutom <strong>OWASP Juice Shopu</strong> učenik prvo pronalazi skrivenu „score board" stranicu s popisom izazova (jedan od lakših izazova).',
          'U polje za pretragu proizvoda unosi jednostavan XSS payload: <code>&lt;img src=x onerror=alert(1)&gt;</code> i promatra izvršavanje skripte u pregledniku.',
          'Nadograđuje zadatak: dokumentira zašto se to dogodilo — korisnički unos se izravno ugrađuje u HTML bez kodiranja (DOM XSS).',
          'Ispravak: usporedba koda — izravno ugrađivanje (ranjivo) naspram kodiranja izlaza (sigurno).',
          'Klasifikacija nalaza: Injection (A05:2025, CWE-79 Cross-site Scripting) iz OWASP Top 10:2025; rasprava o opasnosti krađe sesijskih kolačića.'
        ],
        outcome: 'Odrađena XSS vježba u Juice Shopu, dokumentiran uzrok i ispravak s kodiranjem izlaza; učenik objašnjava razliku između validacije ulaza i kodiranja izlaza.',
        code: {
          label: 'Usporedba — kodiranje izlaza',
          body: `# 1) RANJIVO — unos ide ravno u HTML:
print(f"<p>Pozdrav, {ime}</p>")

# 2) SIGURNO — posebni znakovi se kodiraju:
from html import escape
print(f"<p>Pozdrav, {escape(ime)}</p>")`
        }
      }
    ]
  },
  {
    num: '07',
    name: 'Cloud security',
    hrs: 3,
    chips: ['IaaS/PaaS/SaaS', 'zajednička odgovornost', 'IAM', 'flAWS.cloud'],
    outcomes: [
      'objasniti modele usluge (<strong>IaaS/PaaS/SaaS</strong>) i model <strong>zajedničke odgovornosti</strong>',
      'opisati ulogu <strong>identiteta i pristupa (IAM)</strong>, princip najmanjih privilegija i MFA',
      'prepoznati tipične pogreške u konfiguraciji (javno dostupni spremnici, procurjeli ključevi, preširoka dopuštenja) i predložiti mjere zaštite podataka, enkripcije i logiranja'
    ],
    content: [
      'Što je cloud i zašto ga svi koriste — <strong>IaaS/PaaS/SaaS</strong>',
      'Model zajedničke odgovornosti: sigurnost „u" oblaku vs. sigurnost „od" oblaka (primjer AWS modela)',
      '<strong>Identiteti i pristup (IAM)</strong>, princip najmanjih privilegija, MFA',
      'Česti incidenti: javno dostupni S3 spremnici podataka, procurjeli pristupni ključevi, preširoka dopuštenja',
      'Zaštita podataka, enkripcija, evidencija (logiranje), osnove usklađenosti',
      'Edukativni izazovi: <strong>flAWS.cloud i CloudGoat</strong>; analiza stvarno dokumentiranih incidenata'
    ],
    sources: [
      ['AWS — Shared Responsibility Model', 'https://aws.amazon.com/compliance/shared-responsibility-model/'],
      ['flAWS challenge — edukativni AWS izazovi', 'http://flaws.cloud/'],
      ['CloudGoat (Rhino Security Labs) — ranjivo AWS okruženje', 'https://rhinosecuritylabs.com/aws/cloudgoat-vulnerable-design-aws-environment/'],
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner']
    ],
    tasks: [
      {
        badge: 'Zadatak 13',
        title: 'flAWS.cloud — javni spremnik bez zaključavanja',
        steps: [
          'Učenik rješava prvu razinu flAWS izazova (flaws.cloud): otkriva prvu poddomenu koristeći javno dostupne alate (npr. AWS CLI ili web-sučelje za S3).',
          'Uz pomoć službenih savjeta (hints) dolazi do rješenja i objašnjava zašto je spremnik javno dostupan i što je pogrešno u konfiguraciji pristupa.',
          'Za svaku otkrivenu pogrešnu konfiguraciju zapisuje: uzrok → posljedica → ispravak (onemogućiti javni pristup, omogućiti enkripciju, IAM politika najmanjih privilegija).',
          'Rasprava: model zajedničke odgovornosti — tko je odgovoran za ovaj propust, pružatelj usluge ili korisnik?'
        ],
        outcome: 'Riješena prva razina flAWS izazova s dokumentiranim uzrokom i ispravkom; učenik objašnjava da pogrešna konfiguracija, a ne sama platforma, uzrokuje većinu curenja podataka u oblaku.'
      },
      {
        badge: 'Zadatak 14',
        title: 'Napravi kontrolnu listu sigurne konfiguracije',
        steps: [
          'U timovima proučavaju jedan javno dokumentirani incident curenja podataka iz javnog spremnika (nastavnik odabere aktualni primjer iz vijesti ili cert.hr upozorenja).',
          'Izdvajaju: što je procurjelo, koji je bio uzrok (pogrešna konfiguracija, ključ, dopuštenja) i koje su posljedice za organizaciju.',
          'Na temelju AWS modela zajedničke odgovornosti i CloudGoat ranjivosti sastavljaju kontrolnu listu: MFA za sve korisnike, najmanje privilegije, enkripcija, logiranje, provjera javnog pristupa spremnicima.',
          'Predstavljaju listu razredu i uspoređuju — čija je lista potpunija.'
        ],
        outcome: 'Kontrolna lista s najmanje 6 stavki sigurne konfiguracije i kratka prezentacija analize incidenta; učenik objašnjava model zajedničke odgovornosti na konkretnom primjeru.'
      }
    ]
  },
  {
    num: '08',
    name: 'Reverzno inženjerstvo',
    hrs: 4,
    chips: ['Ghidra', 'strings', 'GDB', 'crackme', 'Python bytecode'],
    outcomes: [
      'objasniti što je reverzno inženjerstvo i gdje se primjenjuje (analiza zlonamjernog koda, sigurnosna istraživanja, razumijevanje formata)',
      'razumjeti put od <strong>izvornog koda do izvršnog programa</strong>',
      'analizirati jednostavan program <strong>statičkom analizom</strong> (strings, Ghidra) i <strong>dinamičkom analizom</strong> (debugger) te objasniti pravni kontekst (licence, autorska prava)'
    ],
    content: [
      'Primjena reverznog inženjerstva i <strong>pravni aspekti</strong> (licence, autorska prava; analiza stvarnog zlonamjernog koda se ne provodi — samo edukativni uzorci)',
      'Kompilacija: od izvornog koda do binarne datoteke, osnove strojnog koda i asemblera (pregled)',
      'Statička analiza: <strong>strings</strong>, pregled datoteke, disassembler/dekompajler (<strong>Ghidra</strong>)',
      'Dinamička analiza: debugger (<strong>GDB</strong>), praćenje izvršavanja',
      'Zaštite i obfuskacija (osnovna ideja)',
      'Vježbe: početnički <strong>crackme</strong> zadaci, Python bytecode, CTF „reversing" kategorija'
    ],
    sources: [
      ['Ghidra — otvoreni NSA-ov alat za reverzno inženjerstvo', 'https://ghidra-sre.org/'],
      ['picoCTF (Carnegie Mellon University) — CTF za srednjoškolce', 'https://picoctf.org/'],
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner']
    ],
    tasks: [
      {
        badge: 'Zadatak 15',
        title: 'Crackme 1 — lozinka u nizu znakova',
        steps: [
          'Nastavnik podijeli pripremljeni mali Linux program crackme1 (izvorni kod u prilogu kurikula, kompajliranje: <code>gcc -O0 -o crackme1 crackme1.c</code>).',
          'Učenik najprije pokušava pokrenuti program i unijeti pogrešnu lozinku — program odbija pristup.',
          'Prva statička analiza: <code>strings -a crackme1</code> — učenici traže sumnjive nizove; lozinka i poruka s FLAG-om su vidljivi (program je kompajliran bez optimizacije pa se nizovi vide izravno).',
          'Druga analiza: otvoriti program u <strong>Ghidri</strong>, pronaći funkciju main i dekompilirani usporedni poziv — vidjeti točnu logiku provjere (usporedba s konstantnim nizom).',
          'Zaključak: pohrana tajne kao čistog teksta u binarnoj datoteci je pogreška — program se „slomi" jednostavnim pretraživanjem nizova.'
        ],
        outcome: 'Ispravna lozinka pronađena dvjema metodama (strings i Ghidra dekompilacija); učenik objašnjava zašto je statička analiza djelotvorna kod loše implementirane provjere tajni.',
        code: {
          label: 'Izvorni kod zadatka (prilog: crackme1.c)',
          body: `#include <stdio.h>
#include <string.h>

int main(void) {
    char unos[64];
    printf("Unesi lozinku: ");
    if (scanf("%63s", unos) != 1) return 1;
    if (strcmp(unos, "ZnanjeJeMoc26") == 0)
        printf("Tocno! FLAG{crackme1_rijesen}\\n");
    else
        printf("Pogresna lozinka.\\n");
    return 0;
}`
        },
        advanced: 'Napredni zadatak: isto pokušajte nad crackme2.c, u kojem se lozinka ne pohranjuje kao čist tekst, već se provjerava XOR-maskirana — rješenje zahtijeva dekompilaciju u Ghidri i razumijevanje XOR operacije.'
      },
      {
        badge: 'Zadatak 16',
        title: 'Python bytecode — što radi ovaj .pyc?',
        steps: [
          'Učenik piše kratki Python program s jednostavnom skrivenom porukom (funkcija koja provjerava unos i ispisuje poruku) te ga kompajlira u bajtkod: <code>python3 -m py_compile program.py</code> (nastaje <code>__pycache__/program.cpython-*.pyc</code>).',
          'Zatim briše izvornu .py datoteku — od programa postoji samo .pyc.',
          'Zadatak: otkriti skrivenu poruku radeći samo s .pyc datotekom — alati: strings, Python modul dis (disassembler) ili besplatni dekompajler; usporediti čitljivost rezultata.',
          'Usporediti s kategorijom „Reverse Engineering" na picoCTF picoGym — tamo postoje gotovi zadaci ovog tipa.',
          'Zaključak: kompilacija nije šifriranje, bajtkod je lako reverzibilan — zaštita programa (obfuskacija, licence) je odvojena tema.'
        ],
        outcome: 'Dekompilirana poruka iz .pyc datoteke s objašnjenjem korištenih alata; učenik razlikuje kompilaciju od šifriranja i razumije ograničenja „zaštite" bajtkodom.'
      }
    ]
  },
  {
    num: '09',
    name: 'IoT security',
    hrs: 4,
    chips: ['OWASP IoT Top 10', 'Mirai', 'MQTT', 'segmentacija'],
    outcomes: [
      'objasniti <strong>specifičnosti i rizike IoT uređaja</strong>',
      'navesti <strong>OWASP IoT Top 10</strong> ranjivosti (slabe/zadane lozinke, nesigurne mrežne usluge, izostanak sigurnih nadogradnji, nesigurne postavke…)',
      'procijeniti <strong>sigurnost pametnog uređaja</strong>',
      'objasniti komunikacijske protokole (<strong>Wi-Fi, Bluetooth, MQTT</strong>) i njihove slabosti te predložiti mjere zaštite (promjena zadanih postavki, segmentacija, ažuriranje)'
    ],
    content: [
      'Što je IoT: pametne kuće, kamere, nosivi uređaji, industrija — zašto su IoT uređaji rizični (zadane lozinke, rijetke nadogradnje, slaba enkripcija)',
      '<strong>OWASP IoT Top 10</strong> — pregled liste (I1 slabe/zadane lozinke, I2 nesigurne mrežne usluge, I4 izostanak sigurne nadogradnje, I9 nesigurne zadane postavke…)',
      'Slučajevi iz prakse: <strong>botnetovi sastavljeni od IoT uređaja (npr. Mirai)</strong>',
      'Komunikacijski protokoli (Wi-Fi, Bluetooth, MQTT) i njihove sigurnosne slabosti',
      'Osnove analize firmwarea (pregled, <strong>IoTGoat</strong> kao edukativni primjer) i pretraživanje izloženih uređaja (konceptualno)',
      'Mjere zaštite: promjena zadanih lozinki, segmentacija mreže, redovito ažuriranje, onemogućavanje nepotrebnog udaljenog pristupa'
    ],
    sources: [
      ['OWASP Internet of Things Project (IoT Top 10)', 'https://owasp.org/projects/internet-of-things'],
      ['OWASP IoTGoat — namjerno ranjiv firmware', 'https://github.com/OWASP/IoTGoat'],
      ['ENISA — Good Practices for Security of IoT', 'https://www.enisa.europa.eu/publications/good-practices-for-security-of-iot-1'],
      ['CARNET — Osnove kibernetičke zaštite (priručnik, 2025)', 'https://edutorij.carnet.hr/']
    ],
    tasks: [
      {
        badge: 'Zadatak 17',
        title: 'Sigurnosni pregled pametnog uređaja u učionici',
        steps: [
          'Učenici u timovima pregledavaju jedan konkretan IoT uređaj u školi (pametna kamera, pametna rasvjeta, pametni zvučnik) ili njegov upravljački program.',
          'Za svaki uređaj ispunjavaju „ocjenu rizika" prema OWASP IoT Top 10 kategorijama: zadana lozinka? (I1), nepotrebno otvorene mrežne usluge? (I2), podržava li sigurnu nadogradnju? (I4), koje su zadane postavke? (I9).',
          'Provjeravaju vanjske znakove: je li upravljanje moguće bez aplikacije, postoji li fizički reset na tvorničke postavke, koja se dopuštenja traži aplikacija.',
          'Za svaki uočeni rizik predlažu konkretnu mjeru: promjena lozinke, onemogućavanje udaljenog pristupa, odvajanje na poseban VLAN/gostujuću mrežu, provjera nadogradnji.'
        ],
        outcome: 'Popunjena ocjena rizika za jedan stvarni uređaj s najmanje tri konkretne preporuke; učenik primjenjuje OWASP IoT Top 10 kategorije na stvarni uređaj.'
      },
      {
        badge: 'Zadatak 18',
        title: 'MQTT simulator — javna tema i tajni kanal',
        steps: [
          'U laboratoriju (Raspberry Pi ili ESP32 s MQTT brokerom Mosquitto) nastavnik pokrene jednostavnu „pametnu kuću": objavljivanje temperature i statusa vrata na javnoj temi (bez autentifikacije).',
          'Učenik se koristeći bilo koji MQTT klijent pretplaćuje na temu <code>#</code> (sve teme) i promatra — vidi sve poruke svih uređaja u sustavu.',
          'Druga faza: nastavnik uključi autentifikaciju i šifriranje na brokeru (korisničko ime/lozinka, TLS) — učenik ponavlja pretplatu i potvrđuje da više ne može čitati bez vjerodajnica.',
          'Zaključak: javna MQTT tema bez autentifikacije je „javni razglas"; rasprava o arhitekturi — zašto se IoT uređaji odvajaju na posebnu mrežnu segmentaciju (ENISA preporuka: constrained uređaji ne bi trebali izravno komunicirati izvan lokalne mreže).'
        ],
        outcome: 'Dokazana čitljivost javne MQTT teme i potvrđena zaštita nakon uključivanja autentifikacije; učenik objašnjava zašto segmentacija mreže i autentifikacija štite IoT ekosustav.'
      }
    ]
  }
];

/* ---------- Podaci: izvori ---------- */
const SOURCES = [
  {
    group: 'Nacionalni resursi i zakonodavstvo',
    items: [
      ['CARNET Nacionalni CERT (cert.hr) — #SurfajSigurnije', 'https://www.cert.hr/'],
      ['CARNET — Osnove kibernetičke zaštite i prepoznavanje prijetnji (priručnik, 2025)', 'https://edutorij.carnet.hr/'],
      ['Hacknite — CTF natjecanje Nacionalnog CERT-a za srednje škole', 'https://www.cert.hr/hacknite'],
      ['Hackultet — platforma za vježbanje CTF zadataka (CARNET i FER)', 'https://platforma.hackultet.hr/'],
      ['CERT.hr — Sigurna knjižica', 'https://www.cert.hr/sigurna-knjizica/'],
      ['Kazneni zakon RH, čl. 266. — Neovlašteni pristup', 'https://www.zakon.hr/z/98/kazneni-zakon'],
      ['Zakon o kibernetičkoj sigurnosti (NN 14/24) — prijenos NIS2 direktive', 'https://ncsc.hr/hr/nacionalni-zakonodavni-okvir']
    ]
  },
  {
    group: 'Platforme za vježbanje i CTF',
    items: [
      ['TryHackMe — Pre Security put', 'https://tryhackme.com/path/outline/beginner'],
      ['picoCTF (Carnegie Mellon University) — CTF za srednjoškolce', 'https://picoctf.org/'],
      ['European Cybersecurity Challenge (ECSC)', 'https://europeancybersecuritychallenge.eu/'],
      ['ENISA — ECSC kurikulum i obrazovanje', 'https://www.enisa.europa.eu/topics/education-and-career-path'],
      ['Trace Labs — OSINT Search Party CTF', 'https://www.tracelabs.org/'],
      ["Bellingcat's Online Investigation Toolkit (OSINT alati)", 'https://www.bellingcat.com/toolkit/']
    ]
  },
  {
    group: 'Alati i ranjive aplikacije',
    items: [
      ['Have I Been Pwned — provjera curenja lozinki', 'https://haveibeenpwned.com/'],
      ['Nmap — dokumentacija (scanme.nmap.org, dopušteni cilj)', 'https://nmap.org/book/man-examples.html'],
      ['Wireshark — SampleCaptures (uzorci prometa)', 'https://wiki.wireshark.org/SampleCaptures'],
      ['CyberChef (GCHQ) — analiza i dekodiranje podataka', 'https://gchq.github.io/CyberChef/'],
      ['Ghidra — otvoreni NSA-ov alat za reverzno inženjerstvo', 'https://ghidra-sre.org/'],
      ['OWASP Top 10:2025 — lista kritičnih rizika web aplikacija', 'https://top10.owasp.org/2025/'],
      ['OWASP Juice Shop — namjerno ranjiva web aplikacija', 'https://owasp.org/projects/juice-shop'],
      ['OWASP Vulnerable Web Applications Directory (DVWA, WebGoat)', 'https://vwad.owasp.org/'],
      ['AWS — Shared Responsibility Model', 'https://aws.amazon.com/compliance/shared-responsibility-model/'],
      ['flAWS challenge — edukativni izazovi o AWS konfiguracijama', 'http://flaws.cloud/'],
      ['CloudGoat (Rhino Security Labs) — ranjivo AWS okruženje', 'https://rhinosecuritylabs.com/aws/cloudgoat-vulnerable-design-aws-environment/'],
      ['OWASP Internet of Things Project (IoT Top 10)', 'https://owasp.org/projects/internet-of-things'],
      ['OWASP IoTGoat — namjerno ranjiv firmware za IoT vježbe', 'https://github.com/OWASP/IoTGoat']
    ]
  },
  {
    group: 'Standardi i stručne preporuke',
    items: [
      ['NIST SP 800-63B — Digital Identity Guidelines: Authentication', 'https://pages.nist.gov/800-63-4/sp800-63b.html'],
      ['MITRE ATT&CK — baza znanja o taktikama i tehnikama napadača', 'https://attack.mitre.org/'],
      ['ENISA — Good Practices for Security of IoT', 'https://www.enisa.europa.eu/publications/good-practices-for-security-of-iot-1'],
      ['Windows Document — Modern Standby / hibernation reference', 'https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/modern-standby']
    ]
  }
];

/* ---------- Render: satnica ---------- */
function renderHours() {
  const wrap = document.getElementById('hours-rows');
  const total = MODULES.reduce((s, m) => s + m.hrs, 0);
  const max = Math.max(...MODULES.map(m => m.hrs));
  wrap.innerHTML = MODULES.map(m => `
    <div class="hour-row">
      <span class="hour-row__num">${m.num}</span>
      <div>
        <p class="hour-row__name">${m.name}</p>
        <div class="hour-row__bar"><span style="--w:${(m.hrs / max) * 100}%"></span></div>
      </div>
      <span class="hour-row__hrs">${m.hrs} ${m.hrs === 1 ? 'sat' : 'sata'}</span>
    </div>
  `).join('') + `
    <div class="hour-row hour-row--total">
      <span class="hour-row__num">Σ</span>
      <div><p class="hour-row__name">UKUPNO</p></div>
      <span class="hour-row__hrs">${total} sati</span>
    </div>
  `;
}

/* ---------- Render: moduli ---------- */
let currentMod = 0;

function renderTabs() {
  const wrap = document.getElementById('mod-tabs');
  wrap.innerHTML = MODULES.map((m, i) => `
    <button class="mod-tab ${i === currentMod ? 'is-active' : ''}" role="tab"
      aria-selected="${i === currentMod}" data-i="${i}">
      ${m.num}<small>${m.name}</small>
    </button>
  `).join('');
  wrap.querySelectorAll('.mod-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMod = +btn.dataset.i;
      renderTabs();
      renderModule();
    });
  });
}

function esc(s) { return s; }

function escapeHtml(s) {
  return s.replace(/&/g, '&' + 'amp;').replace(/</g, '&' + 'lt;').replace(/>/g, '&' + 'gt;');
}

function renderModule() {
  const m = MODULES[currentMod];
  const detail = document.getElementById('mod-detail');
  detail.innerHTML = `
    <div class="mod-head">
      <span class="mod-head__num" aria-hidden="true">${m.num}</span>
      <div class="mod-head__body">
        <h3 class="mod-head__title">Modul ${Number(m.num)}: ${m.name}</h3>
        <div class="mod-head__chips">
          <span class="chip chip--hrs">${m.hrs} ${m.hrs === 1 ? 'sat' : m.hrs < 5 ? 'sata' : 'sati'}</span>
          ${m.chips.map(c => `<span class="chip">${c}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="mod-cols">
      <div class="mod-block">
        <p class="mod-block__title">Ishodi učenja</p>
        <ul class="tick-list">
          <li>Učenik će moći ${m.outcomes.map(esc).join('.</li><li>')}.</li>
        </ul>
      </div>
      <div class="mod-block">
        <p class="mod-block__title">Sadržaj</p>
        <ul class="tick-list">
          <li>${m.content.join('</li><li>')}</li>
        </ul>
      </div>
    </div>

    ${m.tasks.map(t => `
      <article class="task">
        <div class="task__head">
          <span class="task__badge">${t.badge}</span>
          <h4 class="task__title">${t.title}</h4>
        </div>
        <ol>${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        ${t.code ? `
        <div class="codebox">
          <p class="codebox__label">${t.code.label}</p>
          <pre>${escapeHtml(t.code.body)}</pre>
        </div>` : ''}
        ${t.advanced ? `<div class="task__adv"><strong>Napredni zadatak</strong><p>${t.advanced}</p></div>` : ''}
        <div class="task__outcome"><div><strong>Očekivani ishod</strong>${t.outcome}</div></div>
      </article>
    `).join('')}

    <div class="mod-block mod-block--izvori">
      <p class="mod-block__title">Izvori</p>
      <ul>
        ${m.sources.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join('')}
      </ul>
    </div>
  `;
  document.getElementById('mod-detail').animate(
    [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
    { duration: 300, easing: 'cubic-bezier(0.16,1,0.3,1)' }
  );
}

document.getElementById('mod-prev').addEventListener('click', () => {
  currentMod = (currentMod + MODULES.length - 1) % MODULES.length;
  renderTabs(); renderModule();
});
document.getElementById('mod-next').addEventListener('click', () => {
  currentMod = (currentMod + 1) % MODULES.length;
  renderTabs(); renderModule();
});

/* ---------- Render: izvori ---------- */
function renderSources() {
  let n = 0;
  document.getElementById('sources-list').innerHTML = SOURCES.map(g => `
    <div class="src-group">
      <p class="src-group__title">${g.group}</p>
      <div class="src-grid">
        ${g.items.map(it => { n++; return `
          <div class="src-item">
            <span class="src-item__n">${String(n).padStart(2, '0')}</span>
            <p><a href="${it[1]}" target="_blank" rel="noopener">${it[0]}</a></p>
          </div>`; }).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------- Terminal typing ---------- */
function typeTerminal() {
  const cmdEl = document.getElementById('type-cmd');
  const outEl = document.getElementById('type-out');
  const cmd = './pokreni_kurikulum --moduli 9 --sati 35';
  const lines = [
    ['<span class="ok">[OK]</span> Učitano <strong>9</strong> modula', 500],
    ['<span class="ok">[OK]</span> Pripremljeno <strong>18</strong> praktičnih zadataka', 450],
    ['<span class="ok">[OK]</span> Laboratorij: <strong>izolirano okruženje</strong>', 450],
    ['<span class="info">[INFO]</span> Teorija 30 % · Praksa 70 %', 400],
    ['<span class="ok">[OK]</span> Etički kodeks: <strong>aktivan</strong>', 400]
  ];
  let ci = 0;
  const type = () => {
    if (ci < cmd.length) {
      cmdEl.textContent += cmd[ci++];
      setTimeout(type, 34 + Math.random() * 40);
    } else {
      setTimeout(runLines, 500);
    }
  };
  const runLines = () => {
    if (!lines.length) return;
    const [html, delay] = lines.shift();
    const p = document.createElement('p');
    p.innerHTML = html;
    outEl.appendChild(p);
    if (lines.length) setTimeout(runLines, delay);
    else {
      const p2 = document.createElement('p');
      p2.innerHTML = '<span class="t-prompt">$</span> <span class="t-cmd">sudo zapocni_pustolovinu</span>';
      outEl.appendChild(p2);
    }
  };
  type();
}

/* ---------- Raspored tabovi ---------- */
function initSchedTabs() {
  const a = document.getElementById('tab-a'), b = document.getElementById('tab-b');
  const pa = document.getElementById('sched-a'), pb = document.getElementById('sched-b');
  a.addEventListener('click', () => {
    a.classList.add('is-active'); b.classList.remove('is-active');
    a.setAttribute('aria-selected', 'true'); b.setAttribute('aria-selected', 'false');
    pa.classList.remove('is-hidden'); pb.classList.add('is-hidden');
  });
  b.addEventListener('click', () => {
    b.classList.add('is-active'); a.classList.remove('is-active');
    b.setAttribute('aria-selected', 'true'); a.setAttribute('aria-selected', 'false');
    pb.classList.remove('is-hidden'); pa.classList.add('is-hidden');
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

/* ---------- Header scroll ---------- */
function initHeader() {
  const h = document.getElementById('header');
  const onScroll = () => h.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Init ---------- */
renderHours();
renderTabs();
renderModule();
renderSources();
initSchedTabs();
initReveal();
initHeader();
typeTerminal();
