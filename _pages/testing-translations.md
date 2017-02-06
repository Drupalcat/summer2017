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
<ul>

{% for sponsor in site.data.sponsors %}
	<li class="sponsor"><a class="sponsor__link" href="{{ sponsor.url }}"><img class="sponsor__img" src="{{ sponsor.logo }}" alt="Logo de {{ sponsor.name }}" title="{{ sponsor.name }}" /></a></li>
{% endfor %}
	</ul>