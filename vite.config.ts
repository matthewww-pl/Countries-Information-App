import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Components({
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        {
          '@vueuse/integrations/useAxios': [
            'useAxios',
          ],
          '@vueuse/integrations/useCookies': [
            'useCookies',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        //'src/store',
      ],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Countries Information App',
        short_name: 'CI-App',
        description: 'The application is used to search for information about the country',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'vite-pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'vite-pwa-300x300.png',
            sizes: '300x300',
            type: 'image/png'
          }
        ]
      }
    }),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
  ]
})
