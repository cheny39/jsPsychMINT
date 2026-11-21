// let forced_choice_test_trial = {
//     type: jsPsychHtmlButtonResponse,

//     stimulus: function () {
//         return `
//             <img src="image/test_background.png"
//                  style="width: 100%; height: auto;">
//         `;
//     },

//     choices: ['left', 'right'],

//     button_html: (choice) => {
//         return `
//             <button class="jspsych-btn"
//                 style="position: absolute;
//                        ${choice}: 30px;
//                        top: 190px;
//                        z-index: 2;
//                        background-color: transparent;
//                        border: none;"
//                 disabled>
//                 <img src="image/${jsPsych.evaluateTimelineVariable(choice)}"
//                      style="width: 398px; height: 418px;">
//             </button>`;
//     },

//     response_ends_trial: false,

//     data: {
//         task: "test",
//         audio: jsPsych.timelineVariable('audio'),
//         left: jsPsych.timelineVariable('left'),
//         right: jsPsych.timelineVariable('right'),
//         correct_answer: jsPsych.timelineVariable('correct_answer')
//     },

//     on_load: function () {
//         const audio = jsPsych.evaluateTimelineVariable('audio');

//         const buttons = document.querySelectorAll(
//             '#jspsych-html-button-response-btngroup button'
//         );

//         startTimedAudio({
//             audioFile: audio,
//             endOnAudioEnd: false,
//             buttons: Array.from(buttons)
//         });
//     },

//     on_finish: function (data) {
//         data.correct = (
//             data.response !== null &&
//             data.response !== undefined &&
//             Number(data.response) === Number(data.correct_answer)
//         );
//     }
// };

let forced_choice_test_trial = {
    type: jsPsychHtmlButtonResponse,

    stimulus: function () {
        return `
            <div id="test-stage"
                 style="position: relative;
                        width: 100%;
                        margin: 0 auto;
                        line-height: 0;">

                <img src="image/test_background.png"
                     style="display: block;
                            width: 100%;
                            height: auto;">
            </div>
        `;
    },

    choices: ['left', 'right'],

    button_html: (choice) => {
        return `
            <button class="jspsych-btn"
                style="position: absolute;
                       ${choice}: 6%;
                       top: 20%;
                       width: 38%;
                       aspect-ratio: 398 / 418;
                       padding: 0;
                       margin: 0;
                       z-index: 2;
                       background-color: transparent;
                       border: 3px solid red;
                       pointer-events: auto;
                       touch-action: manipulation;"
                disabled>

                <img src="image/${jsPsych.evaluateTimelineVariable(choice)}"
                     style="width: 100%;
                            height: 100%;
                            display: block;
                            object-fit: contain;
                            pointer-events: none;">
            </button>`;
    },

    response_ends_trial: false,

    data: {
        task: "test",
        audio: jsPsych.timelineVariable('audio'),
        left: jsPsych.timelineVariable('left'),
        right: jsPsych.timelineVariable('right'),
        correct_answer: jsPsych.timelineVariable('correct_answer')
    },


    on_load: function () {
        const audio = jsPsych.evaluateTimelineVariable('audio');
    
        const stage = document.getElementById('test-stage');
        const background = stage.querySelector('img');
    
        const buttonGroup = document.getElementById(
            'jspsych-html-button-response-btngroup'
        );
    
        const buttons = Array.from(
            buttonGroup.querySelectorAll('button')
        );
    
        // Move individual buttons into the background container
        buttons.forEach(button => {
            stage.appendChild(button);
        });
    
        // Hide the now-empty jsPsych button group
        buttonGroup.style.display = 'none';
    
        // Position and size buttons relative to background image
        function positionButtons() {
            const rect = background.getBoundingClientRect();
    
            const width = rect.width;
            const height = rect.height;
    
            if (width === 0 || height === 0) {
                console.warn("Background has zero dimensions");
                return;
            }
    
            buttons.forEach((button, index) => {
    
                // Left button at 6%, right button at 56%
                const leftPercent = index === 0 ? 0.05 : 0.7;
    
                Object.assign(button.style, {
                    position: 'absolute',
                    left: `${width * leftPercent}px`,
                    right: 'auto',
                    top: `${height * 0.28}px`,
                    width: `${width * 0.25}px`,
                    height: 'auto',
                    aspectRatio: '398 / 418',
                    padding: '0',
                    margin: '0',
                    border: '3px solid red',
                    background: 'transparent',
                    display: 'block',
                    zIndex: '20',
                    boxSizing: 'border-box',
                    minWidth: '0',
                    minHeight: '0',
                    pointerEvents: 'auto',
                    touchAction: 'manipulation'
                });
    
                const img = button.querySelector('img');
    
                if (img) {
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.display = 'block';
                    img.style.pointerEvents = 'none';
                }
    
                console.log(
                    `Button ${index}:`,
                    button.getBoundingClientRect()
                );
            });
        }
    
        // Wait for background image if necessary
        if (background.complete && background.naturalWidth > 0) {
            positionButtons();
        } else {
            background.addEventListener(
                'load',
                positionButtons,
                { once: true }
            );
        }
    
        // Preserve existing audio and response timing
        startTimedAudio({
            audioFile: audio,
            endOnAudioEnd: false,
            buttons: buttons
        });
    },
    
    on_finish: function (data) {
        data.correct = (
            data.response !== null &&
            data.response !== undefined &&
            Number(data.response) === Number(data.correct_answer)
        );
    }
};
