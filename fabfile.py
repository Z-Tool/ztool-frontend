#!/usr/bin/env python
# -*- coding: utf-8 -*-
# author: Kun Jia
# date: 05/02/17
# email: me@jarrekk.com
from __future__ import unicode_literals

from fabric.api import run, roles, cd, local
from fabric.context_managers import env
from fabric.contrib.project import rsync_project

html_dir = '/usr/share/nginx/html'
exclude = ('.DS_Store', '*pyc', '.git', '.idea', '*sqlite3', 'migrations', 'node_modules', 'readme_files')

env.roledefs = {
    'vps': ['root@vps.jarrekk.com']
}


@roles('vps')
def front():
    local('npm install ; npm run build')
    rsync_project(local_dir='.', remote_dir=''.join('/frontend'), exclude=exclude)
