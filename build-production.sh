
# use google-analytics-production.html as google-analytics.html
# to add Google Analytics Code to footer
rm _includes/google-analytics.html
mv _includes/google-analytics-production.html _includes/google-analytics.html
jekyll build
