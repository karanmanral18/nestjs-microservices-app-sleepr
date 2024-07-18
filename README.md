#Convert exsting app to monorepo -> nest generate library common

#Create modules in common -> 

nest g mo config -p common 
nest g mo database -p common

#create a new microservice -> nest g app reservations

#Generate Resource -> nest g resource reservations ( SELECT REST API)

#Generate Docker build for reservations service
cd apps/reservations
sudo docker build ../../ -f Dockerfile  -t sleepr_reservations

#run you docker containers -> sudo docker-compose up
#run single docker container image -> sudo docker-compose up auth

#create a new microservice -> nest g app auth
nest g mo users
nest g co users
