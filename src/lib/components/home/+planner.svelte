<script context="module" lang="ts">
	// Importing a Svelte store for managing answers
	import { writable } from 'svelte/store';

	// Defining the answer type
	type Answer = {
		[question: string]: { questionName: string; questionIndex: number; answer: string };
	};

	// Define the structure of a question
	type Question = {
		question: string;
		options: string[];
		next: Record<string, number | null>;
	};

	// Define questions and their corresponding options
	const questions: Question[] = [
		{
			question: 'Do you currently have a website?',
			options: ['Yes', 'No'],
			next: {
				Yes: 1,
				No: 2
			}
		},
		{
			question: 'What do you like or dislike about your current website?',
			options: [
				'I like the design',
				'It lacks certain features',
				"It's too slow",
				'Other (please specify)'
			],
			next: {
				default: 2
			}
		},
		{
			question: 'What is the main goal of your website?',
			options: ['Sell products or services', 'Share information about my business', 'Both'],
			next: {
				default: 3
			}
		},
		{
			question: 'Who are your main target customers?',
			options: ['Individuals', 'Businesses', 'Both'],
			next: {
				default: 4
			}
		},
		{
			question: 'What main features do you want on your website?',
			options: [
				'Online store functionality',
				'Contact forms for inquiries',
				'Information pages about products/services'
			],
			next: {
				default: 5
			}
		},
		{
			question: 'How often do you anticipate updating your website content?',
			options: ['Rarely', 'Occasionally', 'Frequently'],
			next: {
				default: 6
			}
		},
		{
			question: 'What design style do you prefer?',
			options: ['Modern and sleek', 'Classic and traditional', 'Colorful and vibrant'],
			next: {
				default: 7
			}
		},
		{
			question: 'What is your budget range for the website project?',
			options: ['Low budget', 'Moderate budget', 'High budget'],
			next: {
				default: 8
			}
		},
		{
			question: 'Do you have a specific deadline for your website to go live?',
			options: ['Yes', 'No'],
			next: {
				Yes: 9,
				No: 10
			}
		},
		{
			question: 'What is your preferred deadline for your website to go live?',
			options: ['Within 1 month', 'Within 3 months', 'Within 6 months'],
			next: {
				default: 10
			}
		},
		{
			question: 'Do you foresee the need for your website to expand in the future?',
			options: ['Yes', 'No'],
			next: {
				default: 11
			}
		},
		{
			question: 'Are there specific websites you admire?',
			options: ['Yes (please provide examples)', 'No'],
			next: {
				default: 12
			}
		},
		{
			question: 'How important is website security to you?',
			options: ['Very important', 'Somewhat important', 'Not very important'],
			next: {
				default: 13
			}
		},
		{
			question: 'How important is it that your website appears on search engines?',
			options: ['Very important', 'Moderately important', 'Not important'],
			next: {
				default: 14
			}
		},
		{
			question: 'Do you have a preferred hosting provider?',
			options: ['Yes (please specify)', 'No preference'],
			next: {
				default: 15
			}
		},
		{
			question: 'How much ongoing support would you like for your website?',
			options: [
				'Basic support',
				'Regular check-ups and updates',
				'Comprehensive support and maintenance plan'
			],
			next: {
				default: null // No more questions
			}
		}
	];

	// Svelte store for managing answers
	export const answers = writable<Answer>({});
</script>

<script lang="ts">
	// Function to update the store with answers
	function updateAnswers(question: string, answer: string) {
		const questionName: string = questions[currentQuestionIndex].question;
		const questionIndex: number = currentQuestionIndex;
		answers.update((prevAnswers: Answer) => ({
			...prevAnswers,
			[question]: { questionName, questionIndex, answer }
		}));
		// answeredQuestions.push(currentQuestionIndex);
	}

	function displayAnswers() {
		displayQuestions = false;
	}

	let currentQuestionIndex = 0;
	let currentQuestion: Question = questions[currentQuestionIndex];
	let displayQuestions = true;

	// function goBack() {
	// 	if (answeredQuestions.length > 0) {
	// 		const lastAnsweredIndex = answeredQuestions.pop()!;
	// 		currentQuestionIndex = lastAnsweredIndex;
	// 		currentQuestion = questions[currentQuestionIndex];
	// 	}
	// }

	// Function to move to the next question
	function nextQuestion(answer: string) {
		updateAnswers(currentQuestion.question, answer);

		const nextQuestionIndex = currentQuestion.next[answer] || currentQuestion.next.default;
		if (nextQuestionIndex === null) {
			displayAnswers();
			return;
		}

		currentQuestionIndex = nextQuestionIndex;
		currentQuestion = questions[currentQuestionIndex];
	}
</script>

<section class="flex flex-col justify-center items-center">
	{#if currentQuestion && displayQuestions}
		<section>
			<!-- {#if answeredQuestions.length > 0}
				<button on:click={goBack}>Back</button>
			{/if} -->
			<h2>{currentQuestion.question}</h2>
			{#each currentQuestion.options as option}
				<button
					class="text-base font-medium btn variant-filled-primary mx-2"
					on:click={() => nextQuestion(option)}>{option}</button
				>
			{/each}
		</section>
	{/if}

	<pre>{JSON.stringify($answers, null, 2)}</pre>
	{#if !displayQuestions && $answers}{/if}
</section>

<style>
	section {
		margin-bottom: 20px;
	}
</style>
