import pdfplumber
path = 'classroom_phrases.pdf'
path = 'lesson_2_deck.pdf'


def get_text_from_pdf(file_name):
    result = ""
    with pdfplumber.open(file_name) as pdf:
        for  page  in pdf.pages:
            result += page.extract_text()
    return result
