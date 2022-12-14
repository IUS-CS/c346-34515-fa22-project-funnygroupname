SHELL='bash'

TARGETS = Run
all:	$(TARGETS)

Run:
	cd dwfront && npm install bootstrap axios yarn jest react-bootstrap && npm i react-router-dom --save && npm install --save-dev @testing-library/react @testing-library/jest-dom react-test-renderer && cd ../
	cd dwfront/dwbackend && npm install express nodemon mongoose dotenv cors && cd ../ && cd ../
	cd dwfront/dwbackend && echo DATABASE_ADMIN_ACCESS="" > .env


Back:
	cd dwfront/dwbackend && npm start

Front:
	cd dwfront && npm run start

FrontProduct:
	cd dwfront && npm install -g serve && npm run build && serve -s build

Test:
	cd dwfront && npm test


# Nothing to clean, for now
clean:

