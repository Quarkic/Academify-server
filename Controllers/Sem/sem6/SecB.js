const User = require("../../../model/sem6/SecB");
const SecBSignupControllers = async (req, res) => {
  const MIS = req.body.MIS;
  const name = req.body.name;
  const currentPresent = req.body.currentPresent;
  const currentAbsent = req.body.currentAbsent;
  const currentPercentage = req.body.currentPercentage;
  const totalClass = req.body.totalClass;
  const current = req.body.current;

  if (
    !MIS ||
    !name ||
    !currentPercentage ||
    !currentAbsent ||
    !currentPresent ||
    !current ||
    !totalClass
  ) {
    return res.status(400).json("All Filed Are Required");
  }
  const AA = [
    {
      "mis": "112115111",
      "name": "PRAKHAR SINGH CHOUHAN",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115112",
      "name": "PRASAD DHARASKAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115113",
      "name": "PRATEEK MISHRA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115114",
      "name": "PRATHAM DHADHIYA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115115",
      "name": "PRATHAMESH GADEKAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115116",
      "name": "PRATHAMESH GAWANDE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115117",
      "name": "PRAVEEN BASAVARAJ NAYAKAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115118",
      "name": "PRIYANSH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115119",
      "name": "PRIYANSHU SUDHAKAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115120",
      "name": "PRIYANSHU TYAGI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115121",
      "name": "PUNIT BADJATE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115122",
      "name": "PUSHKARAJ PAWAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115123",
      "name": "R J SANGHAMITRA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115124",
      "name": "RACHIT AJAY BORKAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115125",
      "name": "RAJAT DEEP SRIVASTAVA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115128",
      "name": "RATHOD BHARGAV PANKAJBHAI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115129",
      "name": "RATHOD SRIKISHAN",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115130",
      "name": "REBBA VENKATA SATISH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115131",
      "name": "RHYTHM GARG",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115132",
      "name": "RISHABH KUMAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115133",
      "name": "ROHAN KUMAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115134",
      "name": "ROHAN SHARMA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115135",
      "name": "SAGAR RAJESH SANTLANI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115136",
      "name": "SAHIL SANTOSH DHOOT",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115137",
      "name": "SAMAR KRISHNA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115138",
      "name": "SAMYAK DESHPANDE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115139",
      "name": "SANKALP SHRIVASTAVA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115140",
      "name": "SARVAGYA GUPTA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115141",
      "name": "SATYAM SINGH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115142",
      "name": "SAVALIYA ISH RAJENDRABHAI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115143",
      "name": "SHADAMAKI SAI KRISHNA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115144",
      "name": "SHARMA GHANSHYAM DURGESH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115145",
      "name": "SHASHANK GARG",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115146",
      "name": "SHATALWAR VISHVESH SANJAY",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115147",
      "name": "SHINDE CHAITRALI PRAMOD",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115148",
      "name": "SHINDE SHRUNMAY SHIVAJI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "1121151049",
      "name": "SHRAVANI KHADE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115150",
      "name": "SHRESTH VIPIN SINGH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115151",
      "name": "SHUBHAM SHAILENDRA ROKADE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115152",
      "name": "SHUCHIRR PANABAKA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115153",
      "name": "SIDDHANT SACHIN GULVE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115154",
      "name": "SIDDHESH ARUNRAO KALE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115155",
      "name": "SIMRAN SANGRAM KHARE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115156",
      "name": "SOHAM SANGHAVI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115157",
      "name": "SOM SINGH LODHI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115158",
      "name": "SOURISH MITTAL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115159",
      "name": "SRIJAN KHANDELWAR",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115160",
      "name": "SRUSHTI SURESH WAGHMARE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115161",
      "name": "STEVE RAPHAEL PULIKOTTIL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115162",
      "name": "SUPEKAR MAHESH BABANRAO",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115163",
      "name": "SWARUP BAPU LONDHE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115164",
      "name": "SYNDER JOSEPH RODRIGUES",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115166",
      "name": "TANWAR VISHALSINGH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115167",
      "name": "TILOKANI YASH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115168",
      "name": "V NANDINI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115169",
      "name": "VAIDADA CHETAN",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115170",
      "name": "VATSAL TIWARI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115172",
      "name": "VIKASH CHOUDHARY",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115173",
      "name": "VINIT AGARWAL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115174",
      "name": "VIPIN KUMAWAT",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112115175",
      "name": "YASHRAJ PRAVIN AGANE",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116007",
      "name": "ATHARV PATIL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116023",
      "name": "JANHAVI SINGH",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116034",
      "name": "SANTU DHALI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116035",
      "name": "SARANSH MEENA",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116039",
      "name": "SIDDHARTH RODRIGUES",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
  
    {
      "mis": "112116001",
      "name": "Aaroh Maheshwari",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116002",
      "name": "Aditya Bhusari",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116003",
      "name": "Anas Mohammad",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116004",
      "name": "Anuj Rajput",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116005",
      "name": "Anuja Kamble",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    
    {
      "mis": "112116008",
      "name": "Rupal Bhange",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116009",
      "name": "Brijesh Verma",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116010",
      "name": "Chaitanya Shridhar Deshmukh",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116011",
      "name": "Chiranjeev Gautam",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116012",
      "name": "Daksh Agarwal",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116013",
      "name": "Devaguptapu Venkata Roopesh",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116014",
      "name": "Devansh Patel",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116015",
      "name": "D.Sudeep Reddy",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116016",
      "name": "Eshaan Pandey",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116017",
      "name": "Gandikota Sastry",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116018",
      "name": "Saurabh Gawali",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116019",
      "name": "Greyshm Vijay Kumar",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116020",
      "name": "HIMANSH NARWAL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116021",
      "name": "HIMANSHU TIWARI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116022",
      "name": "Jai khatri",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    
    {
      "mis": "112116024",
      "name": "Aditya Kalambkar",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116025",
      "name": "K PRANAY REDDY",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116026",
      "name": "Kshitij Bag",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116028",
      "name": "P.Vishal nayak",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116029",
      "name": "POOJAN HEMANTBHAI PATEL",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116030",
      "name": "Prathamesh patil",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116031",
      "name": "Prabal Pratap",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116032",
      "name": "Priyanshu Rane",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116033",
      "name": "Lingam Saikrishna Seshendra",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    
    {
      "mis": "112116037",
      "name": "Shivanshu verma",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116038",
      "name": "Siddhant Gupta",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    
    {
      "mis": "112116040",
      "name": "Sparsh Dhokey",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116041",
      "name": "Srijan Raha",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116042",
      "name": "Tejas Patil",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116043",
      "name": "utkarsh shukla",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116045",
      "name": "V.Karthik",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116046",
      "name": "VIDHAN PATNI",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    },
    {
      "mis": "112116047",
      "name": "Vivek Kumar Bunkar",
      "currentPresent": 0,
      "currentAbsent": 0,
      "totalDays": 0,
      "currentPercentage": 0,
      "currentStatus": false,
      "x": "y"
    }
  ]
  ;
  for (let i = 0; i < AA.length; i++) {
    const newUser = await User.create({
      MIS: AA[i].mis,
      name: AA[i].name,
      currentPresent,
      currentPercentage,
      currentAbsent,
      current,
      totalClass,
    });
    newUser.save();
  }

  //   const oldUser = await User.findOne({ MIS });
  //   if (oldUser) return res.status(400).json("User Already Registerd");
  //   const newUser = await User.create({
  //     MIS,
  //     name,
  //     currentPresent,
  //     current,
  //     currentAbsent,
  //     currentPercentage,
  //     totalClass,
  //   });
  //   newUser.save();
  res.status(201).send("Success");
};

module.exports = { SecBSignupControllers };
