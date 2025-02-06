import os

from dotenv import load_dotenv
import os

load_dotenv()  # Load the variables from .env

from openai import OpenAI
import json

import pdf_extractor

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv('OPEN_API_KEY'))  # Replace with your API key

prompt_string = """convert this text to structured json. 
                       if the english does not exist please translate the hiragana to english.
                       if the romanji does not exist please translate the hiragana to romanji.
                       Return it in the following format: 
                       [{'hiragana': '', 'romanji': '', 'english': ''}]
                       Only return the JSON not formatted as a code block.
                       this is the text to convert:
                    """

def structure_text_with_openai(text_blob: str) -> dict:
    """
    Send text to OpenAI and return structured JSON data
    """
    response = client.chat.completions.create(
        model="gpt-4o-2024-08-06",  # or "gpt-3.5-turbo"
        messages=[
            {"role": "developer", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": prompt_string + text_blob,
            }
        ],
    )

    # Extract and parse the JSON response
    print(response)
    json_response = response.choices[0].message.content
    breakpoint()

    # return json.loads(json_response)


# Example usage
if __name__ == "__main__":
    sample_text = pdf_extractor.get_text_from_pdf('classroom_phrases.pdf')

    print('sampletext', sample_text)

    structured_data = structure_text_with_openai(sample_text)
    # print(json.dumps(structured_data, indent=2))