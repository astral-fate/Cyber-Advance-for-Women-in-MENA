document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const questionNumberEl = document.getElementById('question-number');
    const totalQuestionsEl = document.getElementById('total-questions');
    const questionCategoryEl = document.getElementById('question-category');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const scoreEl = document.getElementById('score');
    const questionJumpInput = document.getElementById('question-jump-input');
    const jumpBtn = document.getElementById('jump-btn');
    const categoryFilterEl = document.getElementById('category-filter'); // New filter dropdown

    // State Variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = {}; // Stores answers using the *original* index as the key
    let activeQuestions = []; // The currently filtered list of questions

    function startQuiz() {
        populateCategoryFilter();
        filterQuestions(); // Initial filter to show all questions
    }

    function populateCategoryFilter() {
        // Get unique categories from the main question list
        const categories = [...new Set(quizQuestions.map(q => q.category))];
        categories.sort(); // Sort them alphabetically

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilterEl.appendChild(option);
        });
    }

    function filterQuestions() {
        const selectedCategory = categoryFilterEl.value;
        
        if (selectedCategory === 'all') {
            activeQuestions = [...quizQuestions];
        } else {
            activeQuestions = quizQuestions.filter(q => q.category === selectedCategory);
        }

        // Reset quiz state for the new filtered view
        currentQuestionIndex = 0;
        score = 0; // Reset score when category changes
        updateScore();
        loadQuestion(currentQuestionIndex);
    }
    
    function loadQuestion(index) {
        if (activeQuestions.length === 0) {
            questionTextEl.textContent = 'No questions found for this category.';
            optionsContainerEl.innerHTML = '';
            questionCategoryEl.textContent = '';
            questionNumberEl.textContent = '0';
            totalQuestionsEl.textContent = '0';
            prevBtn.classList.add('hide');
            nextBtn.classList.add('hide');
            submitBtn.classList.add('hide');
            return;
        }

        while (optionsContainerEl.firstChild) {
            optionsContainerEl.removeChild(optionsContainerEl.firstChild);
        }
        
        const currentQuestion = activeQuestions[index];
        const originalIndex = quizQuestions.indexOf(currentQuestion);

        questionNumberEl.textContent = index + 1; // Display number in current view
        totalQuestionsEl.textContent = activeQuestions.length;
        questionCategoryEl.textContent = currentQuestion.category;
        questionTextEl.innerHTML = currentQuestion.question;

        for (const key in currentQuestion.options) {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.dataset.answerKey = key;
            button.innerHTML = `<span class="option-prefix">${key}.</span><span>${currentQuestion.options[key]}</span>`;
            button.addEventListener('click', () => selectOption(button));
            optionsContainerEl.appendChild(button);
        }

        updateNavigationButtons();
        
        if (userAnswers.hasOwnProperty(originalIndex)) {
            restoreAnswerState(originalIndex, currentQuestion.answer);
        }
    }

    function selectOption(selectedButton) {
        const previouslySelected = optionsContainerEl.querySelector('.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
        selectedButton.classList.add('selected');
    }

    function checkAnswer() {
        const selectedButton = optionsContainerEl.querySelector('.selected');
        if (!selectedButton) {
            alert('Please select an answer!');
            return;
        }

        const selectedKey = selectedButton.dataset.answerKey;
        const currentQuestion = activeQuestions[currentQuestionIndex];
        const originalIndex = quizQuestions.indexOf(currentQuestion);
        userAnswers[originalIndex] = selectedKey; // Store answer against original index

        const correctKeys = currentQuestion.answer.split(' ').filter(k => k);
        if (correctKeys.includes(selectedKey)) {
            score++;
            updateScore();
        }
        
        restoreAnswerState(originalIndex, currentQuestion.answer);
    }

    function restoreAnswerState(originalIndex, correctAnswer) {
        const selectedKey = userAnswers[originalIndex];
        const correctKeys = correctAnswer.split(' ').filter(k => k);

        Array.from(optionsContainerEl.children).forEach(button => {
            const buttonKey = button.dataset.answerKey;
            if (correctKeys.includes(buttonKey)) {
                button.classList.add('correct');
            }
            if (buttonKey === selectedKey && !correctKeys.includes(selectedKey)) {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });

        submitBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.classList.toggle('hide', currentQuestionIndex === 0);
        const isAnswered = userAnswers.hasOwnProperty(quizQuestions.indexOf(activeQuestions[currentQuestionIndex]));
        submitBtn.classList.toggle('hide', isAnswered);
        nextBtn.classList.toggle('hide', !isAnswered || currentQuestionIndex === activeQuestions.length - 1);
    }
    
    function updateScore() {
        scoreEl.textContent = score;
    }

    function showNextQuestion() {
        if (currentQuestionIndex < activeQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    }
    
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    }

    function jumpToQuestion() {
        const questionNum = parseInt(questionJumpInput.value);
        if (isNaN(questionNum) || questionNum < 1 || questionNum > activeQuestions.length) {
            alert(`Please enter a number between 1 and ${activeQuestions.length}.`);
            return;
        }
        
        currentQuestionIndex = questionNum - 1;
        loadQuestion(currentQuestionIndex);
        questionJumpInput.value = '';
    }

    // Event Listeners
    categoryFilterEl.addEventListener('change', filterQuestions);
    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', showNextQuestion);
    prevBtn.addEventListener('click', showPreviousQuestion);
    jumpBtn.addEventListener('click', jumpToQuestion);
    questionJumpInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            jumpToQuestion();
        }
    });

    startQuiz();
});
