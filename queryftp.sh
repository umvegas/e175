#!/bin/bash

read -p "Continue? (y/n)? " answer
if echo "$answer" | grep -iq "^y" ;then
    exit 0
fi
exit 1
