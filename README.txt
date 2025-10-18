
Header-Fix – Pflichtverteidiger Bayern (HL-Stil)
===============================================

Was wurde geändert?
- Header von Flex auf **CSS Grid** umgestellt (Brand | freier Raum | Nav/Toggle) für bessere Balance.
- Navigation rechtsbündig, kompaktere Abstände, längere Labels ohne Umbruch.
- **Früheres Breakpoint (≤1100px)**: Vollmenü wird ausgeblendet, **Menü-Button** eingeblendet.
- Mobile Flyout-Nav bleibt per `.nav.show` steuerbar (dein vorhandenes JS für das Toggle funktioniert weiter).
- Hero bleibt **vollflächig grün**, alle bisherigen Mobile-Fixes (Sticky-CTA, einspaltige Cards/Buttons) sind enthalten.

Einspielen
----------
1) **styles.css** in deinem Repo im Root **ersetzen** (Upload → Commit).
2) 1–2 Minuten warten (GitHub Pages Build), Seite hart neu laden.

Optional: Kürzeres Mobile-Label
-------------------------------
Wenn du den langen Menüpunkt „Pflichtverteidigung“ auf sehr kleinen Screens verkürzen willst, ersetze im HTML den Link-Inhalt durch:

  <span class="label-full">Pflichtverteidigung</span>
  <span class="label-short">Pflicht</span>

und ergänze in CSS (falls du nicht das Beispiel nutzt):

  .label-short{display:none}
  @media (max-width:420px){ .label-full{display:none} .label-short{display:inline} }

Hinweis
------
Du musst **nur styles.css** austauschen. Die beiliegende **index.html** ist ein **Beispiel**.
