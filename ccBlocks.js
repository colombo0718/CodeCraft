Blockly.Blocks['cpu_run'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("CPU run");
		this.appendStatementInput("cpu_code")
			.setCheck(null);
		this.setColour(60);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
		this.setDeletable(false);
		// this.setMovable(false);
	}
};

Blockly.Blocks['engine'] = {
	init: function() {
		this.appendDummyInput()
			.appendField('engine "')
			.appendField(new Blockly.FieldTextInput("name"), "name")
			.appendField('" fire')
			.appendField(new Blockly.FieldCheckbox("TRUE"), "fire");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('set engine on or off');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.Blocks['keypress'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("press")
			.appendField(new Blockly.FieldTextInput("A"), "key");
		this.setOutput(true, "Boolean");
		this.setColour(210);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.Blocks['craft_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("craft")
        .appendField(new Blockly.FieldDropdown([["r","position"], ["v","velocity"], ["a","accelera"], ["θ","rotation"], ["ω","rotaVelo"], ["α","rotaAcce"]]), "property")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"], ["z", "z"]]), "component");
    this.setOutput(true,"Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['check_point'] = {
  init: function() {
    this.appendValueInput("nth")
        .setCheck("Number")
        .appendField("check point");
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"], ["z", "z"]]), "component");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['progress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("progress");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("time");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['echo'] = {
  init: function() {
    this.appendValueInput("string")
        .setCheck("String")
        .appendField("echo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};