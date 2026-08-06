/* ========================================
   개선된 Robots.txt Generator
   ======================================== */

const fs = require('fs')
const path = require('path')

function generateRobots() {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://fingate.kr/'
  const robotsDirective = process.env.NUXT_PUBLIC_ROBOTS || 'index,follow'
  const isPreview = robotsDirective.includes('noindex')
  
  const robotsTxt = isPreview ? `# ========================================
# FinGate Preview Robots.txt
# Generated: ${new Date().toISOString()}
# ========================================

User-agent: *
Disallow: /
` : `# ========================================
# FinGate Robots.txt
# Generated: ${new Date().toISOString()}
# ========================================

User-agent: *
Allow: /

# 주요 페이지들
Allow: /company
Allow: /services/
Allow: /newvision
Allow: /contact

# 정적 파일들
Allow: /images/
Allow: /favicon.svg
Allow: /_nuxt/
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp

# 차단할 디렉토리 (필요시)
# Disallow: /admin/
# Disallow: /private/
# Disallow: /temp/

# 사이트맵
Sitemap: ${baseUrl}/sitemap.xml

# 크롤링 지연 (선택사항)
Crawl-delay: 1

# 추가 사이트맵 (필요시)
# Sitemap: ${baseUrl}/sitemap-images.xml
# Sitemap: ${baseUrl}/sitemap-news.xml
`

  // public 폴더에 robots.txt 저장
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const robotsPath = path.join(publicDir, 'robots.txt')
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8')
  
  console.log('✅ Robots.txt generated successfully:', robotsPath)
  console.log(`🌐 Base URL: ${baseUrl}`)
  console.log(`📅 Generated: ${new Date().toISOString()}`)
}

// 스크립트 실행
if (require.main === module) {
  generateRobots()
}

module.exports = { generateRobots }
