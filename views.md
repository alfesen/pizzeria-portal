# Dashboard

  `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - rezerwacje i eventy zaplanowane na dzisiaj

# Logowanie

  `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

  `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji i wydarzeń
      - każda kolumna = jeden stolik
      - każdy wiersz = 30 min
      - ma przypominać widoki tygodnia w kalendarzu Googla, gdzie zamiast dni są stoliki
      - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
  `/tables/booking/:id`
    - zawiera wszystkie informacje o rezerwacji
    - umożliwia edycję i zapisanie zmian
  `/tables/booking/new`
    - analogicznie do poprzedniej bez początkowych informacji
  `/tables/events/:id`

    - analogicznie do poprzedniej dla eventów
  `/tables/events/new`

    - analogicznie do poprzedniej dla eventów

# Widok kelnera

  `/waiter`
    - tabela
      - w wierszach stoliki
      - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
      - w ostatniej kolumnie dostępne akcje dla tego stolika
  `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówione produkty z opcjami i ceną
    - kwota zamówienia
  `/waiter/order/:id`
    - jak powyżej, z wprowadzoną wcześniej informacji

# Widok kuchni

  `/kitchen`
    - wyświetla listę zamówień w kolejności złożenia
    - numer stolika lub zamówienia zdalnego, oraz pełne informacje dotyczące zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

