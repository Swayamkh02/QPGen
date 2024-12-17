import os

from utils import chunking, llm_provider, pdf_to_text, txt_to_text, question_list
from constants import prompts


def generate_final_prompt(data, context):
    difficulty = data.get('difficulty')
    question_list_obj = question_list.generate_question_list(data.get('configs', []))
    question_str = question_list.convert_question_list_to_str(question_list=question_list_obj)
    
    # Format the final prompt using the template
    final_prompt = prompts.QP_GEN_PROMPT_V1.format(
        difficulty=difficulty,
        questions_list=question_str,
        context=context
    )
    
    return final_prompt

def generate_from_pdf(data, file_path):

    pdf_text = pdf_to_text.extract_text_from_pdf(file_path)
    chunked_pdf_text = chunking.get_text_chunks(pdf_text)
    context = "\n".join([ch for ch in chunked_pdf_text]) 

    final_prompt = generate_final_prompt(data=data, context=context)
    llm = llm_provider.get_groq_llm()

    response = llm.invoke(input=[final_prompt])
    if(response.content):
        return {'qp':response.content,'success':True}
    else:
        return {'qp':None,'success':False}
    
def generate_from_txt(data, file_path):

    txt_text = txt_to_text.extract_text_from_txt(file_path)
    chunked_txt_text = chunking.get_text_chunks(txt_text)
    context = "\n".join([ch for ch in chunked_txt_text]) 

    final_prompt = generate_final_prompt(data=data, context=context)
    llm = llm_provider.get_groq_llm()

    response = llm.invoke(input=[final_prompt])
    if(response.content):
        return {'qp':response.content,'success':True}
    else:
        return {'qp':None,'success':False}




## Example usage
# data = {
#     "difficulty": "Hard",
#     "configs": [
#         {"type": "Multiple Choice Questions", "quantity": "12"},
#         {"type": "Fill in the blanks", "quantity": "11"},
#         {"type": "Short Answer Questions", "quantity": "20"},
#         {"type": "True or False", "quantity": "20"}
#     ]
# }
# context = "This chapter covers photosynthesis, respiration, and plant biology concepts."

# final_prompt = generate_final_prompt(data, context)
# print(final_prompt)
# llm = llm_provider.get_groq_llm()
# response = llm.invoke(input=[final_prompt])
# if(response.content):
#     print(response.content)
# else:
#     print(response)
#     print("Error!!!")