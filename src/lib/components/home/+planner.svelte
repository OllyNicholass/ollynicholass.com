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
		inputType: 'radio' | 'checkbox' | 'text';
		options?: string[];
		next?: Record<string, number>;
	};

	// Define questions and their corresponding options
	const questions: Question[] = [
		{
			question: 'Are you a business or an individual?',
			inputType: 'radio',
			options: ['Business', 'Individual']
		},
		{
			question: 'What is the primary goal of your website?',
			inputType: 'radio',
			options: [
				'Sell products or services',
				'Showcase my portfolio',
				'Provide information',
				'Generate leads',
				'Other (please specify)'
			],
			next: {
				'Sell products or services': 3,
				'Showcase my portfolio': 3,
				'Provide information': 3,
				'Generate leads': 3
			}
		},
		{
			question: 'What is the primary goal of your website? (Please specify)',
			inputType: 'text'
		},
		{
			question: 'Who is your target audience?',
			inputType: 'checkbox',
			options: [
				'General public',
				'Businesses',
				'Specific demographic (please specify)',
				'Other (please specify)'
			],
			next: {
				'General public': 5,
				Businesses: 5,
				'Specific demographic (please specify)': 4,
				'Other (please specify)': 4
			}
		},
		{
			question: 'Who is your target audience? (Please specify)',
			inputType: 'text'
		},
		{
			question: 'What features and functionalities do you need on your website?',
			inputType: 'checkbox',
			options: [
				'E-commerce functionality',
				'Contact forms',
				'User accounts',
				'Social media integration',
				'Content management system (CMS)',
				'Other (please specify)'
			],
			next: {
				'E-commerce functionality': 7,
				'Contact forms': 7,
				'User accounts': 7,
				'Social media integration': 7,
				'Content management system (CMS)': 7,
				'Other (please specify)': 6
			}
		},
		{
			question: 'What features and functionalities do you need on your website? (Please specify)',
			inputType: 'text'
		},
		{
			question: 'How often do you anticipate updating your website content?',
			inputType: 'radio',
			options: ['Rarely', 'Occasionally', 'Frequently']
		},
		{
			question: 'Do you have any design preferences or existing branding guidelines?',
			inputType: 'radio',
			options: ['Yes (please specify)', 'No'],
			next: {
				No: 10
			}
		},
		{
			question:
				'Do you have any design preferences or existing branding guidelines? (Please specify)',
			inputType: 'text'
		},
		{
			question: 'What would be your desired timeline for the project?',
			inputType: 'radio',
			options: ['Less than 1 month', '1-3 months', '3-6 months', '6-12 months', 'Flexible']
		},
		{
			question: 'What is your budget range for the project?',
			inputType: 'radio',
			options: [
				'£0 - £500',
				'£500 - £1,000',
				'£1,000 - £5,000',
				'£5,000 - £10,000',
				'More than £10,000'
			]
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
	let textInput: HTMLInputElement;
	let checkboxOptions: string[] = [];

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

		let nextQuestionIndex: number;

		if (currentQuestion.inputType === 'checkbox') {
			let answers = answer.split(', ');
			let skippableAnswers: number[] = [];

			for (let i = 0; i < answers.length; i++) {
				const a = answers[i];
				if (currentQuestion.next?.[a] != null) {
					skippableAnswers.push(currentQuestion.next?.[a]);
				}
			}
			nextQuestionIndex = Math.min(...skippableAnswers);
		} else {
			nextQuestionIndex = currentQuestion.next?.[answer] ?? currentQuestionIndex + 1;
		}

		if (nextQuestionIndex > questions.length) {
			displayAnswers();
			return;
		}

		currentQuestionIndex = nextQuestionIndex;
		currentQuestion = questions[currentQuestionIndex];
	}
</script>

<section class="flex flex-col justify-center items-center">
	{#if currentQuestion && displayQuestions}
		<form>
			<!-- {#if answeredQuestions.length > 0}
				<button on:click={goBack}>Back</button>
			{/if} -->
			<h2>{currentQuestion.question}</h2>
			{#if currentQuestion.inputType === 'text'}
				<div class="input-group input-group-divider grid-cols-[1fr_auto]">
					<input
						type="text"
						bind:this={textInput}
						on:keydown={(e) => e.key === 'Enter' && nextQuestion(e.target.value)}
					/>
					<button class="variant-filled-secondary" on:click={(e) => nextQuestion(textInput.value)}
						>Submit</button
					>
				</div>
			{:else if currentQuestion.inputType === 'checkbox'}
				{#each currentQuestion.options ?? [] as option}
					<label>
						<input
							type="checkbox"
							class="checkbox"
							name={option.replace(/\W/g, '_')}
							value={option}
							bind:group={checkboxOptions}
						/>
						{option}
					</label>
				{/each}
				<button
					class="variant-filled-secondary"
					on:click={() => nextQuestion(checkboxOptions.join(', '))}>Submit</button
				>
			{:else}
				{#each currentQuestion.options ?? [] as option}
					<button
						class="text-base font-medium btn variant-filled-primary mx-2"
						on:click={() => nextQuestion(option)}>{option}</button
					>
				{/each}
			{/if}
		</form>
	{/if}

	<pre>{JSON.stringify($answers, null, 2)}</pre>
	{#if !displayQuestions && $answers}{/if}
</section>

<style>
	section {
		margin-bottom: 20px;
	}
</style>
