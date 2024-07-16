#Convert exsting app to monorepo -> nest generate library common

#Create modules in common -> 

nest g mo config -p common 
nest g mo database -p common

#create a new microservice -> nest g app reservations

#Generate Resource -> nest g resource reservations ( SELECT REST API)

#Generate Docker build for reservations service
cd apps/reservations
sudo docker build ../../ -f Dockerfile  -t sleepr_reservations