let forced_choice_test_trial = {
    type: jsPsychHtmlButtonResponse,

    // stimulus: function () {
    //     const image = jsPsych.evaluateTimelineVariable('image');
    //     return generateTestStimulus(
    //         'image/' + image,
    //         'image/test_background.png'
    //     );
    // },
    stimulus: function () {
        return `
            <img src="image/test_background.png"
                 style="width: 100%; height: auto;">
        `;
    },

    choices: ['left', 'right'],

    button_html: (choice) => {
        return `
            <button class="jspsych-btn"
                style="position: absolute;
                       ${choice}: 30px;
                       top: 190px;
                       z-index: 2;
                       background-color: transparent;
                       border: none;"
                disabled>
                <img src="image/${jsPsych.evaluateTimelineVariable(choice)}"
                     style="width: 398px; height: 418px;">
            </button>`;
    },

    response_ends_trial: false,

    data: {
        task: "test",
        // image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
        left: jsPsych.timelineVariable('left'),
        right: jsPsych.timelineVariable('right'),
        correct_answer: jsPsych.timelineVariable('correct_answer')
    },

    on_load: function () {
        const audio = jsPsych.evaluateTimelineVariable('audio');
        const buttons = document.querySelectorAll(
            '#jspsych-html-button-response-btngroup button'
        );

        // Disable buttons until audio finishes
        buttons.forEach(button => {
            button.disabled = true;
        });

        // Play audio
        const sound = new Audio(`wav/${audio}`);

        sound.addEventListener('ended', function () {
            // Enable buttons when audio finishes
            buttons.forEach(button => {
                button.disabled = false;
            });
        }, { once: true });

        sound.play().catch(error => {
            console.error('Audio playback failed:', error);
        });

        // Handle button clicks
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // Prevent additional responses
                buttons.forEach(b => {
                    b.disabled = true;
                });

                // End trial 500 ms after the click
                jsPsych.pluginAPI.setTimeout(() => {
                    jsPsych.finishTrial();
                }, 500);
            }, { once: true });
        });
    },

    on_finish: function (data) {
        data.correct = (
            Number(data.response) === Number(data.correct_answer)
        );
    }
};
