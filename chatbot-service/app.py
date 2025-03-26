from flask import Flask, request, jsonify
from chatbot import Chatbot
from config import connectHuggingFace
from flask_cors import CORS  # Import CORS

connectHuggingFace()

app = Flask(__name__)

# CORS(app)  # Enable CORS for all routes
CORS(app, origins=["http://localhost:5173", "https://abhijeetst22-portfolio.netlify.app/"])  # Allow only frontend requests

@app.route('/')
def hello():
    return 'Chat Service is running'

@app.route('/chat', methods=['POST'])
def chat():
    """Handles user queries and returns AI-generated responses."""
    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "Request must contain a 'message' field."}), 400

        user_message = data["message"]
        chatbot = Chatbot()
        response = chatbot.handle_request(user_message)

        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)