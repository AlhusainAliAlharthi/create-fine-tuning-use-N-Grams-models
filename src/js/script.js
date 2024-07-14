//perposeTypeGroupId for html element
//perposeTypeGroup for js
//perposeTypeGroupValue for taking value

const chatContainerDivGeneration = document.getElementById(
  "chatContainerDivGenerationId"
);
const messageTextInputGeneration = document.getElementById(
  "messageTextInputGenerationId"
);

const chatTabGeneration = document.getElementById("chatTabGenerationId");
const selectionTabModeling = document.getElementById("selectionTabModelingId");
const footerDivGeneration = document.getElementById("footerDivGenerationId");
const footerDivModeling = document.getElementById("footerDivModelingId");

const settingsDivGeneration = document.getElementById(
  "settingsDivGenerationId"
);
const settingsDivCreation = document.getElementById("settingsDivCreationId");
const availableModelsDivGeneration = document.getElementById(
  "availableModelsDivGenerationId"
);

const openAddingModelSectionButtonGeneration = document.getElementById(
  "openAddingModelSectionButtonGenerationId"
);
const openAddingModelBodyDivGeneration = document.getElementById(
  "openAddingModelBodyDivGenerationId"
);
const addModelButtonGeneration = document.getElementById(
  "addModelButtonGenerationId"
);
const availableModelsBodyDivGeneration = document.getElementById(
  "availableModelsBodyDivGenerationId"
);

const selectionDivModeling = document.getElementById("selectionDivModelingId");

const openSectionButtonCreation = document.getElementById(
  "openSectionButtonCreationId"
);
const openSectionButtonReTraining = document.getElementById(
  "openSectionButtonReTrainingId"
);
const sectionDivCreation = document.getElementById("sectionDivCreationId");
const sectionDivReTraining = document.getElementById("sectionDivReTrainingId");

const settingsDivReTraining = document.getElementById(
  "settingsDivReTrainingId"
);
const ReTrainModelButtonReTraining = document.getElementById(
  "ReTrainModelButtonReTrainingId"
);

const tokensNumberInputGeneration = document.getElementById(
  "tokensNumberInputGenerationId"
);
const creativityRangeInputGeneration = document.getElementById(
  "creativityRangeInputGenerationId"
);

const maxGramsNumberInputCreation = document.getElementById(
  "maxGramsNumberInputCreationId"
);
const textAreaInputCreation = document.getElementById(
  "textAreaInputCreationId"
);
const SESwitchInputCreation = document.getElementById(
  "S&ESwitchInputCreationId"
);
const symbolsSwitchInputCreation = document.getElementById(
  "symbolsSwitchInputCreationId"
);
const newlineSwitchInputCreation = document.getElementById(
  "newlineSwitchInputCreationId"
);
const modelNameTextInputCreation = document.getElementById(
  "modelNameTextInputCreationId"
);
const createButtonCreation = document.getElementById("createButtonCreationId");

const textAreaInputReTraining = document.getElementById(
  "textAreaInputReTrainingId"
);
const SESwitchInputReTraining = document.getElementById(
  "S&ESwitchInputReTrainingId"
);
const symbolsSwitchInputReTraining = document.getElementById(
  "symbolsSwitchInputReTrainingId"
);
const newlineSwitchInputReTraining = document.getElementById(
  "newlineSwitchInputReTrainingId"
);

var models = {};
var modelName;

function addButtonListener(button) {
  button.addEventListener("click", function () {
    button.classList.remove("bg-gradient-primary");
    button.classList.add("bg-gradient-success");
    modelName = this.name;
    const container = button.parentElement;
    container.prepend(button);
    const buttons = document.querySelectorAll(
      "#availableModelsBodyDivGenerationId button"
    );
    buttons.forEach(function (btn) {
      if (btn !== button) {
        btn.classList.remove("bg-gradient-success");
        btn.classList.add("bg-gradient-primary");
      }
    });
  });
}

function addButtonWithListener(divID, name) {
  var newButton = document.createElement("button");
  newButton.type = "button";
  newButton.className = "btn btn-block bg-gradient-primary btn-lg";
  newButton.name = name;
  newButton.textContent = name;

  var availableModelsBodyDivGenerationFunc = document.getElementById(divID);
  availableModelsBodyDivGenerationFunc.appendChild(newButton);

  newButton.addEventListener("click", function () {
    newButton.classList.remove("bg-gradient-primary");
    newButton.classList.add("bg-gradient-success");
    modelName = this.name;
    var container = newButton.parentElement;
    container.prepend(newButton);
    var buttons = document.querySelectorAll("#" + divID + " button");
    buttons.forEach(function (btn) {
      if (btn !== newButton) {
        btn.classList.remove("bg-gradient-success");
        btn.classList.add("bg-gradient-primary");
      }
    });
  });
}

var Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

