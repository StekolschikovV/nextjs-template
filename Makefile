install-back:
	cd backend && yarn

install-front:
	cd frontend && yarn

install: install-front install-back

run-back: install-back
	cd backend && yarn develop

run-front: install-front
	cd frontend && yarn dev

run: install
	make run-front & make run-back



