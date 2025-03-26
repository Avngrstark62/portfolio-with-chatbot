from huggingface_hub import InferenceClient

class Chatbot:
    """A chatbot service that interacts with Mistral's model via Hugging Face API."""

    def __init__(self, portfolio_file="portfolio.txt"):
        self.client = InferenceClient()
        self.model = "mistralai/Mistral-7B-Instruct-v0.3"
        self.portfolio_data = self._load_portfolio(portfolio_file)

    def _load_portfolio(self, file_path: str) -> str:
        """Loads the portfolio details from a text file."""
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                return file.read()
        except FileNotFoundError:
            return "Portfolio data not available."

    def generate_response(self, user_input: str) -> str:
        """Generates a response from Mistral model based on user input."""
        prompt = f"""### Context:
You are an AI assistant specialized in answering questions about Abhijeet's portfolio. Use only the provided data to generate responses.

### Portfolio Details:
{self.portfolio_data}

### User Query:
{user_input}

### Instruction:
Answer concisely based on the portfolio details. If the question is outside scope, respond with 'I can only answer questions related to Abhijeet's portfolio.'"""

        response = self.client.text_generation(prompt, model=self.model, temperature=0.7)
        cleaned_response = response.split(':\n')[1]
        return cleaned_response

    def handle_request(self, user_input):
        """Handles JSON input and processes chatbot responses."""
        user_input = user_input

        if not user_input:
            raise ValueError("Request must contain a 'message' field.")

        return self.generate_response(user_input)