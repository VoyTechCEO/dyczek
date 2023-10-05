#!/bin/bash

if ! pgrep -f "pgrep -f "dyczek_next_app_3/node_modules/.bin/next start"" > /dev/null; then
    cd /home/dyczekpl/domains/dyczekpl.cfolks.pl/dyczek_next_app_3
    /home/dyczekpl/nodevenv/domains/dyczekpl.cfolks.pl/dyczek_next_app_3/18/bin/npm run start
fi
