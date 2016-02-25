	function kernel(){
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#ff0000'},
		{position:[ 1, 0, 0],type:17,color:'#ff0000'},
		{position:[-1, 0, 0],type:17,color:'#ff0000'},
		{position:[ 0, 1, 0],type:17,color:'#ff0000'},
		{position:[ 0,-1, 0],type:17,color:'#ff0000'},
		{position:[ 0, 0, 1],type:17,color:'#ff0000'},
		{position:[ 0, 0,-1],type:17,color:'#ff0000'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#ff0000'},
		{position:[ 0,-1,-1],type:14,color:'#ff0000'},
		{position:[ 1,-1,-1],type:14,color:'#ff0000'},
		{position:[-1, 0,-1],type:14,color:'#ff0000'},
		// {position:[ 0, 0,-1],type:14,color:'#ff0000'},
		{position:[ 1, 0,-1],type:14,color:'#ff0000'},
		{position:[-1, 1,-1],type:14,color:'#ff0000'},
		{position:[ 0, 1,-1],type:14,color:'#ff0000'},
		{position:[ 1, 1,-1],type:14,color:'#ff0000'},

		{position:[-1,-1, 0],type:14,color:'#ff0000'},
		// {position:[ 0,-1, 0],type:14,color:'#ff0000'},
		{position:[ 1,-1, 0],type:14,color:'#ff0000'},
		// {position:[-1, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 1, 0, 0],type:14,color:'#ff0000'},
		{position:[-1, 1, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 1, 0],type:14,color:'#ff0000'},
		{position:[ 1, 1, 0],type:14,color:'#ff0000'},

		{position:[-1,-1, 1],type:14,color:'#ff0000'},
		{position:[ 0,-1, 1],type:14,color:'#ff0000'},
		{position:[ 1,-1, 1],type:14,color:'#ff0000'},
		{position:[-1, 0, 1],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 1],type:14,color:'#ff0000'},
		{position:[ 1, 0, 1],type:14,color:'#ff0000'},
		{position:[-1, 1, 1],type:14,color:'#ff0000'},
		{position:[ 0, 1, 1],type:14,color:'#ff0000'},
		{position:[ 1, 1, 1],type:14,color:'#ff0000'},
		//	jets
		{position:[ 0, 0,-3],type: 6,color:'#ff0000'},
		{position:[ 0, 0,-2],type: 9,color:'#ff0000'},
		{position:[ 0, 0, 3],type: 6,color:'#ff0000'},
		{position:[ 0, 0, 2],type: 9,color:'#ff0000'},
		{position:[ 0,-3, 0],type: 6,color:'#ff0000'},
		{position:[ 0,-2, 0],type: 9,color:'#ff0000'},
		{position:[ 0, 3, 0],type: 6,color:'#ff0000'},
		{position:[ 0, 2, 0],type: 9,color:'#ff0000'},
		{position:[-3, 0, 0],type: 6,color:'#ff0000'},
		{position:[-2, 0, 0],type: 9,color:'#ff0000'},
		{position:[ 3, 0, 0],type: 6,color:'#ff0000'},
		{position:[ 2, 0, 0],type: 9,color:'#ff0000'},
		]
		jets=[
		{name:'up'   ,len:2,dir:[ 0, 1, 0],end:[ 0,-4, 0]},
		{name:'down' ,len:2,dir:[ 0,-1, 0],end:[ 0, 4, 0]},
		{name:'left' ,len:2,dir:[ 1, 0, 0],end:[-4, 0, 0]},
		{name:'right',len:2,dir:[-1, 0, 0],end:[ 4, 0, 0]},
		{name:'front',len:2,dir:[ 0, 0, 1],end:[ 0, 0,-4]},
		{name:'back' ,len:2,dir:[ 0, 0,-1],end:[ 0, 0, 4]},
		]
		return {units:units,jets:jets}
	}

	function quadcopter(){
		var s2d2=Math.sqrt(2)/2
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#ff0000'},
		{position:[ 1, 0, 0],type:17,color:'#ff0000'},
		{position:[-1, 0, 0],type:17,color:'#ff0000'},
		{position:[ 0, 1, 0],type:17,color:'#ff0000'},
		{position:[ 0,-1, 0],type:17,color:'#ff0000'},
		{position:[ 0, 0, 1],type:17,color:'#ff0000'},
		{position:[ 0, 0,-1],type:17,color:'#ff0000'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#ff0000'},
		{position:[ 0,-1,-1],type:14,color:'#ff0000'},
		{position:[ 1,-1,-1],type:14,color:'#ff0000'},

		{position:[-1, 0,-1],type:14,color:'#ff0000'},
		// {position:[ 0, 0,-1],type:14,color:'#ff0000'},
		{position:[ 1, 0,-1],type:14,color:'#ff0000'},

		{position:[-1, 1,-1],type:14,color:'#ff0000'},
		{position:[ 0, 1,-1],type:14,color:'#ff0000'},
		{position:[ 1, 1,-1],type:14,color:'#ff0000'},

		{position:[-1,-1, 0],type:14,color:'#ff0000'},
		// {position:[ 0,-1, 0],type:14,color:'#ff0000'},
		{position:[ 1,-1, 0],type:14,color:'#ff0000'},

		// {position:[-1, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 1, 0, 0],type:14,color:'#ff0000'},

		{position:[-1, 1, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 1, 0],type:14,color:'#ff0000'},
		{position:[ 1, 1, 0],type:14,color:'#ff0000'},

		{position:[-1,-1, 1],type:14,color:'#ff0000'},
		{position:[ 0,-1, 1],type:14,color:'#ff0000'},
		{position:[ 1,-1, 1],type:14,color:'#ff0000'},

		{position:[-1, 0, 1],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 1],type:14,color:'#ff0000'},
		{position:[ 1, 0, 1],type:14,color:'#ff0000'},
		
		{position:[-1, 1, 1],type:14,color:'#ff0000'},
		{position:[ 0, 1, 1],type:14,color:'#ff0000'},
		{position:[ 1, 1, 1],type:14,color:'#ff0000'},

		// 4 axis jets
		{position:[ .5, .5,-s2d2-1],type:12,color:'#ff0000'},
		{position:[-.5, .5,-s2d2-1],type:12,color:'#ff0000'},
		{position:[-.5,-.5,-s2d2-1],type:12,color:'#ff0000'},
		{position:[ .5,-.5,-s2d2-1],type:12,color:'#ff0000'},
		{position:[ .0,-.0,-s2d2*2-1],type:12,color:'#ff0000'},
		{position:[ .0,-.0,-s2d2*2-2],type:12,color:'#ff0000'},
		{position:[-s2d2,-.0,-s2d2*3-2],type:12,color:'#ff0000'},
		{position:[ s2d2,-.0,-s2d2*3-2],type:12,color:'#ff0000'},
		{position:[ .0,-.0,-s2d2*4-2],type:12,color:'#ff0000'},
		{position:[ 0, s2d2,-s2d2*3-2],type: 9,color:'#ff0000'},
		{position:[ 0, s2d2+1,-s2d2*3-2],type: 6,color:'#ff0000'},
		{position:[ 0,-s2d2,-s2d2*3-2],type: 9,color:'#ff0000'},
		{position:[ 0,-s2d2-1,-s2d2*3-2],type: 6,color:'#ff0000'},

		{position:[ .5, .5, s2d2+1],type:12,color:'#ff0000'},
		{position:[-.5, .5, s2d2+1],type:12,color:'#ff0000'},
		{position:[-.5,-.5, s2d2+1],type:12,color:'#ff0000'},
		{position:[ .5,-.5, s2d2+1],type:12,color:'#ff0000'},
		{position:[ .0,-.0, s2d2*2+1],type:12,color:'#ff0000'},
		{position:[ .0,-.0, s2d2*2+2],type:12,color:'#ff0000'},
		{position:[-s2d2,-.0, s2d2*3+2],type:12,color:'#ff0000'},
		{position:[ s2d2,-.0, s2d2*3+2],type:12,color:'#ff0000'},
		{position:[ .0,-.0, s2d2*4+2],type:12,color:'#ff0000'},
		{position:[ 0, s2d2, s2d2*3+2],type: 9,color:'#ff0000'},
		{position:[ 0, s2d2+1, s2d2*3+2],type: 6,color:'#ff0000'},
		{position:[ 0,-s2d2, s2d2*3+2],type: 9,color:'#ff0000'},
		{position:[ 0,-s2d2-1, s2d2*3+2],type: 6,color:'#ff0000'},

		{position:[-s2d2-1, .5, .5],type:12,color:'#ff0000'},
		{position:[-s2d2-1,-.5, .5],type:12,color:'#ff0000'},
		{position:[-s2d2-1,-.5,-.5],type:12,color:'#ff0000'},
		{position:[-s2d2-1, .5,-.5],type:12,color:'#ff0000'},
		{position:[-s2d2*2-1, .0,-.0],type:12,color:'#ff0000'},
		{position:[-s2d2*2-2, .0,-.0],type:12,color:'#ff0000'},
		{position:[-s2d2*3-2,-.0,-s2d2],type:12,color:'#ff0000'},
		{position:[-s2d2*3-2,-.0, s2d2],type:12,color:'#ff0000'},
		{position:[-s2d2*4-2, .0,-.0],type:12,color:'#ff0000'},
		{position:[-s2d2*3-2, s2d2, 0,],type: 9,color:'#ff0000'},
		{position:[-s2d2*3-2, s2d2+1, 0,],type: 6,color:'#ff0000'},
		{position:[-s2d2*3-2,-s2d2, 0,],type: 9,color:'#ff0000'},
		{position:[-s2d2*3-2,-s2d2-1, 0,],type: 6,color:'#ff0000'},

		{position:[ s2d2+1, .5, .5],type:12,color:'#ff0000'},
		{position:[ s2d2+1,-.5, .5],type:12,color:'#ff0000'},
		{position:[ s2d2+1,-.5,-.5],type:12,color:'#ff0000'},
		{position:[ s2d2+1, .5,-.5],type:12,color:'#ff0000'},
		{position:[ s2d2*2+1, .0,-.0],type:12,color:'#ff0000'},
		{position:[ s2d2*2+2, .0,-.0],type:12,color:'#ff0000'},
		{position:[ s2d2*3+2,-.0,-s2d2],type:12,color:'#ff0000'},
		{position:[ s2d2*3+2,-.0, s2d2],type:12,color:'#ff0000'},
		{position:[ s2d2*4+2, .0,-.0],type:12,color:'#ff0000'},
		{position:[ s2d2*3+2, s2d2, 0,],type: 9,color:'#ff0000'},
		{position:[ s2d2*3+2, s2d2+1, 0,],type: 6,color:'#ff0000'},
		{position:[ s2d2*3+2,-s2d2, 0,],type: 9,color:'#ff0000'},
		{position:[ s2d2*3+2,-s2d2-1, 0,],type: 6,color:'#ff0000'},
		// 
		]
		jets=[
		{name:'left-up' ,len:2,dir:[ 0,-1, 0],end:[ 4, 3, 0]},
		{name:'right-up',len:2,dir:[ 0,-1, 0],end:[-4, 3, 0]},
		{name:'front-up',len:2,dir:[ 0,-1, 0],end:[ 0, 3, 4]},
		{name:'back-up' ,len:2,dir:[ 0,-1, 0],end:[ 0, 3,-4]},
		{name:'left-down' ,len:2,dir:[ 0, 1, 0],end:[ 4,-3, 0]},
		{name:'right-down',len:2,dir:[ 0, 1, 0],end:[-4,-3, 0]},
		{name:'front-down',len:2,dir:[ 0, 1, 0],end:[ 0,-3, 4]},
		{name:'back-down' ,len:2,dir:[ 0, 1, 0],end:[ 0,-3,-4]},
		]
		return {units:units,jets:jets}
	}

	function fighter(){
		var s3d2=Math.sqrt(3)/2
		   ,s2ds3=Math.sqrt(2)/Math.sqrt(3)
		   ,s2d2=Math.sqrt(2)/2
		units=[
		//	locator gyroscope
		{position:[ 0, 0, 0],type:17,color:'#ff0000'},
		{position:[ 1, 0, 0],type:17,color:'#ff0000'},
		{position:[-1, 0, 0],type:17,color:'#ff0000'},
		{position:[ 0, 1, 0],type:17,color:'#ff0000'},
		{position:[ 0,-1, 0],type:17,color:'#ff0000'},
		{position:[ 0, 0, 1],type:17,color:'#ff0000'},
		{position:[ 0, 0,-1],type:17,color:'#ff0000'},
		//	CPU
		{position:[-1,-1,-1],type:14,color:'#ff0000'},
		{position:[ 0,-1,-1],type:14,color:'#ff0000'},
		{position:[ 1,-1,-1],type:14,color:'#ff0000'},
		{position:[-1, 0,-1],type:14,color:'#ff0000'},
		// {position:[ 0, 0,-1],type:14,color:'#ff0000'},
		{position:[ 1, 0,-1],type:14,color:'#ff0000'},
		{position:[-1, 1,-1],type:14,color:'#ff0000'},
		{position:[ 0, 1,-1],type:14,color:'#ff0000'},
		{position:[ 1, 1,-1],type:14,color:'#ff0000'},

		{position:[-1,-1, 0],type:14,color:'#ff0000'},
		// {position:[ 0,-1, 0],type:14,color:'#ff0000'},
		{position:[ 1,-1, 0],type:14,color:'#ff0000'},
		// {position:[-1, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 0],type:14,color:'#ff0000'},
		// {position:[ 1, 0, 0],type:14,color:'#ff0000'},
		{position:[-1, 1, 0],type:14,color:'#ff0000'},
		// {position:[ 0, 1, 0],type:14,color:'#ff0000'},
		{position:[ 1, 1, 0],type:14,color:'#ff0000'},

		{position:[-1,-1, 1],type:14,color:'#ff0000'},
		{position:[ 0,-1, 1],type:14,color:'#ff0000'},
		{position:[ 1,-1, 1],type:14,color:'#ff0000'},
		{position:[-1, 0, 1],type:14,color:'#ff0000'},
		// {position:[ 0, 0, 1],type:14,color:'#ff0000'},
		{position:[ 1, 0, 1],type:14,color:'#ff0000'},
		{position:[-1, 1, 1],type:14,color:'#ff0000'},
		{position:[ 0, 1, 1],type:14,color:'#ff0000'},
		{position:[ 1, 1, 1],type:14,color:'#ff0000'},
		// left wing
		{position:[ 1+s3d2, .5, 0],type: 9,color:'#ff0000'},
		{position:[ 1+s3d2,-.5, 0],type: 6,color:'#ff0000'},
		{position:[ 1+s3d2, .5,-1],type: 6,color:'#ff0000'},
		{position:[ 1+s3d2,-.5,-1],type: 9,color:'#ff0000'},		
		{position:[ 1+s3d2, 0, 2.5],type: 6,color:'#ff0000'},
		{position:[ 1+s3d2, 0, 1.5],type: 9,color:'#ff0000'},
		{position:[ 1+2*s3d2, 0, 1],type:12,color:'#ff0000'},
		{position:[ 1+2*s3d2, 0, 0],type:12,color:'#ff0000'},
		{position:[ 1+2*s3d2, 0,-1],type:12,color:'#ff0000'},
		{position:[ 1+3*s3d2, 0,-0.5],type:12,color:'#ff0000'},
		{position:[ 1+3*s3d2, 0,-1.5],type:12,color:'#ff0000'},
		// right wing
		{position:[-1-s3d2, .5, 0],type: 6,color:'#ff0000'},
		{position:[-1-s3d2,-.5, 0],type: 9,color:'#ff0000'},
		{position:[-1-s3d2, .5,-1],type: 9,color:'#ff0000'},
		{position:[-1-s3d2,-.5,-1],type: 6,color:'#ff0000'},		
		{position:[-1-s3d2, 0, 2.5],type: 6,color:'#ff0000'},
		{position:[-1-s3d2, 0, 1.5],type: 9,color:'#ff0000'},
		{position:[-1-2*s3d2, 0, 1],type:12,color:'#ff0000'},
		{position:[-1-2*s3d2, 0, 0],type:12,color:'#ff0000'},
		{position:[-1-2*s3d2, 0,-1],type:12,color:'#ff0000'},
		{position:[-1-3*s3d2, 0,-0.5],type:12,color:'#ff0000'},
		{position:[-1-3*s3d2, 0,-1.5],type:12,color:'#ff0000'},
		// up jets
		{position:[ 0, 1+s3d2,-1.5],type: 9,color:'#ff0000'},
		{position:[ 0, 1+s3d2,-0.5],type: 6,color:'#ff0000'},
		// {position:[ 0, 2,-2],type: 9,color:'#ff0000'},
		// down jets
		{position:[ 0,-1-s3d2,-1.5],type: 9,color:'#ff0000'},
		{position:[ 0,-1-s3d2,-0.5],type: 6,color:'#ff0000'},
		// {position:[ 0,-2,-2],type: 9,color:'#ff0000'},
		// back jets
		{position:[ 0, 0, -2],type:9,color:'#ff0000'},
		{position:[ 0, 0, -3],type:6,color:'#ff0000'},
		{position:[ 0, s3d2, -2.5],type:9,color:'#ff0000'},
		{position:[ 0, s3d2, -3.5],type:6,color:'#ff0000'},
		{position:[ 0,-s3d2, -2.5],type:9,color:'#ff0000'},
		{position:[ 0,-s3d2, -3.5],type:6,color:'#ff0000'},
		{position:[ s3d2,0, -2.5],type:9,color:'#ff0000'},
		{position:[ s3d2,0, -3.5],type:6,color:'#ff0000'},
		{position:[-s3d2,0, -2.5],type:9,color:'#ff0000'},
		{position:[-s3d2,0, -3.5],type:6,color:'#ff0000'},
		// camera
		{position:[ 1,  0, 2],type:17,color:'#ff0000'},
		{position:[ 0,  0, 2],type:17,color:'#ff0000'},
		{position:[-1,  0, 2],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 2],type:17,color:'#ff0000'},
		{position:[-0.5, s3d2, 2],type:17,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 2],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 2],type:17,color:'#ff0000'},

		{position:[ 1,  0, 3],type:17,color:'#ff0000'},
		{position:[ 0,  0, 3],type:17,color:'#ff0000'},
		{position:[-1,  0, 3],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 3],type:17,color:'#ff0000'},
		{position:[-0.5, s3d2, 3],type:17,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 3],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 3],type:17,color:'#ff0000'},

		{position:[ 1,  0, 4],type:17,color:'#ff0000'},
		{position:[ 0,  0, 4],type:10,color:'#ff0000'},
		{position:[-1,  0, 4],type:17,color:'#ff0000'},		
		{position:[ 0.5, s3d2, 4],type:10,color:'#ff0000'},
		{position:[-0.5, s3d2, 4],type:10,color:'#ff0000'},
		{position:[ 0.5,-s3d2, 4],type:17,color:'#ff0000'},
		{position:[-0.5,-s3d2, 4],type:17,color:'#ff0000'},

		{position:[ .5,-s3d2/3, 4+s3d2],type:12,color:'#ff0000'},
		{position:[-.5,-s3d2/3, 4+s3d2],type:12,color:'#ff0000'},
		{position:[ 0,2*s3d2/3, 4+s3d2],type:12,color:'#ff0000'},
		
		// {position:[ 0, 0, 3+s3d2+s2ds3],type:12,color:'#ff0000'},
		]
		jets=[
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
		return {units:units,jets:jets}		
	}