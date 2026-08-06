/* ========================================
   Sitemap Generator
   ======================================== */

const fs = require('fs')
const path = require('path')

function generateSitemap() {
  let baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://fingate.kr/'
  // baseUrl 정규화 (끝에 슬래시 제거)
  baseUrl = baseUrl.replace(/\/+$/, '')
  
  // 사이트맵에 포함할 페이지들 (우선순위와 변경 빈도 포함)
  const routes = [
    { 
      url: '/', 
      priority: '1.0', 
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    { 
      url: '/company', 
      priority: '0.8', 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    { 
      url: '/services/service1', 
      priority: '0.7', 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    { 
      url: '/services/service2', 
      priority: '0.7', 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: '/services/ax',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    { 
      url: '/newvision', 
      priority: '0.7', 
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    { 
      url: '/contact', 
      priority: '0.6', 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    }
  ]

  // XML 사이트맵 생성
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  routes.forEach(route => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`
    sitemap += `    <lastmod>${route.lastmod}</lastmod>\n`
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
    sitemap += `    <priority>${route.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  // public 폴더에 사이트맵 저장
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap, 'utf8')
  
  console.log('✅ Sitemap generated successfully:', sitemapPath)
  console.log(`📊 Total URLs: ${routes.length}`)
  console.log(`🌐 Base URL: ${baseUrl}`)
}

// 스크립트 실행
if (require.main === module) {
  generateSitemap()
}

module.exports = { generateSitemap }
