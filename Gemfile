source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails", "5.0.0.rc1"

gem "autoprefixer-rails"
gem "bcrypt", "~> 3.1.7"
gem "hamlit"
gem "hamlit-rails"
gem "jbuilder"
gem "listen"
gem "pg"
gem "puma"
gem "rails-html-sanitizer"
gem "react_on_rails", "~> 6.0.0.rc5"
gem "sass-rails"
gem "therubyracer"
gem "uglifier"

# gem 'turbolinks', '>= 5.0.0.beta2' # Get turbolinks from npm!

# bundle exec rake doc:rails generates the API under doc/api.
gem "sdoc", group: :doc

group :development do
  gem "awesome_print"
  gem "web-console"
end

group :development, :test do
  gem "spring"
  gem "spring-commands-rspec"
  gem "foreman"
  gem "factory_girl_rails"
  gem "rspec-rails", "3.5.0.beta3"

  gem "rubocop", require: false
  gem "ruby-lint", require: false
  # Critical that require: false be set! https://github.com/brigade/scss-lint/issues/278
  gem "scss_lint", require: false
  gem "brakeman", require: false
  gem "bundler-audit", require: false

  gem "pry"
  gem "pry-doc"
  gem "pry-rails"
  gem "pry-stack_explorer"
  gem "pry-rescue"
  gem "pry-byebug"

  gem "rainbow"
end

group :test  do
  gem "coveralls", require: false
  gem "capybara"
  gem "capybara-screenshot"
  gem "capybara-webkit"
  gem "chromedriver-helper", require: ["selenium_chrome"].include?(ENV["DRIVER"])
  gem "database_cleaner"
  gem "generator_spec"
  gem "launchy"
  gem "poltergeist"
  gem "rspec-retry"
  gem "selenium-webdriver", require: !["poltergeist", "poltergeist_errors_ok", "webkit"].include?(ENV["DRIVER"])
end

group :production do
  gem "rails_12factor" # Never include this for development or tests
end
