// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap"
                }
            ]
        }
    },
    css: [
        '@/css/global.css',
        '@/css/animations.css'
    ]
})
