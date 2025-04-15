all:

install:
	(cd source && bun install)

build:
	(cd source && bun vite build)

dev:
	(cd source && bun dev)
	
release:
	-rm -rf docs/assets
	-rm docs/index.html
	cp -r source/dist/* docs/

serve:
	(cd source/dist && python3 -m http.server 8000)
