from dotenv import load_dotenv
import os
from openai import OpenAI
from os import path
import pdf_extractor

load_dotenv()


client = OpenAI(api_key=os.getenv('OPEN_API_KEY'))

prompt_string = """convert this text to structured json. 
                       if the english does not exist please translate the hiragana to english.
                       if the romanji does not exist please translate the hiragana to romanji.
                       Return it in the following format: 
                       [{'hiragana': '', 'romanji': '', 'english': ''}]
                       Only return valid JSON with double quotes instead of single quotes not 
                       formatted as a code block.
                       this is the text to convert:
                    """

def structure_text_with_openai(source_filename: str) -> dict:
    """
    Send text to OpenAI and return structured JSON data
    """

    text_blob = pdf_extractor.get_text_from_pdf(source_filename)

    response = client.chat.completions.create(
        model="gpt-4o-2024-08-06",
        messages=[
            {"role": "developer", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": prompt_string + text_blob,
            }
        ],
    )

    print(response)
    json_response = response.choices[0].message.content
    basepath = path.dirname(__file__)
    filepath = path.abspath(path.join(basepath, "..", "public", "cards.json"))
    with open(filepath, 'w') as f:
        f.write(json_response)




# Example usage
if __name__ == "__main__":
    structured_data = structure_text_with_openai('classroom_phrases.pdf')
