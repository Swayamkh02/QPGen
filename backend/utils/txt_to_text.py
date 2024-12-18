from langchain_community.document_loaders import TextLoader


def extract_text_from_txt(txt_path):
    print(txt_path)
    loader = TextLoader(txt_path, encoding="utf-8")
    # loader = TextLoader("../data/force.txt", encoding="utf-8")
    pages = loader.load()       # the text is loaded in Document format, with metadata as filename.
    # for i, page in enumerate(pages[:5]):
    #     print(f"Page {i + 1}:\n{page.page_content}\n")

    return pages