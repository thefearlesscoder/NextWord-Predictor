import gradio as gr
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Load your model (make sure the path is correct)
model = load_model('my_model')

# Load your tokenizer (same way you loaded it in your notebook)
# For example, you can pickle the tokenizer if it's not loaded directly from a .json file
import pickle
with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

max_sequence_len = 100  # Set the appropriate value

