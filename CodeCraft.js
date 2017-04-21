// CC, abbreviation of 'CodeCraft'  
// 
var CoC = { VERSION : '0.1'}

// CoC.Craft=function(){	
// 	THREE.Object3D.call(this)

// 	this.mass=0
// 	this.force=new THREE.Vector3()	
// 	this.accelera=new THREE.Vector3()		
// 	this.velocity=new THREE.Vector3()
	 
// 	this.inertia=new THREE.Matrix4();
// 	this.torque=new THREE.Vector3()
// 	this.rotaAcce=new THREE.Vector3()
// 	this.rotaVelo=new THREE.Vector3()

// 	this.left=new THREE.Vector3()
// 	this.head=new THREE.Vector3()
// 	this.face=new THREE.Vector3()

// 	this.diagram=0
// 	this.model=new THREE.Object3D()
// }

// CoC.Craft.prototype={
// 	build: function(){

// 		// this.add(this.model)
// 	}
// }

CoC.Craft=function(){
	var cf=new THREE.Object3D()
	cf.mass=0
	return cf
}


CoC.Craft=function(diagram){
	var craft=new THREE.Object3D()
	var diagram=new diagram()
		
	craft.radius=0
	craft.mass=diagram.units.length
	craft.force=new THREE.Vector3()	
	craft.accelera=new THREE.Vector3()		
	craft.velocity=new THREE.Vector3()

	craft.inertia=new THREE.Matrix4();
	craft.torque=new THREE.Vector3()
	craft.rotaAcce=new THREE.Vector3()
	craft.rotaVelo=new THREE.Vector3()

	craft.left=new THREE.Vector3()
	craft.head=new THREE.Vector3()
	craft.face=new THREE.Vector3()

	craft.diagram=0

	craft.model=new THREE.Object3D()

	var frame=new THREE.Object3D()
		frame.massCenter=new THREE.Vector3()
	var units=new Array 
	for(var i=0;i<diagram.units.length;i++){
		// var material = new THREE.SpriteMaterial({
		// 	map:UnitTexture(diagram.units[i].type,diagram.units[i].color)
		// } );
		// units[i]=new THREE.Sprite( material );

		var geometry = new THREE.SphereGeometry(0.5, 16,8 );
		// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		// var material = new THREE.MeshBasicMaterial( {
		var material = new THREE.MeshLambertMaterial( {
          color: diagram.units[i].color,
          // transparent:true,
          opacity:0.6,
          // specular: 0xff0000, 
          emissive: 0x000000,
          // alphaMap:
        } )
		units[i] = new THREE.Mesh( geometry, material );

		units[i].position
			.fromArray(diagram.units[i].position)
		frame.add(units[i])
		frame.massCenter.add(units[i].position)
	}
	frame.massCenter.multiplyScalar(1/craft.mass)	

	var xp,yp,zp,rp // position relative to mass center 
	for(var i=0;i<diagram.units.length;i++){
		xp=units[i].position.x-frame.massCenter.x
		yp=units[i].position.y-frame.massCenter.y
		zp=units[i].position.z-frame.massCenter.z
		craft.inertia.elements[0]+= yp*yp+zp*zp
		craft.inertia.elements[5]+= xp*xp+zp*zp
		craft.inertia.elements[10]+=xp*xp+yp*yp
		craft.inertia.elements[1]-=xp*yp
		craft.inertia.elements[2]-=xp*zp
		craft.inertia.elements[6]-=yp*zp

		rp=Math.sqrt(xp*xp+yp*yp+zp*zp)
		if(rp>craft.radius){craft.radius=rp}
	}
	craft.inertia.elements[4]=craft.inertia.elements[1]
	craft.inertia.elements[8]=craft.inertia.elements[2]
	craft.inertia.elements[9]=craft.inertia.elements[6]
	craft.radius=3

	var invIner=new THREE.Matrix4().getInverse(craft.inertia.clone())
	console.log(craft.mass,craft.inertia,invIner)

	var engines=new Array
	for(var i=0;i<diagram.engines.length;i++){
		var len=diagram.engines[i].len
			 ,dir=new THREE.Vector3().fromArray(diagram.engines[i].dir)
			 ,end=new THREE.Vector3().fromArray(diagram.engines[i].end)
			 ,origin,vector
		// end.sub(frame.massCenter)
		vector=dir.clone().multiplyScalar(diagram.engines[i].len)
		origin=end.clone().sub(vector)
		// engines[i]=CoC.Arrow(origin,vector,0xff0000)
		engines[i]=flame(end,vector)
		engines[i].name=diagram.engines[i].name
		engines[i].force=dir.clone().multiplyScalar(len*100)
		engines[i].torque=end.clone().cross(engines[i].force)
		engines[i].visible=false
		frame.add(engines[i])
	}
	craft.engines=engines

	craft.invIner=invIner
	console.log(frame.position.toArray())
	frame.position.sub(frame.massCenter)
	console.log(frame.position.toArray())
	craft.add(frame)
	craft.frame=frame

	craft.plotPillar=function(){
		space.remove(craft.pillar)
		craft.pillar=new THREE.Line(geometry,material)
		var geometry,vertex,material ,colors2=[]
		var x=craft.position.x,
			y=craft.position.y,
			z=craft.position.z,
			r=craft.radius

		geometry=new THREE.Geometry();
		vertex=new THREE.Vector3();
		vertex.fromArray([x,y,z])
		geometry.vertices.push(vertex);
		colors2[0]=new THREE.Color(0x000000)
		vertex=new THREE.Vector3();
		vertex.fromArray([x,0.001,z])
		geometry.vertices.push(vertex);
		colors2[1]=new THREE.Color(0xffff00)
		
		for(i=0;i<=17;i++){
			vertex=new THREE.Vector3();
			vertex.fromArray([x+r*Math.cos(i*Math.PI/8),0,z+r*Math.sin(i*Math.PI/8)])
			geometry.vertices.push(vertex);
			colors2[i+2]=new THREE.Color(0xffff00)
		}
		geometry.colors = colors2;
		material=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});
		craft.pillar=new THREE.Line(geometry,material)
		space.add(craft.pillar)
	}
	craft.plotPillar()

	craft.switchEngine=function(name,onoff){
		if(frame.getObjectByName(name).visible==onoff)
		{return}
		frame.getObjectByName(name).visible=onoff	
	}

	craft.getPosture=function(){
		craft.left=new THREE.Vector3(1,0,0)
		craft.head=new THREE.Vector3(0,1,0)
		craft.face=new THREE.Vector3(0,0,1)
		craft.left.applyEuler(craft.rotation)
		craft.head.applyEuler(craft.rotation)
		craft.face.applyEuler(craft.rotation)
	}

	craft.reset=function(){
		craft.accelera.set(0,0,0)
		craft.velocity.set(0,0,0)
		craft.position.copy(runway.checkPoint[0].position)
		craft.rotaAcce.set(0,0,0)
		craft.rotaVelo.set(0,0,0)
		craft.rotation.set(0,0,0)
	}
	space.add(craft)
}		


var CC=function(){
	function Craft(){

	}
	function Rigid(){
		
	}
	function keyBroad(){
		var status=[
				['A',false],
				['B',false],
				['C',false],
				['D',false],
				['E',false],
				['F',false],
				['G',false],
				['H',false],
				['I',false],
				['J',false],
				['K',false],
				['L',false],
				['M',false],
				['N',false],
				['O',false],
				['P',false],
				['Q',false],
				['R',false],
				['S',false],
				['T',false],
				['U',false],
				['V',false],
				['W',false],
				['X',false],
				['Y',false],
				['Z',false],
				[' ',false],
			]
		function press(key){
			for(var i=0;i<status.length;i++){
				if(status[i][0]==key){
					return status[i][1] 
				}
			}	
		}
		function react(event){
			var trigger 
			if(event.type=='keydown'){trigger=true}
			else if(event.type=='keyup'){trigger=false}
			var key=String.fromCharCode(event.keyCode)
			for(var i=0;i<status.length;i++){
				if(status[i][0]==key){
					status[i][1]=trigger
				}
			}
		}
		return {react:react,press:press}
	}
	return {keyBroad:keyBroad}
}