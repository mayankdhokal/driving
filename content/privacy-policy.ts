import type { L } from "./types";

const both = (text: string): L => ({ en: text, pl: text });

export type PrivacyListItem = {
  text: L;
  href?: string;
};

export type PrivacyBlock =
  | { type: "p"; text: L }
  | { type: "ul"; items: readonly PrivacyListItem[] };

export type PrivacySection = {
  title: L;
  blocks: readonly PrivacyBlock[];
};

export const privacyPolicy: readonly PrivacySection[] = [
  {
    title: both("1. Informacje ogólne"),
    blocks: [
      {
        type: "p",
        text: both("Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: https://DriveWay.com"),
      },
      {
        type: "p",
        text: both("Operatorem serwisu oraz Administratorem danych osobowych jest: Andrzej Kowalski Ul. Kopernika 21 5743907432"),
      },
      {
        type: "p",
        text: both("Adres kontaktowy poczty elektronicznej operatora: adamos1500100900@gmail.com"),
      },
      {
        type: "p",
        text: both(
          "Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.",
        ),
      },
      {
        type: "p",
        text: both("Serwis wykorzystuje dane osobowe w następujących celach:"),
      },
      {
        type: "ul",
        items: [{ text: both("Obsługa zapytań przez formularz") }],
      },
      {
        type: "p",
        text: both(
          "Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:",
        ),
      },
      {
        type: "ul",
        items: [
          {
            text: both(
              "Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.",
            ),
          },
          {
            text: both("Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka\")."),
          },
        ],
      },
    ],
  },
  {
    title: both("2. Wybrane metody ochrony danych stosowane przez Operatora"),
    blocks: [
      {
        type: "p",
        text: both(
          "Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.",
        ),
      },
    ],
  },
  {
    title: both("3. Hosting"),
    blocks: [
      {
        type: "p",
        text: both("Serwis jest hostowany (technicznie utrzymywany) na serwerze operatora: Skibidi_firma"),
      },
      {
        type: "p",
        text: both(
          "Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:",
        ),
      },
      {
        type: "ul",
        items: [
          { text: both("zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),") },
          { text: both("czas nadejścia zapytania,") },
          { text: both("czas wysłania odpowiedzi,") },
          { text: both("nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,") },
          { text: both("informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,") },
          {
            text: both(
              "adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,",
            ),
          },
          { text: both("informacje o przeglądarce użytkownika,") },
          { text: both("informacje o adresie IP,") },
          {
            text: both(
              "informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,",
            ),
          },
          {
            text: both(
              "informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.",
            ),
          },
        ],
      },
    ],
  },
  {
    title: both("4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych"),
    blocks: [
      {
        type: "p",
        text: both(
          "W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:",
        ),
      },
      {
        type: "ul",
        items: [
          { text: both("firma hostingowa na zasadzie powierzenia") },
          {
            text: both(
              "upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony",
            ),
          },
        ],
      },
      {
        type: "p",
        text: both(
          "Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.",
        ),
      },
      {
        type: "p",
        text: both("Przysługuje Ci prawo żądania od Administratora:"),
      },
      {
        type: "ul",
        items: [
          { text: both("dostępu do danych osobowych Ciebie dotyczących,") },
          { text: both("ich sprostowania,") },
          { text: both("usunięcia,") },
          { text: both("ograniczenia przetwarzania,") },
          { text: both("oraz przenoszenia danych.") },
        ],
      },
      {
        type: "p",
        text: both(
          "Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.",
        ),
      },
      {
        type: "p",
        text: both(
          "Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.",
        ),
      },
      {
        type: "p",
        text: both("Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu."),
      },
      {
        type: "p",
        text: both(
          "W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.",
        ),
      },
      {
        type: "p",
        text: both(
          "Dane osobowe są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że przesyłamy je poza teren Unii Europejskiej.",
        ),
      },
    ],
  },
  {
    title: both("5. Informacje w formularzach"),
    blocks: [
      {
        type: "p",
        text: both(
          "Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.",
        ),
      },
      {
        type: "p",
        text: both("Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP)."),
      },
      {
        type: "p",
        text: both(
          "Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.",
        ),
      },
      {
        type: "p",
        text: both(
          "Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.",
        ),
      },
    ],
  },
  {
    title: both("6. Logi Administratora"),
    blocks: [
      {
        type: "p",
        text: both(
          "Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.",
        ),
      },
    ],
  },
  {
    title: both("7. Istotne techniki marketingowe"),
    blocks: [
      {
        type: "p",
        text: both(
          "Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/",
        ),
      },
      {
        type: "p",
        text: both(
          "Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.",
        ),
      },
    ],
  },
  {
    title: both("8. Informacja o plikach cookies"),
    blocks: [
      { type: "p", text: both("Serwis korzysta z plików cookies.") },
      {
        type: "p",
        text: both(
          "Pliki cookies (tzw. „ciasteczka\") stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.",
        ),
      },
      {
        type: "p",
        text: both(
          "Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.",
        ),
      },
      {
        type: "p",
        text: both("Pliki cookies wykorzystywane są w następujących celach:"),
      },
      {
        type: "ul",
        items: [
          {
            text: both(
              "utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;",
            ),
          },
          {
            text: both("realizacji celów określonych powyżej w części \"Istotne techniki marketingowe\";"),
          },
        ],
      },
      {
        type: "p",
        text: both(
          "W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne\" (session cookies) oraz „stałe\" (persistent cookies). Cookies „sesyjne\" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe\" pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.",
        ),
      },
      {
        type: "p",
        text: both(
          "Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.",
        ),
      },
      {
        type: "p",
        text: both(
          "Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.",
        ),
      },
      {
        type: "p",
        text: both(
          "Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).",
        ),
      },
    ],
  },
  {
    title: both("9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?"),
    blocks: [
      {
        type: "p",
        text: both(
          "Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www",
        ),
      },
      {
        type: "p",
        text: both(
          "W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:",
        ),
      },
      {
        type: "ul",
        items: [
          {
            text: both("Edge"),
            href: "https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
          },
          {
            text: both("Internet Explorer"),
            href: "https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d",
          },
          {
            text: both("Chrome"),
            href: "https://support.google.com/chrome/answer/95647?hl=pl",
          },
          {
            text: both("Safari"),
            href: "https://support.apple.com/pl-pl/guide/safari/sfri11471/mac",
          },
          {
            text: both("Firefox"),
            href: "https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron-firefox",
          },
          {
            text: both("Opera"),
            href: "https://help.opera.com/pl/latest/web-preferences/#cookies",
          },
        ],
      },
      { type: "p", text: both("Urządzenia mobilne:") },
      {
        type: "ul",
        items: [
          {
            text: both("Android"),
            href: "https://support.google.com/chrome/answer/95647?hl=pl",
          },
          {
            text: both("Safari (iOS)"),
            href: "https://support.apple.com/pl-pl/HT201265",
          },
          {
            text: both("Windows Phone"),
            href: "https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d",
          },
        ],
      },
    ],
  },
];
