	function kernel(){
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#3333ff'},
		{position:[ 1, 0, 0],type:17,color:'#33ff33'},
		{position:[-1, 0, 0],type:17,color:'#ffff33'},
		{position:[ 0, 1, 0],type:17,color:'#3333ff'},
		{position:[ 0,-1, 0],type:17,color:'#3333ff'},
		{position:[ 0, 0, 1],type:17,color:'#ff3333'},
		{position:[ 0, 0,-1],type:17,color:'#3333ff'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#ffff33'},
		{position:[ 0,-1,-1],type:14,color:'#33ff33'},
		{position:[ 1,-1,-1],type:14,color:'#33ff33'},
		{position:[-1, 0,-1],type:14,color:'#ffff33'},
		// {position:[ 0, 0,-1],type:14,color:'#ff3333'},
		{position:[ 1, 0,-1],type:14,color:'#33ff33'},
		{position:[-1, 1,-1],type:14,color:'#ffff33'},
		{position:[ 0, 1,-1],type:14,color:'#ffff33'},
		{position:[ 1, 1,-1],type:14,color:'#33ff33'},

		{position:[-1,-1, 0],type:14,color:'#ffff33'},
		// {position:[ 0,-1, 0],type:14,color:'#ff3333'},
		{position:[ 1,-1, 0],type:14,color:'#33ff33'},
		// {position:[-1, 0, 0],type:14,color:'#ff3333'},
		// {position:[ 0, 0, 0],type:14,color:'#ff3333'},
		// {position:[ 1, 0, 0],type:14,color:'#ff3333'},
		{position:[-1, 1, 0],type:14,color:'#ffff33'},
		// {position:[ 0, 1, 0],type:14,color:'#ff3333'},
		{position:[ 1, 1, 0],type:14,color:'#33ff33'},

		{position:[-1,-1, 1],type:14,color:'#ff3333'},
		{position:[ 0,-1, 1],type:14,color:'#ff3333'},
		{position:[ 1,-1, 1],type:14,color:'#ff3333'},
		{position:[-1, 0, 1],type:14,color:'#ff3333'},
		// {position:[ 0, 0, 1],type:14,color:'#ff3333'},
		{position:[ 1, 0, 1],type:14,color:'#ff3333'},
		{position:[-1, 1, 1],type:14,color:'#ff3333'},
		{position:[ 0, 1, 1],type:14,color:'#ff3333'},
		{position:[ 1, 1, 1],type:14,color:'#ff3333'},
		//	engines
		{position:[ 0, 0,-3],type: 6,color:'#3333ff'},
		{position:[ 0, 0,-2],type: 9,color:'#3333ff'},
		{position:[ 0, 0, 3],type: 6,color:'#ff3333'},
		{position:[ 0, 0, 2],type: 9,color:'#ff3333'},
		{position:[ 0,-3, 0],type: 6,color:'#3333ff'},
		{position:[ 0,-2, 0],type: 9,color:'#3333ff'},
		{position:[ 0, 3, 0],type: 6,color:'#3333ff'},
		{position:[ 0, 2, 0],type: 9,color:'#3333ff'},
		{position:[-3, 0, 0],type: 6,color:'#ffff33'},
		{position:[-2, 0, 0],type: 9,color:'#ffff33'},
		{position:[ 3, 0, 0],type: 6,color:'#33ff33'},
		{position:[ 2, 0, 0],type: 9,color:'#33ff33'},
		],
		engines=[
		{name:'up'   ,len:2,dir:[ 0, 1, 0],end:[ 0,-4, 0]},
		{name:'down' ,len:2,dir:[ 0,-1, 0],end:[ 0, 4, 0]},
		{name:'left' ,len:2,dir:[ 1, 0, 0],end:[-4, 0, 0]},
		{name:'right',len:2,dir:[-1, 0, 0],end:[ 4, 0, 0]},
		{name:'front',len:2,dir:[ 0, 0, 1],end:[ 0, 0,-4]},
		{name:'back' ,len:2,dir:[ 0, 0,-1],end:[ 0, 0, 4]},
		],
		components=[
			{type:'engine',name:'up',units:[]}
		]
		return {units:units,engines:engines}
	}

	function kernel2ed(){
		var s2d2=Math.sqrt(2)/2,s3d2=Math.sqrt(3)/2
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#ff0000'},
		{position:[ 1, 0, 0],type:17,color:'#ff0000'},
		{position:[-1, 0, 0],type:17,color:'#ff0000'},
		{position:[ 0, 1, 0],type:17,color:'#ff0000'},
		{position:[ 0,-1, 0],type:17,color:'#ff0000'},
		{position:[ 0, 0, 1],type:17,color:'#ff0000'},
		{position:[ 0, 0,-1],type:17,color:'#ff0000'},
		{position:[ 2/3, 2/3, 2/3],type:17,color:'#ff0000'},
		{position:[-2/3, 2/3, 2/3],type:17,color:'#ff0000'},
		{position:[ 2/3,-2/3, 2/3],type:17,color:'#ff0000'},
		{position:[ 2/3, 2/3,-2/3],type:17,color:'#ff0000'},
		{position:[-2/3,-2/3, 2/3],type:17,color:'#ff0000'},
		{position:[-2/3, 2/3,-2/3],type:17,color:'#ff0000'},
		{position:[ 2/3,-2/3,-2/3],type:17,color:'#ff0000'},
		{position:[-2/3,-2/3,-2/3],type:17,color:'#ff0000'},
		//	CPU
		{position:[0, s2d2,1+s2d2],type:14,color:'#ff0000'},
		{position:[0,-s2d2,1+s2d2],type:14,color:'#ff0000'},
		{position:[ s2d2,0,1+s2d2],type:14,color:'#ff0000'},
		{position:[-s2d2,0,1+s2d2],type:14,color:'#ff0000'},
		{position:[0, s2d2,-1-s2d2],type:14,color:'#ff0000'},
		{position:[0,-s2d2,-1-s2d2],type:14,color:'#ff0000'},
		{position:[ s2d2,0,-1-s2d2],type:14,color:'#ff0000'},
		{position:[-s2d2,0,-1-s2d2],type:14,color:'#ff0000'},

		{position:[0,1+s2d2, s2d2],type:14,color:'#ff0000'},
		{position:[0,1+s2d2,-s2d2],type:14,color:'#ff0000'},
		{position:[ s2d2,1+s2d2,0],type:14,color:'#ff0000'},
		{position:[-s2d2,1+s2d2,0],type:14,color:'#ff0000'},
		{position:[0,-1-s2d2, s2d2],type:14,color:'#ff0000'},
		{position:[0,-1-s2d2,-s2d2],type:14,color:'#ff0000'},
		{position:[ s2d2,-1-s2d2,0],type:14,color:'#ff0000'},
		{position:[-s2d2,-1-s2d2,0],type:14,color:'#ff0000'},

		{position:[1+s2d2,0, s2d2],type:14,color:'#ff0000'},
		{position:[1+s2d2,0,-s2d2],type:14,color:'#ff0000'},
		{position:[1+s2d2, s2d2,0],type:14,color:'#ff0000'},
		{position:[1+s2d2,-s2d2,0],type:14,color:'#ff0000'},
		{position:[-1-s2d2,0, s2d2],type:14,color:'#ff0000'},
		{position:[-1-s2d2,0,-s2d2],type:14,color:'#ff0000'},
		{position:[-1-s2d2, s2d2,0],type:14,color:'#ff0000'},
		{position:[-1-s2d2,-s2d2,0],type:14,color:'#ff0000'},

		{position:[ s2d2+2/3, s2d2+2/3, 2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3, s2d2+2/3, 2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3,-s2d2-2/3, 2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3, s2d2+2/3,-2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3,-s2d2-2/3, 2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3, s2d2+2/3,-2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3,-s2d2-2/3,-2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3,-s2d2-2/3,-2/3],type:13,color:'#ff0000'},

		{position:[ s2d2+2/3, 2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3, 2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3,-2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3, 2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3,-2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3, 2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[ s2d2+2/3,-2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[-s2d2-2/3,-2/3,-s2d2-2/3],type:13,color:'#ff0000'},

		{position:[ 2/3, s2d2+2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[-2/3, s2d2+2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[ 2/3,-s2d2-2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[ 2/3, s2d2+2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[-2/3,-s2d2-2/3, s2d2+2/3],type:13,color:'#ff0000'},
		{position:[-2/3, s2d2+2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[ 2/3,-s2d2-2/3,-s2d2-2/3],type:13,color:'#ff0000'},
		{position:[-2/3,-s2d2-2/3,-s2d2-2/3],type:13,color:'#ff0000'},

		{position:[ 1,  0, 3],type:17,color:'#ff0000'},
		{position:[ 0,  0, 3],type:17,color:'#ff0000'},
		{position:[-1,  0, 3],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 3],type:17,color:'#ff0000'},
		{position:[-0.5, s3d2, 3],type:17,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 3],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 3],type:17,color:'#ff0000'},

		{position:[ 1,  0, 4],type:17,color:'#ff0000'},
		{position:[ 0,  0, 4],type:17,color:'#ff0000'},
		{position:[-1,  0, 4],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 4],type:17,color:'#ff0000'},
		{position:[-0.5, s3d2, 4],type:17,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 4],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 4],type:17,color:'#ff0000'},

		{position:[ 1,  0, 5],type:17,color:'#ff0000'},
		{position:[ 0,  0, 5],type:10,color:'#ff0000'},
		{position:[-1,  0, 5],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 5],type:10,color:'#ff0000'},
		{position:[-0.5, s3d2, 5],type:10,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 5],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 5],type:17,color:'#ff0000'},

		{position:[ .5,-s3d2/3, 5+s3d2],type:12,color:'#ff0000'},
		{position:[-.5,-s3d2/3, 5+s3d2],type:12,color:'#ff0000'},
		{position:[ 0,2*s3d2/3, 5+s3d2],type:12,color:'#ff0000'},

		{position:[ 0, 0, -3],type:9,color:'#ff0000'},
		{position:[ 0, 0, -4],type:6,color:'#ff0000'},
		{position:[ 0, 0, -5],type:6,color:'#ff0000'},
		{position:[ 0, 0, -6],type:6,color:'#ff0000'},
		{position:[ 0, s3d2, -3.5],type:9,color:'#ff0000'},
		{position:[ 0, s3d2, -4.5],type:6,color:'#ff0000'},
		{position:[ 0, s3d2, -5.5],type:6,color:'#ff0000'},
		{position:[ 0,-s3d2, -3.5],type:9,color:'#ff0000'},
		{position:[ 0,-s3d2, -4.5],type:6,color:'#ff0000'},
		{position:[ 0,-s3d2, -5.5],type:6,color:'#ff0000'},
		{position:[ s3d2,0, -3.5],type:9,color:'#ff0000'},
		{position:[ s3d2,0, -4.5],type:6,color:'#ff0000'},
		{position:[ s3d2,0, -5.5],type:6,color:'#ff0000'},
		{position:[-s3d2,0, -3.5],type:9,color:'#ff0000'},
		{position:[-s3d2,0, -4.5],type:6,color:'#ff0000'},
		{position:[-s3d2,0, -5.5],type:6,color:'#ff0000'},

		];
		engines=[

		]
		return {units:units,engines:engines}
	}

	// var kernel={
	// 	"cocType":"model",
	// 	"units":[
	// 	//	locator gyroscope
	// 	{"position":[ 0, 0, 0],"type":17,"color":'#ff0000'},
	// 	{"position":[ 1, 0, 0],"type":17,"color":'#ff0000'},
	// 	{"position":[-1, 0, 0],"type":17,"color":'#ff0000'},
	// 	{"position":[ 0, 1, 0],"type":17,"color":'#ff0000'},
	// 	{"position":[ 0,-1, 0],"type":17,"color":'#ff0000'},
	// 	{"position":[ 0, 0, 1],"type":17,"color":'#ff0000'},
	// 	{"position":[ 0, 0,-1],"type":17,"color":'#ff0000'},
	// 	//	CPU
	// 	{"position":[-1,-1,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 0,-1,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1,-1,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[-1, 0,-1],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 0, 0,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1, 0,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[-1, 1,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 0, 1,-1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1, 1,-1],"type":14,"color":'#ff0000'},

	// 	{"position":[-1,-1, 0],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 0,-1, 0],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1,-1, 0],"type":14,"color":'#ff0000'},
	// 	// {"position":[-1, 0, 0],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 0, 0, 0],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 1, 0, 0],"type":14,"color":'#ff0000'},
	// 	{"position":[-1, 1, 0],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 0, 1, 0],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1, 1, 0],"type":14,"color":'#ff0000'},

	// 	{"position":[-1,-1, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 0,-1, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1,-1, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[-1, 0, 1],"type":14,"color":'#ff0000'},
	// 	// {"position":[ 0, 0, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1, 0, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[-1, 1, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 0, 1, 1],"type":14,"color":'#ff0000'},
	// 	{"position":[ 1, 1, 1],"type":14,"color":'#ff0000'},
	// 	//	engines
	// 	{"position":[ 0, 0,-3],"type": 6,"color":'#ff0000'},
	// 	{"position":[ 0, 0,-2],"type": 9,"color":'#ff0000'},
	// 	{"position":[ 0, 0, 3],"type": 6,"color":'#ff0000'},
	// 	{"position":[ 0, 0, 2],"type": 9,"color":'#ff0000'},
	// 	{"position":[ 0,-3, 0],"type": 6,"color":'#ff0000'},
	// 	{"position":[ 0,-2, 0],"type": 9,"color":'#ff0000'},
	// 	{"position":[ 0, 3, 0],"type": 6,"color":'#ff0000'},
	// 	{"position":[ 0, 2, 0],"type": 9,"color":'#ff0000'},
	// 	{"position":[-3, 0, 0],"type": 6,"color":'#ff0000'},
	// 	{"position":[-2, 0, 0],"type": 9,"color":'#ff0000'},
	// 	{"position":[ 3, 0, 0],"type": 6,"color":'#ff0000'},
	// 	{"position":[ 2, 0, 0],"type": 9,"color":'#ff0000'},
	// 	],
	// 	engines:[
	// 	{"name":"up"   ,"len":2,"dir":[ 0, 1, 0],"end":[ 0,-4, 0]},
	// 	{"name":"down" ,"len":2,"dir":[ 0,-1, 0],"end":[ 0, 4, 0]},
	// 	{"name":"left" ,"len":2,"dir":[ 1, 0, 0],"end":[-4, 0, 0]},
	// 	{"name":"right","len":2,"dir":[-1, 0, 0],"end":[ 4, 0, 0]},
	// 	{"name":"front","len":2,"dir":[ 0, 0, 1],"end":[ 0, 0,-4]},
	// 	{"name":"back" ,"len":2,"dir":[ 0, 0,-1],"end":[ 0, 0, 4]},
	// 	]
	// }	

	// function quadcopter(){
	// 	var s2d2=Math.sqrt(2)/2
	// 	units=[
	// 	//	locator gyroscope
	// 	{position:[ 0, 0, 0],type:17,color:'#ffffff'},
	// 	{position:[ 1, 0, 0],type:17,color:'#ffffff'},
	// 	{position:[-1, 0, 0],type:17,color:'#ffffff'},
	// 	{position:[ 0, 1, 0],type:17,color:'#ffffff'},
	// 	{position:[ 0,-1, 0],type:17,color:'#ffffff'},
	// 	{position:[ 0, 0, 1],type:17,color:'#ff3333'},
	// 	{position:[ 0, 0,-1],type:17,color:'#3333ff'},
	// 	//	CPU
	// 	{position:[-1,-1,-1],type:14,color:'#ffffff'},
	// 	{position:[ 0,-1,-1],type:14,color:'#ffffff'},
	// 	{position:[ 1,-1,-1],type:14,color:'#ffffff'},

	// 	{position:[-1, 0,-1],type:14,color:'#3333ff'},
	// 	// {position:[ 0, 0,-1],type:14,color:'#ffffff'},
	// 	{position:[ 1, 0,-1],type:14,color:'#3333ff'},

	// 	{position:[-1, 1,-1],type:14,color:'#ffffff'},
	// 	{position:[ 0, 1,-1],type:14,color:'#ffffff'},
	// 	{position:[ 1, 1,-1],type:14,color:'#ffffff'},

	// 	{position:[-1,-1, 0],type:14,color:'#ffffff'},
	// 	// {position:[ 0,-1, 0],type:14,color:'#ffffff'},
	// 	{position:[ 1,-1, 0],type:14,color:'#ffffff'},

	// 	// {position:[-1, 0, 0],type:14,color:'#ffffff'},
	// 	// {position:[ 0, 0, 0],type:14,color:'#ffffff'},
	// 	// {position:[ 1, 0, 0],type:14,color:'#ffffff'},

	// 	{position:[-1, 1, 0],type:14,color:'#ffffff'},
	// 	// {position:[ 0, 1, 0],type:14,color:'#ffffff'},
	// 	{position:[ 1, 1, 0],type:14,color:'#ffffff'},

	// 	{position:[-1,-1, 1],type:14,color:'#ffffff'},
	// 	{position:[ 0,-1, 1],type:14,color:'#ff3333'},
	// 	{position:[ 1,-1, 1],type:14,color:'#ffffff'},

	// 	{position:[-1, 0, 1],type:14,color:'#ffffff'},
	// 	// {position:[ 0, 0, 1],type:14,color:'#ffffff'},
	// 	{position:[ 1, 0, 1],type:14,color:'#ffffff'},
		
	// 	{position:[-1, 1, 1],type:14,color:'#ffffff'},
	// 	{position:[ 0, 1, 1],type:14,color:'#ff3333'},
	// 	{position:[ 1, 1, 1],type:14,color:'#ffffff'},

	// 	// 4 axis engines
	// 	{position:[ .5,-s2d2-1, .5],type:12,color:'#ff3333'},
	// 	{position:[-.5,-s2d2-1, .5],type:12,color:'#ff3333'},
	// 	{position:[-.5,-s2d2-1,-.5],type:12,color:'#ff3333'},
	// 	{position:[ .5,-s2d2-1,-.5],type:12,color:'#ff3333'},
	// 	{position:[ .0,-s2d2*2-1,-.0],type:12,color:'#ff3333'},
	// 	{position:[ .0,-s2d2*2-2,-.0],type:12,color:'#ff3333'},
	// 	{position:[-s2d2,-s2d2*3-2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ s2d2,-s2d2*3-2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ .0,-s2d2*4-2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ 0,-s2d2*3-2, s2d2],type: 9,color:'#ff3333'},
	// 	{position:[ 0,-s2d2*3-2, s2d2+1],type: 6,color:'#ff3333'},
	// 	{position:[ 0,-s2d2*3-2,-s2d2],type: 9,color:'#ff3333'},
	// 	{position:[ 0,-s2d2*3-2,-s2d2-1],type: 6,color:'#ff3333'},

	// 	{position:[ .5, s2d2+1, .5],type:12,color:'#ff3333'},
	// 	{position:[-.5, s2d2+1, .5],type:12,color:'#ff3333'},
	// 	{position:[-.5, s2d2+1,-.5],type:12,color:'#ff3333'},
	// 	{position:[ .5, s2d2+1,-.5],type:12,color:'#ff3333'},
	// 	{position:[ .0, s2d2*2+1,-.0],type:12,color:'#ff3333'},
	// 	{position:[ .0, s2d2*2+2,-.0],type:12,color:'#ff3333'},
	// 	{position:[-s2d2, s2d2*3+2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ s2d2, s2d2*3+2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ .0, s2d2*4+2,-.0],type:12,color:'#ff3333'},
	// 	{position:[ 0, s2d2*3+2, s2d2],type: 9,color:'#ff3333'},
	// 	{position:[ 0, s2d2*3+2, s2d2+1],type: 6,color:'#ff3333'},
	// 	{position:[ 0, s2d2*3+2,-s2d2],type: 9,color:'#ff3333'},
	// 	{position:[ 0, s2d2*3+2,-s2d2-1],type: 6,color:'#ff3333'},

	// 	{position:[-s2d2-1, .5, .5],type:12,color:'#3333ff'},
	// 	{position:[-s2d2-1, .5,-.5],type:12,color:'#3333ff'},
	// 	{position:[-s2d2-1,-.5,-.5],type:12,color:'#3333ff'},
	// 	{position:[-s2d2-1,-.5, .5],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*2-1,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*2-2,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*3-2,-s2d2,-.0],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*3-2, s2d2,-.0],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*4-2,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[-s2d2*3-2, 0, s2d2],type: 9,color:'#3333ff'},
	// 	{position:[-s2d2*3-2, 0, s2d2+1],type: 6,color:'#3333ff'},
	// 	{position:[-s2d2*3-2, 0,-s2d2],type: 9,color:'#3333ff'},
	// 	{position:[-s2d2*3-2, 0,-s2d2-1],type: 6,color:'#3333ff'},

	// 	{position:[ s2d2+1, .5, .5],type:12,color:'#3333ff'},
	// 	{position:[ s2d2+1, .5,-.5],type:12,color:'#3333ff'},
	// 	{position:[ s2d2+1,-.5,-.5],type:12,color:'#3333ff'},
	// 	{position:[ s2d2+1,-.5, .5],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*2+1,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*2+2,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*3+2,-s2d2,-.0],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*3+2, s2d2,-.0],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*4+2,-.0, .0],type:12,color:'#3333ff'},
	// 	{position:[ s2d2*3+2, 0, s2d2],type: 9,color:'#3333ff'},
	// 	{position:[ s2d2*3+2, 0, s2d2+1],type: 6,color:'#3333ff'},
	// 	{position:[ s2d2*3+2, 0,-s2d2],type: 9,color:'#3333ff'},
	// 	{position:[ s2d2*3+2, 0,-s2d2-1],type: 6,color:'#3333ff'},
	// 	// 
	// 	]
	// 	engines=[
	// 	{name:'left-up' ,len:2,dir:[ 0, 0,-1],end:[ 4, 0, 3]},
	// 	{name:'right-up',len:2,dir:[ 0, 0,-1],end:[-4, 0, 3]},
	// 	{name:'front-up',len:2,dir:[ 0, 0,-1],end:[ 0, 4, 3]},
	// 	{name:'back-up' ,len:2,dir:[ 0, 0,-1],end:[ 0,-4, 3]},
	// 	{name:'left-down' ,len:2,dir:[ 0, 0, 1],end:[ 4, 0,-3]},
	// 	{name:'right-down',len:2,dir:[ 0, 0, 1],end:[-4, 0,-3]},
	// 	{name:'front-down',len:2,dir:[ 0, 0, 1],end:[ 0, 4,-3]},
	// 	{name:'back-down' ,len:2,dir:[ 0, 0, 1],end:[ 0,-4,-3]},
	// 	]
	// 	return {units:units,engines:engines}
	// }

	function quadcopter(){
		var s2d2=Math.sqrt(2)/2
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#ffffff'},
		{position:[ 1, 0, 0],type:17,color:'#ffffff'},
		{position:[-1, 0, 0],type:17,color:'#ffffff'},
		{position:[ 0, 1, 0],type:17,color:'#ffffff'},
		{position:[ 0,-1, 0],type:17,color:'#ffffff'},
		{position:[ 0, 0, 1],type:17,color:'#ff3333'},
		{position:[ 0, 0,-1],type:17,color:'#3333ff'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#ffffff'},
		{position:[ 0,-1,-1],type:14,color:'#ffffff'},
		{position:[ 1,-1,-1],type:14,color:'#ffffff'},

		{position:[-1, 0,-1],type:14,color:'#3333ff'},
		// {position:[ 0, 0,-1],type:14,color:'#ffffff'},
		{position:[ 1, 0,-1],type:14,color:'#3333ff'},

		{position:[-1, 1,-1],type:14,color:'#ffffff'},
		{position:[ 0, 1,-1],type:14,color:'#ffffff'},
		{position:[ 1, 1,-1],type:14,color:'#ffffff'},

		{position:[-1,-1, 0],type:14,color:'#ffffff'},
		// {position:[ 0,-1, 0],type:14,color:'#ffffff'},
		{position:[ 1,-1, 0],type:14,color:'#ffffff'},

		// {position:[-1, 0, 0],type:14,color:'#ffffff'},
		// {position:[ 0, 0, 0],type:14,color:'#ffffff'},
		// {position:[ 1, 0, 0],type:14,color:'#ffffff'},

		{position:[-1, 1, 0],type:14,color:'#ffffff'},
		// {position:[ 0, 1, 0],type:14,color:'#ffffff'},
		{position:[ 1, 1, 0],type:14,color:'#ffffff'},

		{position:[-1,-1, 1],type:14,color:'#ffffff'},
		{position:[ 0,-1, 1],type:14,color:'#ff3333'},
		{position:[ 1,-1, 1],type:14,color:'#ffffff'},

		{position:[-1, 0, 1],type:14,color:'#ffffff'},
		// {position:[ 0, 0, 1],type:14,color:'#ffffff'},
		{position:[ 1, 0, 1],type:14,color:'#ffffff'},
		
		{position:[-1, 1, 1],type:14,color:'#ffffff'},
		{position:[ 0, 1, 1],type:14,color:'#ff3333'},
		{position:[ 1, 1, 1],type:14,color:'#ffffff'},

		// 4 axis engines

		{position:[ .0,-2,-.0],type:12,color:'#ff3333'},
		{position:[ .0,-3,-.0],type:12,color:'#ff3333'},
		{position:[ .0,-4,-.0],type:12,color:'#ff3333'},
		{position:[ .0,-4,  2],type:12,color:'#ff3333'},
		{position:[ .0,-4,  1],type:12,color:'#ff3333'},
		{position:[ .0,-4,- 1],type:12,color:'#ff3333'},
		{position:[ .0,-4,- 2],type:12,color:'#ff3333'},

		{position:[ .0, 2,-.0],type:12,color:'#ff3333'},
		{position:[ .0, 3,-.0],type:12,color:'#ff3333'},
		{position:[ .0, 4,-.0],type:12,color:'#ff3333'},
		{position:[ .0, 4,  2],type:12,color:'#ff3333'},
		{position:[ .0, 4,  1],type:12,color:'#ff3333'},
		{position:[ .0, 4,- 1],type:12,color:'#ff3333'},
		{position:[ .0, 4,- 2],type:12,color:'#ff3333'},

		{position:[ 2, .0,-.0],type:12,color:'#3333ff'},
		{position:[ 3, .0,-.0],type:12,color:'#3333ff'},
		{position:[ 4, .0,-.0],type:12,color:'#3333ff'},
		{position:[ 4, .0,  2],type:12,color:'#3333ff'},
		{position:[ 4, .0,  1],type:12,color:'#3333ff'},
		{position:[ 4, .0,- 1],type:12,color:'#3333ff'},
		{position:[ 4, .0,- 2],type:12,color:'#3333ff'},

		{position:[-2, .0,-.0],type:12,color:'#3333ff'},
		{position:[-3, .0,-.0],type:12,color:'#3333ff'},
		{position:[-4, .0,-.0],type:12,color:'#3333ff'},
		{position:[-4, .0,  2],type:12,color:'#3333ff'},
		{position:[-4, .0,  1],type:12,color:'#3333ff'},
		{position:[-4, .0,- 1],type:12,color:'#3333ff'},
		{position:[-4, .0,- 2],type:12,color:'#3333ff'},
		// 
		]
		engines=[
		{name:'left-up' ,len:2,dir:[ 0, 0,-1],end:[ 4, 0, 3]},
		{name:'right-up',len:2,dir:[ 0, 0,-1],end:[-4, 0, 3]},
		{name:'front-up',len:2,dir:[ 0, 0,-1],end:[ 0, 4, 3]},
		{name:'back-up' ,len:2,dir:[ 0, 0,-1],end:[ 0,-4, 3]},
		{name:'left-down' ,len:2,dir:[ 0, 0, 1],end:[ 4, 0,-3]},
		{name:'right-down',len:2,dir:[ 0, 0, 1],end:[-4, 0,-3]},
		{name:'front-down',len:2,dir:[ 0, 0, 1],end:[ 0, 4,-3]},
		{name:'back-down' ,len:2,dir:[ 0, 0, 1],end:[ 0,-4,-3]},
		]
		return {units:units,engines:engines}
	}

	function fighter(){
		var s3d2=Math.sqrt(3)/2
		   ,s2ds3=Math.sqrt(2)/Math.sqrt(3)
		   ,s2d2=Math.sqrt(2)/2
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#3333ff'},
		{position:[ 1, 0, 0],type:17,color:'#3333ff'},
		{position:[-1, 0, 0],type:17,color:'#3333ff'},
		{position:[ 0, 1, 0],type:17,color:'#ffffff'},
		{position:[ 0,-1, 0],type:17,color:'#ffffff'},
		{position:[ 0, 0, 1],type:17,color:'#3333ff'},
		{position:[ 0, 0,-1],type:17,color:'#3333ff'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#3333ff'},
		{position:[ 0,-1,-1],type:14,color:'#3333ff'},
		{position:[ 1,-1,-1],type:14,color:'#3333ff'},
		{position:[-1, 0,-1],type:14,color:'#3333ff'},
		// {position:[ 0, 0,-1],type:14,color:'#3333ff'},
		{position:[ 1, 0,-1],type:14,color:'#3333ff'},
		{position:[-1, 1,-1],type:14,color:'#3333ff'},
		{position:[ 0, 1,-1],type:14,color:'#3333ff'},
		{position:[ 1, 1,-1],type:14,color:'#3333ff'},

		{position:[-1,-1, 0],type:14,color:'#ffffff'},
		// {position:[ 0,-1, 0],type:14,color:'#3333ff'},
		{position:[ 1,-1, 0],type:14,color:'#ffffff'},
		// {position:[-1, 0, 0],type:14,color:'#3333ff'},
		// {position:[ 0, 0, 0],type:14,color:'#3333ff'},
		// {position:[ 1, 0, 0],type:14,color:'#3333ff'},
		{position:[-1, 1, 0],type:14,color:'#ffffff'},
		// {position:[ 0, 1, 0],type:14,color:'#3333ff'},
		{position:[ 1, 1, 0],type:14,color:'#ffffff'},

		{position:[-1,-1, 1],type:14,color:'#3333ff'},
		{position:[ 0,-1, 1],type:14,color:'#ffffff'},
		{position:[ 1,-1, 1],type:14,color:'#3333ff	'},
		{position:[-1, 0, 1],type:14,color:'#3333ff'},
		// {position:[ 0, 0, 1],type:14,color:'#3333ff'},
		{position:[ 1, 0, 1],type:14,color:'#3333ff'},
		{position:[-1, 1, 1],type:14,color:'#3333ff'},
		{position:[ 0, 1, 1],type:14,color:'#ffffff'},
		{position:[ 1, 1, 1],type:14,color:'#3333ff'},
		// left wing
		{position:[ 1+s3d2, .5, 0],type: 9,color:'#3333ff'},
		{position:[ 1+s3d2,-.5, 0],type: 6,color:'#3333ff'},
		{position:[ 1+s3d2, .5,-1],type: 6,color:'#3333ff'},
		{position:[ 1+s3d2,-.5,-1],type: 9,color:'#3333ff'},		
		{position:[ 1+s3d2, 0, 2.5],type: 6,color:'#ffff33'},
		{position:[ 1+s3d2, 0, 1.5],type: 9,color:'#3333ff'},
		{position:[ 1+2*s3d2, 0, 1],type:12,color:'#ffff33'},
		{position:[ 1+2*s3d2, 0, 0],type:12,color:'#3333ff'},
		{position:[ 1+2*s3d2, 0,-1],type:12,color:'#3333ff'},
		{position:[ 1+3*s3d2, 0,-0.5],type:12,color:'#ffff33'},
		{position:[ 1+3*s3d2, 0,-1.5],type:12,color:'#ffff33'},
		// right wing
		{position:[-1-s3d2, .5, 0],type: 6,color:'#3333ff'},
		{position:[-1-s3d2,-.5, 0],type: 9,color:'#3333ff'},
		{position:[-1-s3d2, .5,-1],type: 9,color:'#3333ff'},
		{position:[-1-s3d2,-.5,-1],type: 6,color:'#3333ff'},		
		{position:[-1-s3d2, 0, 2.5],type: 6,color:'#ffff33'},
		{position:[-1-s3d2, 0, 1.5],type: 9,color:'#3333ff'},
		{position:[-1-2*s3d2, 0, 1],type:12,color:'#ffff33'},
		{position:[-1-2*s3d2, 0, 0],type:12,color:'#3333ff'},
		{position:[-1-2*s3d2, 0,-1],type:12,color:'#3333ff'},
		{position:[-1-3*s3d2, 0,-0.5],type:12,color:'#ffff33'},
		{position:[-1-3*s3d2, 0,-1.5],type:12,color:'#ffff33'},
		// up engines
		{position:[ 0, 1+s3d2,-1.5],type: 9,color:'#ffffff'},
		{position:[ 0, 1+s3d2,-0.5],type: 6,color:'#ffffff'},
		// {position:[ 0, 2,-2],type: 9,color:'#3333ff'},
		// down engines
		{position:[ 0,-1-s3d2,-1.5],type: 9,color:'#ffffff'},
		{position:[ 0,-1-s3d2,-0.5],type: 6,color:'#ffffff'},
		// {position:[ 0,-2,-2],type: 9,color:'#3333ff'},
		// back engines
		{position:[ 0, 0, -2],type:9,color:'#3333ff'},
		{position:[ 0, 0, -3],type:6,color:'#3333ff'},
		{position:[ 0, s3d2, -2.5],type:9,color:'#ffffff'},
		{position:[ 0, s3d2, -3.5],type:6,color:'#ffffff'},
		{position:[ 0,-s3d2, -2.5],type:9,color:'#ffffff'},
		{position:[ 0,-s3d2, -3.5],type:6,color:'#ffffff'},
		{position:[ s3d2,0, -2.5],type:9,color:'#3333ff'},
		{position:[ s3d2,0, -3.5],type:6,color:'#3333ff'},
		{position:[-s3d2,0, -2.5],type:9,color:'#3333ff'},
		{position:[-s3d2,0, -3.5],type:6,color:'#3333ff'},
		// camera
		{position:[ 1,  0, 2],type:17,color:'#3333ff'},
		{position:[ 0,  0, 2],type:17,color:'#3333ff'},
		{position:[-1,  0, 2],type:17,color:'#ffffff'},		
		{position:[ 0.5, s3d2, 2],type:17,color:'#3333ff'},
		{position:[-0.5, s3d2, 2],type:17,color:'#ffffff'},
		{position:[ 0.5,-s3d2, 2],type:17,color:'#3333ff'},
		{position:[-0.5,-s3d2, 2],type:17,color:'#ffffff'},

		{position:[ 1,  0, 3],type:17,color:'#3333ff'},
		{position:[ 0,  0, 3],type:17,color:'#3333ff'},
		{position:[-1,  0, 3],type:17,color:'#3333ff'},		
		{position:[ 0.5, s3d2, 3],type:17,color:'#3333ff'},
		{position:[-0.5, s3d2, 3],type:17,color:'#3333ff'},
		{position:[ 0.5,-s3d2, 3],type:17,color:'#3333ff'},
		{position:[-0.5,-s3d2, 3],type:17,color:'#3333ff'},

		{position:[ 1,  0, 4],type:17,color:'#ffff33'},
		{position:[ 0,  0, 4],type:10,color:'#3333ff'},
		{position:[-1,  0, 4],type:17,color:'#ffff33'},		
		{position:[ 0.5, s3d2, 4],type:10,color:'#3333ff'},
		{position:[-0.5, s3d2, 4],type:10,color:'#3333ff'},
		{position:[ 0.5,-s3d2, 4],type:17,color:'#3333ff'},
		{position:[-0.5,-s3d2, 4],type:17,color:'#3333ff'},

		{position:[ .5,-s3d2/3, 4+s3d2],type:12,color:'#ffff33'},
		{position:[-.5,-s3d2/3, 4+s3d2],type:12,color:'#ffff33'},
		{position:[ 0,2*s3d2/3, 4+s3d2],type:12,color:'#ffff33'},
		
		// {position:[ 0, 0, 3+s3d2+s2ds3],type:12,color:'#ff0000'},
		],
		engines=[
		{name:'left-up' ,len:2,dir:[ 0, 1, 0],end:[ 1+s3d2,-1.5, 0]},
		{name:'left-down' ,len:2,dir:[ 0,-1, 0],end:[ 1+s3d2, 1.5,-1]},
		{name:'left-1' ,len:2,dir:[ 0, 0,-1],end:[ 1+s3d2, 0, 3.5]},
		// {name:'left-2' ,len:2,dir:[ 0, 0, 1],end:[ 3, 0,-1]},
		// {name:'left-3' ,len:2,dir:[ 0, 0, 1],end:[ 3+s3d2, 0,-1.5]},

		{name:'right-up' ,len:2,dir:[ 0, 1, 0],end:[-1-s3d2,-1.5,-1]},
		{name:'right-down' ,len:2,dir:[ 0,-1, 0],end:[-1-s3d2, 1.5, 0]},
		{name:'right-1' ,len:2,dir:[ 0, 0,-1],end:[-1-s3d2, 0, 3.5]},
		// {name:'right-2' ,len:2,dir:[ 0, 0, 1],end:[-3, 0,-1]},
		// {name:'right-3' ,len:2,dir:[ 0, 0, 1],end:[-3-s3d2, 0,-1.5]},

		{name:'up' ,len:2,dir:[ 0, 0,-1],end:[ 0, 1+s3d2, 0.5]},
		{name:'down' ,len:2,dir:[ 0, 0,-1],end:[ 0,-1-s3d2, 0.5]},

		{name:'back-0' ,len:2,dir:[ 0, 0, 1],end:[ 0, 0, -4]},
		{name:'back-1' ,len:2,dir:[ 0, 0, 1],end:[ 0, s3d2, -4.5]},
		{name:'back-2' ,len:2,dir:[ 0, 0, 1],end:[ 0,-s3d2, -4.5]},
		{name:'back-3' ,len:2,dir:[ 0, 0, 1],end:[ s3d2,0, -4.5]},
		{name:'back-4' ,len:2,dir:[ 0, 0, 1],end:[-s3d2,0, -4.5]},
		]
		return {units:units,engines:engines}		
	}

	// function missile(){
	// 	var s3d2=Math.sqrt(3)/2
	// 	   ,s2ds3=Math.sqrt(2)/Math.sqrt(3)
	// 	   ,s2d2=Math.sqrt(2)/2
	// 	units=[
	// 	{position:[0, .5+s2d2,-2.5],type:17,color:'#ffdd33'},
	// 	{position:[0,-.5-s2d2,-2.5],type:17,color:'#ffdd33'},
	// 	{position:[ .5+s2d2,0,-2.5],type:17,color:'#ffdd33'},
	// 	{position:[-.5-s2d2,0,-2.5],type:17,color:'#ffdd33'},

	// 	{position:[0, .5+s2d2,-1.5],type:17,color:'#ffdd33'},
	// 	{position:[0,-.5-s2d2,-1.5],type:17,color:'#ffdd33'},
	// 	{position:[ .5+s2d2,0,-1.5],type:17,color:'#ffdd33'},
	// 	{position:[-.5-s2d2,0,-1.5],type:17,color:'#ffdd33'},


	// 	{position:[ .5, .5,-2],type:17,color:'#336633'},
	// 	{position:[-.5, .5,-2],type:17,color:'#336633'},
	// 	{position:[ .5,-.5,-2],type:17,color:'#336633'},	
	// 	{position:[-.5,-.5,-2],type:17,color:'#336633'},

	// 	{position:[ .5, .5,-1],type:17,color:'#336633'},
	// 	{position:[-.5, .5,-1],type:17,color:'#336633'},
	// 	{position:[ .5,-.5,-1],type:17,color:'#336633'},	
	// 	{position:[-.5,-.5,-1],type:17,color:'#336633'},

	// 	{position:[ .5, .5, 0],type:17,color:'#336633'},
	// 	{position:[-.5, .5, 0],type:17,color:'#336633'},
	// 	{position:[ .5,-.5, 0],type:17,color:'#336633'},	
	// 	{position:[-.5,-.5, 0],type:17,color:'#336633'},

	// 	{position:[ .5, .5, 1],type:17,color:'#336633'},
	// 	{position:[-.5, .5, 1],type:17,color:'#336633'},
	// 	{position:[ .5,-.5, 1],type:17,color:'#336633'},	
	// 	{position:[-.5,-.5, 1],type:17,color:'#336633'},


	// 	{position:[ 1,  0, 2],type:17,color:'#336633'},
	// 	{position:[ 0,  0, 2],type:17,color:'#336633'},
	// 	{position:[-1,  0, 2],type:17,color:'#336633'},		
	// 	{position:[ 0.5, s3d2, 2],type:17,color:'#336633'},
	// 	{position:[-0.5, s3d2, 2],type:17,color:'#336633'},
	// 	{position:[ 0.5,-s3d2, 2],type:17,color:'#336633'},
	// 	{position:[-0.5,-s3d2, 2],type:17,color:'#336633'},

	// 	{position:[ 1,  0, 3],type:17,color:'#ffdd33'},
	// 	{position:[ 0,  0, 3],type:17,color:'#ffdd33'},
	// 	{position:[-1,  0, 3],type:17,color:'#ffdd33'},		
	// 	{position:[ 0.5, s3d2, 3],type:17,color:'#ffdd33'},
	// 	{position:[-0.5, s3d2, 3],type:17,color:'#ffdd33'},
	// 	{position:[ 0.5,-s3d2, 3],type:17,color:'#ffdd33'},
	// 	{position:[-0.5,-s3d2, 3],type:17,color:'#ffdd33'},

	// 	{position:[ 1,  0, 4],type:17,color:'#ff3333'},
	// 	{position:[ 0,  0, 4],type:10,color:'#ff3333'},
	// 	{position:[-1,  0, 4],type:17,color:'#ff3333'},		
	// 	{position:[ 0.5, s3d2, 4],type:10,color:'#ff3333'},
	// 	{position:[-0.5, s3d2, 4],type:10,color:'#ff3333'},
	// 	{position:[ 0.5,-s3d2, 4],type:17,color:'#ff3333'},
	// 	{position:[-0.5,-s3d2, 4],type:17,color:'#ff3333'},

	// 	{position:[ .5,-s3d2/3, 4+s3d2],type:12,color:'#ff3333'},
	// 	{position:[-.5,-s3d2/3, 4+s3d2],type:12,color:'#ff3333'},
	// 	{position:[ 0,2*s3d2/3, 4+s3d2],type:12,color:'#ff3333'},
		
	// 	// {position:[ 0, 0, 3+s3d2+s2ds3],type:12,color:'#ff0000'},
	// 	],
	// 	engines=[
	// 	{name:'i1' ,len:4,dir:[ 0, 0, 1],end:[ .5, .5,-3]},
	// 	{name:'i2' ,len:4,dir:[ 0, 0, 1],end:[-.5, .5,-3]},
	// 	{name:'i3' ,len:4,dir:[ 0, 0, 1],end:[ .5,-.5,-3]},
	// 	{name:'i4' ,len:4,dir:[ 0, 0, 1],end:[-.5,-.5,-3]}, 
	// 	{name:'o1' ,len:2,dir:[ 0, 0, 1],end:[0, .5+s2d2,-3.5]},
	// 	{name:'o2' ,len:2,dir:[ 0, 0, 1],end:[0,-.5-s2d2,-3.5]},
	// 	{name:'o3' ,len:2,dir:[ 0, 0, 1],end:[ .5+s2d2,0,-3.5]},
	// 	{name:'o4' ,len:2,dir:[ 0, 0, 1],end:[-.5-s2d2,0,-3.5]},
	// 	]
	// 	return {units:units,engines:engines}		
	// }

	function missile(){
		var s3d2=Math.sqrt(3)/2
		   ,s2ds3=Math.sqrt(2)/Math.sqrt(3)
		   ,s2d2=Math.sqrt(2)/2
		units=[

		{position:[ 0, 0, 3],type:17,color:'#3333ff'},
		{position:[ 0, 0, 2],type:17,color:'#3333ff'},
		{position:[ 1, 0, 2],type:17,color:'#3333ff'},
		{position:[-1, 0, 2],type:17,color:'#3333ff'},
		{position:[ 0, 1, 2],type:17,color:'#ffffff'},
		{position:[ 0,-1, 2],type:17,color:'#ffffff'},
		{position:[ 1, 0, 1],type:17,color:'#3333ff'},
		{position:[ 1, 1, 1],type:17,color:'#3333ff'},
		{position:[ 1,-1, 1],type:17,color:'#3333ff'},
		{position:[-1, 0, 1],type:17,color:'#3333ff'},
		{position:[ 0, 1, 1],type:17,color:'#ffffff'},
		{position:[ 0,-1, 1],type:17,color:'#ffffff'},


		{position:[ 0, 0, 0],type:17,color:'#3333ff'},
		{position:[ 1, 0, 0],type:17,color:'#3333ff'},
		{position:[-1, 0, 0],type:17,color:'#3333ff'},
		{position:[ 0, 1, 0],type:17,color:'#ffffff'},
		{position:[ 0,-1, 0],type:17,color:'#ffffff'},
		{position:[ 0, 0, 1],type:17,color:'#3333ff'},
		{position:[ 0, 0,-1],type:17,color:'#3333ff'},

		{position:[ 0, 0,-2],type:17,color:'#3333ff'},
		{position:[ 0, 0,-3],type:17,color:'#3333ff'},
		{position:[ 0, 0,-4],type:17,color:'#3333ff'},
		{position:[ 0, 0,-5],type:17,color:'#3333ff'},
		{position:[ 1, 0,-5],type:17,color:'#3333ff'},
		{position:[-1, 0,-5],type:17,color:'#3333ff'},
		{position:[ 0, 1,-5],type:17,color:'#ffffff'},
		{position:[ 0,-1,-5],type:17,color:'#ffffff'},

		{position:[ 1, 0,-6],type:17,color:'#3333ff'},
		{position:[-1, 0,-6],type:17,color:'#3333ff'},
		{position:[ 0, 1,-6],type:17,color:'#ffffff'},
		{position:[ 0,-1,-6],type:17,color:'#ffffff'},

		
		// {position:[ 0, 0, 3+s3d2+s2ds3],type:12,color:'#ff0000'},
		],
		engines=[
		{name:'i1' ,len:4,dir:[ 0, 0, 1],end:[ .5, .5,-3]},
		{name:'i2' ,len:4,dir:[ 0, 0, 1],end:[-.5, .5,-3]},
		{name:'i3' ,len:4,dir:[ 0, 0, 1],end:[ .5,-.5,-3]},
		{name:'i4' ,len:4,dir:[ 0, 0, 1],end:[-.5,-.5,-3]}, 
		{name:'o1' ,len:2,dir:[ 0, 0, 1],end:[0, .5+s2d2,-3.5]},
		{name:'o2' ,len:2,dir:[ 0, 0, 1],end:[0,-.5-s2d2,-3.5]},
		{name:'o3' ,len:2,dir:[ 0, 0, 1],end:[ .5+s2d2,0,-3.5]},
		{name:'o4' ,len:2,dir:[ 0, 0, 1],end:[-.5-s2d2,0,-3.5]},
		]
		return {units:units,engines:engines}		
	}