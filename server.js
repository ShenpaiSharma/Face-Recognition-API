const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const database = {
	users: [
		{
			user_id: "123",
			account_id: "dsasdn-212",
			first_name: "John",
			last_name: "Mayer",
			email: "john@gmail.com",
			password: "yolo",
			start_time: new Date(),
			expression_arr: [
				{
					timestamp: new Date(),
					emotions: 
					{
						neutral: 0.09159468859434128,      
					    happy: 0.0019699775148183107,      
					    sad: 0.905874490737915,
					    angry: 0.0005274414434097707,      
					    fearful: 3.555823013812187e-7,     
					    disgusted: 0.000022054917280911468,
					    surprised: 0.00001106494619307341
					}
				}
			]
		},
		{
			user_id: "124",
			account_id: "aqasdn-562",
			first_name: "Misty",
			last_name: "Stuart",
			email: "misty@gmail.com",
			password: "cookies",
			expression_arr: [
				{
					timestamp: new Date(),
					emotions: 
					{
						neutral: 0.09159468859434128,      
					    happy: 0.0019699775148183107,      
					    sad: 0.905874490737915,
					    angry: 0.0005274414434097707,      
					    fearful: 3.555823013812187e-7,     
					    disgusted: 0.000022054917280911468,
					    surprised: 0.00001106494619307341
					}
				}
				
			]
		},
		{
	        "user_id": "124",
	        "account_id": "aqasdn-562",
	        "first_name": "Misty",
	        "last_name": "Stuart",
	        "email": "misty@gmail.com",
	        "password": "cookies",
	        "expression_arr": [
	            {
	                "timestamp": "2021-06-19T19:46:14.740Z",
	                "emotions": {
	                    "neutral": 0.09159468859434128,
	                    "happy": 0.0019699775148183107,
	                    "sad": 0.905874490737915,
	                    "angry": 0.0005274414434097707,
	                    "fearful": 3.555823013812187e-7,
	                    "disgusted": 0.000022054917280911468,
	                    "surprised": 0.00001106494619307341
	                }
	            }
	        ]
	    },
	    {
	        "user_id": "125",
	        "account_id": "wq-e32",
	        "first_name": "Light",
	        "last_name": "Yagami",
	        "email": "light@mail.com",
	        "password": "ryuke",
	        "expression_arr": [
	            {
	                "timestamp": "2021-06-19T19:52:08.426Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:08.437Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:15.458Z",
	                "emotion": {
	                    "neutral": 0.9935973882675171,
	                    "happy": 0.0028167846612632275,
	                    "sad": 0.00003156630918965675,
	                    "angry": 0.0010182863334193826,
	                    "fearful": 0.000002843304855559836,
	                    "disgusted": 9.602024420019006e-7,
	                    "surprised": 0.002532094484195113
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:15.523Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:15.648Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:16.326Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:17.442Z",
	                "emotion": {
	                    "neutral": 0.9973432421684265,
	                    "happy": 0.000015571498806821182,
	                    "sad": 0.000011372948392818216,
	                    "angry": 0.0025289563927799463,
	                    "fearful": 2.323509207258212e-8,
	                    "disgusted": 2.8315707822912373e-7,
	                    "surprised": 0.00010052885045297444
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:18.413Z",
	                "emotion": {
	                    "neutral": 0.9997044801712036,
	                    "happy": 0.00028526800451800227,
	                    "sad": 3.5437147971606464e-7,
	                    "angry": 0.000007766672752040904,
	                    "fearful": 1.9048794486220544e-10,
	                    "disgusted": 3.425372874232835e-9,
	                    "surprised": 0.0000022497995360026835
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:19.438Z",
	                "emotion": {
	                    "neutral": 0.9999538064002991,
	                    "happy": 0.000038977075746515766,
	                    "sad": 7.274705637883017e-8,
	                    "angry": 0.000004662963419832522,
	                    "fearful": 9.591495653271664e-11,
	                    "disgusted": 3.854096763955539e-10,
	                    "surprised": 0.000002797745537463925
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:20.392Z",
	                "emotion": {
	                    "neutral": 0.9998798370361328,
	                    "happy": 0.00009771152690518647,
	                    "sad": 9.911566678511008e-8,
	                    "angry": 0.000010135860975424293,
	                    "fearful": 3.9721298472628064e-10,
	                    "disgusted": 9.205476381168864e-9,
	                    "surprised": 0.000011979051123489626
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:21.328Z",
	                "emotion": {
	                    "angry": 0,
	                    "disgusted": 0,
	                    "fearful": 0,
	                    "happy": 0,
	                    "neutral": 0,
	                    "sad": 0,
	                    "surprised": 0
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:22.436Z",
	                "emotion": {
	                    "neutral": 0.9997020363807678,
	                    "happy": 0.00020419580687303096,
	                    "sad": 0.0000013747504681305145,
	                    "angry": 0.000042799067159648985,
	                    "fearful": 7.2846577658935985e-9,
	                    "disgusted": 1.643596903022626e-8,
	                    "surprised": 0.00004938192432746291
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:23.426Z",
	                "emotion": {
	                    "neutral": 0.9995885491371155,
	                    "happy": 0.000273475656285882,
	                    "sad": 0.0000011439360605436377,
	                    "angry": 0.000050504429964348674,
	                    "fearful": 2.2821536660444508e-8,
	                    "disgusted": 4.282128784893757e-8,
	                    "surprised": 0.00008604113827459514
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:24.441Z",
	                "emotion": {
	                    "neutral": 0.9985352754592896,
	                    "happy": 0.0009464856702834368,
	                    "sad": 0.000003803351546594058,
	                    "angry": 0.0004653005162253976,
	                    "fearful": 8.792707006932687e-9,
	                    "disgusted": 0.0000017546002482049516,
	                    "surprised": 0.00004757628630613908
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:25.436Z",
	                "emotion": {
	                    "neutral": 0.999407947063446,
	                    "happy": 0.0003262915706727654,
	                    "sad": 0.000008302322385134175,
	                    "angry": 0.00023471415624953806,
	                    "fearful": 1.673040372907053e-8,
	                    "disgusted": 7.239484602905577e-7,
	                    "surprised": 0.000022033640561858192
	                }
	            },
	            {
	                "timestamp": "2021-06-19T19:52:26.448Z",
	                "emotion": {
	                    "neutral": 0.998551070690155,
	                    "happy": 0.0009960667230188847,
	                    "sad": 0.000004196685949864332,
	                    "angry": 0.0003368873440194875,
	                    "fearful": 1.0781808867932341e-7,
	                    "disgusted": 5.345016234059585e-7,
	                    "surprised": 0.00011140732385683805
	                }
	            }
	        ]
	    }
	]
}


app.get('/', function(req, res) {
	res.send(database.users);
});

app.post('/expression', function(req, res) {
	const { user_id, account_id, first_name, last_name, email, password, start_time, end_time, expression_array } = req.body;

	// bcrypt.hash(password, null, null, function(err, hash) {
	//     console.log(hash);
	// });
	console.log(database.users);

	database.users.push({
		user_id: user_id,
		account_id: account_id,
		first_name: first_name,
		last_name: last_name,
		email: email,
		password: password,
		start_time: start_time,
		end_time: end_time,
		expression_arr: expression_array
	})
	res.json(database.users[database.users.length - 1]);
});

app.get('/expression', function(req, res) {

});

app.listen(5050, () => {
	console.log('Server started on port 5050');
});
