let semantic_training_trial = {
    type: jsPsychHtmlEndTrialOnAudioFinish,

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



// let semantic_training_trial = {
//     type: jsPsychHtmlButtonResponse,

//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');

//         return `
//             <div style="position: relative; width: 100vw; height: 100vh; overflow: hidden;">

//                 ${generateFullScreenImageStimulus('image/training_background.png')}

//                 <img src="image/${image}"
//                      style="position: absolute;
//                             width: 400px;
//                             height: auto;
//                             top: 43%;
//                             left: 50%;
//                             transform: translate(-50%, -50%);
//                             z-index: 2;">
//             </div>
//         `;
//     },

//     choices: [],
//     response_ends_trial: false,

//     data: {
//         task: "semantic_training",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio')
//     },

//     // on_load: function () {
//     //     const audio = jsPsych.evaluateTimelineVariable('audio');

//     //     startTimedAudio({
//     //         audioFile: audio,
//     //         endOnAudioEnd: true
//     //     });
//     // }

//     on_load: function () {
//         const audio = jsPsych.evaluateTimelineVariable('audio');
    
//         console.log("TRAINING audio variable:", audio);
//         console.log("Expected path:", `wav/${audio}`);
    
//         startTimedAudio({
//             audioFile: audio,
//             endOnAudioEnd: true
//         });
//     }
// };
