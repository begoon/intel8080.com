all:

serve:
	(cd source && python3 -m http.server --bind 127.0.0.1 5000)

