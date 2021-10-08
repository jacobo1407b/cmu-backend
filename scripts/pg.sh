#!/usr/bin/env bash

set -e

echo "*** Initialising PostgreSQL"

#sudo apt update

sudo apt install postgresql postgresql-contrib

sudo su - postgres -c "createdb cmu"
sudo -u postgres psql -c "create user root with encrypted password '1234567890';"
sudo -u postgres psql -c "grant all privileges on database cmu to root;"
