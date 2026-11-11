.PHONY: run run_dev backend frontend

run:
	$(MAKE) -j2 backend frontend

run_dev: run

backend:
	cd ./Backend && npm run dev

frontend:
	cd ./Frontend && npm run dev
