#!/bin/sh -l

#Different types of messages
echo "::debug ::Debug shell message"
echo "::warn ::warn shell message"
echo "::error ::error shell message"

#Mask secret data
echo  "::add-mask::$1"
echo "Hello $1"

time=$(date)

#github output
echo "::set-output name=time::$time"

#Set log group
echo "::group::Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

#Export env var
echo "::set-env name=HELLO::Hello-from-shell"