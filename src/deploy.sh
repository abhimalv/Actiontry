echo "git pull"
git pull        

echo "npm install"
npm install         
echo "npm run build"
npm run build       

echo "Deploying to Nginx"

rm -rf /var/www/html/*
cp -r dist/* /var/www/html/

systemctl reload nginx