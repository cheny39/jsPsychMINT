
function startTimedAudio({ audioFile, endOnAudioEnd = false, buttons = [] }) {

    const trialLoadTime = performance.now();

    const timing = {
        audio_request_ms: null,
        audio_onset_ms: null,
        audio_offset_ms: null,
        click_onset_ms: null,
        click_ms: null,
        response: null
    };

    // Keep buttons disabled until audio finishes
    buttons.forEach(button => {
        button.disabled = true;
    });

    const sound = new Audio(`wav/${audioFile}`);

    // Prepare data to save when trial finishes
    function getTimingData() {
        return {
            ...timing,

            audio_start_delay_ms:
                timing.audio_onset_ms !== null
                    ? timing.audio_onset_ms - timing.audio_request_ms
                    : null,

            audio_playback_elapsed_ms:
                timing.audio_offset_ms !== null &&
                timing.audio_onset_ms !== null
                    ? timing.audio_offset_ms - timing.audio_onset_ms
                    : null,

            rt_from_audio_offset_ms:
                timing.click_onset_ms !== null &&
                timing.audio_offset_ms !== null
                    ? timing.click_onset_ms - timing.audio_offset_ms
                    : null,

            rt: timing.click_ms !== null
                ? timing.click_ms - trialLoadTime
                : null
        };
    }

    // Record actual playback start event
    sound.addEventListener('playing', function () {
        if (timing.audio_onset_ms === null) {
            timing.audio_onset_ms = performance.now();
        }
    });

    // Record playback end event
    sound.addEventListener('ended', function () {
        timing.audio_offset_ms = performance.now();

        if (endOnAudioEnd) {
            // Training: finish immediately after audio
            jsPsych.finishTrial(getTimingData());
        } else {
            // Test: allow participant to respond
            buttons.forEach(button => {
                button.disabled = false;
            });
        }
    }, { once: true });

    // Register response events for test trials
    if (!endOnAudioEnd) {

        buttons.forEach((button, index) => {

            let pressTime = null;

            // Physical onset of the button press
            button.addEventListener('pointerdown', function () {
                if (!button.disabled) {
                    pressTime = performance.now();
                }
            });

            button.addEventListener('click', function () {

                if (timing.response !== null) return;

                timing.click_ms = performance.now();
                timing.click_onset_ms =
                    pressTime !== null ? pressTime : timing.click_ms;

                timing.response = index;

                // Prevent additional responses
                buttons.forEach(b => {
                    b.disabled = true;
                });

                // Preserve existing 500 ms delay
                jsPsych.pluginAPI.setTimeout(() => {
                    jsPsych.finishTrial(getTimingData());
                }, 500);

            }, { once: true });
        });
    }

    // Request playback and record its timestamp
    timing.audio_request_ms = performance.now();

    sound.play().catch(error => {
        console.error('Audio playback failed:', error);

        // Save a flagged trial rather than getting stuck
        jsPsych.finishTrial({
            ...getTimingData(),
            audio_error: String(error)
        });
    });
}
