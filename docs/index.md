---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Roda de Código"
  text: "Som e imagem em tempo real feitos com código"
  tagline: Oficina de criação e performance em grupo
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: brand
      text: A Oficina
      link: /a_oficina/introducao
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import HydraComponent from './components/HydraComponent.vue'
</script>

<!-- <clientOnly>
<HydraComponent />
</clientOnly -->
