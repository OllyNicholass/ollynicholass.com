<script context="module" lang="ts">
	// Importing a Svelte store for managing answers
	import { writable } from 'svelte/store';
	import {
		type Answer,
		Option,
		type IQuestion,
		QuestionCheckbox,
		QuestionRadio,
		QuestionText
	} from '$lib';

	// Define questions and their corresponding options
	const questions: IQuestion[] = [
		new QuestionRadio('Are you a business or an individual?', [
			new Option('Business', '', 'fa-solid fa-building'),
			new Option('Individual', '', 'fa-solid fa-user-tie')
		]),
		new QuestionRadio(
			'What is the primary goal of your website?',
			[
				new Option(
					'Sell products or services',
					'E-commerce, online marketplace, subscriptions, highstreet retailers, travel bookings, digital products, financial service, event ticketing, real estate',
					'fa-solid fa-store'
				),
				new Option(
					'Showcase my portfolio',
					'Proffesionals wanting to display their work for prospective clients',
					'fa-solid fa-images'
				),
				new Option(
					'Provide information',
					'Static websites that provide information on a particular topic. e.g. Brick & mortar shops wanting an online presence, wikis, directories, news/weather portals',
					'fa-solid fa-circle-info'
				),
				new Option(
					'Generate leads',
					'Booking platform or information gathering. e.g. Barber/Salon booking website, contest giveaway, webinar & events, quizzes & surveys, review pages',
					'fa-solid fa-calendar-plus'
				),
				new Option('Other (please specify)')
			],
			{
				'Sell products or services': 3,
				'Showcase my portfolio': 3,
				'Provide information': 3,
				'Generate leads': 3
			}
		),
		new QuestionText('What is the primary goal of your website? (Please specify)'),
		new QuestionCheckbox(
			'Who is your target audience?',
			[
				new Option(
					'General public',
					'Your website is focused on regular people/consumers',
					'fa-solid fa-users'
				),
				new Option(
					'Businesses',
					'Your website is focused on other businesses',
					'fa-solid fa-building'
				),
				new Option('Specific demographic (please specify)'),
				new Option('Other (please specify)')
			],
			{
				'General public': 5,
				Businesses: 5,
				'Specific demographic (please specify)': 4,
				'Other (please specify)': 4
			}
		),
		new QuestionText('Who is your target audience? (Please specify)'),
		new QuestionCheckbox(
			'What features do you need on your website?',
			[
				new Option(
					'E-commerce functionality',
					'Allow users to browse a catalogue, build a basket & make online payments',
					'fa-solid fa-cart-plus'
				),
				new Option(
					'Contact forms',
					'Allow users to seemlessly contact you via a web form',
					'fa-solid fa-envelope-open-text'
				),
				new Option(
					'User accounts',
					'Allow users to control various settings, and view personalised information',
					'fa-solid fa-user-group'
				),
				new Option(
					'Social media integration',
					'Allow users to log in via a social media platform',
					'fa-solid fa-circle-user'
				),
				new Option(
					'Content management system (CMS)',
					'Update your website easily with modern content management in a sleek UI',
					'fa-solid fa-sliders'
				),
				new Option('Other (please specify)')
			],
			{
				'E-commerce functionality': 7,
				'Contact forms': 7,
				'User accounts': 7,
				'Social media integration': 7,
				'Content management system (CMS)': 7,
				'Other (please specify)': 6
			}
		),
		new QuestionText('What features do you need on your website? (Please specify)'),
		new QuestionRadio('How often do you anticipate updating your website content?', [
			new Option('Rarely', '', 'fa-solid fa-calendar-day'),
			new Option('Occasionally', '', 'fa-solid fa-calendar-week'),
			new Option('Frequently', '', 'fa-solid fa-calendar-days')
		]),
		new QuestionRadio(
			'Do you have any design preferences or existing branding guidelines?',
			[new Option('Yes (please specify)', ''), new Option('No', '')],
			{
				'Yes (please specify)': 9,
				No: 10
			}
		),
		new QuestionText(
			'Do you have any design preferences or existing branding guidelines? (Please specify)'
		),
		new QuestionRadio('What would be your desired timeline for the project?', [
			new Option('Less than 1 month'),
			new Option('1-3 months'),
			new Option('3-6 months'),
			new Option('6-12 months'),
			new Option('Flexible')
		]),
		new QuestionRadio('What is your budget range for the project?', [
			new Option('£0 - £500'),
			new Option('£500 - £1,000'),
			new Option('£1,000 - £5,000'),
			new Option('£5,000 - £10,000'),
			new Option('More than £10,000')
		])
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
	let currentQuestion: IQuestion = questions[currentQuestionIndex];
	let displayQuestions = true;
	let textInput: HTMLInputElement;
	let nextButton: HTMLButtonElement;
	let checkboxOptions: string[] = [];
	let radioOption: string;

	// function goBack() {
	// 	if (answeredQuestions.length > 0) {
	// 		const lastAnsweredIndex = answeredQuestions.pop()!;
	// 		currentQuestionIndex = lastAnsweredIndex;
	// 		currentQuestion = questions[currentQuestionIndex];
	// 	}
	// }

	// Function to move to the next question
	function nextQuestion(answer: string) {
		if (answer.length === 0) {
			return;
		}

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

		checkboxOptions = [];
		radioOption = '';
		nextButton.disabled = !getCurrentQuestionAnswer();

		if (nextQuestionIndex > questions.length) {
			displayAnswers();
			return;
		}

		currentQuestionIndex = nextQuestionIndex;
		currentQuestion = questions[currentQuestionIndex];
	}

	function getCurrentQuestionAnswer(): string {
		switch (currentQuestion.inputType) {
			case 'text':
				return textInput.value;
			case 'checkbox':
				return checkboxOptions.join(', ');
			case 'radio':
				return radioOption;
		}
	}

	function updateNavigationButton() {
		nextButton.disabled = !getCurrentQuestionAnswer();
	}
</script>

<section class="flex flex-col justify-center items-center">
	{#if currentQuestion && displayQuestions}
		<fieldset class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8">
			<!-- {#if answeredQuestions.length > 0}
				<button on:click={goBack}>Back</button>
			{/if} -->
			<h2
				class="h2 mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl"
			>
				{currentQuestion.question}
			</h2>
			{#if currentQuestion.inputType === 'text'}
				<div class="input-group input-group-divider grid-cols-[1fr_auto] mb-6">
					<input
						type="text"
						bind:this={textInput}
						on:keydown={(e) => e.key === 'Enter' && nextQuestion(e.target.value)}
						on:input={() => {
							updateNavigationButton();
						}}
					/>
				</div>
			{:else if currentQuestion.inputType === 'checkbox'}
				<ul class="grid w-full gap-6 md:grid-cols-2 mb-6">
					{#each currentQuestion.options ?? [] as option}
						<li class="relative">
							<input
								type="checkbox"
								class="checkbox absolute right-2 top-2 peer"
								id={option.text.replace(/\W/g, '_').toLowerCase()}
								value={option.text}
								bind:group={checkboxOptions}
								on:change={() => {
									updateNavigationButton();
								}}
							/>
							<label
								class="inline-flex items-center justify-between w-full h-full p-6 bg-surface-200-700-token border-2 border-surface-300-600-token rounded-container-token cursor-pointer peer-checked:border-primary-400-500-token hover:bg-surface-300-600-token"
								for={option.text.replace(/\W/g, '_').toLowerCase()}
							>
								<div class="block text-left">
									{#if option.icon}
										<i class={option.icon + ' fa-2xl leading-8 mb-2'}></i>
									{/if}
									<div class="w-full text-lg font-semibold">{option.text}</div>
									{#if option.description}
										<div class="w-full text-sm">{option.description}</div>
									{/if}
								</div>
							</label>
						</li>
					{/each}
				</ul>
			{:else}
				<ul class="grid w-full gap-6 md:grid-cols-2 mb-6">
					{#each currentQuestion.options ?? [] as option}
						<li class="relative">
							<input
								type="radio"
								class="radio absolute right-2 top-2 peer"
								id={option.text.replace(/\W/g, '_').toLowerCase()}
								name={currentQuestion.question.replace(/\W/g, '_').toLowerCase()}
								value={option.text}
								bind:group={radioOption}
								on:change={() => {
									updateNavigationButton();
								}}
							/>
							<label
								class="inline-flex items-center justify-between w-full h-full p-6 bg-surface-200-700-token border-2 border-surface-300-600-token rounded-container-token cursor-pointer peer-checked:border-primary-400-500-token hover:bg-surface-300-600-token"
								for={option.text.replace(/\W/g, '_').toLowerCase()}
							>
								<div class="block text-left">
									{#if option.icon}
										<i class={option.icon + ' fa-2xl leading-8 mb-2'}></i>
									{/if}
									<div class="w-full text-lg font-semibold">{option.text}</div>
									{#if option.description}
										<div class="w-full text-sm">{option.description}</div>
									{/if}
								</div>
							</label>
						</li>
					{/each}
				</ul>
				<!-- {#each currentQuestion.options ?? [] as option}
					<button
						class="text-base font-medium btn variant-filled-primary mx-2"
						on:click={() => nextQuestion(option.text)}>{option.text}</button
					>
				{/each} -->
			{/if}

			<button
				class="text-base font-medium btn variant-filled-primary"
				disabled={!getCurrentQuestionAnswer()}
				bind:this={nextButton}
				on:click={() => nextQuestion(getCurrentQuestionAnswer())}
			>
				Next question
				<svg
					class="w-3.5 h-3.5 ml-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</button>
		</fieldset>
	{/if}
</section>

<style lang="postcss">
	section {
		margin-bottom: 20px;
	}
</style>