document.addEventListener("DOMContentLoaded", function () {
  chatTabGeneration.addEventListener("click", function () {
    footerDivGeneration.style.display = "block";
    footerDivModeling.style.display = "none";

    settingsDivGeneration.style.display = "block";
    settingsDivCreation.style.display = "none";
    availableModelsDivGeneration.style.display = "block";
    sectionDivReTraining.style.display = "none";
    settingsDivReTraining.style.display = "none";
  });

  selectionTabModeling.addEventListener("click", function () {
    footerDivGeneration.style.display = "none";
    footerDivModeling.style.display = "none";

    settingsDivGeneration.style.display = "none";
    settingsDivCreation.style.display = "none";
    availableModelsDivGeneration.style.display = "none";
    selectionDivModeling.style.display = "flex";
    sectionDivCreation.style.display = "none";
    sectionDivReTraining.style.display = "none";
    settingsDivReTraining.style.display = "none";
  });

  openAddingModelSectionButtonGeneration.addEventListener("click", function () {
    availableModelsBodyDivGeneration.style.display = "none";
    openAddingModelBodyDivGeneration.style.display = "block";
    openAddingModelSectionButtonGeneration.style.display = "none";
    addModelButtonGeneration.style.display = "block";
    sectionDivReTraining.style.display = "none";
    settingsDivReTraining.style.display = "none";
  });

  addModelButtonGeneration.addEventListener("click", function () {
    availableModelsBodyDivGeneration.style.display = "block";
    openAddingModelBodyDivGeneration.style.display = "none";
    addModelButtonGeneration.style.display = "none";
    openAddingModelSectionButtonGeneration.style.display = "block";
    sectionDivReTraining.style.display = "none";
    settingsDivReTraining.style.display = "none";
  });

  openSectionButtonCreation.addEventListener("click", function () {
    sectionDivCreation.style.display = "block";
    settingsDivCreation.style.display = "block";
    selectionDivModeling.style.display = "none";
    sectionDivReTraining.style.display = "none";
    footerDivModeling.style.display = "block";
    settingsDivReTraining.style.display = "none";
    createButtonCreation.style.display = "block";
    ReTrainModelButtonReTraining.style.display = "none";
  });

  createButtonCreation.addEventListener("click", function () {
    if (textAreaInputCreation.value == "") {
      Toast.fire({
        icon: "error",
        title: "Please, write your training text.",
      });
    } else if (modelNameTextInputCreation.value == "") {
      Toast.fire({
        icon: "error",
        title: "Please, write your model name.",
      });
    } else if (parseInt(maxGramsNumberInputCreation.value, 10) < 2) {
      Toast.fire({
        icon: "error",
        title: "Max grams can not be less than 2.",
      });
    } else {
      main("buildModel");
      footerDivGeneration.style.display = "block";
      footerDivModeling.style.display = "none";

      settingsDivGeneration.style.display = "block";
      settingsDivCreation.style.display = "none";
      availableModelsDivGeneration.style.display = "block";

      sectionDivCreation.style.display = "none";
      selectionDivModeling.style.display = "none";
      sectionDivReTraining.style.display = "none";
      settingsDivReTraining.style.display = "none";

      chatTabGeneration.click();
      Toast.fire({
        icon: "success",
        title: "Model is created. You can using it by click button.",
      });
    }
  });
  ReTrainModelButtonReTraining.addEventListener("click", function () {
    if (textAreaInputReTraining.value == "") {
      Toast.fire({
        icon: "error",
        title: "Please, write your training text.",
      });
    } else {
      main("updateModel");
      footerDivGeneration.style.display = "block";
      footerDivModeling.style.display = "none";

      settingsDivGeneration.style.display = "block";
      settingsDivCreation.style.display = "none";
      availableModelsDivGeneration.style.display = "block";

      sectionDivCreation.style.display = "none";
      selectionDivModeling.style.display = "none";
      sectionDivReTraining.style.display = "none";
      settingsDivReTraining.style.display = "none";

      chatTabGeneration.click();
      Toast.fire({
        icon: "success",
        title: "Model is updated. You can using it by click button.",
      });
    }
  });

  openSectionButtonReTraining.addEventListener("click", function () {
    sectionDivCreation.style.display = "none";
    sectionDivReTraining.style.display = "block";
    footerDivModeling.style.display = "block";
    settingsDivReTraining.style.display = "block";
    settingsDivCreation.style.display = "none";
    selectionDivModeling.style.display = "none";
    createButtonCreation.style.display = "none";
    ReTrainModelButtonReTraining.style.display = "block";
  });

  var buttons = document.querySelectorAll(
    "#availableModelsBodyDivGenerationId button"
  );

  buttons.forEach(function (button) {
    addButtonListener(button);
  });
});

