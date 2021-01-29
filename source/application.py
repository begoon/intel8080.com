from flask import (
    Flask,
    render_template,
)

from opcodes import opcodes

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html', opcodes=opcodes)
