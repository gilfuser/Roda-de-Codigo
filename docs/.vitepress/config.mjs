import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roda de Código",
  description: "Oficina de som e imagem em tempo real através de código",
  /* head: [
    [
      'script',
      {
        async: true,
        src: 'https://unpkg.com/hydra-synth'
      }
    ],
    [
      'script',
      {},
    ]
  ], */
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'A Oficina',
        items: [
          { text: 'Introdução', link: '/a_oficina/introducao' },
          { text: 'Objetivos', link: '/a_oficina/objetivos_gerais' },
          { text: '1° Encontro', link: '/a_oficina/1o_encontro' },
          { text: '2° Encontro', link: '/a_oficina/2o_encontro' },
          { text: '3° Encontro', link: '/a_oficina/3o_encontro' },
          { text: '4° Encontro', link: '/a_oficina/4o_encontro' },
          { text: 'Performance', link: '/a_oficina/performance' },
        ]
      },
            {
        text: 'LiveCoding',
        items: [
          { text: 'Introdução', link: '/livecoding/introducao' },
          { text: 'Runtime API Examples', link: '/livecoding/exemplos' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gilfuser/Roda-de-Codigo' }
    ]
  }
})