$(function () {
  $("#creativityRangeInputGenerationId").ionRangeSlider({
    min: 0,
    max: 1,
    type: "single",
    step: 0.1,
    postfix: " ",
    prettify: false,
    hasGrid: true,
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//This defaultText is generated using GPT-4
defaultText = `
Introduction
N-grams are a fundamental concept in the field of natural language processing (NLP) and computational linguistics. They are a type of probabilistic language model used for predicting the next item in a sequence. In the context of text, they are used to predict the next word in a sentence based on the previous words. The "N" in N-gram signifies the number of items (words, characters, etc.) considered together as a group.

What is an N-Gram?
An N-gram is a contiguous sequence of N items from a given sample of text or speech. These items can be phonemes, syllables, letters, words, or base pairs according to the application. The concept is easiest to explain with words. For example:

- Unigram (1-gram): A single word. For instance, in the sentence "I love natural language processing," the unigrams are "I," "love," "natural," "language," and "processing."
- Bigram (2-gram): A pair of consecutive words. From the same sentence, the bigrams are "I love," "love natural," "natural language," and "language processing."
- Trigram (3-gram): A sequence of three consecutive words. From the sentence, the trigrams are "I love natural," "love natural language," and "natural language processing."
- 4-gram (Quadgram): A sequence of four consecutive words, such as "I love natural language" and "love natural language processing."

As the value of N increases, the N-gram becomes more complex and captures more context, but it also requires more data to accurately model the language.

Why Use N-Grams?
N-grams are used for various purposes in NLP:

1- Language Modeling: Predicting the next word in a sentence.
2- Text Generation: Creating new text by predicting sequences of words.
3- Speech Recognition: Understanding spoken language by predicting word sequences.
4- Spelling Correction: Identifying and correcting misspelled words based on context.
5- Machine Translation: Translating text from one language to another by understanding word sequences.
6- Sentiment Analysis: Determining the sentiment of text by analyzing word sequences.

How N-Grams Work
To build an N-gram model, you typically follow these steps:

1- Corpus Collection: Gather a large dataset of text that represents the language you want to model.
2- Tokenization: Break the text into tokens (words or characters).
3- N-Gram Generation: Generate all possible N-grams from the tokens.
4- Probability Calculation: Calculate the probabilities of each N-gram occurring in the dataset. This can be done using maximum likelihood estimation (MLE), which is simply the count of the N-gram divided by the total number of N-grams.

For example, in a bigram model, the probability of a word ( w_i ) given the previous word ( w_{i-1} ) is calculated as:

[ P(w_i | w_{i-1}) = frac{Count(w_{i-1}, w_i)}{Count(w_{i-1})} ]

This means the probability of ( w_i ) given ( w_{i-1} ) is the count of the bigram ( (w_{i-1}, w_i) ) divided by the count of the unigram ( w_{i-1} ).

Advantages and Limitations
Advantages:
- Simplicity: N-grams are straightforward to understand and implement.
- Efficiency: They require less computational resources compared to more complex models.
- Effectiveness: They provide a decent baseline for many NLP tasks.

Limitations:
- Data Sparsity: As N increases, the number of possible N-grams grows exponentially, leading to many N-grams with zero occurrences in the training data.
- Context Limitation: N-grams can only capture limited context. For example, a bigram model only considers the immediate previous word, which might not be sufficient for understanding long-range dependencies.
- Memory Usage: Higher-order N-grams (like 4-grams or 5-grams) require significant memory to store the model.

Smoothing Techniques
To address the issue of data sparsity, smoothing techniques are used. These techniques adjust the probabilities to account for unseen N-grams:

1- Additive Smoothing (Laplace Smoothing): Adds a small constant to all counts to ensure no probability is zero.
2- Good-Turing Discounting: Adjusts the counts of N-grams based on their frequency.
3- Kneser-Ney Smoothing: A sophisticated technique that adjusts the probabilities based on the likelihood of seeing a novel continuation of a given N-gram.

Practical Applications
1- Text Prediction: Keyboard apps use N-grams to suggest the next word while typing.
2- Spell Checkers: N-grams help identify and correct spelling errors based on context.
3- Speech Recognition Systems: Use N-grams to improve the accuracy of recognizing spoken words.
4- Machine Translation: N-grams help translate sentences by considering sequences of words.

 Conclusion
N-grams are a foundational tool in NLP, offering a balance between simplicity and effectiveness. They provide a basic yet powerful way to model language, enabling various applications from text generation to speech recognition. Despite their limitations, advancements in smoothing techniques and hybrid models continue to enhance their performance, making them a vital component of the NLP toolkit.

Hi there! I've been hearing a lot about N-Grams recently, but I'm not entirely sure what they are. Can you explain them to me?

Of course! N-Grams are a sequence of 'n' items from a given sample of text or speech. These items can be words, letters, or syllables. For example, in the case of words, an N-Gram can be a single word (unigram), a pair of words (bigram), a triplet of words (trigram), and so on.

So, if I understand correctly, a bigram would be a pair of consecutive words in a text?

Exactly! For instance, in the sentence "I love natural language processing," the bigrams would be "I love," "love natural," "natural language," and "language processing."

Got it. What about trigrams?

Trigrams are simply sequences of three consecutive words. In the same sentence, the trigrams would be "I love natural," "love natural language," and "natural language processing."

That makes sense. But why are N-Grams useful? How are they used in practice?

N-Grams are quite powerful in various natural language processing (NLP) tasks. They help in modeling the probability of a word given the previous words in a sequence, which is essential in tasks like text prediction, speech recognition, and machine translation. By analyzing the frequency and co-occurrence of N-Grams, we can make educated guesses about the structure and meaning of text.

Interesting! So, are N-Grams used in search engines too?

Yes, they are! Search engines use N-Grams to improve the accuracy of search results by understanding the context of the query. For example, if someone searches for "best Italian restaurants," the search engine can use bigrams and trigrams to understand that "Italian restaurants" is a single entity and provide more relevant results.

How are N-Grams generated from a text?

Generating N-Grams from a text is quite straightforward. You slide a window of size 'n' over the text and capture the sequences of 'n' items. For example, with a window size of 2, you'd capture all possible bigrams in the text. There are various libraries and tools available that can automate this process.

Are there any challenges associated with using N-Grams?

Definitely. One of the main challenges is data sparsity. As the value of 'n' increases, the number of possible N-Grams grows exponentially, leading to many possible N-Grams that may not appear in the training data. This can make it difficult to estimate probabilities accurately for less frequent N-Grams. Another challenge is that N-Grams capture only local context and might miss out on long-range dependencies in the text.

How do we address these challenges?

There are several techniques. One common approach is smoothing, which adjusts the probabilities of N-Grams to account for unseen sequences. Another approach is using more advanced models like recurrent neural networks (RNNs) or transformers, which can capture longer-range dependencies more effectively than traditional N-Gram models.

Wow, there's a lot more to N-Grams than I initially thought! How can I get started with implementing N-Grams in my projects?

A good place to start is by using libraries like NLTK or SpaCy in Python, which have built-in functions for generating and working with N-Grams. You can also explore more advanced topics like language modeling and text generation to see how N-Grams fit into larger NLP systems. Practical implementation and experimentation will help you understand their strengths and limitations better.

Thank you so much for explaining all of this. I feel much more informed now!

Hi there! I heard about N-Grams recently, and I'm curious to know more. Can you explain what they are?

Absolutely! N-Grams are a concept from computational linguistics and natural language processing. Essentially, an N-Gram is a contiguous sequence of 'n' items from a given sample of text or speech. These items could be words, characters, or even syllables.

I see. So, if 'n' is 1, it's called a unigram, right?

That's right! A unigram is just a single item from the text. For instance, in the sentence "Artificial intelligence is fascinating," the unigrams would be "Artificial," "intelligence," "is," and "fascinating."

And if 'n' is 2, it's a bigram, correct?

Exactly! For the same sentence, the bigrams would be "Artificial intelligence," "intelligence is," and "is fascinating."

What about trigrams? Are they just sequences of three words?

Yes, trigrams are sequences of three consecutive words. In our example, the trigrams would be "Artificial intelligence is" and "intelligence is fascinating."

Great, I think I understand the basics. But how are N-Grams actually useful?

N-Grams are quite powerful in many natural language processing tasks. They help in building language models, which predict the likelihood of a sequence of words. This is useful in applications like predictive text input, machine translation, and speech recognition. By analyzing the frequency and co-occurrence of N-Grams, we can gain insights into language patterns and structure.

Can you give me an example of how N-Grams are used in predictive text?

Sure! Predictive text systems, like those on your smartphone keyboard, use N-Grams to suggest the next word in a sentence. If you've typed "I am going to," the system might look at the trigrams it has learned and predict "the store," "the gym," or other common phrases that follow.

That sounds very practical! How do you generate N-Grams from a text?

Generating N-Grams is fairly straightforward. You slide a window of size 'n' across the text to capture all possible sequences. For example, with a window size of 2, you'd extract all bigrams. Many programming languages have libraries to automate this process, like Python's NLTK or SpaCy.

Are there any limitations or challenges when working with N-Grams?

Yes, one significant challenge is data sparsity. As 'n' increases, the number of possible N-Grams grows exponentially, leading to many N-Grams that might not appear in your training data. This makes it hard to estimate probabilities accurately for rare or unseen N-Grams. Another challenge is that N-Grams capture only short-term dependencies, which might not be sufficient for understanding longer context in text.

How do you overcome these challenges?

There are several strategies. One is smoothing, which adjusts the probabilities of N-Grams to account for those that are rare or unseen. Another approach is to use more sophisticated models like recurrent neural networks (RNNs) or transformers, which can capture longer-range dependencies and provide better context understanding.

I’ve heard about Markov models in relation to N-Grams. How do they fit together?

Great question! N-Grams can be viewed through the lens of Markov models. In an N-Gram model, the probability of a word depends only on the previous 'n-1' words, which is a Markov assumption. This means the future state (the next word) depends only on the current state (the last 'n-1' words), not the entire sequence of previous words.

That’s interesting. Can N-Grams be used for more than just language modeling?

Definitely! N-Grams are used in a variety of fields. In bioinformatics, they help in analyzing DNA sequences. In cybersecurity, they are used to detect anomalies in network traffic. They also play a role in text classification, sentiment analysis, and information retrieval.

Wow, N-Grams seem really versatile. How can I start using them in my projects?

A good starting point is to use existing libraries like NLTK or SpaCy in Python, which provide tools for generating and working with N-Grams. You can experiment with building simple language models or analyzing text data. As you get more comfortable, you can explore advanced topics like smoothing techniques, backoff models, and integrating N-Grams with neural network-based models.

Thank you so much for explaining all of this! I feel much more knowledgeable about N-Grams now.

You're welcome! I'm glad I could help. Don't hesitate to reach out if you have more questions or need guidance on your projects.

Hi there! I heard you know a lot about N-Grams. Can you tell me what they are exactly?

Absolutely! N-Grams are a sequence of 'n' items from a given sample of text or speech. These items can be phonemes, syllables, letters, words, or base pairs according to the application. In simpler terms, if we talk about words in a sentence, an N-Gram is a contiguous sequence of 'n' words from a given text.

That sounds interesting! So, if I understand correctly, a 1-Gram would be just one word, a 2-Gram would be a sequence of two words, and so on?

Exactly right! For example, if we take the sentence "I love to learn about N-Grams," the 1-Grams (or unigrams) would be ["I", "love", "to", "learn", "about", "N-Grams"]. The 2-Grams (or bigrams) would be ["I love", "love to", "to learn", "learn about", "about N-Grams"], and so forth.

Cool! How are N-Grams useful?

N-Grams are incredibly useful in various fields, especially in natural language processing (NLP). They help in predicting the next item in a sequence, which is crucial for tasks like text completion and speech recognition. For example, if a language model knows that the sequence "I love" is often followed by "you" or "to read," it can predict and suggest these options.

I see. So, they help machines understand and predict language better. Are there any challenges with using N-Grams?

Yes, there are a few challenges. One major challenge is the "curse of dimensionality." As the value of 'n' increases, the number of possible N-Grams grows exponentially, which can make computation and storage quite challenging. Also, longer N-Grams require more data to accurately capture patterns, and if the dataset is too small, the model might not learn effectively.

That makes sense. How do you decide the right value for 'n'?

Good question! The value of 'n' depends on the application and the available data. For example, in simple applications like spell checkers, bigrams or trigrams might be sufficient. In more complex applications like machine translation or text generation, higher-order N-Grams might be necessary. Typically, there's a trade-off between the complexity and the performance of the model.

Are N-Grams used alone, or do they work with other techniques?

They often work in conjunction with other techniques. While N-Grams are useful for capturing local dependencies, they don't capture long-range dependencies very well. That's where more advanced models, like neural networks and transformers, come into play. These models can capture both local and long-range dependencies, providing a more comprehensive understanding of language.

Interesting! So, in modern NLP applications, are N-Grams becoming less important?

Not necessarily. While more advanced models are prevalent, N-Grams still play a crucial role, especially in preprocessing and feature extraction stages. They are simple yet powerful tools for understanding and manipulating text data. Many modern models use concepts derived from N-Grams to improve their performance.

That makes a lot of sense. Thank you for explaining all this! One last question: how can I start experimenting with N-Grams?

You're welcome! To start experimenting, you can use programming languages like Python, which has libraries like NLTK (Natural Language Toolkit) and spaCy that make working with N-Grams easy. You can tokenize text into N-Grams, analyze their frequency, and even build simple language models. There are plenty of tutorials and resources online to guide you through the process.

Great! I'll definitely look into those resources. Thanks again for all the insights!

Anytime! Enjoy your journey into the world of N-Grams and NLP. Feel free to reach out if you have more questions.

Hey! I've been hearing a lot about N-Grams lately, but I'm not entirely sure what they are. Can you explain it to me?

Of course! N-Grams are a type of probabilistic language model used in natural language processing. Essentially, they are contiguous sequences of 'n' items from a given sample of text or speech. The 'n' can be any number, so if you have 'n' set to 1, it's called a unigram, 'n' set to 2 is a bigram, 'n' set to 3 is a trigram, and so on.

Okay, so a unigram would just be a single word, right?

Exactly. A unigram model looks at individual words in a sentence. For example, if we have the sentence "I love natural language processing," a unigram model would consider each word separately: "I," "love," "natural," "language," and "processing."

And for bigrams?

For bigrams, the model looks at pairs of consecutive words. So, using the same sentence, a bigram model would see "I love," "love natural," "natural language," and "language processing."

Ah, I see. So, how do these N-Grams help in natural language processing?

N-Grams help in several ways. One of the primary uses is in predicting the next word in a sequence, which is crucial for applications like text prediction and autocompletion. By analyzing the frequency of word sequences in a large corpus of text, N-Gram models can estimate the likelihood of a word following a given sequence of words. This can also be used for other tasks like speech recognition and machine translation.

Interesting! So, the more extensive the sequence, the better the prediction?

Generally, yes. Longer sequences can capture more context, leading to better predictions. However, there's a trade-off. Longer N-Grams require more computational resources and more data to estimate their probabilities accurately. That's why we often use a balance, like trigrams, which are a good compromise between context and computational efficiency.

I guess that makes sense. But how do we handle sequences that the model hasn't seen before?

Great question! This is known as the problem of sparsity. One common approach to deal with this is called smoothing. Smoothing techniques adjust the probability estimates to account for unseen sequences. Some popular methods include Laplace smoothing, which adds a small constant to all counts, and backoff and interpolation methods, which combine probabilities from shorter N-Grams when longer sequences are unseen.

Got it. So, can N-Grams be used for languages other than English?

Absolutely! N-Grams are language-agnostic, meaning they can be used for any language. The principles remain the same; you just need a large corpus of text in the target language to build your N-Gram model. Some languages might require more sophisticated preprocessing, like tokenization and handling of different scripts, but the core idea remains the same.

That's fascinating. Are there any limitations to using N-Grams?

Yes, there are a few. One major limitation is that N-Gram models can only consider a fixed-length context. They can't capture long-range dependencies effectively. For example, in the sentence "The cat that sat on the mat was black," a bigram or trigram model might not effectively capture the relationship between "cat" and "was black." Another limitation is data sparsity, especially for higher-order N-Grams. The longer the sequence, the less likely it is to have enough data to make reliable predictions.

So, what other models are used to overcome these limitations?

More advanced models like Recurrent Neural Networks (RNNs) and Transformer-based models like BERT and GPT have been developed to overcome these limitations. These models can capture long-range dependencies and handle larger contexts more effectively. They use deep learning techniques to learn from vast amounts of data, allowing them to understand and generate human language more accurately.

Wow, that's a lot of information! Thanks for explaining all this to me. It sounds like N-Grams are a foundational concept that has led to more advanced models in natural language processing.

Exactly! N-Grams were one of the early techniques that helped us understand and process language computationally. While we've moved on to more complex models, N-Grams still play a crucial role in many applications and provide a great foundation for understanding more advanced concepts in NLP.

I'll have to read more about this. Thanks again for your time and explanations!

You're welcome! Feel free to ask if you have any more questions. I'm always happy to talk about N-Grams and NLP!

Hey there! I’ve heard the term N-Grams being thrown around a lot in the context of text analysis and NLP. Can you tell me what they are?

Absolutely! N-Grams are a fundamental concept in text processing. They are simply sequences of 'n' items from a given sample of text. An item can be a character, a word, or even a phoneme. The 'n' denotes the number of items in the sequence.

So, if I understand correctly, if n is 1, we have a sequence of single items, right?

Exactly. When n is 1, we call it a unigram. A unigram model looks at individual words or characters. For example, in the sentence "The sun is shining," the unigrams would be "The," "sun," "is," and "shining."

And what about when n is 2?

When n is 2, we have bigrams. A bigram model looks at pairs of consecutive items. So, using the same sentence, the bigrams would be "The sun," "sun is," and "is shining."

I see. How does this help in practical applications?

N-Grams are particularly useful for understanding context in text. For instance, in predictive text systems, an N-Gram model can predict the next word based on the previous 'n-1' words. If you type "I am going to the," a bigram model might suggest "store" or "park" as the next word based on what it has learned from similar contexts.

That’s interesting. But how does the model know which words to predict?

The model learns from a large corpus of text. It counts the frequency of each N-Gram in the training data. When it encounters a similar context, it uses these frequencies to make predictions. The more frequently a word follows a given context, the higher its probability of being predicted.

What happens if the model encounters a sequence it hasn’t seen before?

That’s a common issue called sparsity. To address it, we use smoothing techniques. One simple method is Laplace smoothing, which adds a small constant to all counts to ensure no probability is zero. More advanced methods like backoff and interpolation adjust probabilities by considering shorter N-Grams when longer ones are not found.

So, does this mean higher-order N-Grams are always better?

Not necessarily. While higher-order N-Grams capture more context, they also require more data to be effective and are computationally more expensive. They can also suffer more from sparsity issues. Therefore, there's a trade-off between the amount of context captured and the practicality of the model.

Makes sense. Are there applications beyond predictive text?

Definitely! N-Grams are used in various applications such as text classification, speech recognition, and machine translation. For example, in spam detection, N-Gram models can identify common patterns in spam messages, helping to distinguish them from legitimate emails.

That’s quite versatile. Are N-Grams limited to just words?

No, they’re not. N-Grams can also be based on characters, which is useful in languages with large vocabularies or for tasks like spelling correction. They can also be applied to other sequential data like DNA sequences in bioinformatics or musical notes in music analysis.

That’s amazing. But I’ve also heard about neural networks and other advanced models. How do N-Grams compare to those?

N-Grams are simpler and less powerful than modern deep learning models like recurrent neural networks (RNNs) and transformers. These advanced models can capture long-range dependencies and understand complex language structures better. However, N-Grams are still valuable for their simplicity, ease of interpretation, and lower computational requirements. They often serve as a baseline in many NLP tasks.

Sounds like a great tool to start with. If I want to build an N-Gram model, what should I do?

Start by collecting a large and representative corpus of text. Tokenize the text into words or characters, then count the frequencies of your desired N-Grams. You can use libraries like NLTK or spaCy in Python to help with this. After building your frequency counts, you can use them to calculate probabilities and make predictions.

That’s very helpful. Thanks for explaining all of this. I’m excited to try building an N-Gram model myself now!

You’re welcome! Enjoy working with N-Grams, and feel free to reach out if you have any more questions.

Hi! I’ve been reading about different techniques in natural language processing, and I came across N-Grams. Can you explain what they are and how they work?

Absolutely! N-Grams are sequences of 'n' items from a given text sample. The items can be words, characters, or even other types of tokens. The value of 'n' determines the length of the sequence. For example, with n=1, you get unigrams; with n=2, you get bigrams; with n=3, you get trigrams, and so on.

So, a unigram would be just individual words, right?

Correct. In a unigram model, each word is considered independently. For example, the sentence "The cat sat on the mat" would be broken down into unigrams: "The," "cat," "sat," "on," "the," "mat."

And with bigrams?

With bigrams, you look at pairs of consecutive words. So, the sentence "The cat sat on the mat" would be broken down into bigrams: "The cat," "cat sat," "sat on," "on the," "the mat."

I see. What about trigrams?

Trigrams consider triples of consecutive words. Using the same sentence, the trigrams would be: "The cat sat," "cat sat on," "sat on the," "on the mat."

Got it. How do N-Grams help in natural language processing?

N-Grams are useful for modeling the probability of word sequences. This is particularly helpful in tasks like text prediction, machine translation, and speech recognition. For example, in text prediction, if you’ve typed "I am going to the," a trigram model can predict the next word based on the most likely word that follows that sequence in the training data.

How do you determine the probabilities of these sequences?

The probabilities are determined by analyzing a large corpus of text and counting the occurrences of different sequences. For instance, the probability of a word given the previous words can be estimated by the frequency of the sequence divided by the frequency of the preceding sequence. For a trigram model, it’s the count of the trigram divided by the count of the preceding bigram.

What if the sequence has never been seen before in the training data?

That’s known as the sparsity problem. One common approach to handle this is smoothing, which adjusts the probability estimates to account for unseen sequences. Laplace smoothing, for instance, adds a small constant to all counts. There are also more sophisticated techniques like Kneser-Ney smoothing.

Interesting. Do higher-order N-Grams always provide better results?

Not necessarily. Higher-order N-Grams capture more context but require significantly more data to estimate probabilities accurately and are computationally expensive. They also suffer more from sparsity issues. A balance is often struck, with trigrams or 4-grams being commonly used.

What are some practical applications of N-Grams?

N-Grams are used in various applications such as:
 - Text prediction and autocompletion: Predicting the next word in a sequence.
 - Spell checking and correction: Identifying likely corrections based on common word sequences.
 - Speech recognition: Decoding speech into text by predicting word sequences.
 - Machine translation: Translating text by predicting sequences of words in the target language.
 - Text classification: Categorizing text based on the frequency of N-Grams.

Can N-Grams be used for languages other than English?

Absolutely. N-Grams are language-agnostic. They can be applied to any language, as long as you have a large enough corpus of text in that language. Different languages might require specific preprocessing steps, but the fundamental concept remains the same.

Are there any limitations to using N-Grams?

Yes, there are a few. N-Grams are limited by their fixed context window, meaning they can't capture long-range dependencies effectively. For example, in the sentence "The cat, which was very fluffy, sat on the mat," an N-Gram model might struggle to connect "cat" with "sat" if the context window is too short. They also require large amounts of data to estimate probabilities accurately, especially for higher-order N-Grams.

How do modern models compare to N-Grams?

Modern models like Recurrent Neural Networks (RNNs) and Transformer-based models, such as BERT and GPT, are much more powerful. They can capture long-range dependencies and complex patterns in language. These models use deep learning techniques and large datasets to understand context and semantics better than N-Grams. However, N-Grams are still valuable for their simplicity and efficiency, especially in resource-constrained environments.

If I want to start working with N-Grams, where should I begin?

Start by collecting a large text corpus relevant to your domain. Tokenize the text into words or characters, then count the frequencies of N-Grams. You can use tools and libraries like NLTK or spaCy in Python to help with this. Once you have the counts, you can calculate probabilities and use them for tasks like text prediction or classification.

Thanks for the detailed explanation! This gives me a great starting point. I’ll definitely look into building an N-Gram model.

You’re welcome! Have fun exploring N-Grams, and don’t hesitate to reach out if you have more questions. They’re a great way to dive into natural language processing.

Hi there! I’ve been exploring various concepts in NLP and came across N-Grams. Could you explain what they are and why they’re important?

Of course! N-Grams are sequences of 'n' items from a given text sample. These items can be words, characters, or any other type of token. The 'n' indicates the number of items in the sequence. For example, unigrams are single words, bigrams are pairs of consecutive words, trigrams are triples, and so on.

So if I have the sentence "I love ice cream," what would the unigrams, bigrams, and trigrams look like?

Great question. For the sentence "I love ice cream":
 - Unigrams: "I," "love," "ice," "cream."
 - Bigrams: "I love," "love ice," "ice cream."
 - Trigrams: "I love ice," "love ice cream."

I see. What’s the significance of using N-Grams in text analysis?

N-Grams help in understanding the structure and context of text by capturing the frequency and co-occurrence of word sequences. This is particularly useful in predictive text applications, language modeling, and machine translation. They allow us to estimate the probability of a word given the previous 'n-1' words, which is essential for these tasks.

How do you calculate these probabilities?

You calculate the probability of a word sequence by dividing the frequency of the entire sequence by the frequency of the preceding sequence. For instance, in a bigram model, the probability of the word "cream" following "ice" would be the count of "ice cream" divided by the count of "ice."

What if the model encounters a sequence that wasn’t in the training data?

That’s the sparsity problem. To handle this, we use smoothing techniques. Laplace smoothing adds a small constant to all counts to ensure no probability is zero. More advanced methods like Kneser-Ney smoothing redistribute probabilities more effectively based on the frequency of shorter sequences.

Can N-Grams be applied to other types of data besides text?

Yes, N-Grams can be applied to any sequential data. For example, in bioinformatics, they can be used to analyze DNA sequences. In music analysis, N-Grams can help in identifying patterns in sequences of musical notes. The concept is versatile and can be adapted to different fields.

What are some real-world applications of N-Grams?

N-Grams are used in:
 - Text prediction and autocompletion: Predicting the next word or phrase.
 - Spell checking and correction: Identifying and suggesting corrections for misspelled words.
 - Speech recognition: Converting spoken words into text by predicting word sequences.
 - Machine translation: Translating text by predicting sequences of words in the target language.
 - Text classification: Categorizing documents based on the frequency of N-Grams.

Are there limitations to using N-Grams?

Yes, there are some limitations. N-Grams have a fixed context window, so they can’t capture long-range dependencies effectively. They also require large amounts of data to estimate probabilities accurately, especially for higher-order N-Grams. Additionally, they can become computationally expensive as 'n' increases.

How do modern NLP models compare to N-Grams?

Modern models like Recurrent Neural Networks (RNNs) and Transformer-based models, such as BERT and GPT, are more advanced. They can capture long-range dependencies and complex language structures more effectively than N-Grams. These models use deep learning techniques and can learn from large datasets, making them more powerful for many NLP tasks. However, N-Grams are still useful for their simplicity and efficiency.

If I want to build an N-Gram model, where should I start?

Start by gathering a large corpus of text. Tokenize the text into words or characters, then count the frequencies of your N-Grams. Libraries like NLTK or spaCy in Python can help with this. Once you have your frequency counts, you can calculate probabilities and use them for tasks like text prediction or classification.

This is really helpful. I’m excited to try building my own N-Gram model now. Thanks for all the information!

You’re welcome! Enjoy working with N-Grams, and feel free to ask if you have any more questions. It’s a great way to get started in natural language processing.
`;

function processText(
  trainingText,
  startEndSentence,
  symbolsSwitchInputCreationValue,
  newlineSwitchInputCreationValue
) {
  function wrapSentences(text) {
    return "<start> " + text + " <end>";
  }

  function handleSymbols(text) {
    return text.replace(/([!@#$%^&*(),.?"':{}|<>])/g, " $1 ");
  }

  function handleParagraphSpaces(text) {
    return text.replace(/\n/g, " <br> ");
  }

  let processedText = trainingText;

  if (symbolsSwitchInputCreationValue) {
    processedText = handleSymbols(processedText);
  }

  if (newlineSwitchInputCreationValue) {
    processedText = handleParagraphSpaces(processedText);
  }

  if (startEndSentence) {
    let sentences = processedText.match(/[^.!?]+[.!?]+/g) || [processedText];
    processedText = sentences
      .map((sentence) => wrapSentences(sentence.trim()))
      .join(" ");
  }

  processedText = processedText.replace(/<start> <br>/g, "<br> <start>");

  processedText = processedText.replace(/\s+/g, " ");

  return processedText;
}

function reverseProcessText(
  processedText,
  startEndSentence,
  symbolsSwitchInputCreationValue,
  newlineSwitchInputCreationValue
) {
  function unwrapSentences(text) {
    return text.replace(/<start>\s*([^<]+)\s*<end>/g, "$1");
  }

  function handleSymbolsReverse(text) {
    return text.replace(/\s([!@#$%^&*(),.?"':{}|<>])\s/g, "$1 ");
  }

  let originalText = processedText;

  originalText = originalText.replace(/\s+/g, " ");

  if (startEndSentence) {
    originalText = unwrapSentences(originalText);
  }

  if (newlineSwitchInputCreationValue) {
  }

  if (symbolsSwitchInputCreationValue) {
    originalText = handleSymbolsReverse(originalText);
  }
  originalText = originalText.replace(/<start>|<end>/g, "");
  return originalText;
}

function updateModel(modelName, trainingText) {
  let userModel = models[modelName];
  var n = Object.keys(userModel).length;
  const words = trainingText.split(" ");

  for (let i = 0; i < words.length; i += 1) {
    let nWords = "";
    for (let ni = 0, j = i; ni < n && j < words.length; ni++, j++) {
      nWords = ni === 0 ? words[j] : nWords + " " + words[j];

      if (!userModel[ni + 1]) {
        userModel[ni + 1] = {};
      }
      if (!userModel[ni + 1][nWords]) {
        userModel[ni + 1][nWords] = 0;
      }
      userModel[ni + 1][nWords] += 1;
    }
  }

  return userModel;
}

function buildModel(trainingText, n) {
  let userModel = {};
  const words = trainingText.split(" ");

  for (let i = 0; i < words.length; i += 1) {
    let nWords = "";
    for (let ni = 0, j = i; ni < n && j < words.length; ni++, j++) {
      nWords = ni === 0 ? words[j] : nWords + " " + words[j];

      if (!userModel[ni + 1]) {
        userModel[ni + 1] = {};
      }
      if (!userModel[ni + 1][nWords]) {
        userModel[ni + 1][nWords] = 0;
      }
      userModel[ni + 1][nWords] += 1;
    }
  }

  return userModel;
}

var defaultTrainingText = processText(defaultText, true, true, true);
var defaultModel = buildModel(defaultTrainingText, 10);
console.log(defaultModel);
models["default"] = defaultModel;
modelName = "default";

function buildText(model, initialText, outputTextLength, creativity) {
  let isWordFound;
  let matchedWord = {};

  let array;
  function rankMatchedWord() {
    array = Object.entries(matchedWord);
    array.sort((a, b) => {
      if (b[1] === a[1]) {
        return 0;
      }
      return b[1] - a[1];
    });
  }
  function getWordBaseOnCreativity(cre) {
    let rank = Math.floor(cre * 10);
    if (array[rank] != undefined) {
      return array[rank][0];
    } else {
      return array[array.length - 1][0];
    }
  }

  if (initialText.split(" ").length < outputTextLength) {
    var n = initialText.split(" ").length + 1;
    var maxN = Object.keys(model).length;

    if (maxN < n) n = maxN;

    for (var i = n; i > 1; i--) {
      isWordFound = 0;
      for (let words in model[i]) {
        let text = words.split(" ").slice(0, -1).join(" ");
        if (
          text ==
          initialText
            .split(" ")
            .slice(-i + 1)
            .join(" ")
        ) {
          matchedWord[words] = model[i][words];
          isWordFound = 1;
        }
      }

      if (isWordFound != 0) {
        break;
      }
    }
    let wantedWord;
    if (isWordFound == 1) {
      rankMatchedWord();
      wantedWord = getWordBaseOnCreativity(creativity).split(" ").slice(-1);
    } else {
      wantedWord = "";
    }

    if (isWordFound == 0) {
      return initialText;
    } else {
      return buildText(
        model,
        initialText + " " + wantedWord,
        outputTextLength,
        creativity
      );
    }
  } else {
    return initialText;
  }
}

var generatedText;
let messageTextInputGenerationValue;

function getCurrentTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const formattedTimestamp = `${hours}:${minutes}`;
  return formattedTimestamp;
}

function appendAIMessage(sender, message) {
  var chatMsgContainer = document.createElement("div");
  chatMsgContainer.className = "direct-chat-msg";

  var headerDiv = document.createElement("div");
  headerDiv.className = "direct-chat-infos clearfix";

  var nameSpan = document.createElement("span");
  nameSpan.className = "direct-chat-name float-left";
  nameSpan.textContent = `${sender}`;

  var timestampSpan = document.createElement("span");
  timestampSpan.className = "direct-chat-timestamp float-right";
  timestampSpan.textContent = getCurrentTimestamp();

  headerDiv.appendChild(nameSpan);
  headerDiv.appendChild(timestampSpan);

  var imgElement = document.createElement("img");
  imgElement.className = "direct-chat-img";
  imgElement.src = "src/img/ai.jpeg";
  imgElement.alt = "AI Image";

  var textDiv = document.createElement("div");
  textDiv.className = "direct-chat-text bg-green";
  textDiv.style.borderColor = "#008000";

  message.split("<br>").forEach(function (part) {
    var paragraphElement = document.createElement("p");
    paragraphElement.style.color = "white";
    paragraphElement.textContent = part;
    textDiv.appendChild(paragraphElement);
  });

  chatMsgContainer.appendChild(headerDiv);
  chatMsgContainer.appendChild(imgElement);
  chatMsgContainer.appendChild(textDiv);

  chatContainerDivGeneration.appendChild(chatMsgContainer);
  chatMsgContainer.scrollIntoView({ behavior: "smooth", block: "end" });
}

function appendUserMessage(sender, message) {
  var userChatMsgContainer = document.createElement("div");
  userChatMsgContainer.className = "direct-chat-msg right";

  var headerDivUser = document.createElement("div");
  headerDivUser.className = "direct-chat-infos clearfix";

  var nameSpanUser = document.createElement("span");
  nameSpanUser.className = "direct-chat-name float-right";
  nameSpanUser.textContent = `${sender}`;

  var timestampSpanUser = document.createElement("span");
  timestampSpanUser.className = "direct-chat-timestamp float-left";
  timestampSpanUser.textContent = getCurrentTimestamp();

  headerDivUser.appendChild(nameSpanUser);
  headerDivUser.appendChild(timestampSpanUser);

  var imgElementUser = document.createElement("img");
  imgElementUser.className = "direct-chat-img";
  imgElementUser.src = "src/img/user.jpeg";
  imgElementUser.alt = "User Image";

  var textDivUser = document.createElement("div");
  textDivUser.className = "direct-chat-text  bg-blue";
  textDivUser.style.borderColor = "#0d6efd";
  textDivUser.textContent = `${message}`;

  userChatMsgContainer.appendChild(headerDivUser);
  userChatMsgContainer.appendChild(imgElementUser);
  userChatMsgContainer.appendChild(textDivUser);

  chatContainerDivGeneration.appendChild(userChatMsgContainer);
  userChatMsgContainer.scrollIntoView({ behavior: "smooth", block: "end" });
}

function sendMessage(event) {
  event.preventDefault();

  messageTextInputGenerationValue = messageTextInputGeneration.value.trim();
  if (messageTextInputGenerationValue != "") {
    appendUserMessage("You", messageTextInputGenerationValue);
    messageTextInputGeneration.value = "";

    main("buildText");
    let outText = generatedText;
    appendAIMessage("AI", outText);
  }
}

function saveModel(model, name) {
  const toJson = JSON.stringify(model, null, 2);
  const blob = new Blob([toJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.json`;
  a.click();
}

function uploadModel(aim, file) {
  var fileName = file.name;
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = e.target.result;
    const model = JSON.parse(data);
    models[fileName] = model;
    modelName = fileName;
    if (aim == "readThenDisplay") {
      readDisplayModelFeature(
        fileName,
        "modelNameTextInputReTrainingId",
        "maxGramsNumberInputReTrainingId"
      );
    }
    addButtonWithListener("availableModelsBodyDivGenerationId", fileName);
  };
  reader.onerror = function (error) {
    alert("Error reading JSON file.");
  };
  reader.readAsText(file);
}

function readDisplayModelFeature(
  modelName,
  modelNameInputID,
  maxNGramsInputID
) {
  var model = models[modelName];
  var n = Object.keys(model).length;
  const modelNameInput = document.getElementById(modelNameInputID);
  const maxNGramsInput = document.getElementById(maxNGramsInputID);
  modelNameInput.value = modelName;
  maxNGramsInput.value = n;
}

document.addEventListener("DOMContentLoaded", function () {
  Dropzone.autoDiscover = false;
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");

  const dropZoneUpdate = document.getElementById("dropZoneUpdate");
  const fileInputUpdate = document.getElementById("fileInputUpdate");

  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    dropZoneUpdate.addEventListener(eventName, preventDefaults, false);
    dropZone.addEventListener(
      eventName,
      () => dropZone.classList.add("is-dragover"),
      false
    );
    dropZoneUpdate.addEventListener(
      eventName,
      () => dropZoneUpdate.classList.add("is-dragover"),
      false
    );
  });

  dropZone.addEventListener("drop", handleDrop, false);
  dropZone.addEventListener("click", () => fileInput.click(), false);
  fileInput.addEventListener("change", handleFiles, false);

  dropZoneUpdate.addEventListener("drop", handleDropUpdate, false);
  dropZoneUpdate.addEventListener(
    "click",
    () => fileInputUpdate.click(),
    false
  );
  fileInputUpdate.addEventListener("change", handleFilesUpdate, false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files: files } });
  }

  function handleDropUpdate(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFilesUpdate({ target: { files: files } });
  }

  function handleFilesUpdate(e) {
    const files = e.target.files;
    const validFiles = [...files].filter(
      (file) => file.type === "application/json"
    );

    if (validFiles.length > 0) {
      validateJsonFile(validFiles[0], "messageUpdate", "readThenDisplay");
    } else {
      displayMessage(
        "messageUpdate",
        "Please upload a valid JSON file containing the model.",
        "error"
      );
    }
  }

  function handleFiles(e) {
    const files = e.target.files;
    const validFiles = [...files].filter(
      (file) => file.type === "application/json"
    );

    if (validFiles.length > 0) {
      validateJsonFile(validFiles[0], "message", "readOnly");
    } else {
      displayMessage(
        "message",
        "Please upload a valid JSON file containing the model.",
        "error"
      );
    }
  }

  function validateJsonFile(file, messageDivID, aim) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const json = JSON.parse(event.target.result);
        if (isValidJsonFormat(json)) {
          displayMessage(
            messageDivID,
            "JSON file selected successfully.",
            "success"
          );
          readJsonModel(aim, [file]);
        } else {
          displayMessage(
            messageDivID,
            "Invalid JSON format. Please upload a JSON file with the correct model structure.",
            "error"
          );
          $(document).Toasts("create", {
            class: "bg-wight",
            title: "Example of model.json in correct format:",
            position: "topLeft",
            body: `
              {
                "1": {
                  "<start>": 3,
                  "Hi": 1,
                  ",": 1,
                  "I": 3,
                  "am": 2,
                  "Alhusain": 1,
                  ".": 3,
                  "<end>": 3,
                  "Omani": 1,
                  "student": 1,
                  "who": 1,
                  "study": 1,
                  "IT": 1,
                  "in": 1,
                  "UTASA": 1,
                  "like": 1,
                  "N-Grams": 1
                },
                "2": {
                  "<start> Hi": 1,
                  "Hi ,": 1,
                  ", I": 1,
                  "I am": 2,
                  "am Alhusain": 1,
                  "Alhusain .": 1,
                  ". <end>": 3,
                  "<end> <start>": 2,
                  "<start> I": 2,
                  "am Omani": 1,
                  "Omani student": 1,
                  "student who": 1,
                  "who study": 1,
                  "study IT": 1,
                  "IT in": 1,
                  "in UTASA": 1,
                  "UTASA .": 1,
                  "I like": 1,
                  "like N-Grams": 1,
                  "N-Grams .": 1
                },
                "3": {
                  "<start> Hi ,": 1,
                  "Hi , I": 1,
                  ", I am": 1,
                  "I am Alhusain": 1,
                  "am Alhusain .": 1,
                  "Alhusain . <end>": 1,
                  ". <end> <start>": 2,
                  "<end> <start> I": 2,
                  "<start> I am": 1,
                  "I am Omani": 1,
                  "am Omani student": 1,
                  "Omani student who": 1,
                  "student who study": 1,
                  "who study IT": 1,
                  "study IT in": 1,
                  "IT in UTASA": 1,
                  "in UTASA .": 1,
                  "UTASA . <end>": 1,
                  "<start> I like": 1,
                  "I like N-Grams": 1,
                  "like N-Grams .": 1,
                  "N-Grams . <end>": 1
                }
              }
            `,
          });
        }
      } catch (e) {
        displayMessage(
          messageDivID,
          "Invalid JSON format. Please upload a valid JSON file.",
          "error"
        );
      }
    };
    reader.readAsText(file);
  }

  function isValidJsonFormat(json) {
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const expectedKey = (i + 1).toString();
      if (key !== expectedKey || typeof json[key] !== "object") {
        return false;
      }
      const subKeys = Object.keys(json[key]);
      for (let subKey of subKeys) {
        if (
          typeof subKey !== "string" ||
          typeof json[key][subKey] !== "number"
        ) {
          return false;
        }
      }
    }
    return true;
  }

  function readJsonModel(aim, files) {
    files.forEach((file) => {
      uploadModel(aim, file);
    });
  }

  function displayMessage(divID, message, type) {
    var messageDivID = document.getElementById(divID);
    messageDivID.textContent = message;
    messageDivID.className = `message ${type}`;
    messageDivID.style.display = "block";
  }
});

//saveModel(models[modelName]);

function main(func) {
  if (func === "buildText") {
    const tokensNumberInputGenerationValue = parseInt(
      tokensNumberInputGeneration.value,
      10
    );
    const creativityRangeInputGenerationValue = parseFloat(
      creativityRangeInputGeneration.value
    );
    generatedText = buildText(
      models[modelName],
      messageTextInputGenerationValue,
      tokensNumberInputGenerationValue,
      creativityRangeInputGenerationValue
    );
    generatedText = reverseProcessText(generatedText, true, true, true);
  }
  if (func === "buildModel") {
    const SESwitchInputCreationValue = SESwitchInputCreation.checked;
    const symbolsSwitchInputCreationValue = symbolsSwitchInputCreation.checked;
    const newlineSwitchInputCreationValue = newlineSwitchInputCreation.checked;
    const maxGramsNumberInputCreationValue = parseInt(
      maxGramsNumberInputCreation.value,
      10
    );
    const textAreaInputCreationValue = textAreaInputCreation.value;
    const modelNameTextInputCreationValue = modelNameTextInputCreation.value;

    const trainingText = processText(
      textAreaInputCreationValue,
      SESwitchInputCreationValue,
      symbolsSwitchInputCreationValue,
      newlineSwitchInputCreationValue
    );

    let userModel = buildModel(trainingText, maxGramsNumberInputCreationValue);
    console.log(userModel);

    models[modelNameTextInputCreationValue] = userModel;

    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.className = "btn btn-block bg-gradient-primary btn-lg";
    newButton.name = modelNameTextInputCreationValue;
    newButton.textContent = modelNameTextInputCreationValue;

    const availableModelsBodyDivGenerationFunc = document.getElementById(
      "availableModelsBodyDivGenerationId"
    );
    availableModelsBodyDivGenerationFunc.appendChild(newButton);

    addButtonListener(newButton);
    saveModel(
      models[modelNameTextInputCreationValue],
      modelNameTextInputCreationValue
    );
  }
  if (func === "updateModel") {
    const textAreaInputReTrainingValue = textAreaInputReTraining.value;
    const SESwitchInputReTrainingValue = SESwitchInputReTraining.checked;
    const symbolsSwitchInputReTrainingValue =
      symbolsSwitchInputReTraining.checked;
    const newlineSwitchInputReTrainingValue =
      newlineSwitchInputReTraining.checked;

    const modelNameTextInputReTrainingValue = document.getElementById(
      "modelNameTextInputReTrainingId"
    ).value;

    const retrainingText = processText(
      textAreaInputReTrainingValue,
      SESwitchInputReTrainingValue,
      symbolsSwitchInputReTrainingValue,
      newlineSwitchInputReTrainingValue
    );

    let updatedUserModel = updateModel(
      modelNameTextInputReTrainingValue,
      retrainingText
    );
    console.log(updatedUserModel);

    models[modelNameTextInputReTrainingValue + "-Updated"] = updatedUserModel;

    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.className = "btn btn-block bg-gradient-primary btn-lg";
    newButton.name = modelNameTextInputReTrainingValue + "-Updated";
    newButton.textContent = modelNameTextInputReTrainingValue + "-Updated";

    const availableModelsBodyDivGenerationFunc = document.getElementById(
      "availableModelsBodyDivGenerationId"
    );
    availableModelsBodyDivGenerationFunc.appendChild(newButton);

    addButtonListener(newButton);
    saveModel(
      models[modelNameTextInputReTrainingValue + "-Updated"],
      modelNameTextInputReTrainingValue + "-Updated"
    );
  }
}
