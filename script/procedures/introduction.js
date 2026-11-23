let instruction_introduction_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Cover_Story_Opening.wav',
            'image': 'opening_background.png'
        },
        {
            'audio': 'wav/Training_Instructions.wav',
            'image': 'zero_collected.png'
        }]
};

let instruction_repetition_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Repetition_Instructions.wav',
            'image': 'opening_background.png'
        },]
};


let instruction_test_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Training_End_Instructions.wav',
            'image': 'opening_background.png'
        },
        {
            'audio': 'wav/Test_Beginning.wav',
            'image': 'opening_background.png'
        },
    
    ]
};

let instruction_test_real_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Test_Instructions.wav',
            'image': 'opening_background.png'
        }
    
    ]
};

let instruction_test_halfway_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Test_Halfway.wav',
            'image': 'opening_background.png'
        },]
};

let instruction_end_procedure = {
    timeline: [instruction_trial],
    timeline_variables:
        [
        {
            'audio': 'wav/Study_End.wav',
            'image': 'opening_background.png'
        },]
};
