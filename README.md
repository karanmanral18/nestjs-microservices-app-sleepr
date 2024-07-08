#Convert exsting app to monorepo

nest generate library common

#Create modules in common

nest g mo config -p common 
nest g mo database -p common
