function berechneBreakEven() {
    // 1. Werte aus den Feldern holen und in Zahlen umwandeln
    const fixkosten = Number(document.getElementById('fixkosten').value);
    const verkaufspreis = Number(document.getElementById('verkaufspreis').value);
    const variablekosten = Number(document.getElementById('variablekosten').value);

    // 2. Deckungsbeitrag berechnen (Nenner der Formel)
    const deckungsbeitrag = verkaufspreis - variablekosten;
    
    // 3. Ergebnis-Element auswählen
    const ergebnisElement = document.getElementById('ergebnis');

    // 4. Prüfen, ob eine sinnvolle Berechnung möglich ist
    if (fixkosten <= 0 || verkaufspreis <= 0) {
        ergebnisElement.textContent = "Bitte positive Werte für Fixkosten und Verkaufspreis eingeben.";
    } else if (deckungsbeitrag <= 0) {
        ergebnisElement.textContent = "Der Deckungsbeitrag (Verkaufspreis - variable Kosten) muss positiv sein, um die Fixkosten zu decken.";
    } else {
        // 5. Break-Even-Menge berechnen (Fixkosten / Deckungsbeitrag)
        const breakEvenMenge = fixkosten / deckungsbeitrag;

        // 6. Ergebnis anzeigen (auf die nächste ganze Zahl aufrunden, da man keine Bruchteile verkauft)
        ergebnisElement.innerHTML = `Sie müssen **${Math.ceil(breakEvenMenge)}** Einheiten verkaufen, um die Gewinnschwelle zu erreichen.<br> (Break-Even-Menge: ${breakEvenMenge.toFixed(2)} Stück)`;
    }
}
