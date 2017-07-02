#!/bin/sh

rm -rf node_modules
npm install
npm run build
if [ $? -eq 0 ]; then
  ssh root@vps.jarrekk.com "rm -rf /frontend/*"
  rsync -avz ./dist/* root@vps.jarrekk.com:/frontend/dist/
  ssh root@vps.jarrekk.com "docker restart backhend_nginx_1"
fi
