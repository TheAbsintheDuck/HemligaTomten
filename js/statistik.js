// =====================================================================
//  Statistik med GoatCounter
// ---------------------------------------------------------------------
//  Räknar besök och några händelser (t.ex. "lottning gjord").
//  GoatCounter använder inga kakor och sparar inga personuppgifter.
//  Hemliga koder skickas aldrig: GoatCounter läser bara sidans namn,
//  inte det som står efter # i länken.
// =====================================================================

// #region Inställningar

// Ditt kontonamn på goatcounter.com. Är adressen till din statistik
// https://hemliga-tomten.goatcounter.com så skriver du "hemliga-tomten".
// Lämna som det är för att stänga av statistiken.
const GOATCOUNTER_CODE = "theabsintheduck";

// #endregion

// #region Start

// Laddar GoatCounters skript, som räknar sidbesöket automatiskt.
function startStatistics() {
  if (GOATCOUNTER_CODE === "DITT-KONTONAMN") {
    return;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(script);
}

startStatistics();

// #endregion

// #region Händelser

// Räknar en händelse, t.ex. countEvent("lottning-gjord", "Lottning gjord").
// Gör inget om statistiken är avstängd eller inte har hunnit laddas.
export function countEvent(name, title) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: name, title: title, event: true });
  }
}

// Så att sidor med vanliga (icke-modul) skript också kan räkna händelser.
window.countTomteEvent = countEvent;

// #endregion
