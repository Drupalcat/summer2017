---
layout: page
title: Sesiones propuestas
permalink: /es/sesiones-propuestas/
language: es
tid: proposed-sessions
seo:
 description: listado de sesiones propuestas
 keys: drupal, sesiones propuestas, drupal summer
---

Listado de sesiones propuestas en orden de envio.
<ul>
{% for session in site.data.proposed-sessions %}
  <li class="proposed--session">
    <strong>Título:</strong> {{ session.title }}<br/>
    <strong>Ponente:</strong> {{ session.speaker }}<br/>
    <strong>Nivel:</strong> {{ session.level }}<br/>
    <strong>Idiomas:</strong> {{ session.languages }}<br/>
    <div class="proposed--session__description tab--closed"><strong>Descripción:</strong> <div class="proposed--session__description__value tab--collapsed">{{ session.description | markdownify }}</div></div>
  </li>
{% endfor %}
</ul>
