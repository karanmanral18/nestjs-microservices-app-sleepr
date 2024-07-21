#Convert exsting app to monorepo -> nest generate library common

#Create modules in common ->

nest g mo config -p common
nest g mo database -p common

#create a new microservice -> nest g app reservations

#Generate Resource -> nest g resource reservations ( SELECT REST API)

#Generate Docker build for reservations service
cd apps/reservations
sudo docker build ../../ -f Dockerfile -t sleepr_reservations

#run your all docker containers -> sudo docker-compose up
#run single docker container image -> sudo docker-compose up auth

#run your nest project without docker : pnpm start:dev ( This will only run default app : reservations)
#run your particlar nest project without docker : pnpm start:dev auth

#create a new microservice -> nest g app auth
nest g mo users
nest g co users

#rebuild docker images -> docker compose up --build