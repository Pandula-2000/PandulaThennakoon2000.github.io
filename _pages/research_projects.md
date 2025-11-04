---
layout: archive
title: "Research Projects"
permalink: /research/
collection: projects
author_profile: true
---

{% include base_path %}

Below are selected research projects I have led or contributed to, focusing on **signal processing**, **AI**, and **simulation modeling**.

{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}
