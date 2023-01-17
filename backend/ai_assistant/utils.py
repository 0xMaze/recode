import os
import openai
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")


def translate_code(from_language, to_language, code_snippet):
    openai.api_key = API_KEY
    # Use the OpenAI API to translate the code snippet
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=f"##### Translate this function from {from_language} into {to_language}\n### {from_language}\n\n{code_snippet}\n\n### {to_language}",
        temperature=0,
        max_tokens=2000,
        top_p=1,
        best_of=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["###"],
    )
    translated_code = response.choices[0].text
    return translated_code


def explain_code(code_snippet):
    openai.api_key = API_KEY
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=f'{code_snippet}\n\n"""\nHere\'s what the above code is doing:\n1.',
        temperature=0,
        max_tokens=2000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=['"""'],
    )

    explanation = "1." + response.choices[0].text
    return explanation


def create_docstring(code_snippet):
    openai.api_key = API_KEY
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=f'# Python 3.10\n\n{code_snippet}\n#### Create a high-quality doc-string for the function above.\n"""',
        temperature=0,
        max_tokens=2000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=['"""'],
    )

    doc_string = f'"""\n{response.choices[0].text}\n"""'
    return doc_string


def fix_code(code_snippet, language):
    openai.api_key = API_KEY

    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=f"##### Fix bugs in the below function\n \n### Buggy {language}\n{code_snippet}\n    \n### Fixed {language}",
        temperature=0,
        max_tokens=2000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["###"],
    )

    fixed_code = response.choices[0].text
    return fixed_code


def get_time_complexity(code_snippet):
    openai.api_key = API_KEY
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f'{code_snippet}\n"""\nThe time complexity of this function is',
        temperature=0,
        max_tokens=2000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["\n"],
    )

    time_complexity = response.choices[0].text
    return time_complexity
