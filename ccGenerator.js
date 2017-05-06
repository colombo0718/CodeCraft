Blockly.JavaScript['cpu_run'] = function(block) {
	var statements_cpu_code = Blockly.JavaScript.statementToCode(block,'cpu_code');
	// TODO: Assemble JavaScript into code variable.
	var code = 
	'var cpu_run=function(){\n'+
		statements_cpu_code+
	"};\n";
	return code;
};

Blockly.JavaScript['engine'] = function(block) {
	var text_name = block.getFieldValue('name');
	var checkbox_fire = block.getFieldValue('fire') == 'TRUE';
	// TODO: Assemble JavaScript into code variable.
	var code = 'craft.switchEngine("'+text_name+'",'+checkbox_fire+');\n';
	return code;
};

Blockly.JavaScript['keypress'] = function(block) {
	var text_key = block.getFieldValue('key');
	// TODO: Assemble JavaScript into code variable.
	var code = "ccKeybroad.press('"+text_key+"')";
	// TODO: Change ORDER_NONE to the correct strength.
	console.log(Blockly.JavaScript.ORDER_NONE)
	return [code, Blockly.JavaScript.ORDER_NONE];
	// return code;
};

Blockly.JavaScript['craft_status'] = function(block) {
  var dropdown_property = block.getFieldValue('property');
  var dropdown_component = block.getFieldValue('component');
  // TODO: Assemble JavaScript into code variable.
  var code = 'craft.'+dropdown_property+'.clone().'+dropdown_component;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['check_point'] = function(block) {
  var value_nth = Blockly.JavaScript.valueToCode(block, 'nth', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_component = block.getFieldValue('component');
  // TODO: Assemble JavaScript into code variable.
  var code = 'runway.checkPoint['+value_nth+'].position.clone().'+dropdown_component;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['progress'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'progress';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['time'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'timer.getElapsedTime()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['echo'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '$("#assistInfo").html('+value_string +');\n';
  return code;
};