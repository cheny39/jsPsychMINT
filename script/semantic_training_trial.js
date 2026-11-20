

let semantic_training_trial = {
    type: jsPsychHtmlEndTrialOnAudioFinish,

    // stimulus: function () {
    //     const image = jsPsych.evaluateTimelineVariable('image');
    //     return `
    //         <img src="image/${image}"
    //              style="width: 400px; height: auto;">
    //     `;
    // },

    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');

        return `
            <div style="position: relative; width: 100vw; height: 100vh; overflow: hidden;">
                
                <!-- Fullscreen background -->
                ${generateFullScreenImageStimulus('image/training_background.png')}
                
                <!-- Center object -->
                <img src="image/${image}"
                     style="position: absolute;
                            width: 400px;
                            height: auto;
                            top: 43%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            z-index: 2;">
            </div>
        `;
    },
    choices: [],
    audio: jsPsych.timelineVariable('audio'),

    data: {
        task: "semantic_training",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio')
    }
    
};
