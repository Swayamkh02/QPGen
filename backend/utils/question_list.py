import json

# Input configuration
configs = [
    {
        "type": "Multiple Choice Questions",
        "quantity": "12"
    },
    {
        "type": "Fill in the blanks",
        "quantity": "11"
    },
    {
        "type": "Short Answer Questions",
        "quantity": "20"
    },
    {
        "type": "True or False",
        "quantity": "20"
    }
]

# Function to generate the formatted question list
def generate_question_list(configs):
    question_list = []
    for config in configs:
        question_type = config.get("type", "Unknown Type")
        quantity = config.get("quantity", "0")
        formatted_entry = f"{quantity} x {question_type}"
        question_list.append(formatted_entry)

    return question_list  #returns a list or str of questions

def convert_question_list_to_str(question_list):
    if not question_list:
        return "No questions available."
    
    return "\n".join(question_list)


## Sample Usage Generate the question list
# question_list = generate_question_list(configs)
# print("Generated Question List:")
# for item in question_list:
#     print(item)
