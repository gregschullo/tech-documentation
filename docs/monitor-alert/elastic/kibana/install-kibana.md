---
id: install-kibana
title: Install Kibana
---

To download and install Kibana, open a terminal window and use the following commands:  

## Install Kibana 7.6.1 on Mac

```terminal
curl -L -O https://artifacts.elastic.co/downloads/kibana/kibana-7.6.1-darwin-x86_64.tar.gz
tar xzvf kibana-7.6.1-darwin-x86_64.tar.gz
cd kibana-7.6.1-darwin-x86_64/
./bin/kibana
```

## Start Kibana

In a terminal session in the directory where Kibana is installed, run:  
`bin\kibana.bat`

## Ensure Kibana is Running

To launch the Kibana web interface, navigate a web browser to localhost, port 5601.  
Example:  
`http://127.0.0.1:5601`
