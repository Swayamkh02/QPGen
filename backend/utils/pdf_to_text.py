from PIL import Image
import pytesseract
import fitz  # PyMuPDF
from langchain_community.document_loaders import PyPDFLoader


# def extract_text_from_pdf(pdf_path):
#     print(pdf_path)
#     loader = PyPDFLoader(pdf_path)
#     # loader = PyPDFLoader("../data/pdf1.pdf")
#     pages = loader.load()       # the text is loaded in Document format, with metadata as filename.

#     # for i, page in enumerate(pages[:5]):
#     #     print(f"Page {i + 1}:\n{page.page_content}\n")
        
#     return pages


def extract_text_from_pdf(pdf_path):
    loader = PyPDFLoader(pdf_path)
    pages = loader.load()
    extracted_text = "\n".join([page.page_content for page in pages])

    if extracted_text.strip() != "" and len(pages)>0:
        return extracted_text

    doc = fitz.open(pdf_path)
    extracted_pages=[]
    for page_num in range(len(doc)):
        page = doc[page_num]
        pix = page.get_pixmap() 
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        image_text = pytesseract.image_to_string(img)
        extracted_pages.append({
            'page_content':image_text,
            'metadata':{'source': pdf_path, 'page': page_num}
        })

    return extracted_pages
