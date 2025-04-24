export const color=[
    "white",
    "Black",
    "Red",
    "marun",
    'Being',
    "Pink",
    "Green",
    "Yellow",
]

export const filters = [
    {
        id:'color',
        name:"Color",
        options:[
            {value:"white",label:"White"},
            {value:"beige",label:"beige"},
            {value:"blue",label:"Blue"},
            {value:"brown",label:"Brown"},
            {value:"green",label:"Green"},
            {value:"purple",label:"Purple"},
            {value:"yellow",label:"Yellow"},
        ],
    },
    {
        id:"size",
        name:"Size",
        options: [
            {value:"s" ,label:"S"},
            {value:"m" ,label:"M"},
            {value:"l" ,label:"L"},
        ],
    },

];

export const singleFilter = [
    {
        id:'price',
        name:"Price",
        options:[
            {value:"159-399",label:"₹159-₹399"},
            {value:"399-999",label:"₹399-₹999"},
            {value:"999-1999",label:"₹999-₹1999"},
            {value:"1999-2999",label:"₹1999-₹2999"},
            {value:"3999-4999",label:"₹3999-₹4999"},
        ],
    },
    {
        id:"dicount",
        name:"Discunt Range",
        options: [
            {value:"20" ,label:"20% and above"},
            {value:"30" ,label:"30% and above"},
            {value:"40" ,label:"40% and above"},
            {value:"50" ,label:"50% and above"},
            {value:"60" ,label:"60% and above"},
            {value:"70" ,label:"70% and above"},
            {value:"80" ,label:"80% and above"},
        ],
    },

];