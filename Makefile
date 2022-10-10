SHELL='bash'

TARGETS = Run
all:	$(TARGETS)

Run:
	cd dwfront && npm install bootstrap axios yarn && npm i react-router-dom --save && cd ../
	cd dwfront/dwbackend && npm install express nodemon mongoose dotenv cors && cd ../ && cd ../
	cd dwfront/dwbackend && echo DATABASE_ADMIN_ACCESS="" > .env

# Nothing to clean, for now

clean:

