# UKR COVID-19
[Візуалізація](https://beyond-danube.github.io/ukr-covid-19/) даних від  МОЗ України щодо COVID-19
  
[Visualizing](https://beyond-danube.github.io/ukr-covid-19/) COVID-19 data from Ministry of Health of Ukraine

## Деталі / Details
МОЗ України щоденно [публікує](https://covid19.gov.ua/analitichni-paneli-dashbordy) відкриті дані щодо ситуації з COVID-19. Ці дані не надто добре читаються на офіційних джерелах, та не дають можливості зробити висновки щодо тог як справи насправді. Проект UKR COVID-19 складає ці дані на карту за облатсями, та дає мождивість наглядно подивитись динаміку. Будьте обережні та не хворійте!
  
Ministry of Health of Ukraine [publishes](https://covid19.gov.ua/analitichni-paneli-dashbordy) open data related to COVID-19 situation daily. This data is not really good readable when displayed on govenment resources. UKR COVID-19 project puts thsi data on a map, gathering numbers by region, showing real situation and dymanics. Stay safe and don't get sick!

## Використання / Usage
Карта може бути безкоштовно використана на вашому ресурсі, наприклад на сайті чи блозі. Зробити це можна використовуючи iframe. Якщо ви не знаєте що це таке, але хочете використати карту, напишіть мені і я вам допоможу.
  
Map can be used for free on any your resource, like site or blog. You'll need to use an iframe in order to use the map. In case you have no idea what iframe is, however want to use map, drop me a line and I will help you.

`<iframe src="https://beyond-danube.github.io/ukr-covid-19"></iframe>`

## Використані технології / Used technologies
* [Mapbox](https://www.mapbox.com) — absolutely unbelievable map usage technology. [UKR COVID-19](https://beyond-danube.github.io/ukr-covid-19/) is mostly built with just an [example from Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/data-join/).
* [Heroku](https://heroku.com) — another unbelievable technology, used here for fetching data from Ministry of Health of Ukraine web site, and for tranforming it to readable json. It's not exposed here however endpoints can be used for free as well.
* [Papa Parse](https://www.papaparse.com) — JavaScript CSV parser made it possible to easily get raw data and transform it to applicable for usage im maps.
* [Likely](https://github.com/NikolayRys/Likely) — only acceptable social media sharing buttons, that look just OK and super easy to use with declarative API, driven by [Ilya Birman](https://ilyabirman.net).
