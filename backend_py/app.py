from flask import Flask, request, jsonify
import pickle
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Load the PCOS model safely
model_path = os.path.join(os.getcwd(), 'pcos_model.pkl')

if os.path.exists(model_path):
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    print("✅ Model loaded successfully")
else:
    print("❌ Model file not found! Place 'pcos_model.pkl' in backend_py folder.")

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Flask Server Running"})    

import numpy as np

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  

    features = [
        float(data["RBS(mg/dl)"]),
        float(data["Height(Cm)"]),
        float(data["Age (yrs)"]),
        float(data["PRG(ng/mL)"]),
        float(data["Waist(inch)"]),
        float(data["Cycle length(days)"]),
        float(data["II beta-HCG(mIU/mL)"]),
        float(data["BP _Systolic (mmHg)"]),
        float(data["Reg.Exercise(Y/N)"]),
        float(data["No. of aborptions"])
    ]

    prediction_pcos = model.predict_proba([features])[0][1]  # Get probability of PCOS
    prediction_no_pcos = model.predict_proba([features])[0][0]

    # ✅ Convert float32 to Python float
    return jsonify({"prediction": {"probability_pcos": float(prediction_pcos), "probability_not_pcos": float(prediction_no_pcos)}})  


if __name__ == '__main__':
    app.run(debug=True)
