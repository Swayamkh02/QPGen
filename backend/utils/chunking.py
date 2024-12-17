from langchain.text_splitter import CharacterTextSplitter


def get_text_chunks(pages):
    combined_text = "\n".join([doc.page_content for doc in pages]) 
    splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=5)

    page_chunks = splitter.split_text(combined_text)

    print(f"Number of chunks: {len(page_chunks)}")
    for i, chunk in enumerate(page_chunks):
        print(f"Chunk {i + 1}:\n{chunk}\n")

    return page_chunks  #returns a list of str

    