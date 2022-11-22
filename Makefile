install-back:
	cd backend && npm i

install-front:
	cd frontend && npm i

install: install-front install-back

run-back: install-back
	cd backend && yarn develop

run-front: install-front
	cd frontend && yarn dev

run: install
	make run-front & make run-back



