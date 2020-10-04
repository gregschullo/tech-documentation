---
id: elasticsearch-on-minikube
title: Elasticsearch on Minikube
---

kubectl apply -f https://download.elastic.co/downloads/ec  

minikube dashboard  

kubectl run elasticsearch --image=docker.elastic.co/elasticsearch/elasticsearch:6.2.1 --env="discovery.type=single-node" --port=9200

# kubectl apply -f ./quickstart-es.yml  

kubectl get elasticsearch  

kubectl apply -f ./quickstart-kibana.yml  

kubectl get kibana  

kubectl port-forward service/quickstart-kibana 5601  

echo $(kubectl get secret quickstart-elastic-user -o=json)