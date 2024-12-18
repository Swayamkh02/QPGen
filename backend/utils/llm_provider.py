import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()
if not os.environ.get("GROQ_API_KEY"):
    raise ValueError("GROQ_API_KEY is missing. Please set it in the .env file.")


def get_groq_llm():
    model = ChatGroq(
        model="llama-3.1-8b-instant",
        #  model = "llama-3.3-70b-versatile",
        api_key=os.getenv("GROQ_API_KEY")  # Fetch API key from .env
    )
    # print("Model initialized successfully!")
    return model

def get_text_token_count_groq(text):
    model = ChatGroq(
        # model="llama3-8b-8192",
        model = "llama-3.3-70b-versatile",
        api_key=os.getenv("GROQ_API_KEY"),  # Fetch API key from .env
    )
    return model.get_num_tokens(text=text)


## Example call to the above llm function which returns model object of langchain
# model = get_groq_llm()
# response = model.invoke(input=["Hi"])
# print(response)