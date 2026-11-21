# Hemliga tomten

En enkel app för familjens hemliga jultomte.

- `index.html` – lottningen. Skriv in namn, hushåll och telefonnummer och tryck på Lotta.
- `lapp.html` – sidan där var och en öppnar sin hemliga lapp.
- `js/statistik.js` – statistik med GoatCounter (valfritt).

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
