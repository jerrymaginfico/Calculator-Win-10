class calcController{
	

	constructor(){

		this._operation = [];//This one saves the operation
		this._displayCalc;
		this.currentDate;
		this.initialize();
		this.initButtonsEvents(); //To work, we have to call all the events in the construtor
	}

	initialize(){//Whatever you want to happen when the calculator is loaded, you put in here
		let displayEl  = document.querySelector("#display");

		displayEl.innerHTML = "0";

	}

	addEventListenerAll(element, events, fu){ // addEventListener works for one event, so we created the addEventListenerAll to create multiple events(click, drag) using split

		events.split(' ').forEach(event => {

			element.addEventListener(event, fu, false);

		});

	}

	isOperator(value){//Saves the operators
		return	(['+','-','%','*', '/'].indexOf(value) > -1); // Verifying if it's a operator
		
	}

	setLastOperation(value){
		this._operation[this._operation.length - 1] = value; // changing the operator

	}

	pushOperator(value){//We verify the length of our array, if it's more than 3, we execute our operation
		this._operation.push(value);

		if(this._operation.length > 3){

			this.calculate();

		}
	}

	calculate(){//We use this method to calculate the operation
		let last = this._operation.pop();

		let result = eval(this._operation.join(""));

		this._operation = [result, last];
		this.lastNumberToDisplay();
	}

	lastNumberToDisplay(){//Were, we catch the last number in the array and we exec the operation in couples of two

		let lastNumber;
		for(let i=this._operation.length-1; i>=0; i++){

			if(!this.isOperator(this._operation[i])){
				lastNumber = this._operation[i];
				break;
			}
		}
		this.displayCalc = lastNumber;
	}

	addOperation(value){//We use this method to add an operation to calculator

		if(isNaN(this.getLastOperation())){//isNaN(Is Not a Number)-return true if it's not a number, false if it's 
			//string
			if(this.isOperator(value)){ //Verifies if the last operation is a operator
				this.setLastOperation(value);
			}
			else if(isNaN(value))
			{
				
				console.log("Outra coisa : ", value);
			}
			else
			{
				this.pushOperator(value);
				this.lastNumberToDisplay();
			}
		}
		else{
			//Number

			if(this.isOperator(value)){
				this.pushOperator(value);
			}
			else
			{
				let newValue = this.getLastOperation().toString() + value.toString();//Getting our last operation and if it's a number, He will just add that
				this.setLastOperation(parseInt(newValue));

				this.lastNumberToDisplay();
			}
			
		}
		console.log(this._operation);
	}
	
	clearAll(){
		this._operation=[]; 
	}

	clearEntry(){
		this._operation.pop();//pop()-used to clear the last entry on array
	}

	setError(){
		this.displayCalc="Error";
	}

	getLastOperation(){//We use this one to get the last operation of the array

		return this._operation[this._operation.length-1];

	}

	execBtn(value){//This method we use to exec the button action

		switch(value){
			case '%':
					this.addOperation('%');
				break;

			case '√':
				break;

			case'x²':
				break;

			case'¹/x':
				break;

			case 'ce':
					this.clearEntry();
				break;

			case'c':
					this.clearAll();
					break;

			case'delete':
			this.clearEntry();
				break;

			case'division':
					this.addOperation('/');
				break;
			
			case'less':
					this.addOperation('-');
				break;

			case'multiplication':
					this.addOperation('*')
				break;

			case'plus':
					this.addOperation('+');
				break;

			case'pless'://tratar aqui
				break;

			
			case'comma':
					this.addOperation(',');
				break;

			case'equal':
				break;
			
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
				this.addOperation(parseInt(value));
			break;

			default:
				this.setError();
				break;

		}

		

	}

	initButtonsEvents(){//Here, we start adding events to the buttons
 
		let buttons = document.querySelectorAll(".row > button"); // We catch the buttons by class row using querySelectorAll

		buttons.forEach((btn, index)=>{//We use forEach to add click to all events at once

			this.addEventListenerAll(btn, "click drag", e=>{ //using addEventListenerAll

				let textBtn = btn.classList[2].replace("btn-", "");

				this.execBtn(textBtn);

			});

			this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

				btn.style.cursor="point";

			});

		})

	}

	get display(){return this.displayCalc;}
	set display(value){ this.displayCalc = value;}

	get currentDate(){return this._currentDate;}
	set currentDate(value){this._currentDate = value;} 
}