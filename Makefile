all:

install:
	(cd source && bun install)

build:
	(cd source && bun run build)

dev:
	(cd source && bun dev)

release:
	-rm -f docs/index.html
	cp source/build/index.html docs/

serve:
	(cd source/build && python3 -m http.server 8000)
