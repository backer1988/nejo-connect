# Website der NeJo Connect GbR

Schlanke, statische Website: reines HTML/CSS, ein kleines Skript für das mobile Menü,
kein Framework, kein Build-Schritt.

```
index.html          Startseite (One-Pager)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
assets/css/         Stylesheet
assets/js/          Menü-Skript (die Seite funktioniert auch ohne JavaScript)
assets/fonts/       Fraunces und Inter, lokal gehostet (SIL Open Font License)
assets/img/         Logo, Favicons, Vorschaubild für Social Media
.nojekyll           sorgt dafür, dass GitHub Pages die Dateien unverändert ausliefert
```

## Vor der Veröffentlichung ergänzen

Alle Platzhalter sind auf der Seite **gelb markiert** (CSS-Klasse `placeholder`).
Suche im Code nach `placeholder` bzw. `PLATZHALTER`.

- [x] **Impressum:** Anschrift und Telefon (Johannes Backer, Lüneburg)
- [ ] **Impressum:** Falls eine USt-IdNr. vergeben wird oder die GbR ins Gesellschaftsregister
      eingetragen wird (dann „eGbR“), Angaben im Impressum ergänzen
- [x] **Datenschutz:** Anschrift
- [ ] **Datenschutz:** Name und Sitz des E-Mail-Anbieters; Auftragsverarbeitungsvertrag abschließen
- [ ] **Datenschutz, Abschnitt 2 (GitHub):** Angaben gegen die aktuelle Datenschutzerklärung von
      GitHub prüfen (DPF-Zertifizierung, Anschrift, Link). Sie konnten bei der Erstellung nicht
      online gegengeprüft werden.
- [ ] **Über uns, Nele:** Ausbildung und weitere Stationen
- [ ] **Fotos:** `assets/img/nele.jpg` und `assets/img/johannes.jpg` ablegen (quadratisch,
      mind. 400 × 400 px) und den Platzhalter laut Kommentar in `index.html` ersetzen
- [ ] **Kundenstimmen:** erst eintragen, wenn echte Rückmeldungen mit Freigabe vorliegen
      (Vorlage als Kommentar im Abschnitt „Stimmen“)

Impressum und Datenschutzerklärung sind sorgfältig erstellte Vorlagen, aber keine Rechtsberatung.
Bitte vor dem Livegang prüfen (lassen).

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Oder mit lokalem Server:

```bash
python3 -m http.server 8000
```

Dann http://localhost:8000 aufrufen.

## Veröffentlichen über GitHub Pages

1. Der Inhalt liegt im Repository `backer1988/nejo-connect` (Branch `main`).
2. Auf GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   Branch `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten ist die Seite unter https://backer1988.github.io/nejo-connect/ erreichbar.
4. Unter **Settings → Pages** die Option **Enforce HTTPS** aktivieren.

Alle Links sind relativ, die Seite funktioniert daher unter dem Unterpfad `/nejo-connect/` und später
direkt unter der eigenen Domain.

## Umzug auf nejo-connect.de

1. Beim Domain-Anbieter DNS-Einträge für GitHub Pages setzen (A-/AAAA-Einträge für die
   Apex-Domain bzw. CNAME für `www`, siehe GitHub-Doku „Managing a custom domain“).
2. Unter **Settings → Pages → Custom domain** `nejo-connect.de` eintragen (GitHub legt dabei
   eine Datei `CNAME` im Repository an) und **Enforce HTTPS** aktivieren.
3. In `index.html` die beiden absoluten URLs in `og:url` und `og:image` auf
   `https://nejo-connect.de/` umstellen.

## Gestaltung

- Farben: Marineblau `#14305c`, Weinrot `#7b1e36`, Weiß; alle Werte als Variablen oben in
  `assets/css/style.css`.
- Schriften: Fraunces (Überschriften) und Inter (Fließtext), lokal eingebunden, daher keine
  Verbindung zu Google Fonts.
- Logo: `assets/img/logo.svg` (hell) und `logo-hell.svg` (für dunkle Flächen), Favicon
  `assets/img/favicon.svg`. Die Buchstaben sind als Pfade gespeichert und brauchen keine Schrift.
