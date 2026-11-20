
const semantic_training_procedure_base = {
    timeline: [semantic_training_trial]
};

let semantic_training_procedure1 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Concrete Training: Dax (rep 1)
        {
            audio: 'wav/C1_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C2_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C3_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C4_Dax.wav',
            image: 'objectA.png'
        }],
        randomize_order: false
};

let semantic_training_procedure2 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Abstract Training: Tam (rep 1)
    { 
        audio: 'wav/A1_Tam.wav',
        image: 'objectC.png'
    },
    {
        audio: 'wav/A2_Tam.wav',
        image: 'objectC.png'
    },
    {
        audio: 'wav/A3_Tam.wav',
        image: 'objectC.png'
    },
    {
        audio: 'wav/A4_Tam.wav',
        image: 'objectC.png'
    }
],
        randomize_order: false
};
let semantic_training_procedure3 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
         // Variable Training: Bim (rep 1)
         { 
            audio: 'wav/C1_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/A3_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/C2_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/A4_Bim.wav',
            image: 'objectE.png'
        } 
    ],
        randomize_order: false
};

let semantic_training_procedure4 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
         // Abstract Training: Zhav (rep 1)
        { 
            audio: 'wav/A1_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A2_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A3_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A4_Zhav.wav',
            image: 'objectD.png'
        }
    ],
        randomize_order: false
};
        

let semantic_training_procedure5 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
         // Concrete Training: Fehp (rep 1)
         {
            audio: 'wav/C1_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C2_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C3_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C4_Fehp.wav',
            image: 'objectB.png'
        }
    ],
        randomize_order: false
};       


let semantic_training_procedure6 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
          // Variable Training: Vosh (rep 1)
        { 
            audio: 'wav/A1_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/C3_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/A2_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/C4_Vosh.wav',
            image: 'objectF.png'
        } 
    ],
        randomize_order: false
};   

let semantic_training_procedure7 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
         // Variable Training: Bim (rep 2)
        { 
            audio: 'wav/C2_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/C1_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/A4_Bim.wav',
            image: 'objectE.png'
        },
        {
            audio: 'wav/A3_Bim.wav',
            image: 'objectE.png'
        } 
    ],
        randomize_order: false
};   

let semantic_training_procedure8 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Concrete Training: Dax (rep 2)
        {
            audio: 'wav/C2_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C4_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C1_Dax.wav',
            image: 'objectA.png'
        },
        {
            audio: 'wav/C3_Dax.wav',
            image: 'objectA.png'
        }
    ],
        randomize_order: false
};   
let semantic_training_procedure9 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Abstract Training: Tam (rep 2)
        { 
            audio: 'wav/A4_Tam.wav',
            image: 'objectC.png'
        },
        {
            audio: 'wav/A3_Tam.wav',
            image: 'objectC.png'
        },
        {
            audio: 'wav/A2_Tam.wav',
            image: 'objectC.png'
        },
        {
            audio: 'wav/A1_Tam.wav',
            image: 'objectC.png'
        }
    ],
        randomize_order: false
};

let semantic_training_procedure10 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Concrete Training: Fehp (rep 2)
        {
            audio: 'wav/C3_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C1_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C4_Fehp.wav',
            image: 'objectB.png'
        },
        {
            audio: 'wav/C2_Fehp.wav',
            image: 'objectB.png'
        }
    ],
        randomize_order: false
};

let semantic_training_procedure11 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Variable Training: Vosh (rep 2)
        { 
            audio: 'wav/A2_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/A1_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/C4_Vosh.wav',
            image: 'objectF.png'
        },
        {
            audio: 'wav/C3_Vosh.wav',
            image: 'objectF.png'
        } 
    ],
        randomize_order: false
};         
let semantic_training_procedure12 = {
    ...semantic_training_procedure_base,

    timeline_variables: [
        // Abstract Training: Zhav (rep 2)
        { 
            audio: 'wav/A1_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A4_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A2_Zhav.wav',
            image: 'objectD.png'
        },
        {
            audio: 'wav/A3_Zhav.wav',
            image: 'objectD.png'
        },
    ],
        randomize_order: false
}
