import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        seo: resolve(__dirname, 'seo-expert-nepal.html'),
        aiSeo: resolve(__dirname, 'ai-seo-expert-nepal.html'),
        workWithMe: resolve(__dirname, 'work-with-me.html'),
        about: resolve(__dirname, 'about.html'),
        seoService: resolve(__dirname, 'seo-service-nepal.html'),
        googleMapPackSeo: resolve(__dirname, 'google-map-pack-seo-service-nepal.html'),
        websiteDesign: resolve(__dirname, 'website-design-service-nepal.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        checklist: resolve(__dirname, 'checklist.html'),
        experiments: resolve(__dirname, 'experiments.html'),
        glossary: resolve(__dirname, 'glossary.html'),
        news: resolve(__dirname, 'news.html'),
        testimonials: resolve(__dirname, 'testimonials.html')
      }
    }
  }
});
