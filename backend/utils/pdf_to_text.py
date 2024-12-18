from langchain_community.document_loaders import PyPDFLoader


def extract_text_from_pdf(pdf_path):
    print(pdf_path)
    loader = PyPDFLoader(pdf_path)
    # loader = PyPDFLoader("../data/pdf1.pdf")
    pages = loader.load()       # the text is loaded in Document format, with metadata as filename.

    # for i, page in enumerate(pages[:5]):
    #     print(f"Page {i + 1}:\n{page.page_content}\n")
        
    return pages