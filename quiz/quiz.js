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
    const categoryFilterEl = document.getElementById('category-filter');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // State Variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = {}; // Stores answers using the original index from quizQuestions
    let activeQuestions = []; // The currently filtered list of questions

    // --- Dark Mode Logic ---
    // Check if the toggle button element exists in the HTML
    if (darkModeToggle) {
        
        // Function to handle the theme change
        const toggleTheme = () => {
            // Add or remove the 'dark-mode' class from the body
            document.body.classList.toggle('dark-mode');
            
            // Save the current preference to the browser's local storage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        };

        // Add the click event listener to the toggle button
        darkModeToggle.addEventListener('click', toggleTheme);

        // On page load, check for a saved theme preference and apply it
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }

    } else {
        // This message will appear in the browser's console if the button's ID is wrong in the HTML
        console.error("Dark mode toggle button with id 'dark-mode-toggle' not found!");
    }
    // --- End of Dark Mode Logic ---

    function startQuiz() {
        populateCategoryFilter();
        filterQuestions();
    }

    function populateCategoryFilter() {
        const categories = [...new Set(quizQuestions.map(q => q.category))];
        categories.sort();
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

        // Reset state
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = {}; // Clear answers when category changes
        updateScore();
        loadQuestion(currentQuestionIndex);
    }
    
    function loadQuestion(index) {
        // Handle case where there are no questions for a category
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

        // Clear previous options
        while (optionsContainerEl.firstChild) {
            optionsContainerEl.removeChild(optionsContainerEl.firstChild);
        }
        
        const currentQuestion = activeQuestions[index];
        // Find the question's original index to use as a stable key for answers
        const originalIndex = quizQuestions.indexOf(currentQuestion);

        // Update UI elements
        questionNumberEl.textContent = index + 1;
        totalQuestionsEl.textContent = activeQuestions.length;
        questionCategoryEl.textContent = currentQuestion.category;
        questionTextEl.innerHTML = currentQuestion.question; // Use innerHTML to render any HTML tags in questions

        // Create and display option buttons
        for (const key in currentQuestion.options) {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.dataset.answerKey = key;
            // Using innerHTML allows for formatting within options if needed
            button.innerHTML = `<span class="option-prefix">${key}.</span><span>${currentQuestion.options[key]}</span>`;
            button.addEventListener('click', () => selectOption(button));
            optionsContainerEl.appendChild(button);
        }

        updateNavigationButtons();
        
        // If this question has been answered before, restore its state
        if (userAnswers.hasOwnProperty(originalIndex)) {
            restoreAnswerState(originalIndex, currentQuestion.answer);
        }
    }

    function selectOption(selectedButton) {
        // Deselect any previously selected option
        const previouslySelected = optionsContainerEl.querySelector('.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
        // Mark the new button as selected
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
        
        // Store the user's selected answer key
        userAnswers[originalIndex] = selectedKey;

        const correctKeys = currentQuestion.answer.split(' ').filter(k => k);
        
        // Update score only if the answer is correct
        if (correctKeys.includes(selectedKey)) {
            // To prevent score incrementing on revisit, check if it was already scored
            // This logic is complex; a simpler approach is to calculate score at the end
            // For now, we only update score on the first submission, which is handled
            // by the checkAnswer function being called only once.
        }
        
        // Recalculate score from scratch every time to ensure accuracy
        calculateScore();
        updateScore();
        
        // Show correct/incorrect feedback
        restoreAnswerState(originalIndex, currentQuestion.answer);
    }

    function calculateScore() {
        score = 0;
        for (const originalIndex in userAnswers) {
            const question = quizQuestions[originalIndex];
            const userAnswer = userAnswers[originalIndex];
            const correctAnswers = question.answer.split(' ').filter(k => k);
            if (correctAnswers.includes(userAnswer)) {
                score++;
            }
        }
    }

    function restoreAnswerState(originalIndex, correctAnswer) {
        const selectedKey = userAnswers[originalIndex];
        const correctKeys = correctAnswer.split(' ').filter(k => k);

        // Apply styles to all option buttons based on the answer
        Array.from(optionsContainerEl.children).forEach(button => {
            const buttonKey = button.dataset.answerKey;
            
            // Highlight the correct answer(s)
            if (correctKeys.includes(buttonKey)) {
                button.classList.add('correct');
            }
            
            // If the user's selection was incorrect, highlight it
            if (buttonKey === selectedKey && !correctKeys.includes(selectedKey)) {
                button.classList.add('incorrect');
            }

            // Disable all buttons after an answer is submitted
            button.disabled = true;
        });

        // Update button visibility
        submitBtn.classList.add('hide');
        if (currentQuestionIndex < activeQuestions.length - 1) {
            nextBtn.classList.remove('hide');
        }
    }

    function updateNavigationButtons() {
        // Previous button visibility
        prevBtn.classList.toggle('hide', currentQuestionIndex === 0);

        const originalIndex = quizQuestions.indexOf(activeQuestions[currentQuestionIndex]);
        const isAnswered = userAnswers.hasOwnProperty(originalIndex);

        // Submit and Next buttons visibility
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
        questionJumpInput.value = ''; // Clear the input after jumping
    }

    // --- Event Listeners ---
    categoryFilterEl.addEventListener('change', filterQuestions);
    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', showNextQuestion);
    prevBtn.addEventListener('click', showPreviousQuestion);
    jumpBtn.addEventListener('click', jumpToQuestion);
    
    // Allow jumping by pressing 'Enter' in the input field
    questionJumpInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            jumpToQuestion();
        }
    });

    // Initialize the quiz when the page loads
    startQuiz();
});
