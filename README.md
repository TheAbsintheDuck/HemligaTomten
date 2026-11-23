# Hemliga tomten

En enkel app för familjens hemliga jultomte.

- `index.html` – lottningen. Skriv in namn, hushåll och telefonnummer och tryck på Lotta.
- `lapp.html` – sidan där var och en öppnar sin hemliga lapp.
- `js/statistik.js` – statistik med GoatCounter (valfritt).
- `sitemap.xml`, `og-bild.png`, `favicon.svg`, `apple-touch-icon.png` – för sökmotorer och delning.

Allt körs i webbläsaren. Telefonnumren sparas bara i arrangörens webbläsare.

## Statistik (valfritt, gratis)

Appen kan räkna besök och händelser med GoatCounter. Den använder inga kakor
och sparar inga personuppgifter, så du behöver ingen cookie-banner. De hemliga
koderna skickas aldrig, eftersom GoatCounter inte läser det som står efter `#`
i länken.

1. Skapa ett gratis konto på <https://www.goatcounter.com>. Välj ett kontonamn,
   till exempel `hemliga-tomten`.
2. Öppna `js/statistik.js` och byt `DITT-KONTONAMN` mot ditt kontonamn.
3. Publicera. Statistiken syns sedan på `https://<kontonamn>.goatcounter.com`.

Det här räknas:

| I statistiken | Betyder |
|---|---|
| Sidbesök | Hur många som öppnat sidorna |
| `lottning-gjord` | En lottning har gjorts |
| `paket-oppnat` | Någon har öppnat sitt paket |
| `sms-oppnat` | Arrangören har tryckt på Skicka sms |

## Sökmotorer och delning (SEO)

Sidorna har titel, beskrivning, Open Graph-taggar (för förhandsvisning när
man delar länken), en delningsbild och en kort text som förklarar spelet.
`lapp.html` är märkt `noindex` så att personliga lappar aldrig hamnar i Google.

**Du behöver göra ett byte innan du publicerar:** sök och ersätt
`https://theabsintheduck.github.io/HemligaTomten/` med din riktiga adress (med
snedstreck på slutet) i `index.html`, `lapp.html` och `sitemap.xml`. Det är den
adressen delningsbilden och "canonical"-länken pekar på.

Så får du sidan in i Google:
1. Gå till <https://search.google.com/search-console> och lägg till din adress
   som en "URL-prefix"-egendom.
2. Verifiera ägandet. Det enklaste är att ta bort kommentaren runt
   `google-site-verification` i `index.html` och skriva in din kod.
3. Skicka in `sitemap.xml` under *Sitemaps*, och begär indexering av startsidan.

Det kan ta dagar eller veckor innan sidan syns, och metataggarna garanterar
inte en viss placering. Ju fler som länkar till sidan, desto bättre.

## Välj från kontakter (valfritt)

Knappen "Välj från kontakter" använder webbläsarens Contact Picker API och lägger in namn och telefonnummer från telefonens kontaktbok.

- Fungerar bara i Chrome (och t.ex. Samsung Internet) på Android, via https (alltså din github.io-adress).
- Finns inte på iPhone, i Firefox eller på dator. Då döljs knappen och man skriver in namnen själv.
- Webbläsaren visar sin egen lista och lämnar bara ut dem du väljer.
- Har en kontakt flera nummer väljs ett svenskt mobilnummer först.
