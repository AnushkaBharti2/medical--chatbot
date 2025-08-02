from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    response = generate_response(user_input)
    return jsonify({'reply': response})

def generate_response(message):
    if "fever" in message.lower():
        return "You might have an infection. Please consult a doctor."
    elif "headache" in message.lower():
        return "It could be due to stress or dehydration. Take rest and stay hydrated."
    else:
        return "I'm just a simple medical chatbot. Please consult a real doctor for serious concerns."

if __name__ == '__main__':
    app.run(debug=True)
elif "cough" in user_message.lower():
    bot_response = "Try cough syrup and warm fluids."

