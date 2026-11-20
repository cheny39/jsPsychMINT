let touch_box_trial = {
    type: jsPsychHtmlButtonResponse,

    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateFullScreenImageStimulus(`image/${image}`);
    },

    choices: ['touch'],

    button_html: (choice) => {
        const left = jsPsych.evaluateTimelineVariable('left');
        const top = jsPsych.evaluateTimelineVariable('top');
        const width = jsPsych.evaluateTimelineVariable('width');
        const height = jsPsych.evaluateTimelineVariable('height');

        return `
            <button class="jspsych-btn"
                style="position: absolute;
                       left: ${left}px;
                       top: ${top}px;
                       width: ${width}px;
                       height: ${height}px;
                       z-index: 2;
                       background-color: transparent;
                       border: none;
                       padding: 0;
                       cursor: pointer;"
                disabled>
            </button>`;
    },

    data: {
        task: "touch_box",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
        left: jsPsych.timelineVariable('left'),
        top: jsPsych.timelineVariable('top'),
        width: jsPsych.timelineVariable('width'),
        height: jsPsych.timelineVariable('height')
    },

    on_load: function () {
        const audio = jsPsych.evaluateTimelineVariable('audio');
        const buttons = document.querySelectorAll(
            '#jspsych-html-button-response-btngroup button'
        );

        // Disable button until audio finishes
        buttons.forEach(button => {
            button.disabled = true;
        });

        // Play audio
        const sound = new Audio(`wav/${audio}`);

        sound.addEventListener('ended', function () {
            // Enable button after audio finishes
            buttons.forEach(button => {
                button.disabled = false;
            });
        }, { once: true });

        sound.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    }
};
