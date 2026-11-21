// let touch_box_trial = {
//     type: jsPsychHtmlButtonResponse,

//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateFullScreenImageStimulus(`image/${image}`);
//     },

//     choices: ['touch'],

//     button_html: (choice) => {
//         const left = jsPsych.evaluateTimelineVariable('left');
//         const top = jsPsych.evaluateTimelineVariable('top');
//         const width = jsPsych.evaluateTimelineVariable('width');
//         const height = jsPsych.evaluateTimelineVariable('height');

//         return `
//             <button class="jspsych-btn"
//                 style="position: absolute;
//                        left: ${left}px;
//                        top: ${top}px;
//                        width: ${width}px;
//                        height: ${height}px;
//                        z-index: 2;
//                        background-color: transparent;
//                        border: none;
//                        padding: 0;
//                        cursor: pointer;"
//                 disabled>
//             </button>`;
//     },

//     data: {
//         task: "touch_box",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//         left: jsPsych.timelineVariable('left'),
//         top: jsPsych.timelineVariable('top'),
//         width: jsPsych.timelineVariable('width'),
//         height: jsPsych.timelineVariable('height')
//     },

//     on_load: function () {
//         const audio = jsPsych.evaluateTimelineVariable('audio');
//         const buttons = document.querySelectorAll(
//             '#jspsych-html-button-response-btngroup button'
//         );

//         // Disable button until audio finishes
//         buttons.forEach(button => {
//             button.disabled = true;
//         });

//         // Play audio
//         const sound = new Audio(`wav/${audio}`);

//         sound.addEventListener('ended', function () {
//             // Enable button after audio finishes
//             buttons.forEach(button => {
//                 button.disabled = false;
//             });
//         }, { once: true });

//         sound.play().catch(error => {
//             console.error('Audio playback failed:', error);
//         });
//     }
// };

let touch_box_trial = {
    type: jsPsychHtmlButtonResponse,

    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');

        return `
            <div id="touch-box-stage"
                 style="position: relative;

                        width: 100vw;
                        height: 100vh;
                        // width: min(960px, 96vw);
                        margin: 0 auto;
                        line-height: 0;">

                <img src="image/${image}"
                     style="display: block;
                            width: 100%;
                            height: 100%;">
            </div>
        `;
    },

    choices: ['touch'],

    button_html: () => {
        return `
            <button class="jspsych-btn"
                    style="background: transparent;
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

        const left = jsPsych.evaluateTimelineVariable('left');
        const top = jsPsych.evaluateTimelineVariable('top');
        const boxWidth = jsPsych.evaluateTimelineVariable('width');
        const boxHeight = jsPsych.evaluateTimelineVariable('height');

        const stage = document.getElementById('touch-box-stage');
        const background = stage.querySelector('img');

        const buttonGroup = document.getElementById(
            'jspsych-html-button-response-btngroup'
        );

        const button = buttonGroup.querySelector('button');

        // Move button directly into background container
        stage.appendChild(button);

        // Hide now-empty button group
        buttonGroup.style.display = 'none';

        // Reference coordinate system for the original box positions.
        // Adjust these values if your original layout used
        // a different coordinate system.
        const referenceWidth = 1440;
        const referenceHeight = 810;

        function positionButton() {
            const rect = background.getBoundingClientRect();

            const width = rect.width;
            const height = rect.height;

            if (width === 0 || height === 0) return;

            // Scale original coordinates to displayed image size
            const scaleX = width / referenceWidth;
            const scaleY = height / referenceHeight;

            Object.assign(button.style, {
                position: 'absolute',

                left: `${left * scaleX}px`,
                top: `${top * scaleY}px`,

                width: `${boxWidth * scaleX}px`,
                height: `${boxHeight * scaleY}px`,

                padding: '0',
                margin: '0',
                border: '3px solid red', // Debug border
                background: 'transparent',
                display: 'block',
                zIndex: '20',
                boxSizing: 'border-box',
                minWidth: '0',
                minHeight: '0',
                pointerEvents: 'auto',
                touchAction: 'manipulation'
            });
        }

        // Position once image dimensions are available
        if (background.complete && background.naturalWidth > 0) {
            positionButton();
        } else {
            background.addEventListener(
                'load',
                positionButton,
                { once: true }
            );
        }

        // Disable button until audio finishes
        button.disabled = true;

        const sound = new Audio(`wav/${audio}`);

        sound.addEventListener('ended', function () {
            button.disabled = false;
        }, { once: true });

        sound.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    }
};
