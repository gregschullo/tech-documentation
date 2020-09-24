---
id: install-elasticsearch
title: Install Elasticsearch
---

To download and install Elasticsearch, open a terminal window and use the following commands:  

## Install Elasticsearch 7.6.1 on Mac

```terminal
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.6.1-darwin-x86_64.tar.gz
tar -xzvf elasticsearch-7.6.1-darwin-x86_64.tar.gz
cd elasticsearch-7.6.1
./bin/elasticsearch
```

## Start Elasticsearch

In a terminal session in the directory where Elasticsearch is installed, run:  
`bin\elasticsearch.bat`

## Ensure Elasticsearch is Running

To test that the Elasticsearch daemon is up and running, try sending an HTTP GET request on port 9200.  
Example:  
`curl http://127.0.0.1:9200`
