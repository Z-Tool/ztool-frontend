#!/bin/sh

ssh root@vps.jarrekk.com "rm -rf /frontend/*"
rsync -avz dist root@vps.jarrekk.com:/frontend/
ssh root@vps.jarrekk.com "docker restart backhend_nginx_1"
