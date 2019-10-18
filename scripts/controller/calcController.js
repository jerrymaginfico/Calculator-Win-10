class calcController{
	

	constructor(){

		this._operation = [];//This one saves the operation
		this._display;
		this.currentDate;
		this.initialize();
		this.initButtonsEvents(); //To work, we have to call all the events in the construtor
	}

	initialize(){//Whatever you want to happen when the calculator is loaded, you put in here
		let displayCalc = document.querySelector("#display");

		displayCalc.innerHTML = "0";

	}

	addEventListenerAll(element, events, fu){ // addEventListener works for one event, so we created the addEventListenerAll to create multiple events(click, drag) using split

		events.split(' ').forEach(event => {

			element.addEventListener(event, fu, false);

		});

	}

	addOperation(value){//We use this method to add an operation to calculator

		this._operation.push(value);//push()-method used to add a item on array

		console.log(this._operation);
	}
	
	clearAll(){
		this._operation=[]; 
	}

	clearEntry(){
		this._operation=pop();//pop()-used to clear the last entry on array
	}

	setError(){
		this.displayCalc="Error";
	}

	execBtn(value){//This method we use to exec the button action

		switch(value){
			case '%':

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
				break;

			case'division':
				break;
			
			case'less':
				break;

			case'multiplication':
				break;

			case'plus':
				break;

			case'pless':
				break;

			
			case'comma':
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

	get display(){return this._display;}
	set display(value){ this._display = value;}

	get currentDate(){return this._currentDate;}
	set currentDate(value){this._currentDate = value;} 
}