from flask import Flask
from flask_migrate import Migrate
from database import *
import os
import urllib.parse
from flask import jsonify,request,session,render_template,redirect,url_for,Blueprint
from requests_oauthlib import OAuth2Session
from flask_login import UserMixin, LoginManager, login_required, login_user, current_user, logout_user
import secrets
from datetime import datetime, date, timedelta, timezone
import os
import json
import random
import requests
from agent_convo import rp

try:
    import config
except ModuleNotFoundError:
    pass


app = Flask(__name__)
app.register_blueprint(rp)
app.secret_key = 'autogptsamurai@123'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./test.db'
db.init_app(app)
db.app = app
migrate = Migrate(app, db, compare_type=True,
                  render_as_batch=True)

login_manager = LoginManager(app)


@login_manager.user_loader
def load_user(user_id):
    return Admin.query.filter_by(id=user_id).first()

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

@app.route("/change_model", methods=['POST'])
def change_model():
    model = request.values["model"]
    current_user.gpt_model = model
    db.session.commit()
    return "Success"

@app.route("/logout", methods=['GET'])
def logout():
    logout_user()
    return "Success", 200
    
@app.route("/store_key", methods=['POST'])
def store_key():
    key = request.json['key']
    getAdmin = Admin.query.filter_by(id=current_user.id).first()
    if len(key) == 51:
        getAdmin.openai_key = key
        db.session.commit()
        return jsonify(True)
    else:
        return jsonify(False), 400      

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
