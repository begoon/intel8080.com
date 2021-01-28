all:

run:
	cd source && \
	FLASK_APP=application.py \
	FLASK_ENV=development \
	python -m flask run
