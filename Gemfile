source "https://rubygems.org"

gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Gems that left the Ruby standard library and that Jekyll still expects.
gem "webrick", "~> 1.8"
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"

# 4.0.3 calls String#tainted?, removed in modern Ruby; 4.0.4 drops it.
gem "liquid", ">= 4.0.4", "< 5.0"
