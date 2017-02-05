---
layout: page
title: Traduccions testing
permalink: /ca/traduccions/
language: ca
tid: translations
---
Aquesta pàgina mostra com carregar les traduccions de _data/translations.yml

{% assign T = site.data.translations %}
**description**

{{ T.description[page.language] }}

**slogan**

{{ T.slogan[page.language] }}

**section one title**

{{ T.landing_section1.title[page.language] }}

**section one content**

{{ T.landing_section1.content[page.language] }}
