all:

build:
	(cd source && npm run build)
	
release:
	-rm -rf docs/assets
	-rm docs/index.html
	cp -r source/dist/* docs/

serve:
	(cd source/dist && python3 -m http.server --bind 127.0.0.1 5000)

