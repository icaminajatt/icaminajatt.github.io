import { v4 as uuidv4 } from 'uuid';

const ReviewData = [

    { id: uuidv4(), 
        fullName: "Percy Jackson",
        jobTitle: "Son of Poseidon",
        company: "Camp Half Blood",
        bday: "1993-12-04",
        comment: "Where's the glory in repeating what others have done?" 
    },

    { id: uuidv4(), 
        fullName: "Annabeth Chase",
        jobTitle: "Daughter of Athena",
        company: "Camp Half Blood",
        bday: "1993-12-04",
        comment: "Even strength has to bow down to wisdom sometimes." 
    },
    
    { id: uuidv4(), 
        fullName: "Grover Underwood",
        jobTitle: "Satyr",
        company: "Camp Half Blood",
        bday: "1993-06-05",
        comment: "That if you believe in something so much that you would search for it until the day you die, it is worth it." 
    }
];

export default ReviewData;