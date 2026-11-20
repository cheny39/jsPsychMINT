 const forced_choice_test_procedure_base = {
    timeline: [forced_choice_test_trial],
};
let forced_choice_test_familiar_procedure = {
    ...forced_choice_test_procedure_base,
    timeline_variables: [
        {// Test Trial 1
            'audio': 'Familiar_test_prompt_1.wav',
            // 'image': 'test_background.png',
            'left': 'dog.png',
            'right': 'apple.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        },
        {// Test Trial 2
            'audio': 'Familiar_test_prompt_2.wav',
            // 'image': 'whitesquare.png',
            'left': 'cookie.png',
            'right': 'ball.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        }
    ]
};

let forced_choice_test_procedure1 = {
    ...forced_choice_test_procedure_base,
    timeline_variables: [
        {// Test Trial 1
            'audio': 'Touch_the_Dax.wav',
            // 'image': 'test_background.png',
            'left': 'objectB.png',
            'right': 'objectA.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        },
        {// Test Trial 2
            'audio': 'Touch_the_Tam.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectC.png',
            'right': 'objectD.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        }, 
        {// Test Trial 3
            'audio': 'Touch_the_Bim.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectF.png',
            'right': 'objectE.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        },
        {// Test Trial 4
            'audio': 'Touch_the_Zhav.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectD.png',
            'right': 'objectC.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        },  
        {// Test Trial 5
            'audio': 'Touch_the_Vosh.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectF.png',
            'right': 'objectE.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        },
        {// Test Trial 6
            'audio': 'Touch_the_Fehp.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectB.png',
            'right': 'objectA.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        }
    ]
};
    let forced_choice_test_procedure2 = {
        ...forced_choice_test_procedure_base,
        timeline_variables: [
        {// Test Trial 7
            'audio': 'Touch_the_Bim.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectF.png',
            'right': 'objectE.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        },
        {// Test Trial 8
             'audio': 'Touch_the_Dax.wav',
            //  'image': 'whitesquare.png',
             'left': 'objectA.png',
             'right': 'objectB.png',
             // In our current setup, 0 = left and 1 = right.
             'correct_answer': 0
        }, 
        {// Test Trial 9
             'audio': 'Touch_the_Tam.wav',
            //  'image': 'whitesquare.png',
             'left': 'objectD.png',
             'right': 'objectC.png',
             // In our current setup, 0 = left and 1 = right.
             'correct_answer': 1
        }, 
        {// Test Trial 10
            'audio': 'Touch_the_Fehp.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectA.png',
            'right': 'objectB.png',
             // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        },
        {// Test Trial 11
            'audio': 'Touch_the_Vosh.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectF.png',
            'right': 'objectE.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 0
        },
        {// Test Trial 12
            'audio': 'Touch_the_Zhav.wav',
            // 'image': 'whitesquare.png',
            'left': 'objectC.png',
            'right': 'objectD.png',
            // In our current setup, 0 = left and 1 = right.
            'correct_answer': 1
        },
    ]
};