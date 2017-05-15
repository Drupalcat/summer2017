---
layout: page
title: Proposed sessions
permalink: /en/proposed-sessions/
language: en
tid: proposed-sessions
seo:
 description: List of proposed sessions
 keys: drupal, proposed sessions, drupal summer
---

List of proposed sessions ordered by submission time.
<ul>
{% for session in site.data.proposed-sessions %}
  <li class="proposed--session">
    <strong>Title:</strong> {{ session.title }}<br/>
    <strong>Speaker:</strong> {{ session.speaker }}<br/>
    <strong>Level:</strong> {{ session.level }}<br/>
    <strong>Languages:</strong> {{ session.languages }}<br/>
    <div class="proposed--session__description tab--closed"><strong>Description:</strong> <div class="proposed--session__description__value tab--collapsed">{{ session.description | markdownify }}</div></div>
  </li>
{% endfor %}
</ul>
