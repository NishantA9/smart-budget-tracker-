from flask import Blueprint, request, jsonify
from models import Expense, db
from datetime import datetime

api = Blueprint('api', __name__)

@api.route('/', methods=['GET'])
def welcome():
    return jsonify({"message": "Welcome to the Smart Budget Tracker API!"})

@api.route('/expenses', methods=['POST'])
def add_expense():
    data = request.get_json()
    new_expense = Expense(
        user_id=data['user_id'],
        type=data['type'],
        category=data['category'],
        amount=float(data['amount']),
        date=datetime.strptime(data['date'], '%Y-%m-%d'),
        note=data['note'],
    )
    db.session.add(new_expense)
    db.session.commit()
    return jsonify({
    "type": new_expense.type,
    "category": new_expense.category,
    "amount": new_expense.amount,
    "date": new_expense.date.isoformat(),  # ✅ ensures proper date format
    "note": new_expense.note
    }), 201
