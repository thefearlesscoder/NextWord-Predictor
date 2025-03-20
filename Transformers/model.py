import string
import torch
from transformers import RobertaForMaskedLM, RobertaTokenizer

# here i am leading tokenizer for large model
tokenizer = RobertaTokenizer.from_pretrained("roberta-large")

# now loading roberto large model and set it to eval mode
model = RobertaForMaskedLM.from_pretrained("roberta-large").eval()

# keeping 10 predicted tokens
TOP_K = 10

def decode_predictions(tokenizer, pred_indices, top_clean):
    """
     This function will take the top predicted token indexs and convert them back to tokens 
     ignoring some unwanted tokns.

     Parameters it will take 
     1. tokenizer (RobertaTokenizer): Tokenizer used for decoding the tokens from indexs.
     2. pred_indices (list): List of predicted token indexs.
     3. top_clean (int): Number of top tokens to return after filtering.


     Returns -----> List of decoded tokens (as strings)

    """
    ignore_tokens = string.punctuation + "[PAD]"
    tokens = [
        tokenizer.decode(idx).strip()
        for idx in pred_indices
        if tokenizer.decode(idx).strip() not in ignore_tokens
    ]
    return tokens[:top_clean]