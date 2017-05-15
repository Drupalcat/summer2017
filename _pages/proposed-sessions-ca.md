---
layout: page
title: Sessions proposades
permalink: /ca/sessions-proposades/
language: ca
tid: proposed-sessions
seo:
 description: Llistat de sessions proposades
 keys: drupal, sessions proposades, drupal summer
---

Llistat de sessions proposades en ordre d'enviament.
<ul>
{% for session in site.data.proposed-sessions %}
  <li class="proposed--session">
    <strong>Títol:</strong> {{ session.title }}<br/>
    <strong>Ponent:</strong> {{ session.speaker }}<br/>
    <strong>Nivell:</strong> {{ session.level }}<br/>
    <strong>Idiomes:</strong> {{ session.languages }}<br/>
    <div class="proposed--session__description tab--closed"><strong>Descripció:</strong> <div class="proposed--session__description__value tab--collapsed">{{ session.description | markdownify }}</div></div>
  </li>
{% endfor %}
</ul>
