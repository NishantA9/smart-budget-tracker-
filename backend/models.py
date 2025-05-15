from __init__ import db
from datetime import datetime

class User(db.Model):
    id = db.column(db.Integer, primary_key=True)
    username = db.column(db.String(80), unique=True, nullable=False)
    password = db.column(db.String(128), nullable=False)

class Transaction(db.Model):
    id = db.column(db.Integer, primary_key=True)
    user_id = db.column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    type = db.column(db.String(10), nullable=False)
    category = db.column(db.String(50), nullable=False)
    amount = db.column(db.Float, nullable=False)
    date = db.column(db.DateTime, default=datetime.now(datetime.timezone.utc))
    note = db.column(db.String(255))
